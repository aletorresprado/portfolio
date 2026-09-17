import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
import OpenAI from "openai";
import { NextResponse } from "next/server";
import { portfolioContext } from "@/data/portfolio-context";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const redis = new Redis({
  url: process.env.ATLAS_REDIS_KV_REST_API_URL!,
  token: process.env.ATLAS_REDIS_KV_REST_API_TOKEN!,
});

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, "15 m"),
  prefix: "atlas:ratelimit",
});

type AtlasMessage = {
  role: "user" | "assistant";
  content: string;
};

const MAX_MESSAGE_LENGTH = 500;
const MAX_USER_MESSAGES = 10;
const MAX_CONTEXT_MESSAGES = 10;

export async function POST(request: Request) {
  try {
    // Identify the visitor for rate limiting
    const forwardedFor = request.headers.get("x-forwarded-for");

    const ip =
      forwardedFor?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "anonymous";

    // Apply rate limiting before calling OpenAI
    const { success, reset } = await ratelimit.limit(ip);

    if (!success) {
      return NextResponse.json(
        {
          error:
            "Atlas has reached the request limit for now. Please try again in a few minutes.",
          reset,
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const messages: AtlasMessage[] = body.messages;

    // Validate the messages array
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages are required." },
        { status: 400 }
      );
    }

    // Validate message structure
    const validMessages = messages.every(
      (message) =>
        message &&
        (message.role === "user" || message.role === "assistant") &&
        typeof message.content === "string"
    );

    if (!validMessages) {
      return NextResponse.json(
        { error: "Invalid message format." },
        { status: 400 }
      );
    }

    // Prevent oversized visitor messages
    const hasOversizedUserMessage = messages.some(
      (message) =>
        message.role === "user" &&
        message.content.length > MAX_MESSAGE_LENGTH
    );

    if (hasOversizedUserMessage) {
      return NextResponse.json(
        {
          error: `Messages are limited to ${MAX_MESSAGE_LENGTH} characters.`,
        },
        { status: 400 }
      );
    }

    // Get the latest visitor message
    const latestUserMessage = [...messages]
      .reverse()
      .find((message) => message.role === "user");

    if (!latestUserMessage) {
      return NextResponse.json(
        { error: "A visitor message is required." },
        { status: 400 }
      );
    }

    // Prevent empty visitor messages
    if (!latestUserMessage.content.trim()) {
      return NextResponse.json(
        { error: "The message cannot be empty." },
        { status: 400 }
      );
    }

    // Limit number of visitor messages per conversation
    const userMessageCount = messages.filter(
      (message) => message.role === "user"
    ).length;

    if (userMessageCount > MAX_USER_MESSAGES) {
      return NextResponse.json(
        {
          error:
            "You've reached the conversation limit. Please start a new conversation.",
        },
        { status: 429 }
      );
    }

    // Only send recent conversation context to OpenAI
    const conversation = messages
      .slice(-MAX_CONTEXT_MESSAGES)
      .map((message) => {
        const speaker =
          message.role === "assistant" ? "Atlas" : "Visitor";

        return `${speaker}: ${message.content.trim()}`;
      })
      .join("\n\n");

    const response = await openai.responses.create({
      model: "gpt-5.6-luna",

      instructions: `
You are Atlas, the AI portfolio assistant for Alejandro Torres.

Your job is to help visitors understand Alejandro's professional profile,
projects, skills and multidisciplinary background.

Use the professional portfolio context below as your source of truth.

Do not invent information that is not supported by this context.

Keep answers conversational and reasonably concise.

${portfolioContext}
      `,

      input: conversation,

      max_output_tokens: 500,
    });

    return NextResponse.json({
      message: response.output_text,
    });
  } catch (error) {
    console.error("Atlas API error:", error);

    return NextResponse.json(
      {
        error:
          "Atlas is temporarily unavailable. Please try again.",
      },
      { status: 500 }
    );
  }
}