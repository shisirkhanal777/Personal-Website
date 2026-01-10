"use client";

import { useState } from "react";

export default function LanguageToggle() {
  const [language, setLanguage] = useState<"en" | "np">("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "np" : "en");
    // TODO: Implement i18n routing when ready
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1.5 rounded-md text-sm font-medium text-neutral-200 hover:text-white hover:bg-white/10 transition-colors duration-200 border border-white/20"
      aria-label="Toggle language"
    >
      {language === "en" ? "नेपाली" : "English"}
    </button>
  );
}

