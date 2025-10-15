import { Link } from "react-router-dom";
import { Mail, Phone, MessageCircle, Linkedin, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  // TODO: Replace with your real contact details
  const CONTACT = {
    email: "zyradigitalsofficial@email.com",
    phone: "9025421149",
    whatsapp: "9025421149",
  };

  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-6">
        {/* Top grid: Brand / Connect / Social */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
          {/* Brand / About */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1 mb-1">
              <img src="/images/whitelogo.png" alt="Zyra Digitals logo" className="w-32 h-20 object-contain" />
            </div>
            <p className="text-sm text-primary-foreground/80 mb-1">
              Crafting premium digital experiences with precision and elegance.
            </p>
            <p className="text-sm text-primary-foreground/60">Remote • Worldwide</p>
          </div>

          {/* Connect - Centered */}
          <div className="text-center">
            <h3 className="font-subheading text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT.email)}&su=${encodeURIComponent('Project Inquiry from Website')}&body=${encodeURIComponent("Hi Zyra Digitals,\n\nI'm interested in working with you. Please get back to me with next steps.\n\nThanks,")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 hover:text-primary-foreground transition-colors"
              >
                <Mail size={18} /> {CONTACT.email}
              </a>
              <a href={`tel:${CONTACT.phone.replace(/[^\d+]/g, "")}`} className="flex items-center justify-center gap-2 hover:text-primary-foreground transition-colors"><Phone size={18} /> {CONTACT.phone}</a>
              <a href={`https://wa.me/${CONTACT.whatsapp.replace(/[^\d]/g, "")}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 hover:text-primary-foreground transition-colors"><MessageCircle size={18} /> WhatsApp</a>
            </div>
          </div>

          {/* Social (right aligned) */}
          <div className="text-center md:text-right">
            <h3 className="font-subheading text-lg font-semibold mb-4">Follow</h3>
            <div className="flex justify-center md:justify-end items-center gap-6">
              <a href="https://www.instagram.com/zyradigitals.co/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-primary-foreground/80 hover:text-gold transition-colors"><Instagram size={30} /></a>
              <a href="https://www.linkedin.com/company/zyra-digitals/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-primary-foreground/80 hover:text-gold transition-colors"><Linkedin size={30} /></a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-primary-foreground/15 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">© {currentYear} Zyra Digitals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
