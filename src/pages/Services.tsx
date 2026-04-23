import { Link } from "react-router-dom";
import { Check, Wrench, ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import HeroSection from "@/components/HeroSection";
import useScrollTop from "@/hooks/useScrollTop";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslations } from "@/locales/translations";

const Services = () => {
  useScrollTop();
  const { language, isRTL } = useLanguage();
  const t = useTranslations(language);

  const services = [
    {
      title: t.services.items.vitrine.title,
      description: t.services.items.vitrine.description,
      features: t.services.items.vitrine.features,
    },
    {
      title: t.services.items.landing.title,
      description: t.services.items.landing.description,
      features: t.services.items.landing.features,
    },
    {
      title: t.services.items.backend.title,
      description: t.services.items.backend.description,
      features: t.services.items.backend.features,
    },
    {
      title: t.services.items.applications.title,
      description: t.services.items.applications.description,
      features: t.services.items.applications.features,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection className="hero-gradient py-20 lg:py-28">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="badge-pill mb-6 inline-block"
            >
              <Wrench className="w-4 h-4 inline-block mr-2" />
              {t.nav.services}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold hero-text-primary mb-6 leading-tight"
            >
              {t.services.hero.title}{" "}
              <span className="text-gradient">{t.services.hero.titleHighlight}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed hero-text-secondary"
            >
              {t.services.hero.subtitle}
            </motion.p>
          </div>
        </div>
      </HeroSection>

      {/* Services Section */}
      <AnimatedSection className="section-spacing bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-elevated p-8 lg:p-10 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                </div>
                <p className="text-body leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-body">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="text-primary font-semibold hover:underline inline-flex items-center gap-2">
                  {isRTL && <ArrowLeft className="w-4 h-4" />}
                  {t.services.learnMore}
                  {!isRTL && <ArrowRight className="w-4 h-4" />}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="cta-gradient py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold hero-text-primary mb-6">
              {t.services.cta.title}
            </h2>
            <p className="text-lg mb-10 hero-text-secondary">
              {t.services.cta.subtitle}
            </p>
            <Link to="/contact" className="btn-primary inline-block">
              {t.services.cta.button}
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};
export default Services;