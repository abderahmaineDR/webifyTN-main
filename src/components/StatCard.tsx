interface StatCardProps {
  value: string;
  label: string;
}

const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div className="text-center p-4">
      <p className="text-3xl lg:text-4xl font-bold text-primary mb-2">{value}</p>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

export default StatCard;
