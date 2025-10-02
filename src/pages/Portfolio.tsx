import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import { Quote } from "lucide-react";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Luxe Commerce",
      category: "E-Commerce",
      image: project1,
      description:
        "A premium e-commerce platform featuring custom product filtering, seamless checkout, and an elegant shopping experience. Built with performance and conversion in mind.",
      technologies: ["React", "Node.js", "Stripe", "Tailwind CSS"],
    },
    {
      title: "Portfolio Studio",
      category: "Portfolio",
      image: project2,
      description:
        "A minimalist portfolio website for a creative professional, showcasing work with elegant galleries, smooth transitions, and responsive design.",
      technologies: ["React", "Next.js", "Framer Motion", "Sanity CMS"],
    },
    {
      title: "Corporate Elite",
      category: "Corporate",
      image: project3,
      description:
        "A sophisticated corporate website featuring dynamic content management, team profiles, and integrated contact solutions for a professional services firm.",
      technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl sm:text-6xl font-bold text-foreground mb-6">
              Our Portfolio
            </h1>
            <p className="font-secondary text-xl text-muted-foreground leading-relaxed">
              A curated selection of our finest work, showcasing our commitment to 
              excellence, elegance, and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                category={project.category}
                onClick={() => setSelectedProject(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-primary text-primary-foreground rounded-2xl p-10 sm:p-12">
            <div className="flex flex-col items-center text-center gap-6">
              <Quote className="text-gold" size={40} />
              <p className="font-heading text-xl sm:text-2xl leading-relaxed font-semibold">
                "Working with Zyra Digitals was an excellent experience. The attention to detail and premium quality exceeded my expectations. The new website perfectly represents my dental clinic and helps patients find and book appointments easily."
              </p>
              <p className="font-body text-gold italic font-medium">
                Chetan, Dentist
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <ProjectModal
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
          project={projects[selectedProject]}
        />
      )}

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Want to See Your Project Here?
          </h2>
          <p className="font-secondary text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something exceptional that showcases your brand.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
