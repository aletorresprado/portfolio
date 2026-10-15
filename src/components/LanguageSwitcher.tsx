"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageSwitcher() {
  const { language, pending, changeLanguage } = useLanguage();
  const next = language === "en" ? "es" : "en";

  return (
    <button
      type="button"
      onClick={() => changeLanguage(next)}
      disabled={pending}
      aria-label={language === "en" ? "Cambiar a español" : "Switch to English"}
      lang={next}
      aria-busy={pending}
      className="min-h-11 shrink-0 cursor-pointer rounded px-2 text-sm font-medium transition-colors hover:text-yellow-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-700 focus-visible:ring-offset-4 disabled:cursor-wait disabled:opacity-50"
    >
      {language === "en" ? "ES" : "EN"}
    </button>
  );
}
