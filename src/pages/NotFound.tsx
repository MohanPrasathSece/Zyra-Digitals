import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  useScrollToTop();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Helmet>
        <title>404 | Page Not Found | Zyra Digitals</title>
        <meta name="robots" content="noindex,follow" />
      </Helmet>
      <AnimatedSection animation="fade-up" className="max-w-md w-full text-center">
        <div className="mb-8 relative">
          <h1 className="text-9xl font-bold font-heading text-gold opacity-20">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl font-bold font-heading text-foreground uppercase tracking-widest">Lost?</h2>
          </div>
        </div>
        <p className="text-muted-foreground font-secondary text-lg mb-10 leading-relaxed">
          The brand experience you're looking for has moved or doesn't exist. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="gold" size="lg" asChild className="px-8 h-14">
            <a href="/">Return Home</a>
          </Button>
          <Button variant="outline" size="lg" asChild className="px-8 h-14 border-border">
            <a href="/contact">Support</a>
          </Button>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default NotFound;
