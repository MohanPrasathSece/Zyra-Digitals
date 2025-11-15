// About page reworked to match the requested layout (Story + Values + Approach)

import { Helmet } from "react-helmet-async";

const About = () => {
  const values = [
    {
      title: "Premium Quality",
      description: "Every project is crafted with meticulous attention to detail and the highest standards of excellence.",
    },
    {
      title: "Minimalistic Design",
      description: "We believe in the power of simplicity – creating elegant solutions that focus on what truly matters.",
    },
    {
      title: "Client Partnership",
      description: "Your success is our success. We work closely with you to understand and exceed your expectations.",
    },
    {
      title: "Innovation",
      description: "Staying ahead of trends and technology to deliver cutting‑edge digital experiences.",
    },
  ];

  return (
    <div className="pt-20">
      <Helmet>
        <title>About | Zyra Digitals</title>
        <meta name="description" content="Boutique web development studio crafting elegant, high-performance digital experiences with precision and care." />
        <link rel="canonical" href="https://www.zyradigitals.info/about" />
        <meta property="og:title" content="About | Zyra Digitals" />
        <meta property="og:description" content="Premium digital craftsmanship: our story, values, and approach to building exceptional websites." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.zyradigitals.info/about" />
        <meta property="og:image" content="https://www.zyradigitals.info/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.zyradigitals.info/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.zyradigitals.info/" },
            { "@type": "ListItem", position: 2, name: "About", item: "https://www.zyradigitals.info/about" }
          ]
        })}</script>
      </Helmet>
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About Zyra Digitals
            </h1>
            <p className="font-secondary text-base sm:text-lg text-muted-foreground leading-relaxed">
              A boutique web development studio dedicated to crafting premium digital experiences 
              with a focus on elegance, performance, and exclusivity.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section (two columns with feature card) */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div>
              <h2 className="font-subheading text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-6 font-body text-sm sm:text-base text-foreground/80 leading-relaxed">
                <p>
                  Zyra Digitals was born from a passion for creating digital experiences that embody sophistication and elegance. As a boutique web development studio, we craft bespoke solutions that reflect the premium nature of our clients’ brands.
                </p>
                <p>
                  Our approach combines minimalistic design principles with modern technology, ensuring every project looks exceptional and performs flawlessly across devices.
                </p>
                <p>
                  Working as a dedicated freelancer, I bring a personal touch to every project: direct communication, rapid iteration, and a deep understanding of your unique requirements and vision.
                </p>
              </div>
            </div>
            <div>
              <div className="group h-full rounded-2xl bg-background border border-border p-10 text-center flex flex-col items-center justify-center ring-1 ring-transparent transition-all duration-200 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:shadow-xl hover:bg-secondary/40 hover:border-foreground/20 hover:ring-foreground/10">
                <div className="w-40 h-40 rounded-full border-2 border-foreground flex items-center justify-center mb-6 overflow-hidden bg-card p-4">
                  <img src="/images/logo.jpg?v=20251115" alt="Zyra Digitals logo" className="w-[135%] h-[135%] object-contain scale-125" />
                </div>
                <h3 className="font-subheading text-lg sm:text-xl font-semibold mb-2 transition-colors duration-200 group-hover:text-foreground">Premium Digital Craftsmanship</h3>
                <p className="font-secondary text-muted-foreground max-w-md transition-colors duration-200 group-hover:text-foreground/80">
                  Every line of code, every design element, and every interaction is carefully considered to create experiences that are beautiful and functional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-subheading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="font-secondary text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every project and client relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="group rounded-xl border border-border bg-secondary p-8 ring-1 ring-transparent transition-all duration-200 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:shadow-xl hover:bg-secondary/40 hover:border-foreground/20 hover:ring-foreground/10">
                <h3 className="font-subheading text-lg sm:text-xl font-semibold text-foreground mb-2 transition-colors duration-200 group-hover:text-foreground">{value.title}</h3>
                <p className="font-secondary text-muted-foreground transition-colors duration-200 group-hover:text-foreground/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section - Card Structure */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-subheading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="font-secondary text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to delivering exceptional digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group rounded-xl border border-border bg-secondary p-8 ring-1 ring-transparent transition-all duration-200 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:shadow-xl hover:bg-secondary/40 hover:border-foreground/20 hover:ring-foreground/10">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                <span className="font-heading text-lg font-bold text-gold">01</span>
              </div>
              <h3 className="font-subheading text-lg sm:text-xl font-semibold text-foreground mb-3 transition-colors duration-200 group-hover:text-foreground">Discovery</h3>
              <p className="font-secondary text-muted-foreground transition-colors duration-200 group-hover:text-foreground/80">Understanding your goals, target audience, and project requirements to establish a solid foundation.</p>
            </div>

            <div className="group rounded-xl border border-border bg-secondary p-8 ring-1 ring-transparent transition-all duration-200 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:shadow-xl hover:bg-secondary/40 hover:border-foreground/20 hover:ring-foreground/10">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                <span className="font-heading text-lg font-bold text-gold">02</span>
              </div>
              <h3 className="font-subheading text-lg sm:text-xl font-semibold text-foreground mb-3 transition-colors duration-200 group-hover:text-foreground">Design</h3>
              <p className="font-secondary text-muted-foreground transition-colors duration-200 group-hover:text-foreground/80">Creating wireframes and visual designs that prioritize clean, elegant interfaces and user experience.</p>
            </div>

            <div className="group rounded-xl border border-border bg-secondary p-8 ring-1 ring-transparent transition-all duration-200 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:shadow-xl hover:bg-secondary/40 hover:border-foreground/20 hover:ring-foreground/10">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                <span className="font-heading text-lg font-bold text-gold">03</span>
              </div>
              <h3 className="font-subheading text-lg sm:text-xl font-semibold text-foreground mb-3 transition-colors duration-200 group-hover:text-foreground">Development</h3>
              <p className="font-secondary text-muted-foreground transition-colors duration-200 group-hover:text-foreground/80">Building reliable, performant code with modern technologies and best practices for optimal results.</p>
            </div>

            <div className="group rounded-xl border border-border bg-secondary p-8 ring-1 ring-transparent transition-all duration-200 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:shadow-xl hover:bg-secondary/40 hover:border-foreground/20 hover:ring-foreground/10">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                <span className="font-heading text-lg font-bold text-gold">04</span>
              </div>
              <h3 className="font-subheading text-lg sm:text-xl font-semibold text-foreground mb-3 transition-colors duration-200 group-hover:text-foreground">Launch</h3>
              <p className="font-secondary text-muted-foreground transition-colors duration-200 group-hover:text-foreground/80">Deploying your project, monitoring performance, and making refinements to ensure long-term success.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
