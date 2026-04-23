import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslations } from "@/locales/translations";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const location = useLocation();
  const { language } = useLanguage();
  const t = useTranslations(language);

  // Handle menu animation state
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Small delay to trigger animation
      const openTimer = setTimeout(() => setIsAnimating(true), 10);
      return () => clearTimeout(openTimer);
    } else {
      setIsAnimating(false);
      // Wait for animation to complete before unmounting (match transition duration)
      const closeTimer = setTimeout(() => setShouldRender(false), 350);
      return () => clearTimeout(closeTimer);
    }
  }, [isOpen]);

  const navLinks = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.about, path: "/about" },
    { name: t.nav.services, path: "/services" },
    { name: t.nav.portfolio, path: "/portfolio" },
    { name: t.nav.contact, path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
<nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--surface-primary))]/60 backdrop-blur-md border-b border-border/30">
      <div className="section-container">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <span className="text-xl lg:text-2xl font-bold text-foreground">
              Webify<span className="text-primary">TN</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={isActive(link.path) ? "nav-link-active" : "nav-link"}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side: Language + Theme Toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <Link to="/contact" className="btn-primary inline-block">
              {t.nav.getStarted}
            </Link>
          </div>

          {/* Mobile Menu Button + Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {shouldRender && (
          <div 
            className={`md:hidden py-4 border-t border-border transform transition-all duration-300 ease-in-out will-change-transform ${
              isAnimating 
                ? 'translate-y-0 opacity-100' 
                : '-translate-y-4 opacity-0 pointer-events-none'
            }`}
            style={{
              transitionProperty: 'transform, opacity',
              transitionTimingFunction: isAnimating ? 'ease-out' : 'ease-in'
            }}
          >
            <div className="flex flex-col gap-4">
              {/* First item: Accueil with Language Switcher facing it */}
              <div className="flex items-center justify-between py-2">
                <Link
                  to={navLinks[0].path}
                  className={isActive(navLinks[0].path) ? "nav-link-active" : "nav-link"}
                  onClick={() => setIsOpen(false)}
                >
                  {navLinks[0].name}
                </Link>
                <LanguageSwitcher />
              </div>
              
              {/* Navigation Links (remaining items) */}
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`py-2 ${isActive(link.path) ? "nav-link-active" : "nav-link"}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              <Link
                to="/contact"
                className="btn-primary text-center mt-2"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.getStarted}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
