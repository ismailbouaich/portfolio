"use client";

import { useLanguage } from "@/context/LanguageContext";

const LangToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 text-sm font-semibold">
      <button
        onClick={() => setLang("en")}
        className={`px-2 py-1 transition-colors ${
          lang === "en"
            ? "text-accent border-b-2 border-accent"
            : "text-black/50 hover:text-accent"
        }`}
      >
        EN
      </button>
      <span className="text-black/30">|</span>
      <button
        onClick={() => setLang("fr")}
        className={`px-2 py-1 transition-colors ${
          lang === "fr"
            ? "text-accent border-b-2 border-accent"
            : "text-black/50 hover:text-accent"
        }`}
      >
        FR
      </button>
    </div>
  );
};

export default LangToggle;
