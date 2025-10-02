import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="h-full p-8 rounded-xl bg-card border border-border">
      <div className="mb-6">
        <div className="inline-flex items-center justify-center rounded-lg border border-border w-12 h-12 bg-background">
          <Icon size={24} strokeWidth={1.75} className="text-foreground" />
        </div>
      </div>
      <h3 className="font-subheading text-xl font-semibold text-card-foreground mb-3">
        {title}
      </h3>
      <p className="font-secondary text-base text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};
