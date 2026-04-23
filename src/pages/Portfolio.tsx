import { motion } from "framer-motion";
import { Folder } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ProjectRow from "@/components/ProjectRow";
import AnimatedSection from "@/components/AnimatedSection";
import HeroSection from "@/components/HeroSection";
import useScrollTop from "@/hooks/useScrollTop";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslations } from "@/locales/translations";
import project1 from "@/assets/project-1.jpg";
import project4 from "@/assets/project-4.jpg";
import project6 from "@/assets/project-6.jpg";
import project7 from "@/assets/project-7.png";

const Portfolio = () => {
  useScrollTop();
  const { language } = useLanguage();
  const t = useTranslations(language);

  const projects = [
    {
      image: project1,
      category: t.portfolio.projects.creator.category,
      title: t.portfolio.projects.creator.title,
      description: t.portfolio.projects.creator.description,
      tags: t.portfolio.projects.creator.tags,
      link: "https://rwisiidriss.vercel.app/",
    },
    {
      image: project4,
      category: t.portfolio.projects.ecommerce.category,
      title: t.portfolio.projects.ecommerce.title,
      description: t.portfolio.projects.ecommerce.description,
      tags: t.portfolio.projects.ecommerce.tags,
      link: "https://esxshop.vercel.app/",
    },
    {
      image: project6,
      category: t.portfolio.projects.mentalHealth.category,
      title: t.portfolio.projects.mentalHealth.title,
      description: t.portfolio.projects.mentalHealth.description,
      tags: t.portfolio.projects.mentalHealth.tags,
      link: "https://rouhi.vercel.app/",
    },
    {
      image: project7,
      category: t.portfolio.projects.tenux.category,
      title: t.portfolio.projects.tenux.title,
      description: t.portfolio.projects.tenux.description,
      tags: t.portfolio.projects.tenux.tags,
      link: "https://tenux.vercel.app/",
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
              <Folder className="w-4 h-4 inline-block mr-2" />
              {t.portfolio.hero.badge}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-8 leading-tight"
            >
              {t.portfolio.hero.title} <span className="text-gradient">{t.portfolio.hero.titleHighlight}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-body text-xl max-w-3xl mx-auto leading-relaxed opacity-80"
            >
              {t.portfolio.hero.subtitle}
            </motion.p>
          </div>
        </div>
      </HeroSection>

      {/* Projects Rows List */}
      <div className="bg-background pb-32">
        <div className="section-container">
          <div className="flex flex-col">
            {projects.map((project, index) => (
              <ProjectRow 
                key={index} 
                index={index}
                {...project} 
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <AnimatedSection className="cta-gradient py-24 md:py-32">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold hero-text-primary mb-8">
              {t.portfolio.cta.title}
            </h2>
            <p className="text-xl mb-12 hero-text-secondary opacity-90 leading-relaxed">
              {t.portfolio.cta.subtitle}
            </p>
            <Link to="/contact" className="btn-primary inline-block text-lg px-10 py-4">
              {t.portfolio.cta.button}
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Portfolio;