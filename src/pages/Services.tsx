import { Code, User, Briefcase, ShoppingCart, Search, Server, RefreshCw, Bot } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Modern, responsive websites built with clean code and best practices.",
    },
    {
      icon: User,
      title: "Personal Portfolios",
      description: "Elegant, minimal portfolios to showcase your work and personal brand.",
    },
    {
      icon: Briefcase,
      title: "Business Websites",
      description: "Professional company sites that communicate credibility and drive leads.",
    },
    {
      icon: ShoppingCart,
      title: "E‑commerce Websites",
      description: "Conversion‑focused online stores with smooth UX and secure checkout.",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "On‑page SEO foundations to improve visibility and organic reach.",
    },
    {
      icon: Server,
      title: "Domain & Hosting",
      description: "Guidance and setup for domain, DNS, and reliable hosting environments.",
    },
    {
      icon: RefreshCw,
      title: "Website Redesign",
      description: "Refresh outdated sites with modern design and improved usability.",
    },
    {
      icon: Bot,
      title: "AI‑Integrated Websites",
      description: "Integrate AI features like chat, search, and automation into your site.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl sm:text-6xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="font-body text-xl text-muted-foreground leading-relaxed">
              Comprehensive web development solutions tailored to your unique needs, 
              delivered with precision and elegance.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Services (alternating image/text) */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {[
            {
              key: "business",
              title: "Business Websites",
              description:
                "Professional company sites that communicate credibility, highlight services, and generate qualified leads.",
              image: project1,
            },
            {
              key: "portfolio",
              title: "Personal Portfolios",
              description:
                "Elegant, minimal portfolios to showcase your work, case studies, and personal brand effectively.",
              image: project2,
            },
            {
              key: "ecommerce",
              title: "E‑commerce Websites",
              description:
                "Conversion‑focused online stores with smooth browsing, secure checkout, and intuitive product discovery.",
              image: project3,
            },
            {
              key: "ai",
              title: "AI‑Integrated Websites",
              description:
                "Bring intelligent features to your site – chatbots, smart search, content assistance, and automation.",
              image: project2,
            },
          ].map((item, idx) => (
            <div
              key={item.key}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${idx !== 0 ? "mt-12" : ""}`}
            >
              {/* Image left/right alternation */}
              <div className={idx % 2 === 0 ? "order-1" : "order-1 md:order-2"}>
                <div className="overflow-hidden rounded-xl border border-border bg-card">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className={idx % 2 === 0 ? "order-2" : "order-2 md:order-1"}>
                <h2 className="font-heading text-3xl font-bold mb-3">{item.title}</h2>
                <p className="font-body text-lg text-foreground/80">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Enhancements: Hosting, SEO, Redesign */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-2">Essential Enhancements</h2>
            <p className="font-body text-lg text-muted-foreground">Hosting, SEO, and Redesign to strengthen your foundation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
              icon: Search,
              title: "SEO Optimization",
              description: "On‑page structure, meta data, and performance tweaks for better visibility.",
            },{
              icon: Server,
              title: "Domain & Hosting",
              description: "Domain guidance, DNS setup, and reliable, secure hosting environments.",
            },{
              icon: RefreshCw,
              title: "Website Redesign",
              description: "Modernize look-and-feel, improve UX, and refresh content structure.",
            }].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="rounded-xl border border-border bg-secondary p-8 text-left">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md border border-border">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="font-body text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      

      

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something exceptional together.
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
