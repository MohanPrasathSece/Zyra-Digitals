// About page reworked to match the requested layout (Story + Values + Approach)

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
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl sm:text-6xl font-bold text-foreground mb-6">
              About Zyra Digitals
            </h1>
            <p className="font-secondary text-xl text-muted-foreground leading-relaxed">
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
              <h2 className="font-subheading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-6 font-body text-lg text-foreground/80 leading-relaxed">
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
                <div className="w-20 h-20 rounded-full border-2 border-foreground flex items-center justify-center mb-6 overflow-hidden bg-card p-3">
                  <img src="/images/icon.jpg" alt="Zyra Digitals icon" className="w-full h-full object-contain" />
                </div>
                <h3 className="font-subheading text-xl font-semibold mb-2 transition-colors duration-200 group-hover:text-foreground">Premium Digital Craftsmanship</h3>
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
            <h2 className="font-subheading text-4xl sm:text-5xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="font-secondary text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every project and client relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="group rounded-xl border border-border bg-secondary p-8 ring-1 ring-transparent transition-all duration-200 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:shadow-xl hover:bg-secondary/40 hover:border-foreground/20 hover:ring-foreground/10">
                <h3 className="font-subheading text-xl font-semibold text-foreground mb-2 transition-colors duration-200 group-hover:text-foreground">{value.title}</h3>
                <p className="font-secondary text-muted-foreground transition-colors duration-200 group-hover:text-foreground/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section (responsive stepper) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-secondary text-foreground p-8 sm:p-12">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="font-subheading text-3xl sm:text-4xl font-bold mb-2">Our Process</h2>
              <p className="font-secondary text-base sm:text-lg text-muted-foreground">
                From brief to launch — a clear, simple 4‑step journey.
              </p>
            </div>

            {/* Mobile: vertical timeline */}
            <div className="md:hidden space-y-6">
              {[
                { number: "01", title: "Discovery", description: "Goals, audience, and requirements" },
                { number: "02", title: "Design", description: "Wireframes and clean interfaces" },
                { number: "03", title: "Development", description: "Reliable code and performance" },
                { number: "04", title: "Launch", description: "Deploy, monitor, refine" },
              ].map((step, idx) => (
                <div key={step.number} className="relative pl-10">
                  <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
                  <div className="relative">
                    <div className="absolute -left-1 top-0 flex h-6 w-6 items-center justify-center rounded-full border border-foreground/30 bg-background font-heading text-xs font-semibold">
                      {step.number}
                    </div>
                    <h3 className="font-subheading text-lg font-semibold mb-1">{step.title}</h3>
                    <p className="font-secondary text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: horizontal stepper */}
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute left-0 right-0 top-5 h-px bg-border" />
                <div className="grid grid-cols-4 gap-6">
                  {[
                    { number: "01", title: "Discovery", description: "Goals, audience, and requirements" },
                    { number: "02", title: "Design", description: "Wireframes and clean interfaces" },
                    { number: "03", title: "Development", description: "Reliable code and performance" },
                    { number: "04", title: "Launch", description: "Deploy, monitor, refine" },
                  ].map((step) => (
                    <div key={step.number} className="text-center px-3">
                      <div className="relative mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-foreground/30 bg-background font-heading text-sm font-semibold">
                        <span>{step.number}</span>
                      </div>
                      <h3 className="font-subheading text-lg font-semibold mb-1">{step.title}</h3>
                      <p className="font-secondary text-sm text-muted-foreground max-w-[16rem] mx-auto">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
