import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="group h-full p-8 rounded-xl bg-card border border-border ring-1 ring-transparent transition-all duration-200 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:shadow-xl hover:bg-secondary/40 hover:border-foreground/20 hover:ring-foreground/10 cursor-default">
      <div className="mb-6">
        <div className="inline-flex items-center justify-center rounded-lg border border-border w-12 h-12 bg-background transition-all duration-200 group-hover:border-foreground/30 group-hover:bg-foreground/5 group-hover:-translate-y-0.5">
          <Icon size={24} strokeWidth={1.75} className="text-foreground transition-colors duration-200 group-hover:text-foreground" />
        </div>
      </div>
      <h3 className="font-subheading text-xl font-semibold text-card-foreground mb-3 transition-colors duration-200 group-hover:text-foreground">
        {title}
      </h3>
      <p className="font-secondary text-base text-muted-foreground leading-relaxed transition-colors duration-200 group-hover:text-foreground/80">
        {description}
      </p>
    </div>
  );
};
