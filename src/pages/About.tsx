// About page - Brand Architects

import { Helmet } from "react-helmet-async";
import { AnimatedSection } from "@/components/AnimatedSection";
import { User, Target, Zap, Award, ArrowRight, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {

  const expertise = [
    {
      icon: Target,
      title: "Strategic Branding",
      description: "We craft brand strategies that resonate with your target audience and drive business growth."
    },
    {
      icon: Zap,
      title: "Web Development",
      description: "High-performance websites that serve as the foundation of your digital presence."
    },
    {
      icon: User,
      title: "User Experience",
      description: "Intuitive designs that create meaningful connections between your brand and customers."
    },
    {
      icon: Award,
      title: "Digital Growth",
      description: "SEO and marketing strategies that ensure your brand gets discovered and remembered."
    },
  ];

  const achievements = [
    "Built 50+ high-performance websites",
    "Helped 30+ brands establish their digital presence",
    "Achieved 100% client satisfaction rate",
    "Specialized in brand-first development approach",
    "Expert in SEO and performance optimization",
    "Committed to ongoing support and growth",
  ];

  return (
    <div className="pt-20">
      <Helmet>
        <title>Brand Architects | Zyra Digitals</title>
        <meta name="description" content="More Than an Agency. We're Brand Architects. Zyra Digitals helps businesses evolve into powerful, recognizable brands through strategy, design, technology, and growth systems." />
        <link rel="canonical" href="https://www.zyradigitals.info/about" />
        <meta property="og:title" content="Brand Architects | Zyra Digitals" />
        <meta property="og:description" content="We believe a strong brand is not just how it looks — it's how it feels, functions, and performs across every digital touchpoint." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.zyradigitals.info/about" />
        <meta property="og:image" content="https://www.zyradigitals.info/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.zyradigitals.info/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "Zyra Digitals",
            "founder": {
              "@type": "Person",
              "name": "Mohan Prasath S"
            }
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.zyradigitals.info/" },
              { "@type": "ListItem", position: 2, name: "About", item: "https://www.zyradigitals.info/about" }
            ]
          }
        })}</script>
      </Helmet>
      {/* Hero Section - Full Screen Banner */}
      <AnimatedSection animation="fade-up" className="min-h-screen bg-background relative overflow-hidden">
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
                  <Star className="text-foreground" size={16} />
                  <span className="font-secondary text-sm text-foreground/80 font-medium">Brand Architects</span>
                </div>

                <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                  More Than an Agency.
                  <span className="block text-gold mt-2">We're</span> Brand Architects.
                </h1>

                <p className="font-secondary text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                  At Zyra Digitals, we believe a strong brand is not just how it looks — it's how it feels, functions, and performs across every digital touchpoint.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="gold" size="lg" asChild className="h-16 px-8 text-base">
                    <Link to="/contact" className="flex items-center gap-2">
                      Start Your Brand Journey
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="lg" asChild className="h-16 px-8 text-base border border-border">
                    <Link to="/portfolio">View Our Work</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Achievements Section */}
      <AnimatedSection animation="fade-up" className="py-20 bg-gradient-to-br from-secondary/30 to-gold/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-5xl font-bold text-foreground mb-4">Our Achievements</h2>
              <p className="font-secondary text-lg text-muted-foreground">
                Building success stories one brand at a time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <AnimatedSection key={index} animation="slide-up" delay={index * 50}>
                  <div className="flex items-start gap-3 p-4 bg-background/50 backdrop-blur border border-border rounded-lg">
                    <CheckCircle className="text-gold flex-shrink-0 mt-1" size={20} />
                    <span className="font-secondary text-foreground">{achievement}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Expertise Section */}
      <AnimatedSection animation="slide-up" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-5xl font-bold text-foreground mb-4">Our Expertise</h2>
              <p className="font-secondary text-lg text-muted-foreground max-w-2xl mx-auto">
                We combine strategic thinking with technical excellence to build brands that scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {expertise.map((item, index) => {
                const Icon = item.icon;
                return (
                  <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                    <div className="group p-6 bg-secondary/30 border border-border rounded-xl hover:bg-secondary/50 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:scale-[1.02]">
                      <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                        <Icon className="text-gold" size={24} />
                      </div>
                      <h3 className="font-subheading text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="font-secondary text-base text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Our Process Section */}
      <AnimatedSection animation="slide-up" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="font-secondary text-lg text-muted-foreground">How we transform your vision into reality</p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Step 1 - Left */}
            <AnimatedSection animation="slide-left" delay={0}>
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
                  <div className="md:w-1/3">
                    <div className="relative">
                      {/* Outer container with hole */}
                      <div className="bg-gray-100 rounded-2xl p-1 relative">
                        {/* Hole at top center */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center">
                          <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                        </div>
                        {/* Perfect square card */}
                        <div className="md:transform md:-rotate-3 transition-all duration-500 ease-premium hover:rotate-0 hover:scale-[1.02] hover:z-10 cursor-default">
                          <div className="bg-white border-2 border-gray-300 rounded-lg p-4 shadow-md min-h-[200px] hover:shadow-xl transition-all duration-500 ease-premium">
                            <div className="flex flex-col h-full">
                              <div className="flex items-start justify-start mb-4">
                                <h3 className="font-heading font-bold text-foreground" style={{ fontSize: '24px' }}>Design Idea</h3>
                                <div className="w-6 h-6 bg-gray-800 rounded-lg flex items-center justify-center text-white font-bold text-sm ml-3">
                                  1
                                </div>
                              </div>
                              <div className="flex-1 flex items-start pb-0">
                                <p className="font-secondary text-muted-foreground leading-tight text-justify mb-0" style={{ fontSize: '16px' }}>
                                  We craft brand strategies that resonate with your target audience and drive business growth through comprehensive brand identity analysis, audience research, competitor insights, strategic positioning, and visual development.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3"></div>
                </div>
                {/* Dotted line from hole */}
                <div className="hidden md:block relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-0">
                    <svg className="w-64 h-24" viewBox="0 0 200 80">
                      <path d="M 0 40 Q 100 0 200 40" stroke="#6B7280" strokeWidth="3" fill="none" strokeDasharray="6,6" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Mobile Dotted Line Connection */}
            <div className="md:hidden flex justify-center my-0">
              <svg className="w-8 h-28" viewBox="0 0 32 112">
                <path d="M 16 0 Q 8 56 16 112" stroke="#6B7280" strokeWidth="2" strokeDasharray="4,4" strokeLinecap="round" fill="none" />
              </svg>
            </div>

            {/* Step 2 - Right */}
            <AnimatedSection animation="slide-right" delay={100} className="mt-8 md:mt-0">
              <div className="relative">
                <div className="flex flex-col md:flex-row-reverse items-center gap-0">
                  <div className="md:w-1/3">
                    <div className="relative">
                      <div className="bg-gray-100 rounded-2xl p-1 relative">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center">
                          <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                        </div>
                        <div className="md:transform md:rotate-3 transition-all duration-500 ease-premium hover:rotate-0 hover:scale-[1.02] hover:z-10 cursor-default">
                          <div className="bg-white border-2 border-gray-300 rounded-lg p-4 shadow-md min-h-[200px] hover:shadow-xl transition-all duration-500 ease-premium">
                            <div className="flex flex-col h-full">
                              <div className="flex items-start justify-start mb-4">
                                <h3 className="font-heading font-bold text-foreground" style={{ fontSize: '24px' }}>Development</h3>
                                <div className="w-6 h-6 bg-gray-800 rounded-lg flex items-center justify-center text-white font-bold text-sm ml-3">
                                  2
                                </div>
                              </div>
                              <div className="flex-1 flex items-start pb-0">
                                <p className="font-secondary text-muted-foreground leading-tight text-justify mb-0" style={{ fontSize: '16px' }}>
                                  High-performance websites that serve as the foundation of your digital presence with custom designs, responsive layouts, e-commerce solutions, CMS integration, and SEO optimization for maximum impact.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3"></div>
                </div>
                <div className="hidden md:block relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-0">
                    <svg className="w-64 h-24" viewBox="0 0 200 80">
                      <path d="M 200 40 Q 100 80 0 40" stroke="#6B7280" strokeWidth="3" fill="none" strokeDasharray="6,6" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Mobile Dotted Line Connection */}
            <div className="md:hidden flex justify-center my-0">
              <svg className="w-8 h-28" viewBox="0 0 32 112">
                <path d="M 16 0 Q 24 56 16 112" stroke="#6B7280" strokeWidth="2" strokeDasharray="4,4" strokeLinecap="round" fill="none" />
              </svg>
            </div>

            {/* Step 3 - Left */}
            <AnimatedSection animation="slide-left" delay={200} className="mt-8 md:mt-0">
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
                  <div className="md:w-1/3">
                    <div className="relative">
                      <div className="bg-gray-100 rounded-2xl p-1 relative">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center">
                          <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                        </div>
                        <div className="md:transform md:-rotate-2 transition-all duration-500 ease-premium hover:rotate-0 hover:scale-[1.02] hover:z-10 cursor-default">
                          <div className="bg-white border-2 border-gray-300 rounded-lg p-4 shadow-md min-h-[200px] hover:shadow-xl transition-all duration-500 ease-premium">
                            <div className="flex flex-col h-full">
                              <div className="flex items-start justify-start mb-4">
                                <h3 className="font-heading font-bold text-foreground" style={{ fontSize: '24px' }}>Testing</h3>
                                <div className="w-6 h-6 bg-gray-800 rounded-lg flex items-center justify-center text-white font-bold text-sm ml-3">
                                  3
                                </div>
                              </div>
                              <div className="flex-1 flex items-start pb-0">
                                <p className="font-secondary text-muted-foreground leading-tight text-justify mb-0" style={{ fontSize: '16px' }}>
                                  Intuitive designs that create meaningful connections between your brand and customers through strategic social media presence, compelling content marketing, targeted email campaigns, effective PPC advertising, and comprehensive analytics tracking.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3"></div>
                </div>
                <div className="hidden md:block relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-0">
                    <svg className="w-64 h-24" viewBox="0 0 200 80">
                      <path d="M 0 40 Q 100 0 200 40" stroke="#6B7280" strokeWidth="3" fill="none" strokeDasharray="6,6" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Mobile Dotted Line Connection */}
            <div className="md:hidden flex justify-center my-0">
              <svg className="w-8 h-28" viewBox="0 0 32 112">
                <path d="M 16 0 Q 8 56 16 112" stroke="#6B7280" strokeWidth="2" strokeDasharray="4,4" strokeLinecap="round" fill="none" />
              </svg>
            </div>

            {/* Step 4 - Right */}
            <AnimatedSection animation="slide-right" delay={300} className="mt-8 md:mt-0">
              <div className="relative">
                <div className="flex flex-col md:flex-row-reverse items-center gap-0">
                  <div className="md:w-1/3">
                    <div className="relative">
                      <div className="bg-gray-100 rounded-2xl p-1 relative">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center">
                          <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                        </div>
                        <div className="md:transform md:rotate-2 transition-all duration-500 ease-premium hover:rotate-0 hover:scale-[1.02] hover:z-10 cursor-default">
                          <div className="bg-white border-2 border-gray-300 rounded-lg p-4 shadow-md min-h-[200px] hover:shadow-xl transition-all duration-500 ease-premium">
                            <div className="flex flex-col h-full">
                              <div className="flex items-start justify-start mb-4">
                                <h3 className="font-heading font-bold text-foreground" style={{ fontSize: '24px' }}>Launch</h3>
                                <div className="w-6 h-6 bg-gray-800 rounded-lg flex items-center justify-center text-white font-bold text-sm ml-3">
                                  4
                                </div>
                              </div>
                              <div className="flex-1 flex items-start pb-0">
                                <p className="font-secondary text-muted-foreground leading-tight text-justify mb-0" style={{ fontSize: '16px' }}>
                                  SEO and marketing strategies that ensure your brand gets discovered and remembered through continuous performance monitoring, conversion optimization, brand consistency maintenance, ongoing support, and strategic refinement for sustained growth.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3"></div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection animation="slide-up" className="py-20 bg-gradient-to-br from-gold/10 to-gold/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-foreground mb-6">
              Ready to Build Your Brand?
            </h2>
            <p className="font-secondary text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create a brand that people remember. Your journey starts here.
            </p>
            <Button variant="gold" size="lg" asChild className="h-16 px-8">
              <Link to="/contact" className="flex items-center gap-2">
                Start Your Brand Journey
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default About;
