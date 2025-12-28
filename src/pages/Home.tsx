import { Hero } from "@/components/Hero";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code, User, Briefcase, ShoppingCart } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import { FAQ } from "@/components/FAQ";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Typewriter } from "@/components/Typewriter";
import { Helmet } from "react-helmet-async";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { motion } from "framer-motion";
import { LogoCarousel } from "@/components/LogoCarousel";

const Home = () => {
  useScrollToTop();

  const services = [
    {
      icon: User,
      title: "Brand Identity & Design",
      description: "Strategic brand creation with visual identity, messaging, and design that connects emotionally.",
    },
    {
      icon: Code,
      title: "Website Development",
      description: "High-performance, conversion-focused websites built with clean code and modern technologies.",
    },
    {
      icon: Briefcase,
      title: "SEO & Hosting",
      description: "SEO optimization and reliable hosting solutions that ensure your brand performs and scales online.",
    },
    {
      icon: ShoppingCart,
      title: "Digital Growth",
      description: "Comprehensive digital strategies that drive traffic, conversions, and long-term brand growth.",
    },
  ];


  // Featured FAQs for home page
  const homeFAQs = [
    {
      id: "faq-home-1",
      question: "What services do you offer?",
      answer: "We offer comprehensive digital solutions: website development (our core), brand identity & design, SEO optimization, hosting solutions, and digital growth strategies. We create websites that perform and brands that connect."
    },
    {
      id: "faq-home-2",
      question: "How long does a typical project take?",
      answer: "Project timelines vary: websites typically take 2-4 weeks, brand identity 1-2 weeks, and full digital ecosystems 4-6 weeks. We provide detailed timelines during consultation based on your specific needs."
    },
    {
      id: "faq-home-3",
      question: "Do you provide ongoing support and hosting?",
      answer: "Yes, we offer comprehensive ongoing support including website maintenance, SEO optimization, reliable hosting, performance monitoring, and feature updates to ensure your digital presence continues to grow."
    },
    {
      id: "faq-home-4",
      question: "What makes your approach different?",
      answer: "We combine technical excellence with strategic thinking. We build high-performance websites and powerful brands that work together seamlessly, ensuring your digital presence is both technically sound and emotionally resonant."
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Zyra Digitals | Website Design, SEO, Hosting & Brand Creation</title>
        <meta name="description" content="Zyra Digitals builds high-performance websites, powerful brands, and growth systems. We specialize in web development, SEO, hosting, and strategic brand creation for businesses that want to stand out." />
        <link rel="canonical" href="https://www.zyradigitals.info/" />
        <meta property="og:title" content="Zyra Digitals | Website Design, SEO, Hosting & Brand Creation" />
        <meta property="og:description" content="We build exceptional websites, powerful brands, and growth systems. Specializing in web development, SEO optimization, hosting, and strategic brand creation." />
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
          "description": "Digital agency specializing in website development, SEO optimization, hosting solutions, and strategic brand creation for businesses that want to perform and stand out.",
          "sameAs": [
            "https://www.instagram.com/zyradigitals.co/",
            "https://www.linkedin.com/company/zyra-digitals/"
          ]
        })}</script>
      </Helmet>
      {/* Hero Section */}
      <Hero />
      <AnimatedSection animation="fade-up">
        <LogoCarousel />
      </AnimatedSection>

      {/* Services Preview */}
      <AnimatedSection animation="slide-up" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Everything Your Digital Presence Needs
            </h2>
            <p className="font-secondary text-lg sm:text-xl text-foreground max-w-2xl mx-auto">
              We build exceptional websites, powerful brands, and growth systems that work together.
            </p>
          </div>

          {/* Mobile: Simple Minimal Layout */}
          <div className="md:hidden space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <ServiceCard {...service} index={index} />
              </div>
            ))}
          </div>

          {/* Desktop: Animated Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={index * 100}
              >
                <ServiceCard {...service} index={index} />
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center">
            <Button variant="ghost-gold" size="lg" asChild>
              <Link to="/services">Explore Our Work</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* 3D Project Showcase Section */}
      <AnimatedSection animation="fade-up" className="py-20 bg-background relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-block mb-6"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-primary rounded-full animate-pulse" />
              </div>
            </motion.div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <p className="font-secondary text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our latest digital masterpieces that blend creativity with cutting-edge technology
            </p>
          </div>

          {/* Single Row 3D Project Cards - No Scroll */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "Leadership",
                image: "/images/Portfolio_projects/elevare.png",
                rotateY: -15,
                delay: 0
              },
              {
                title: "E-commerce",
                image: "/images/Portfolio_projects/amzcoz.png",
                rotateY: -5,
                delay: 0.1
              },
              {
                title: "Creative",
                image: "/images/Portfolio_projects/error-404.png",
                rotateY: 5,
                delay: 0.2
              },
              {
                title: "Healthcare",
                image: "/images/Portfolio_projects/hamburg.png",
                rotateY: 15,
                delay: 0.3
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, z: -100, rotateY: 45 }}
                whileInView={{ opacity: 1, z: 0, rotateY: project.rotateY }}
                viewport={{ amount: 0.5 }}
                transition={{
                  duration: 1,
                  delay: project.delay,
                  type: "spring",
                  stiffness: 80,
                  damping: 20
                }}
                className="relative"
                style={{
                  perspective: "1200px",
                  height: "400px"
                }}
              >
                {/* 3D Card Container - Always 3D */}
                <motion.div
                  className="relative w-full h-full rounded-3xl overflow-hidden cursor-pointer"
                  style={{
                    transform: `rotateY(${project.rotateY}deg) translateZ(50px)`,
                    transformStyle: "preserve-3d",
                    boxShadow: "0 35px 60px -15px rgba(0, 0, 0, 0.3)"
                  }}
                  whileHover={{
                    transform: `rotateY(${project.rotateY}deg) translateZ(60px) scale(1.02)`,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {/* Card Face */}
                  <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
                    <div
                      className="w-full h-full bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url('${project.image}')` }}
                    >
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    </div>
                  </div>

                  {/* 3D Side Faces */}
                  <div
                    className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-primary/20 to-primary/10"
                    style={{
                      right: "-32px",
                      transform: "rotateY(90deg) translateZ(16px)",
                      transformOrigin: "left center"
                    }}
                  />
                  <div
                    className="absolute top-0 bottom-0 w-8 bg-gradient-to-l from-primary/20 to-primary/10"
                    style={{
                      left: "-32px",
                      transform: "rotateY(-90deg) translateZ(16px)",
                      transformOrigin: "right center"
                    }}
                  />

                  {/* Simple text overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-heading text-2xl font-light text-white drop-shadow-lg">
                      {project.title}
                    </h3>
                  </div>

                  {/* Glass reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                </motion.div>

                {/* Floating particles around card */}
                <motion.div
                  className="absolute -top-3 -right-3 w-3 h-3 bg-primary rounded-full opacity-80"
                  animate={{
                    y: [-8, 8, -8],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.6,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -bottom-3 -left-3 w-2 h-2 bg-primary rounded-full opacity-60"
                  animate={{
                    y: [8, -8, 8],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.4,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button
              variant="gold"
              size="lg"
              asChild
              className="h-16 px-10 text-base shadow-2xl hover:shadow-gold/20 transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/portfolio" className="flex items-center gap-3">
                <span>View All Projects</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.div>
              </Link>
            </Button>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection animation="fade-up">
        <FAQ
          title={<Typewriter text="Common Questions" speed={80} />}
          subtitle="Quick answers to help you get started with your project"
          faqs={homeFAQs}
          className="bg-gradient-to-br from-background via-primary/5 to-gold/5"
          questionFont="secondary"
        />
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection animation="slide-up" className="py-20 bg-white text-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Build a Brand
            <span className="block">That Stands Out?</span>
          </h2>
          <p className="font-secondary text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's turn your vision into a brand that performs, scales, and lasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Start Your Brand Journey</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-black text-black hover:bg-black hover:text-white px-8 py-3 rounded-lg transition-colors duration-200">
              <Link to="/portfolio">Explore Our Work</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;

