import { LucideIcon } from "lucide-react";

interface ProcessCardProps {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
}

const ProcessCard = ({ icon: Icon, number, title, description }: ProcessCardProps) => {
  return (
    <div className="card-elevated p-8 relative group">
      {/* Step Number - Large decorative number in top-right */}
      <div className="absolute top-6 right-6 text-6xl font-bold text-primary/10 select-none">
        {number}
      </div>
      
      {/* Icon - Top-left */}
      <div className="relative z-10 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
        <p className="text-body leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProcessCard;
