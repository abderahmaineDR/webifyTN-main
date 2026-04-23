import { LucideIcon } from "lucide-react";

interface ContactInfoCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  subtitle?: string;
}

const ContactInfoCard = ({ icon: Icon, title, value, subtitle }: ContactInfoCardProps) => {
  return (
    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <p className="font-medium text-foreground">{title}</p>
        <p className="text-primary font-medium">{value}</p>
        {subtitle && <p className="text-muted-foreground text-sm mt-1">{subtitle}</p>}
      </div>
    </div>
  );
};

export default ContactInfoCard;
