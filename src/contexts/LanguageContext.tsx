import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Language = "fr" | "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Check localStorage first
    const stored = localStorage.getItem("language") as Language | null;
    if (stored && ["fr", "en", "ar"].includes(stored)) {
      return stored;
    }
    // Default to French
    return "fr";
  });

  const isRTL = language === "ar";

  useEffect(() => {
    // Update HTML dir and lang attributes
    const root = document.documentElement;
    root.setAttribute("lang", language);
    root.setAttribute("dir", isRTL ? "rtl" : "ltr");
    
    // Store in localStorage
    localStorage.setItem("language", language);
  }, [language, isRTL]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
