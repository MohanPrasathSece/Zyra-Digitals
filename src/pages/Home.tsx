import { Hero } from "@/components/Hero";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code, User, Briefcase, ShoppingCart } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import { FAQ } from "@/components/FAQ";

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

  // Featured FAQs for home page
  const homeFAQs = [
    {
      id: "faq-home-1",
      question: "What services do you offer?",
      answer: "We specialize in website development, personal portfolios, business websites, and e-commerce solutions. Our services include custom web development, responsive design, SEO optimization, and ongoing maintenance and support."
    },
    {
      id: "faq-home-2",
      question: "How long does it take to build a website?",
      answer: "The timeline depends on the complexity and scope of your project. A simple portfolio website typically takes 1-2 weeks, while a complex e-commerce site may take 4-8 weeks. We'll provide a detailed timeline during our initial consultation."
    },
    {
      id: "faq-home-3",
      question: "Do you provide ongoing support after launch?",
      answer: "Yes, we offer comprehensive post-launch support including bug fixes, security updates, content updates, and technical assistance. We have various maintenance packages to suit different needs and budgets."
    },
    {
      id: "faq-home-4",
      question: "What are your pricing options?",
      answer: "Our pricing varies based on project scope, complexity, and timeline. We offer competitive rates and flexible payment options. Contact us for a detailed quote tailored to your specific needs and budget."
    }
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

      {/* FAQ Section */}
      <FAQ 
        title="Common Questions"
        subtitle="Quick answers to help you get started with your project"
        faqs={homeFAQs}
        className="bg-gradient-to-br from-background via-primary/5 to-gold/5"
      />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-subheading text-5xl sm:text-6xl font-bold mb-6">
            Ready to Elevate Your Digital Presence?
          </h2>
          <p className="font-secondary text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something exceptional that sets you apart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button variant="ghost-gold" size="lg" asChild>
              <Link to="/contact#faq">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

