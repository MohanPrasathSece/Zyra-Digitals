import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
            Zyra Digitals
          </h1>
          <p className="font-heading text-3xl sm:text-4xl lg:text-5xl text-foreground/80 mb-8 italic">
            Crafting Premium Digital Experiences
          </p>
          <p className="font-body text-xl sm:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Bespoke web development tailored to your vision. Elevate your digital presence with precision, elegance, and performance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="lg" asChild className="h-16 px-10 text-lg sm:text-xl [&_svg]:size-6">
              <Link to="/contact" className="flex items-center gap-2">
                Start Your Project
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button variant="ghost-gold" size="lg" asChild className="h-16 px-10 text-lg sm:text-xl">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

