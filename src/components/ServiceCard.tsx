import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export const ServiceCard = ({ icon: Icon, title, description, index }: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "h-full rounded-2xl border border-border/60 bg-card p-8",
        "transition-all duration-300 ease-out hover:border-foreground/20 hover:shadow-lg",
        "flex flex-col items-start gap-6 group"
      )}
    >
      <div className="relative p-3 rounded-xl bg-secondary/50 transition-colors duration-300 group-hover:bg-secondary">
        <Icon
          size={28}
          strokeWidth={1.5}
          className="text-foreground/80 transition-colors duration-300 group-hover:text-foreground"
        />
      </div>

      <div className="space-y-3">
        <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground/90 transition-colors duration-300 group-hover:text-foreground">
          {title}
        </h3>

        <p className="font-secondary text-base leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/75">
          {description}
        </p>
      </div>

      {/* Decorative minimal indicator */}
      <div className="mt-auto pt-4 w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="h-px w-full max-w-[40px] bg-foreground/20" />
      </div>
    </div>
  );
};
