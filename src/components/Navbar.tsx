import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center ${scrolled ? 'pt-4' : 'pt-6'
        }`}
    >
      <div
        className={`px-6 transition-all duration-300 flex items-center justify-between backdrop-blur-2xl bg-white/10 border border-white/20 shadow-lg
          ${scrolled
            ? 'w-[85%] md:w-[650px] py-2.5 rounded-3xl shadow-xl bg-white/15'
            : 'w-full py-2 border-gray-200/30 shadow-md'
          }`}
      >
        <Link
          to="/"
          className="flex items-center hover-scale transition-transform duration-200 z-50 mr-8"
          onClick={() => window.scrollTo(0, 0)}
          aria-label="Zyra Digitals Home"
        >
          <img
            src="/images/logo.jpg?v=20251115"
            alt="Zyra Digitals logo"
            className="h-10 md:h-12 w-auto object-contain shrink-0"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-0.5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/about">About</NavLink>
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

        {/* Mobile Menu Placeholder */}
        <button className="md:hidden p-2 text-black">
          <div className="w-6 h-0.5 bg-current mb-1.5 rounded-full"></div>
          <div className="w-6 h-0.5 bg-current rounded-full"></div>
        </button>
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
      className={`px-4 py-2 text-base font-medium rounded-xl transition-all duration-200 ${
        isActive 
          ? "text-black bg-gray-100/70 shadow-sm" 
          : "text-gray-600 hover:text-black hover:bg-gray-100/50"
      }`}
      onClick={() => window.scrollTo(0, 0)}
    >
      {children}
    </Link>
  )
}
