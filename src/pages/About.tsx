import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import HeroSection from "@/components/HeroSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import { motion } from "framer-motion";
import { Target, Heart, Award, ArrowRight, Users, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import useScrollTop from "@/hooks/useScrollTop";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslations } from "@/locales/translations";

const About = () => {
  useScrollTop();
  const { language } = useLanguage();
  const t = useTranslations(language);

  const stats = [
    { value: "50+", label: t.about.stats.projects },
    { value: "100%", label: t.about.stats.satisfaction },
    { value: "3+", label: t.about.stats.experience },
    { value: "24h", label: t.about.stats.response },
  ];

  const values = [
    {
      icon: Target,
      title: t.about.values.items.purposeDriven.title,
      description: t.about.values.items.purposeDriven.description,
    },
    {
      icon: Heart,
      title: t.about.values.items.clientFocused.title,
      description: t.about.values.items.clientFocused.description,
    },
    {
      icon: Award,
      title: t.about.values.items.qualityFirst.title,
      description: t.about.values.items.qualityFirst.description,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection className="section-spacing bg-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="badge-pill mb-6 inline-block"
            >
              <Users className="w-4 h-4 inline-block mr-2" />
              {t.about.hero.badge}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              {t.about.hero.title} <span className="text-gradient">{t.about.hero.titleHighlight}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-body text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              {t.about.hero.subtitle}
            </motion.p>
          </div>
        </div>
      </HeroSection>

      {/* Our Story Section */}
      <AnimatedSection className="section-spacing bg-secondary/50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                {t.about.story.title} <span className="text-gradient">{t.about.story.titleHighlight}</span>
              </h2>
              <div className="space-y-4 text-body leading-relaxed">
                <p>{t.about.story.p1}</p>
                <p>{t.about.story.p2}</p>
                <p>{t.about.story.p3}</p>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">{t.about.mission.title}</h3>
                <p className="text-body leading-relaxed">
                  {t.about.mission.description}
                </p>
              </div>
            </div>

            {/* Right - Stats Card */}
            <div className="card-elevated p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                {t.about.achievements.title}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <AnimatedCounter key={index} {...stat} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection className="section-spacing bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              {t.about.founders.title} <span className="text-gradient">{t.about.founders.titleHighlight}</span>
            </h2>
            <p className="text-body text-lg leading-relaxed mb-12">
              {t.about.team.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="card-elevated p-8 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">A</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  <a 
                    href="https://aboutabdou.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group/link relative inline-flex items-center gap-1 text-primary md:text-foreground md:hover:text-primary transition-colors duration-300"
                  >
                    <span className="relative">
                      {t.about.founders.abdou.name}
                      <span className="absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 w-full md:w-0 md:group-hover/link:w-full" />
                    </span>
                    <ExternalLink className="w-4 h-4 transition-all duration-300 text-primary opacity-100 translate-y-0 translate-x-0 md:opacity-0 md:-translate-y-1 md:translate-x-1 md:group-hover/link:opacity-100 md:group-hover/link:translate-y-0 md:group-hover/link:translate-x-0" />
                  </a>
                </h3>
                <p className="text-muted-foreground text-sm mb-3">{t.about.founders.abdou.title}</p>
                <p className="text-body text-sm leading-relaxed">{t.about.founders.abdou.bio}</p>
              </div>
              <div className="card-elevated p-8 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">A</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  <a 
                    href="https://aminebenrzig.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group/link relative inline-flex items-center gap-1 text-primary md:text-foreground md:hover:text-primary transition-colors duration-300"
                  >
                    <span className="relative">
                      {t.about.founders.ameen.name}
                      <span className="absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 w-full md:w-0 md:group-hover/link:w-full" />
                    </span>
                    <ExternalLink className="w-4 h-4 transition-all duration-300 text-primary opacity-100 translate-y-0 translate-x-0 md:opacity-0 md:-translate-y-1 md:translate-x-1 md:group-hover/link:opacity-100 md:group-hover/link:translate-y-0 md:group-hover/link:translate-x-0" />
                  </a>
                </h3>
                <p className="text-muted-foreground text-sm mb-3">{t.about.founders.ameen.title}</p>
                <p className="text-body text-sm leading-relaxed">{t.about.founders.ameen.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Our Values Section */}
      <AnimatedSection className="section-spacing bg-secondary/50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t.about.values.title} <span className="highlight-blue">{t.about.values.titleHighlight}</span>
            </h2>
            <p className="text-body text-lg max-w-2xl mx-auto">
              {t.about.values.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-body leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="section-spacing bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              {t.about.cta.title}
            </h2>
            <p className="text-body text-lg mb-10 leading-relaxed">
              {t.about.cta.subtitle}
            </p>
            <Link 
              to="/contact" 
              className="btn-primary inline-flex items-center gap-2"
            >
              {t.about.cta.button}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default About;
