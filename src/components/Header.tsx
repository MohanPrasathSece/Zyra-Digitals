import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center hover-scale overflow-visible" aria-label="Zyra Digitals Home">
            <img
              src="/images/icon.jpg"
              alt="Zyra Digitals logo"
              className="h-[60px] md:h-[80px] w-auto object-contain mt-0.3 md:mt-1.7 shrink-0"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-body text-base font-medium transition-colors ${
                  isActive(link.to)
                    ? "text-gold"
                    : "text-foreground hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Work with us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-gold transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
          >
            {isMenuOpen ? <X size={36} /> : <Menu size={36} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-body text-base font-medium transition-colors ${
                    isActive(link.to)
                      ? "text-gold"
                      : "text-foreground hover:text-gold"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="gold" size="lg" asChild className="w-fit">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Work with us
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

