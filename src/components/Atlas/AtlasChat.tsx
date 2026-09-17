"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const MAX_MESSAGE_LENGTH = 500;

const suggestions = [
  "What does Alejandro do?",
  "Tell me about his projects",
  "What technologies does he use?",
];

function renderMessageContent(content: string) {
  const parts = content.split(
    /(https?:\/\/[^\s]+|[\w.+-]+@[\w.-]+\.[A-Za-z]{2,})/g
  );

  return parts.map((part, index) => {
    if (/^https?:\/\//.test(part)) {
      const cleanUrl = part.replace(/[.,;:!?]+$/, "");
      const trailing = part.slice(cleanUrl.length);

      return (
        <span key={`${part}-${index}`}>
          <a
            href={cleanUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-yellow-500 underline-offset-4 transition-colors hover:text-yellow-500"
          >
            {cleanUrl}
          </a>
          {trailing}
        </span>
      );
    }

    if (/^[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(part)) {
      return (
        <a
          key={`${part}-${index}`}
          href={`mailto:${part}`}
          className="underline decoration-yellow-500 underline-offset-4 transition-colors hover:text-yellow-500"
        >
          {part}
        </a>
      );
    }

    return <span key={`${part}-${index}`}>{part}</span>;
  });
}

export default function AtlasChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isLoading]);

  async function sendMessage(content: string) {
    const trimmedContent = content.trim();

    if (!trimmedContent || isLoading) return;

    if (trimmedContent.length > MAX_MESSAGE_LENGTH) return;

    const userMessage: Message = {
      role: "user",
      content: trimmedContent,
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/atlas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Atlas is temporarily unavailable."
        );
      }

      const atlasMessage: Message = {
        role: "assistant",
        content: data.message,
      };

      setMessages((currentMessages) => [
        ...currentMessages,
        atlasMessage,
      ]);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Atlas is temporarily unavailable.";

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: "assistant",
          content: message,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-8 sm:right-8">
      {isOpen && (
        <div
          className="
            mb-4 flex
            h-[min(620px,calc(100dvh-120px))]
            w-[calc(100vw-40px)]
            max-w-[390px]
            flex-col overflow-hidden
            rounded-2xl border border-zinc-800
            bg-zinc-950 text-white
            shadow-2xl
          "
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
            <div className="flex items-center gap-3">
              <Image
                src="/icon.svg"
                alt=""
                width={36}
                height={36}
                aria-hidden="true"
                className="size-9 rounded-xl"
              />

              <div>
                <p className="text-sm font-medium">Atlas</p>
                <p className="text-xs text-zinc-500">
                  Portfolio assistant
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close Atlas"
              className="
                flex size-9 items-center justify-center
                rounded-full text-zinc-400
                transition-colors
                hover:bg-zinc-900 hover:text-white
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-yellow-500
              "
            >
              ×
            </button>
          </div>

          {/* Conversation */}
          <div className="flex-1 overflow-y-auto px-5 py-5">
            {messages.length === 0 && (
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-yellow-500">
                  Ask Atlas
                </p>

                <h2 className="mt-3 text-2xl font-medium tracking-tight">
                  Curious about Alejandro?
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  Ask me about his work, projects, technologies,
                  design background or technical experience.
                </p>

                <div className="mt-6 flex flex-col gap-2">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => void sendMessage(suggestion)}
                      className="
                        rounded-xl border border-zinc-800
                        px-4 py-3 text-left text-sm
                        text-zinc-300
                        transition-colors
                        hover:border-zinc-700
                        hover:bg-zinc-900
                        hover:text-white
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-yellow-500
                      "
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.length > 0 && (
              <div className="space-y-5">
                {messages.map((message, index) => (
                  <div
                    key={`${message.role}-${index}`}
                    className={
                      message.role === "user"
                        ? "flex justify-end"
                        : "flex justify-start"
                    }
                  >
                    <div
                      className={
                        message.role === "user"
                          ? "max-w-[85%] rounded-2xl rounded-br-md bg-white px-4 py-3 text-sm leading-relaxed text-black"
                          : "max-w-[90%] border-l-2 border-yellow-500 pl-4 text-sm leading-relaxed text-zinc-300"
                      }
                    >
                      {renderMessageContent(message.content)}
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex items-center gap-2 text-sm text-zinc-500">
                    <span className="size-1.5 animate-pulse rounded-full bg-yellow-500" />
                    <span>Atlas is thinking...</span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-zinc-800 p-4"
          >
            <div className="flex items-end gap-2 rounded-xl border border-zinc-800 bg-zinc-900 p-2">
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about Alejandro..."
                rows={1}
                maxLength={MAX_MESSAGE_LENGTH}
                disabled={isLoading}
                className="
                  max-h-28 min-h-10 flex-1 resize-none
                  bg-transparent px-2 py-2
                  text-sm text-white
                  outline-none
                  placeholder:text-zinc-600
                  disabled:cursor-not-allowed
                "
              />

              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                aria-label="Send message"
                className="
                  flex size-10 shrink-0 items-center
                  justify-center rounded-lg
                  bg-yellow-500 text-lg text-black
                  transition
                  hover:bg-yellow-400
                  disabled:cursor-not-allowed
                  disabled:opacity-30
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-white
                "
              >
                ↑
              </button>
            </div>

            <div className="mt-2 flex justify-between px-1 text-[10px] text-zinc-600">
              <span>AI portfolio assistant</span>
              <span>
                {input.length}/{MAX_MESSAGE_LENGTH}
              </span>
            </div>
          </form>
        </div>
      )}

      {/* Floating trigger */}
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close Atlas" : "Ask Atlas"}
        className="
          group ml-auto flex items-center gap-3
          rounded-full bg-black
          px-4 py-3 text-white
          shadow-lg
          transition-transform duration-300
          hover:scale-[1.03]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-yellow-500
          focus-visible:ring-offset-4
        "
      >
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full motion-safe:animate-ping rounded-full bg-yellow-400 opacity-60" />
          <span className="relative inline-flex size-2 rounded-full bg-yellow-500" />
        </span>

        <span className="text-sm font-medium">
          {isOpen ? "Close" : "Ask Atlas"}
        </span>

        {!isOpen && (
          <span
            aria-hidden="true"
            className="text-yellow-500 transition-transform duration-300 group-hover:translate-x-0.5"
          >
            ↗
          </span>
        )}
      </button>
    </div>
  );
}