import { Code, User, Briefcase, ShoppingCart, Search, Server, RefreshCw, Bot, CheckCircle, ArrowRight, Zap, Shield, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const coreServices = [
    {
      icon: Code,
      title: "Website Development",
      description: "Custom websites built with modern technologies, responsive design, and clean code architecture.",
      features: ["React/Next.js", "Responsive Design", "Performance Optimized", "SEO Ready"],
    },
    {
      icon: User,
      title: "Personal Portfolios",
      description: "Showcase your work with elegant, minimal portfolios that highlight your unique brand.",
      features: ["Custom Design", "Project Galleries", "Contact Forms", "Mobile Optimized"],
    },
    {
      icon: Briefcase,
      title: "Business Websites",
      description: "Professional corporate sites that build trust and convert visitors into customers.",
      features: ["Professional Design", "CMS Integration", "Analytics Setup", "Lead Generation"],
    },
    {
      icon: ShoppingCart,
      title: "E‑commerce Websites",
      description: "Complete online stores with secure payments, inventory management, and conversion optimization.",
      features: ["Payment Integration", "Product Management", "Order Tracking", "Mobile Commerce"],
    }
  ];

  const additionalServices = [
    { icon: Search, title: "SEO Optimization", description: "Improve search rankings with technical SEO and content optimization." },
    { icon: Server, title: "Hosting & Maintenance", description: "Reliable hosting setup and ongoing maintenance. Free SSL certificate included." },
    { icon: RefreshCw, title: "Website Redesign", description: "Modernize existing websites with fresh design and improved functionality." },
    { icon: Bot, title: "AI Integration", description: "Add intelligent features like chatbots and automated workflows." }
  ];

  const processSteps = [
    { step: "01", title: "Discovery", description: "Understanding your goals, audience, and requirements through detailed consultation." },
    { step: "02", title: "Strategy", description: "Creating a comprehensive plan including design direction and technical approach." },
    { step: "03", title: "Design", description: "Crafting beautiful, user-centered designs that align with your brand identity." },
    { step: "04", title: "Development", description: "Building your website with clean code, best practices, and thorough testing." },
    { step: "05", title: "Launch", description: "Deploying your site and providing training for content management." }
  ];

  const whatsappHref = `https://wa.me/9025421149?text=${encodeURIComponent("Hi, I'm interested in your web development services. Can we discuss my project?")}`;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background to-secondary/30">
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
      </section>

      {/* Core Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-foreground mb-4">Core Services</h2>
            <p className="font-secondary text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions designed to meet your unique business needs and goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group relative rounded-2xl border border-border bg-card p-8 ring-1 ring-transparent transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:border-foreground/30 hover:ring-foreground/15 overflow-hidden">
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="inline-flex items-center justify-center rounded-2xl border-2 border-border w-16 h-16 bg-background transition-all duration-300 group-hover:border-foreground/40 group-hover:bg-foreground/5 group-hover:scale-110">
                        <Icon size={30} strokeWidth={1.75} className="text-foreground transition-all duration-300 group-hover:text-foreground group-hover:scale-110" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-subheading text-2xl font-bold text-card-foreground transition-colors duration-300 group-hover:text-foreground">{service.title}</h3>
                      </div>
                    </div>
                    
                    <p className="font-secondary text-base text-muted-foreground leading-relaxed mb-6 transition-colors duration-300 group-hover:text-foreground/80">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 group/feature">
                          <CheckCircle size={18} className="text-foreground/50 transition-colors group-hover:text-foreground/70" />
                          <span className="font-secondary text-sm text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-4 border-t border-border/50 flex items-center justify-end">
                      <Button variant="ghost" size="sm" asChild className="group-hover:bg-foreground/5">
                        <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                          Request Quote
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">Additional Services</h2>
            <p className="font-secondary text-lg text-muted-foreground">
              Enhance your website with these specialized services and ongoing support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group rounded-xl border border-border bg-background p-6 ring-1 ring-transparent transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-foreground/20 hover:ring-foreground/10">
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center rounded-lg border border-border w-12 h-12 bg-secondary transition-colors group-hover:border-foreground/30 group-hover:bg-foreground/5">
                      <Icon size={24} strokeWidth={1.75} className="text-foreground transition-colors group-hover:text-foreground" />
                    </div>
                  </div>
                  <h3 className="font-subheading text-lg font-semibold text-foreground mb-2 transition-colors duration-200 group-hover:text-foreground">{service.title}</h3>
                  <p className="font-secondary text-sm text-muted-foreground leading-relaxed transition-colors duration-200 group-hover:text-foreground/80">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-8">Why Choose Zyra Digitals?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center rounded-full bg-background border border-border w-16 h-16 mb-4">
                  <Zap size={28} className="text-foreground" />
                </div>
                <h3 className="font-subheading text-xl font-semibold text-foreground mb-2">Fast Delivery</h3>
                <p className="font-secondary text-muted-foreground">Most projects completed within 2 weeks or less without compromising quality.</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center rounded-full bg-background border border-border w-16 h-16 mb-4">
                  <Palette size={28} className="text-foreground" />
                </div>
                <h3 className="font-subheading text-xl font-semibold text-foreground mb-2">Custom Design</h3>
                <p className="font-secondary text-muted-foreground">Every website is uniquely crafted to match your brand and vision.</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center rounded-full bg-background border border-border w-16 h-16 mb-4">
                  <Shield size={28} className="text-foreground" />
                </div>
                <h3 className="font-subheading text-xl font-semibold text-foreground mb-2">Ongoing Support</h3>
                <p className="font-secondary text-muted-foreground">30-day support included with maintenance packages available.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-5xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="font-secondary text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a website that drives real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="lg" asChild>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Start Your Project <ArrowRight size={18} />
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild className="text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10">
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
