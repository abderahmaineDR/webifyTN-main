import { Link } from "react-router-dom";
import { Globe, FileText, Server, Smartphone, Eye, Zap, Shield, Sparkles, Search, Palette, Hammer, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import ValueCard from "@/components/ValueCard";
import TestimonialCard from "@/components/TestimonialCard";
import ProcessCard from "@/components/ProcessCard";
import AnimatedSection from "@/components/AnimatedSection";
import HeroSection from "@/components/HeroSection";
import useScrollTop from "@/hooks/useScrollTop";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslations } from "@/locales/translations";

const Home = () => {
  useScrollTop();
  const { language } = useLanguage();
  const t = useTranslations(language);
  
  const services = [
    {
      icon: Globe,
      title: t.home.whatWeOffer.services.vitrine.title,
      description: t.home.whatWeOffer.services.vitrine.description,
    },
    {
      icon: FileText,
      title: t.home.whatWeOffer.services.landing.title,
      description: t.home.whatWeOffer.services.landing.description,
    },
    {
      icon: Server,
      title: t.home.whatWeOffer.services.backend.title,
      description: t.home.whatWeOffer.services.backend.description,
    },
    {
      icon: Smartphone,
      title: t.home.whatWeOffer.services.applications.title,
      description: t.home.whatWeOffer.services.applications.description,
    },
  ];

  const values = [
    {
      icon: Eye,
      title: t.home.whyChoose.values.clarity.title,
      description: t.home.whyChoose.values.clarity.description,
    },
    {
      icon: Zap,
      title: t.home.whyChoose.values.performance.title,
      description: t.home.whyChoose.values.performance.description,
    },
    {
      icon: Shield,
      title: t.home.whyChoose.values.trust.title,
      description: t.home.whyChoose.values.trust.description,
    },
  ];

  const processSteps = [
    {
      icon: Search,
      number: "01",
      title: t.home.process.steps.discovery.title,
      description: t.home.process.steps.discovery.description,
    },
    {
      icon: Palette,
      number: "02",
      title: t.home.process.steps.design.title,
      description: t.home.process.steps.design.description,
    },
    {
      icon: Hammer,
      number: "03",
      title: t.home.process.steps.development.title,
      description: t.home.process.steps.development.description,
    },
    {
      icon: Rocket,
      number: "04",
      title: t.home.process.steps.launch.title,
      description: t.home.process.steps.launch.description,
    },
  ];

  const testimonials = [
    {
      quote: t.home.testimonials.items.idriss.quote,
      name: t.home.testimonials.items.idriss.name,
      role: t.home.testimonials.items.idriss.role,
      rating: 5,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection className="min-h-[90vh] flex items-center relative">
        <div className="section-container py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.6, ease: [0.19, 1.0, 0.22, 1.0] }}
              className="hero-badge mb-8 inline-block"
            >
              <Sparkles className="w-3.5 h-3.5 inline-block mr-2" />
              {t.home.badge}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, delay: 0.8, ease: [0.19, 1.0, 0.22, 1.0] }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold hero-heading mb-8 leading-tight tracking-tight"
            >
              {t.home.hero.title}{" "}
              <span className="hero-gradient-text font-bold">{t.home.hero.titleHighlight}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, delay: 1.0, ease: [0.19, 1.0, 0.22, 1.0] }}
              className="text-lg lg:text-xl mb-12 max-w-2xl mx-auto leading-loose hero-text-secondary font-normal"
            >
              {t.home.hero.subtitle}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, delay: 1.2, ease: [0.19, 1.0, 0.22, 1.0] }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="hero-btn-primary text-center">
                {t.home.hero.cta}
              </Link>
              <Link to="/portfolio" className="hero-btn-secondary text-center">
                {t.home.hero.viewWork}
              </Link>
            </motion.div>
          </div>
        </div>
      </HeroSection>

      {/* What We Offer Section */}
      <AnimatedSection className="section-spacing bg-background">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t.home.whatWeOffer.title} <span className="highlight-blue">{t.home.whatWeOffer.titleHighlight}</span>
            </h2>
            <p className="text-body text-lg max-w-2xl mx-auto">
              {t.home.whatWeOffer.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-outline inline-block">
              {t.home.whatWeOffer.cta}
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose WebifyTN Section */}
      <AnimatedSection className="section-spacing bg-secondary/50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t.home.whyChoose.title} <span className="highlight-blue">{t.home.whyChoose.titleHighlight}</span>
            </h2>
            <p className="text-body text-lg max-w-2xl mx-auto">
              {t.home.whyChoose.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Built by Professionals Section */}
      <AnimatedSection className="section-spacing bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              {t.home.builtBy.title} <span className="highlight-blue">{t.home.builtBy.titleHighlight}</span>
            </h2>
            <p className="text-body text-lg leading-relaxed mb-8">
              {t.home.builtBy.description}
            </p>
            <Link to="/about" className="btn-outline inline-block">
              {t.home.builtBy.cta}
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Our Process Section */}
      <AnimatedSection className="section-spacing bg-secondary/50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t.home.process.title} <span className="highlight-blue">{t.home.process.titleHighlight}</span>
            </h2>
            <p className="text-body text-lg max-w-2xl mx-auto">
              {t.home.process.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <ProcessCard key={index} {...step} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="section-spacing bg-background">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t.home.testimonials.title} <span className="highlight-blue">{t.home.testimonials.titleHighlight}</span>
            </h2>
            <p className="text-body text-lg">
              {t.home.testimonials.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 max-w-md mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA Section */}
      <AnimatedSection className="cta-gradient py-20 lg:py-28">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold hero-text-primary mb-6">
              {t.home.finalCTA.title}
            </h2>
            <p className="text-lg mb-10 hero-text-secondary">
              {t.home.finalCTA.subtitle}
            </p>
            <Link to="/contact" className="btn-primary inline-block">
              {t.home.finalCTA.cta}
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Home;
