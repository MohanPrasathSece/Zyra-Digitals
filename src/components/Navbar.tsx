import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center ${scrolled ? 'pt-4' : 'pt-3'
        }`}
    >
      <div
        className={`px-6 transition-all duration-300 flex items-center justify-between backdrop-blur-2xl bg-white/10 border border-white/20 shadow-lg min-h-[50px]
          ${scrolled
            ? 'w-[85%] md:w-[650px] py-2.5 rounded-3xl shadow-xl bg-white/15'
            : 'w-full py-1.5 border-gray-200/30 shadow-md'
          }`}
      >
        <Link
          to="/"
          className="flex items-center hover-scale transition-transform duration-200 z-50 mr-8"
          onClick={() => window.scrollTo(0, 0)}
          aria-label="Zyra Digitals Home"
        >
          <img
            src="/new_logo.jpeg"
            alt="Zyra Digitals logo"
            className="h-10 md:h-12 w-auto object-contain shrink-0 rounded-[20px]"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-2">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </div>

        <div className="hidden md:flex items-center pl-6">
          <Link
            to="/contact"
            className="px-5 py-2 bg-black text-white text-base font-medium tracking-wide hover:bg-neutral-800 transition-all duration-200 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-0.5"
            onClick={() => window.scrollTo(0, 0)}
          >
            CONTACT
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-black hover:bg-black/10 rounded-lg transition-colors duration-200"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ease-out ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Container */}
        <div 
          className={`absolute top-20 left-1/2 transform -translate-x-1/2 w-[90%] max-w-sm transition-all duration-300 ease-out ${
            isMobileMenuOpen 
              ? 'opacity-100 scale-100 translate-y-0' 
              : 'opacity-0 scale-95 -translate-y-4'
          }`}
        >
          <div className="bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-8">
            {/* Navigation Links */}
            <nav className="space-y-4 mb-8">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/portfolio", label: "Portfolio" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className={`block text-center py-3 px-6 rounded-2xl font-medium transition-all duration-200 ${
                    location.pathname === item.to
                      ? 'bg-black text-white shadow-lg'
                      : 'text-black hover:bg-black/10'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            
            {/* Contact Button */}
            <div className="text-center">
              <Link
                to="/contact"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className="inline-block px-8 py-3 bg-black text-white font-medium rounded-2xl shadow-lg hover:bg-neutral-800 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation()
  const isActive = location.pathname === to
  
  return (
    <Link
      to={to}
      className={`px-4 py-2 text-base font-medium rounded-2xl transition-all duration-200 border ${
        isActive 
          ? "text-black bg-white border-gray-200 shadow-sm" 
          : "text-gray-600 hover:text-black hover:bg-white/50 border-gray-200/50"
      }`}
      onClick={() => window.scrollTo(0, 0)}
    >
      {children}
    </Link>
  )
}
