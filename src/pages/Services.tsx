import { Code, User, Briefcase, ShoppingCart, Search, Server, RefreshCw, Bot, CheckCircle, ArrowRight, Zap, Shield, Palette, TrendingUp, Bookmark, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { AnimatedSection } from "@/components/AnimatedSection";

const Services = () => {
  useScrollToTop();
  const coreServices = [
    {
      icon: Palette,
      title: "Brand Identity & Design",
      description: "We shape how your brand looks, feels, and communicates through strategic design and messaging.",
      features: ["Brand Positioning", "Logo & Visual Identity", "Brand Guidelines", "Tone of Voice"],
      price: "From $1,500",
    },
    {
      icon: Code,
      title: "Website Development",
      description: "Your website is where your brand comes alive. We build high-performance, conversion-focused websites.",
      features: ["High-Performance", "Conversion-Focused", "SEO-Ready Structure", "Scalable Architecture"],
      price: "From $2,000",
    },
    {
      icon: Briefcase,
      title: "UI/UX Design",
      description: "Intuitive, engaging experiences that feel natural and drive conversions for your business.",
      features: ["User Research", "Clean UI Design", "Conversion Layouts", "Brand Consistency"],
      price: "From $1,200",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Superior search engine optimization that elevates your brand's visibility and drives organic traffic.",
      features: ["Advanced SEO Strategy", "Technical SEO Audit", "Content Optimization", "Performance Analytics"],
      price: "From $1,000",
    },
    {
      icon: TrendingUp,
      title: "Digital Growth & Analytics",
      description: "Comprehensive digital ecosystem management for exponential brand growth and engagement.",
      features: ["Social Media Profiles", "Google Analytics Setup", "Search Console Management", "Growth Analytics"],
      price: "From $1,800",
    },
    {
      icon: Server,
      title: "Hosting & Maintenance",
      description: "We keep your brand running smoothly with reliable hosting and ongoing maintenance support.",
      features: ["Reliable Hosting", "Security Updates", "Performance Monitoring", "Technical Support"],
      price: "From $800",
    }
  ];

  const additionalServices = [
    { icon: Search, title: "Digital Products & Applications", description: "Technology that empowers your brand through custom web applications and business dashboards." },
    { icon: Server, title: "Ongoing Support & Scaling", description: "We grow with your brand through website maintenance, performance optimization, and feature updates." },
    { icon: RefreshCw, title: "Brand Evolution", description: "Modernize your brand experience with fresh design and improved digital functionality." },
    { icon: Bot, title: "Marketing Tools Integration", description: "Connect your brand with powerful marketing tools and customer touchpoints." }
  ];

  const processSteps = [
    { step: "01", title: "Discover", description: "We understand your business, audience, and goals to shape your brand strategy." },
    { step: "02", title: "Define", description: "We shape your brand strategy and digital direction for maximum impact." },
    { step: "03", title: "Design", description: "We craft visually powerful and user-friendly experiences that connect emotionally." },
    { step: "04", title: "Develop", description: "We bring ideas to life with clean, scalable code that powers your brand experience." },
    { step: "05", title: "Deliver & Grow", description: "We launch, optimize, and scale your digital presence for long-term success." }
  ];

  const whatsappHref = `https://wa.me/9025421149?text=${encodeURIComponent("Hi, I'm interested in your web development services. Can we discuss my project?")}`;

  return (
    <div className="pt-20">
      <Helmet>
        <title>Our Services | Zyra Digitals</title>
        <meta name="description" content="Everything Your Brand Needs to Grow. We offer website development, brand identity, UI/UX design, and SEO & digital growth services that build brands that people remember." />
        <link rel="canonical" href="https://www.zyradigitals.info/services" />
        <meta property="og:title" content="Our Services | Zyra Digitals" />
        <meta property="og:description" content="Full-service branding and digital transformation agency. We build brand experiences that scale through strategy, design, technology, and growth systems." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.zyradigitals.info/services" />
        <meta property="og:image" content="https://www.zyradigitals.info/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.zyradigitals.info/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.zyradigitals.info/" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://www.zyradigitals.info/services" }
          ]
        })}</script>
      </Helmet>
      {/* Hero Section */}
      <AnimatedSection animation="fade-up" className="py-24 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/50 rounded-full px-4 py-2 mb-6">
              <Zap size={16} className="text-foreground" />
              <span className="font-secondary text-sm text-foreground/80">Premium Web Development</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Services That <span className="text-gold">Transform</span> Ideas
            </h1>
            <p className="font-secondary text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
              From concept to launch, we create digital experiences that captivate your audience and drive real business results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Get Started <ArrowRight size={18} />
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Core Services - Modern Card Grid */}
      <AnimatedSection animation="slide-up" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gold/10 rounded-full px-4 py-2 mb-6">
              <Palette size={16} className="text-gold" />
              <span className="font-secondary text-sm text-gold font-medium">Our Expertise</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-foreground mb-4">Core Services</h2>
            <p className="font-secondary text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions designed to meet your unique business needs and goals.
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                  <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-2 border-gray-200/50 hover:border-gold/30 h-full flex flex-col">
                    {/* Icon Header */}
                    <div className="p-6 pb-4 flex-grow">
                      <div className="w-14 h-14 bg-gradient-to-br from-gold/20 to-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon size={28} className="text-gold" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="font-secondary text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {service.description}
                      </p>
                      
                      {/* Features */}
                      <div className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                            <span className="font-secondary text-xs text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Footer with button */}
                    <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100 mt-auto">
                      <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white group-hover:bg-gold group-hover:text-gray-900 transition-all duration-300" asChild>
                        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                          Get Started
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Additional Services - Minimal Grid */}
      <AnimatedSection animation="fade-up" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">Additional Services</h2>
            <p className="font-secondary text-lg text-muted-foreground">
              Enhance your website with these specialized services and ongoing support.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={index} animation="slide-up" delay={index * 100}>
                  <div 
                    className="group flex items-start gap-4 rounded-lg border border-border bg-background p-6 transition-all duration-200 hover:border-foreground/30 hover:shadow-md hover:bg-secondary/20"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-md bg-secondary border border-border flex items-center justify-center transition-colors group-hover:bg-foreground/5">
                      <Icon size={20} strokeWidth={1.75} className="text-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-subheading text-lg font-semibold text-foreground mb-1">{service.title}</h3>
                      <p className="font-secondary text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Us */}
      <AnimatedSection animation="slide-up" className="py-20 bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Zyra Digitals?</h2>
            <p className="font-secondary text-lg text-muted-foreground">Experience the difference with our unique approach</p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <AnimatedSection animation="fade-up" delay={0}>
                <div className="group relative bg-card border border-border rounded-xl p-8 hover:border-foreground/20 transition-all duration-300 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-foreground/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="inline-flex items-center justify-center rounded-full bg-foreground/10 border-2 border-foreground/20 w-16 h-16 mb-6 group-hover:border-foreground/40 transition-colors duration-300">
                      <Zap size={28} className="text-foreground" />
                    </div>
                    <h3 className="font-subheading text-xl font-semibold text-foreground mb-3">Fast Delivery</h3>
                    <p className="font-secondary text-muted-foreground mb-4">Most projects completed within 2 weeks or less without compromising quality.</p>
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <div className="w-2 h-2 bg-foreground/40 rounded-full"></div>
                      <span>Lightning Fast Process</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Card 2 */}
              <AnimatedSection animation="fade-up" delay={100}>
                <div className="group relative bg-card border border-border rounded-xl p-8 hover:border-foreground/20 transition-all duration-300 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-foreground/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="inline-flex items-center justify-center rounded-full bg-foreground/10 border-2 border-foreground/20 w-16 h-16 mb-6 group-hover:border-foreground/40 transition-colors duration-300">
                      <Palette size={28} className="text-foreground" />
                    </div>
                    <h3 className="font-subheading text-xl font-semibold text-foreground mb-3">Custom Design</h3>
                    <p className="font-secondary text-muted-foreground mb-4">Every website is uniquely crafted to match your brand and vision.</p>
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <div className="w-2 h-2 bg-foreground/40 rounded-full"></div>
                      <span>Tailored Solutions</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Card 3 */}
              <AnimatedSection animation="fade-up" delay={200}>
                <div className="group relative bg-card border border-border rounded-xl p-8 hover:border-foreground/20 transition-all duration-300 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-foreground/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="inline-flex items-center justify-center rounded-full bg-foreground/10 border-2 border-foreground/20 w-16 h-16 mb-6 group-hover:border-foreground/40 transition-colors duration-300">
                      <Shield size={28} className="text-foreground" />
                    </div>
                    <h3 className="font-subheading text-xl font-semibold text-foreground mb-3">Ongoing Support</h3>
                    <p className="font-secondary text-muted-foreground mb-4">30-day support included with maintenance packages available.</p>
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <div className="w-2 h-2 bg-foreground/40 rounded-full"></div>
                      <span>Reliable Assistance</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection animation="slide-up" className="py-20 bg-white text-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Ready to Transform Your
              <span className="block">Digital Presence?</span>
            </h2>
            <p className="font-secondary text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's discuss your project and create a website that drives real results for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Start Your Project <ArrowRight size={18} />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-black text-black hover:bg-black hover:text-white px-8 py-3 rounded-lg transition-colors duration-200">
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Services;
