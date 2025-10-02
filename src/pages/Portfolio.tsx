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
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8 sm:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center border border-gold/20">
                  <Quote className="text-gold" size={24} />
                </div>
              </div>
              
              {/* Testimonial Content */}
              <blockquote className="font-heading text-lg sm:text-xl leading-relaxed text-foreground mb-6 font-medium text-center">
                "Zyra Digitals built a beautiful, fast website for our cafe. Online menu, gallery, and Google Maps integration made it easy for customers to discover us and visit. Sales and footfall at California Cafe have noticeably improved."
              </blockquote>
              
              {/* Author Section */}
              <div className="flex items-center justify-center gap-4 pt-4 border-t border-border/50">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center border border-gold/20">
                  <span className="font-heading text-base font-bold text-gold">M</span>
                </div>
                <div className="text-left">
                  <p className="font-subheading text-base font-semibold text-foreground">Martin</p>
                  <p className="font-secondary text-sm text-muted-foreground">Owner, California Cafe</p>
                </div>
              </div>
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
