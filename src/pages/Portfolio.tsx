import { useState, useEffect, useRef } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import { Quote, ChevronRight, ChevronLeft } from "lucide-react";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const testimonials = [
    {
      quote:
        "Amazing experience. The website delivery was fast, the quality was very good, and the pricing was affordable. Highly recommend!",
      author: "Debasish",
      role: "CEO and Founder, Sevak AI",
      avatarInitial: "D",
    },
    {
      quote:
        "Zyra Digitals built a beautiful, fast website for our cafe. Online menu, gallery, and Google Maps integration made it easy for customers to discover us and visit.",
      author: "Martin",
      role: "Owner, California Cafe",
      avatarInitial: "M",
    },
    {
      quote:
        "Zyra Digitals created an exceptional platform for Present Staffing. The site makes it seamless for recruiters to find employees, with modern features and smooth performance. Excellent work!",
      author: "Ashish",
      role: "Founder, Present Staffing",
      avatarInitial: "A",
    },
  ];

  const [tIndex, setTIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [projectIndex, setProjectIndex] = useState(0);

  const projects = [
    {
      title: "Sevak AI",
      category: "Portfolio",
      image: "https://i.ibb.co/7xdvzpWm/Untitled-design-1.png",
      description:
        "A portfolio website for a mobile app development company leveraging AI and ad-driven growth. Showcasing many clients and successful apps, built to highlight credibility, case studies, and services.",
      technologies: ["HTML", "CSS", "JavaScript"],
      scale: "scale-80",
    },
    {
      title: "Luxe Commerce",
      category: "E-Commerce",
      image: project1,
      description:
        "A premium e-commerce platform featuring custom product filtering, seamless checkout, and an elegant shopping experience. Built with performance and conversion in mind.",
      technologies: ["React", "Node.js", "Stripe", "Tailwind CSS"],
    },
    {
      title: "Present Staffing",
      category: "Recruitment",
      image: "https://i.ibb.co/Y4LL5j14/Untitled-design.png",
      description:
        "A platform for recruiters to find employees, featuring advanced search filters, candidate matching, and streamlined hiring processes. Built for efficiency and user experience.",
      technologies: ["React", "TypeScript", "Node.js"],
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

  useEffect(() => {
    const id = setInterval(() => {
      setTIndex((i) => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(id);
  }, [testimonials.length]);

  useEffect(() => {
    const id = setInterval(() => {
      setProjectIndex((i) => (i + 1) % projects.length);
    }, 5000);
    return () => clearInterval(id);
  }, [projects.length]);

  useEffect(() => {
    if (scrollRef.current && projectIndex > 0) {
      const cardWidth = 380; // lg:min-w-[380px] + gap-6 (24px) = ~404px, but using 380 for safety
      scrollRef.current.scrollTo({
        left: projectIndex * cardWidth,
        behavior: "smooth"
      });
    }
  }, [projectIndex]);

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

      {/* Projects Horizontal Scroll */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                const el = scrollRef.current;
                if (!el) return;
                el.scrollBy({ left: -el.clientWidth, behavior: "smooth" });
              }}
              aria-label="Scroll left"
              className="hidden md:flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-card/90 backdrop-blur border border-border rounded-full p-2 shadow-lg hover:bg-card transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="text-foreground" size={20} />
            </button>

            <button
              type="button"
              onClick={() => {
                const el = scrollRef.current;
                if (!el) return;
                el.scrollBy({ left: el.clientWidth, behavior: "smooth" });
              }}
              aria-label="Scroll right"
              className="hidden md:flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-card/90 backdrop-blur border border-border rounded-full p-2 shadow-lg hover:bg-card transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="text-foreground" size={20} />
            </button>

            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 scroll-smooth [scrollbar-gutter:stable] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:bg-border"
            >
              {projects.map((project, index) => (
                <div key={index} className="min-w-[280px] sm:min-w-[340px] lg:min-w-[380px] snap-start">
                  <ProjectCard
                    image={project.image}
                    title={project.title}
                    category={project.category}
                    onClick={() => setSelectedProject(index)}
                  />
                </div>
              ))}
            </div>
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
              <blockquote className="font-heading text-lg sm:text-xl leading-relaxed text-foreground mb-6 font-medium text-center transition-opacity duration-500">
                "{testimonials[tIndex].quote}"
              </blockquote>
              
              {/* Author Section */}
              <div className="flex items-center justify-center gap-4 pt-4 border-t border-border/50">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center border border-gold/20">
                  <span className="font-heading text-base font-bold text-gold">{testimonials[tIndex].avatarInitial}</span>
                </div>
                <div className="text-left">
                  <p className="font-subheading text-base font-semibold text-foreground">{testimonials[tIndex].author}</p>
                  <p className="font-secondary text-sm text-muted-foreground">{testimonials[tIndex].role}</p>
                </div>
              </div>
              {/* Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-2 w-2 rounded-full transition-all ${i === tIndex ? "bg-gold w-4" : "bg-border"}`}
                  />
                ))}
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
