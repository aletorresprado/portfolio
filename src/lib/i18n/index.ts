import spanish from "./es.json";

export type Language = "en" | "es";
export const LANGUAGE_COOKIE = "portfolio-language";

export function translate(text: string, language: Language): string {
  if (language === "en") return text;
  return (spanish as Record<string, string>)[text] ?? text;
}
