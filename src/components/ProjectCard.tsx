interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  onClick: () => void;
}

export const ProjectCard = ({ image, title, category, onClick }: ProjectCardProps) => {
  return (
    <button
      onClick={onClick}
      className="relative w-full overflow-hidden rounded-lg border border-border bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
    >
      <div className="aspect-video w-full">
        <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="p-4 text-left">
        <p className="font-body text-sm text-muted-foreground mb-1">{category}</p>
        <h3 className="font-heading text-lg font-semibold">{title}</h3>
      </div>
    </button>
  );
};
