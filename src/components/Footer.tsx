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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/images/white%20icon.jpg"
                alt="Zyra Digitals icon"
                className="w-16 h-16 rounded-sm object-contain"
              />
              <img
                src="/images/logo.jpg"
                alt="Zyra Digitals logo"
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-base text-primary-foreground/80">
              Crafting premium digital experiences with precision and elegance.
            </p>
          </div>

          

          {/* Contact & Social */}
          <div>
            <h3 className="font-subheading text-2xl font-semibold mb-4">Connect</h3>
            <div className="flex flex-col space-y-3 mb-4">
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-base text-primary-foreground/80 hover:text-gold transition-colors flex items-center gap-2"
              >
                <Mail size={20} />
                <span>{CONTACT.email}</span>
              </a>
              <a
                href={`tel:${CONTACT.phone.replace(/[^\d+]/g, "")}`}
                className="text-base text-primary-foreground/80 hover:text-gold transition-colors flex items-center gap-2"
              >
                <Phone size={20} />
                <span>{CONTACT.phone}</span>
              </a>
              <a
                href={`https://wa.me/${CONTACT.whatsapp.replace(/[^\d]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-primary-foreground/80 hover:text-gold transition-colors flex items-center gap-2"
              >
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </a>
              <p className="text-base text-primary-foreground/80">Remote • Worldwide</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-base text-primary-foreground/60">
            © {currentYear} Zyra Digitals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
