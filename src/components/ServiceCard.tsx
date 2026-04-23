import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="card-elevated p-8 text-center group">
      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-body leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
