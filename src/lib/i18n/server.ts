import "server-only";
import { cookies } from "next/headers";
import { LANGUAGE_COOKIE, translate, type Language } from ".";

export async function getLanguage(): Promise<Language> {
  return (await cookies()).get(LANGUAGE_COOKIE)?.value === "es" ? "es" : "en";
}

export async function getTranslator() {
  const language = await getLanguage();
  return (text: string) => translate(text, language);
}
