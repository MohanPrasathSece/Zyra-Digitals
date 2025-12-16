import { Link } from "react-router-dom";
import { Mail, Phone, MessageCircle, Linkedin, Instagram, Facebook, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);
  
  // TODO: Replace with your real contact details
  const CONTACT = {
    email: "zyradigitalsofficial@gmail.com",
    phone: "9025421149",
    whatsapp: "9025421149",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  // Make footer visible after a short delay to ensure it loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="bg-background mt-8" role="contentinfo">
      <div className="w-full px-[15px]">
        {/* Mobile Footer */}
        <div 
          ref={footerRef}
          className={`md:hidden bg-primary text-primary-foreground px-6 py-8 transition-all duration-700 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center">
            <img src="/images/whitelogo.png" alt="Zyra Digitals logo" className="w-28 h-18 object-contain mx-auto mb-4" />
            <p className="text-sm text-primary-foreground/80 mb-6 px-4">Premium web development studio crafting exceptional digital experiences.</p>
            
            {/* Quick Links */}
            <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2 text-gold">Services</h4>
                <ul className="space-y-1">
                  <li><a href="/services" className="text-primary-foreground/70 hover:text-gold transition-colors">Web Development</a></li>
                  <li><a href="/services" className="text-primary-foreground/70 hover:text-gold transition-colors">Portfolios</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-gold">Company</h4>
                <ul className="space-y-1">
                  <li><a href="/about" className="text-primary-foreground/70 hover:text-gold transition-colors">About</a></li>
                  <li><a href="/portfolio" className="text-primary-foreground/70 hover:text-gold transition-colors">Portfolio</a></li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="mb-6 text-sm">
              <a href={`mailto:${CONTACT.email}`} className="text-primary-foreground/80 hover:text-gold transition-colors block mb-1">
                {CONTACT.email}
              </a>
              <a href={`tel:${CONTACT.phone}`} className="text-primary-foreground/80 hover:text-gold transition-colors">
                {CONTACT.phone}
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-4">
              <a href="https://www.instagram.com/zyradigitals.co/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-primary-foreground/60 hover:text-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/company/zyra-digitals/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-primary-foreground/60 hover:text-gold transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
            <p className="text-xs text-primary-foreground/60">© {currentYear} Zyra Digitals. All rights reserved.</p>
          </div>
        </div>

        {/* Desktop Footer */}
        <div 
          className={`hidden md:block bg-primary text-primary-foreground rounded-t-[3rem] px-8 py-16 transition-all duration-700 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              {/* Brand */}
              <div className="md:col-span-2">
                <img src="/images/whitelogo.png" alt="Zyra Digitals logo" className="w-32 h-20 object-contain mb-4" />
                <p className="text-primary-foreground/80 mb-4">Premium web development studio crafting exceptional digital experiences with precision and elegance.</p>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/zyradigitals.co/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-primary-foreground/60 hover:text-gold transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="https://www.linkedin.com/company/zyra-digitals/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-primary-foreground/60 hover:text-gold transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-subheading text-lg font-semibold mb-4 text-gold">Services</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/services" className="text-primary-foreground/80 hover:text-gold transition-colors">Website Development</a></li>
                  <li><a href="/services" className="text-primary-foreground/80 hover:text-gold transition-colors">Personal Portfolios</a></li>
                  <li><a href="/services" className="text-primary-foreground/80 hover:text-gold transition-colors">Business Websites</a></li>
                  <li><a href="/services" className="text-primary-foreground/80 hover:text-gold transition-colors">E-commerce Solutions</a></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-subheading text-lg font-semibold mb-4 text-gold">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/about" className="text-primary-foreground/80 hover:text-gold transition-colors">About Us</a></li>
                  <li><a href="/portfolio" className="text-primary-foreground/80 hover:text-gold transition-colors">Portfolio</a></li>
                  <li><a href="/contact" className="text-primary-foreground/80 hover:text-gold transition-colors">Contact</a></li>
                  <li><a href="/services" className="text-primary-foreground/80 hover:text-gold transition-colors">Services</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-primary-foreground/20 pt-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm text-primary-foreground/80">
                  <a href={`mailto:${CONTACT.email}`} className="hover:text-gold transition-colors mr-4">{CONTACT.email}</a>
                  <a href={`tel:${CONTACT.phone}`} className="hover:text-gold transition-colors">{CONTACT.phone}</a>
                </div>
                <p className="text-sm text-primary-foreground/60">© {currentYear} Zyra Digitals. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
