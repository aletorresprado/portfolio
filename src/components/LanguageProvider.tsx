"use client";

import { createContext, useContext, useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { LANGUAGE_COOKIE, translate, type Language } from "@/lib/i18n";

const LanguageContext = createContext<{
  language: Language;
  pending: boolean;
  changeLanguage: (language: Language) => void;
  t: (text: string) => string;
} | null>(null);

export function LanguageProvider({ children, initialLanguage }: {
  children: React.ReactNode;
  initialLanguage: Language;
}) {
  const [language, setLanguage] = useState(initialLanguage);
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  function changeLanguage(next: Language) {
    document.cookie = `${LANGUAGE_COOKIE}=${next}; Path=/; Max-Age=31536000; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`;
    startTransition(() => {
      setLanguage(next);
      router.refresh();
    });
  }

  return (
    <LanguageContext.Provider value={{ language, pending, changeLanguage, t: (text) => translate(text, language) }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage requires LanguageProvider");
  return context;
}
