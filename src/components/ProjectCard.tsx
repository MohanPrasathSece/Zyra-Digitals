interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  onClick: () => void;
  scale?: string;
}

export const ProjectCard = ({ image, title, category, onClick, scale = "scale-100" }: ProjectCardProps) => {
  return (
    <button
      onClick={onClick}
      className="relative w-full overflow-hidden rounded-lg border border-border bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
    >
      <div className="aspect-video w-full">
        <img src={image} alt={title} className={`w-full h-full object-cover ${scale}`} loading="lazy" />
      </div>
      <div className="p-4 text-left">
        <p className="font-secondary text-sm text-muted-foreground mb-1">{category}</p>
        <h3 className="font-subheading text-lg font-semibold">{title}</h3>
      </div>
    </button>
  );
};
