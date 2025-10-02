import { Hero } from "@/components/Hero";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code, User, Briefcase, ShoppingCart } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";

const Home = () => {
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
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-subheading text-5xl sm:text-6xl font-bold text-foreground mb-4">
              Our Expertise
            </h2>
            <p className="font-secondary text-xl text-muted-foreground max-w-2xl mx-auto">
              Delivering premium digital solutions with precision and elegance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Button variant="ghost-gold" size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-subheading text-5xl sm:text-6xl font-bold mb-6">
            Ready to Elevate Your Digital Presence?
          </h2>
          <p className="font-secondary text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something exceptional that sets you apart.
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;

