import { Hero } from "@/components/Hero";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code, User, Briefcase, ShoppingCart } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import { FAQ } from "@/components/FAQ";
import { Helmet } from "react-helmet-async";
import { useState, useEffect, useRef } from "react";

const Home = () => {
  const [servicesVisible, setServicesVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const servicesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setServicesVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const ctaObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCtaVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) {
      servicesObserver.observe(servicesRef.current);
    }
    if (ctaRef.current) {
      ctaObserver.observe(ctaRef.current);
    }

    return () => {
      if (servicesRef.current) {
        servicesObserver.unobserve(servicesRef.current);
      }
      if (ctaRef.current) {
        ctaObserver.unobserve(ctaRef.current);
      }
    };
  }, []);

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
      answer: "The timeline depends on the complexity and scope of your project. A simple portfolio website typically takes 1-2 weeks, while more complex projects may take up to 2-4 weeks maximum. We'll provide a detailed timeline during our initial consultation."
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
      <Helmet>
        <title>Zyra Digitals | Premium Web Development Studio</title>
        <meta name="description" content="Zyra Digitals crafts premium, high-performance websites and digital experiences. Bespoke design, modern tech, and SEO-first builds for brands that care about quality. Founded by Mohan Prasath S." />
        <link rel="canonical" href="https://www.zyradigitals.info/" />
        <meta property="og:title" content="Zyra Digitals | Premium Web Development Studio" />
        <meta property="og:description" content="Premium, high-performance websites and digital experiences with bespoke design and SEO-first builds. Founded by Mohan Prasath S." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.zyradigitals.info/" />
        <meta property="og:image" content="https://www.zyradigitals.info/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.zyradigitals.info/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zyra Digitals",
          "url": "https://www.zyradigitals.info/",
          "logo": "https://www.zyradigitals.info/images/logo.jpg",
          "founder": {
            "@type": "Person",
            "name": "Mohan Prasath S"
          },
          "description": "Premium web development studio crafting elegant, high-performance digital experiences.",
          "sameAs": [
            "https://www.instagram.com/zyradigitals.co/",
            "https://www.linkedin.com/company/zyra-digitals/"
          ]
        })}</script>
      </Helmet>
      {/* Hero Section */}
      <Hero />

      {/* Services Preview */}
      <section 
        ref={servicesRef}
        className="py-20 bg-background"
      >
        <div className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-800 ease-out transform ${
          servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl sm:text-6xl font-bold text-foreground mb-4">
              Our Expertise
            </h2>
            <p className="font-secondary text-xl text-muted-foreground max-w-2xl mx-auto">
              Delivering premium digital solutions with precision and elegance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ease-out transform delay-${index * 100} ${
                  servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <ServiceCard {...service} index={index} />
              </div>
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
        questionFont="secondary"
      />

      {/* CTA Section */}
      <section 
        ref={ctaRef}
        className="py-20 bg-white text-black"
      >
        <div className={`container mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-800 ease-out transform ${
          ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Elevate Your
            <span className="block">Digital Presence?</span>
          </h2>
          <p className="font-secondary text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's collaborate to create something exceptional that sets you apart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-black text-black hover:bg-black hover:text-white px-8 py-3 rounded-lg transition-colors duration-200">
              <Link to="/contact#faq">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

