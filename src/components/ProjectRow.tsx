import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslations } from "@/locales/translations";

interface ProjectRowProps {
  image: string;
  category: string;
  title: string;
  description: string;
  tags?: string[];
  index: number;
  link: string;
}

const ProjectRow = ({ image, category, title, description, tags, index, link }: ProjectRowProps) => {
  const { language } = useLanguage();
  const t = useTranslations(language);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        "flex flex-col items-center gap-12 md:gap-24 py-20 md:py-32 group border-b border-white/5 last:border-0",
        index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
      )}
    >
      {/* Image Container */}
      <div className="w-full md:w-[48%] overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-sm shadow-card group-hover:shadow-card-hover transition-all duration-700">
        <div className="aspect-[16/10] overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="w-full md:w-[52%] flex flex-col justify-center">
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
        >
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-8">
              {tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          <h3 className="text-[2rem] font-bold text-foreground mb-6 leading-tight transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-muted-foreground/80 text-lg sm:text-xl mb-10 leading-relaxed max-w-4xl">
            {description}
          </p>
          
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center font-semibold group/btn cursor-pointer inline-flex w-fit relative pb-2",
              "text-gray-900 dark:text-white",
              language === "ar" ? "flex-row-reverse gap-x-4" : "flex-row gap-x-3"
            )}
          >
            <span className="text-base md:text-lg">{t.portfolio.viewProject}</span>
            <ArrowRight className={cn(
              "w-5 h-5 transition-transform duration-300",
              language === "ar" 
                ? "rotate-180 group-hover/btn:-translate-x-2" 
                : "group-hover/btn:translate-x-2"
            )} />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectRow;
