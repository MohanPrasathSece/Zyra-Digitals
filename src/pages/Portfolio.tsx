import { useState, useEffect, useRef } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import { Quote, ChevronRight, ChevronLeft, ExternalLink, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";

const Portfolio = () => {
  useScrollToTop();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const testimonials = [
    {
      quote:
        "AmzCoz needed a partner who could show our Amazon growth story with proof and polish. Zyra Digitals nailed the messaging and gave us a lead magnet that converts.",
      author: "Priya Deshpande",
      role: "Co-Founder, AmzCoz",
      avatarInitial: "P",
    },
    {
      quote:
        "Our endodontic practice relies on trust. The Precision Root Canal website Mohan crafted reflects our clinical precision and makes booking effortless for London patients.",
      author: "Dr. Rohan Kulkarni",
      role: "Specialist Endodontist, Precision Root Canal Therapy",
      avatarInitial: "R",
    },
    {
      quote:
        "Hamburg Homeopathy Clinic now feels as warm online as it does in person. The storytelling, timelines, and team section capture our ethos beautifully.",
      author: "Meera Iyer",
      role: "Founder, Hamburg Homeopathy Clinic",
      avatarInitial: "M",
    },
    {
      quote:
        "Elevaré needed a digital space that matched our leadership labs. Zyra Digitals translated our narrative into a bold WordPress experience that wins corporate mandates.",
      author: "Sanjana Mehta",
      role: "Principal Consultant, Elevaré Leadership Consulting",
      avatarInitial: "S",
    },
    {
      quote:
        "$404X is meant to feel like a glitchy adventure. Mohan's team delivered an immersive React experience that our community can't stop talking about.",
      author: "Varun Rao",
      role: "Creative Producer, 404X Collective",
      avatarInitial: "V",
    },
  ];

  const [tIndex, setTIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const projects = [
    {
      title: "Precision Root Canal Therapy & Hygiene",
      category: "Healthcare",
      image: "/images/Portfolio_projects/precision.png",
      description:
        "A specialist dental clinic website for a London-based endodontic practice, showcasing expertise, advanced technology, and streamlined appointment booking.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://precision-rootcanal.vercel.app/index.html",
    },
    {
      title: "Lumi & Co.",
      category: "Luxury Jewelry",
      image: "/images/Portfolio_projects/lumi.png",
      description:
        "A luxury jewelry brand website highlighting signature collections with an elegant shopping experience.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://lumi-co.vercel.app",
    },
    {
      title: "AmzCoz",
      category: "E-Commerce Growth",
      image: "/images/Portfolio_projects/amzcoz.png",
      description:
        "An Amazon growth and e-commerce success partner offering end-to-end account management, advertising, and strategic support for brands across the globe.",
      technologies: ["ReactJS", "Tailwind CSS"],
      link: "https://amzcoz.com",
    },
    {
      title: "Hamburg Homeopathy Clinic",
      category: "Healthcare",
      image: "/images/Portfolio_projects/hamburg.png",
      description:
        "A holistic homeopathy clinic experience highlighting mission, milestones, practitioner bios, and patient success to build trust and drive appointment bookings.",
      technologies: ["WordPress", "Elementor"],
      link: "https://hamburghomeopathy.com",
    },
        {
      title: "Elevaré Leadership Consulting",
      category: "Consulting",
      image: "/images/Portfolio_projects/elevare.png",
      description:
        "A leadership consulting site built with WordPress and Elementor, designed to showcase transformative programs, focus areas, and consultant profiles with strong calls to action.",
      technologies: ["WordPress", "Elementor"],
      link: "https://elevare-leadership.com",
    },
    {
      title: "Error 404",
      category: "Web Experience",
      image: "/images/Portfolio_projects/error-404.png",
      description:
        "A playful, glitch-inspired landing experience for the $404X token, packed with terminal-style effects, interactive puzzles, and immersive storytelling.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://www.lostinthe404.world",
    },

  ];

  useEffect(() => {
    const id = setInterval(() => {
      setTIndex((i) => (i + 1) % testimonials.length);
    }, 11000);
    return () => clearInterval(id);
  }, [testimonials.length]);


  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Scroll speed multiplier
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="pt-20">
      <Helmet>
        <title>Portfolio | Zyra Digitals</title>
        <meta name="description" content="Explore selected projects by Zyra Digitals showcasing premium design, performance, and elegant user experiences." />
        <link rel="canonical" href="https://www.zyradigitals.info/portfolio" />
        <meta property="og:title" content="Portfolio | Zyra Digitals" />
        <meta property="og:description" content="A curated selection of work that demonstrates our commitment to quality and performance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.zyradigitals.info/portfolio" />
        <meta property="og:image" content="https://www.zyradigitals.info/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.zyradigitals.info/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.zyradigitals.info/" },
            { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://www.zyradigitals.info/portfolio" }
          ]
        })}</script>
      </Helmet>
      {/* Hero Section - Full Screen Banner */}
      <AnimatedSection animation="fade-up" className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-gold/10 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="min-h-screen flex items-start justify-center pt-20">
            <div className="max-w-7xl mx-auto w-full">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-secondary/50 rounded-full px-4 py-2 mb-6">
                  <ExternalLink className="text-foreground" size={16} />
                  <span className="font-secondary text-sm text-foreground/80 font-medium">Our Portfolio</span>
                </div>
                
                <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                  Our Work
                  <span className="block mt-2"><span className="text-gold">Speaks</span> For Itself</span>
                </h1>
                
                <p className="font-secondary text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                  Explore our latest projects and see how we've helped businesses transform their digital presence with exceptional design and development.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="gold" size="lg" asChild className="h-16 px-8 text-base">
                    <Link to="/contact" className="flex items-center gap-2">
                      Start Your Project
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="lg" asChild className="h-16 px-8 text-base border border-border">
                    <a href="#projects">View Projects</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Horizontal Scroll */}
      <AnimatedSection animation="slide-up" className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto overflow-y-hidden snap-x snap-mandatory pb-2 scroll-smooth [scrollbar-gutter:stable] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:bg-border"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {projects.map((project, index) => (
              <div key={index} className="min-w-[280px] sm:min-w-[340px] lg:min-w-[380px] snap-start">
                <ProjectCard
                  image={project.image}
                  title={project.title}
                  category={project.category}
                  onClick={() => setSelectedProject(index)}
                  action={
                    project.link && (
                      <Button
                        asChild
                        variant="gold"
                        size="sm"
                        className="mt-3 inline-flex w-full items-center justify-center gap-1 rounded-full px-5 py-0.5 text-sm font-semibold shadow-md transition hover:shadow-lg sm:w-auto"
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1"
                        >
                          View Live Site
                          <ExternalLink size={16} className="transition group-hover:translate-x-0.5" />
                        </a>
                      </Button>
                    )
                  }
                />
              </div>
            ))}
          </div>

          {/* Bottom navigation controls */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              type="button"
              onClick={() => {
                const el = scrollRef.current;
                if (!el) return;
                el.scrollBy({ left: -el.clientWidth, behavior: "smooth" });
              }}
              aria-label="Previous projects"
              className="inline-flex items-center justify-center bg-card/90 backdrop-blur border border-border rounded-full p-2 shadow-md hover:bg-card transition-all duration-200 hover:scale-105"
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
              aria-label="Next projects"
              className="inline-flex items-center justify-center bg-card/90 backdrop-blur border border-border rounded-full p-2 shadow-md hover:bg-card transition-all duration-200 hover:scale-105"
            >
              <ChevronRight className="text-foreground" size={20} />
            </button>
          </div>
        </div>
        </div>
      </AnimatedSection>

      {/* Testimonial Section */}
      <AnimatedSection animation="fade-up" className="py-16 bg-secondary/30">
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
      </AnimatedSection>

      {/* Project Modal */}
      {selectedProject !== null && (
        <ProjectModal
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
          project={projects[selectedProject]}
        />
      )}

      {/* CTA Section */}
      <AnimatedSection animation="slide-up" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Want to See Your Project Here?
          </h2>
          <p className="font-secondary text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something exceptional that showcases your brand.
          </p>
          <Button variant="gold" size="lg" asChild className="h-16 px-8">
            <Link to="/contact" className="flex items-center gap-2">
              Start Your Project
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Portfolio;
