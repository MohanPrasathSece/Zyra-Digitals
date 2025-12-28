import { useState, useEffect, useRef } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import { Quote, ChevronRight, ChevronLeft, ExternalLink, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Portfolio = (): JSX.Element => {
  useScrollToTop();
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
      images: ["/images/Portfolio_projects/precision.png"], // Added gallery support
      description:
        "A specialist dental clinic website for a London-based endodontic practice, showcasing expertise, advanced technology, and streamlined appointment booking.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://precision-rootcanal.vercel.app/index.html",
      color: "#f8f9fa"
    },
    {
      title: "Lumi & Co.",
      category: "Luxury Jewelry",
      image: "/images/Portfolio_projects/lumi.png",
      images: ["/images/Portfolio_projects/lumi.png"],
      description:
        "A luxury jewelry brand website highlighting signature collections with an elegant shopping experience.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://lumi-co.vercel.app",
      color: "#fffafa"
    },
    {
      title: "AmzCoz",
      category: "E-Commerce Growth",
      image: "/images/Portfolio_projects/amzcoz.png",
      images: ["/images/Portfolio_projects/amzcoz.png"],
      description:
        "An Amazon growth and e-commerce success partner offering end-to-end account management, advertising, and strategic support for brands across the globe.",
      technologies: ["ReactJS", "Tailwind CSS"],
      link: "https://amzcoz.com",
      color: "#f5f5f5"
    },
    {
      title: "Hamburg Homeopathy Clinic",
      category: "Healthcare",
      image: "/images/Portfolio_projects/hamburg.png",
      images: ["/images/Portfolio_projects/hamburg.png"],
      description:
        "A holistic homeopathy clinic experience highlighting mission, milestones, practitioner bios, and patient success to build trust and drive appointment bookings.",
      technologies: ["WordPress", "Elementor"],
      link: "https://hamburghomeopathy.com",
      color: "#fafafa"
    },
    {
      title: "Elevaré",
      category: "Consulting",
      image: "/images/Portfolio_projects/elevare.png",
      images: ["/images/Portfolio_projects/elevare.png"],
      description:
        "A leadership consulting site built with WordPress and Elementor, designed to showcase transformative programs, focus areas, and consultant profiles with strong calls to action.",
      technologies: ["WordPress", "Elementor"],
      link: "https://elevare-leadership.com",
      color: "#f8f8f8"
    },
    {
      title: "Error 404",
      category: "Web Experience",
      image: "/images/Portfolio_projects/error-404.png",
      images: ["/images/Portfolio_projects/error-404.png"],
      description:
        "A playful, glitch-inspired landing experience for the $404X token, packed with terminal-style effects, interactive puzzles, and immersive storytelling.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://www.lostinthe404.world",
      color: "#111111"
    },
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setTIndex((i) => (i + 1) % testimonials.length);
    }, 11000);
    return () => clearInterval(id);
  }, [testimonials.length]);

  const handleTouchEnd = () => {
    // No-op for now
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
      {/* Hero Section - Reverted to Full Screen Banner */}
      <AnimatedSection animation="fade-up" className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-gold/10 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>

        {/* Floating Elements - Restored Gold */}
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

      {/* Overlapping Projects List */}
      <div id="projects" className="relative px-4 sm:px-6 lg:px-8 py-20 pb-40">
        <div className="max-w-7xl mx-auto space-y-[20vh]">
          {projects.map((project, index) => (
            <div
              key={index}
              className="sticky top-[15vh] w-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="group relative bg-[#0a0a0a] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row min-h-[600px]">
                  {/* Project Image Box - Big and Modern */}
                  <div className="lg:w-2/3 relative overflow-hidden bg-[#151515]">
                    {/* Main Image */}
                    <div className="h-full w-full min-h-[400px] lg:min-h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Image Overlays / Badges */}
                    <div className="absolute top-8 left-8">
                      <div className="px-4 py-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-white/80 text-xs font-secondary tracking-widest uppercase">
                        {project.category}
                      </div>
                    </div>

                    {/* Multiple Image Preview Placeholders (Hidden until user adds more) */}
                    <div className="absolute bottom-8 right-8 flex gap-3">
                      {project.images?.map((_, i) => (
                        <div key={i} className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center text-[10px] text-white/50">
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Details Box - Outside the Image but inside the sticky card */}
                  <div className="lg:w-1/3 p-8 lg:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10">
                    <div>
                      <div className="mb-8">
                        <span className="text-primary font-secondary text-sm font-bold tracking-widest uppercase mb-4 block">
                          Project {index + 1}
                        </span>
                        <h2 className="font-heading text-3xl lg:text-4xl font-bold !text-white mb-6 transition-colors">
                          {project.title}
                        </h2>
                        <p className="font-secondary text-white/60 text-lg leading-relaxed mb-8">
                          {project.description}
                        </p>
                      </div>

                      <div className="space-y-6 mb-12">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-white/5 rounded-md text-xs font-mono text-white/40 border border-white/5">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      {project.link && (
                        <Button
                          asChild
                          variant="gold"
                          size="lg"
                          className="w-full h-14 rounded-xl shadow-xl hover:shadow-primary/20 transition-all duration-300"
                        >
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                            <span>Experience Launch</span>
                            <ExternalLink size={18} />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

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
