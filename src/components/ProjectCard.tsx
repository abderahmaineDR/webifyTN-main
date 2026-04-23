import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  tags?: string[];
}

const ProjectCard = ({ image, category, title, description, tags }: ProjectCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="card-elevated overflow-hidden group border border-white/5 bg-white/[0.03] backdrop-blur-sm hover:border-primary/30 hover:shadow-card-hover transition-all duration-500 rounded-3xl h-full flex flex-col"
    >
      <div className="aspect-[16/10] overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-background/60 backdrop-blur-md border-white/10 text-primary font-semibold px-3 py-1 text-[10px] uppercase tracking-wider">
            {category}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground/80 mb-6 line-clamp-3 leading-relaxed flex-grow">{description}</p>
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8 mt-auto">
            {tags.map((tag, index) => (
              <span key={index} className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground/50 bg-white/5 px-2 py-1 rounded border border-white/5">
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex items-center text-primary font-bold group/btn cursor-pointer inline-flex w-fit">
          <span className="text-xs uppercase tracking-[0.2em]">View Project</span>
          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
