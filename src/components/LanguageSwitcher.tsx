import { useState, useRef, useEffect } from "react";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { ChevronDown } from "lucide-react";
import FlagFR from "@/components/flags/FlagFR";
import FlagGB from "@/components/flags/FlagGB";
import FlagTN from "@/components/flags/FlagTN";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; label: string; FlagComponent: React.ComponentType<{ className?: string }> }[] = [
    { code: "fr", label: "FR", FlagComponent: FlagFR },
    { code: "en", label: "EN", FlagComponent: FlagGB },
    { code: "ar", label: "AR", FlagComponent: FlagTN },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language);
  const otherLanguages = languages.filter((lang) => lang.code !== language);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Version - Inline Buttons */}
      <div className="hidden md:flex items-center gap-1 bg-secondary/80 rounded-full p-1 border border-border min-h-[44px]">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 min-w-[44px] ${
              language === lang.code
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
            aria-label={`Switch to ${lang.label}`}
          >
            {lang.label}
          </button>
        ))}
      </div>

      {/* Mobile Version - Compact Dropdown */}
      <div ref={dropdownRef} className="md:hidden relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-border text-sm font-medium text-foreground transition-all duration-200 min-h-[44px] min-w-[80px] hover:bg-secondary"
          aria-label="Select language"
          aria-expanded={isOpen}
        >
          <span className="flex items-center gap-1.5">
            {currentLanguage && <currentLanguage.FlagComponent className="w-4 h-4 flex-shrink-0" />}
            <span>{currentLanguage?.label}</span>
          </span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full mt-2 right-0 bg-background border border-border rounded-lg shadow-lg overflow-hidden min-w-[80px] z-50">
            {otherLanguages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className="w-full px-4 py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors flex items-center justify-center gap-1.5"
                aria-label={`Switch to ${lang.label}`}
              >
                <lang.FlagComponent className="w-4 h-4 flex-shrink-0" />
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default LanguageSwitcher;
