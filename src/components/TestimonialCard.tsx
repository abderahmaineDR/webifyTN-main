import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  rating: number;
}

const TestimonialCard = ({ quote, name, role, rating }: TestimonialCardProps) => {
  return (
    <div className="card-elevated p-8">
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-body mb-6 leading-relaxed italic">"{quote}"</p>
      <div>
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
