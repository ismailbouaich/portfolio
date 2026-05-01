"use client";

import { createContext, useContext, useState } from "react";
import { en } from "@/translations/en";
import { fr } from "@/translations/fr";

const translations = { en, fr };
const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  const tr = translations[lang];

  const t = (keyPath) =>
    keyPath.split(".").reduce((o, k) => o?.[k], tr) ?? keyPath;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tr }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
