import { Link } from "react-router-dom";
import { MapPin, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslations } from "@/locales/translations";

const Footer = () => {
  const { language } = useLanguage();
  const t = useTranslations(language);

  // Defensive safety: Ensure services object exists
  const services = t?.home?.whatWeOffer?.services || {};
  const hasPortfolio = services.portfolio?.title;
  const hasStatic = services.static?.title;

  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">
              Webify<span className="text-primary">TN</span>
            </h3>
            <p className="text-body mb-6 leading-relaxed">
              {t.footer.description}
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-body">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span>Tunisia</span>
              </div>
              <div className="flex items-center gap-3 text-body">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span>webifytn@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links - Hidden on Mobile */}
          <div className="hidden md:block">
            <h4 className="text-lg font-semibold mb-4 text-foreground">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-body hover:text-primary transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-body hover:text-primary transition-colors">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-body hover:text-primary transition-colors">
                  {t.nav.portfolio}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-body hover:text-primary transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">{t.footer.services}</h4>
            <ul className="space-y-3">
              {services.vitrine?.title && (
                <li>
                  <Link to="/services" className="text-body hover:text-primary transition-colors">
                    {services.vitrine.title}
                  </Link>
                </li>
              )}
              {services.landing?.title && (
                <li>
                  <Link to="/services" className="text-body hover:text-primary transition-colors">
                    {services.landing.title}
                  </Link>
                </li>
              )}
              {hasPortfolio && (
                <li>
                  <Link to="/services" className="text-body hover:text-primary transition-colors">
                    {services.portfolio.title}
                  </Link>
                </li>
              )}
              {hasStatic && (
                <li>
                  <Link to="/services" className="text-body hover:text-primary transition-colors">
                    {services.static.title}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex justify-center items-center">
            <p className="text-body text-sm text-center">
              © 2026 WebifyTN. {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
