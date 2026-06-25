import { useState, useEffect } from 'react'
import { Phone, Menu, X, ShieldAlert } from 'lucide-react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-teal-900/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-crimson-500/10 border border-crimson-500/40 rounded-lg flex items-center justify-center transition-colors group-hover:bg-crimson-500/20">
              <ShieldAlert className="w-6 h-6 text-crimson-400" />
            </div>
            <div className="flex flex-col">
              <span className={`font-sans font-extrabold text-xl tracking-tight transition-colors ${scrolled ? 'text-white' : 'text-white'}`}>Houston Pest Control</span>
              <span className={`text-xs tracking-[0.2em] uppercase transition-colors ${scrolled ? 'text-teal-400' : 'text-teal-300'}`}>24/7 Emergency Service</span>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className={`text-sm font-sans tracking-wider uppercase hover:text-crimson-400 transition-colors ${scrolled ? 'text-slate-200' : 'text-white'}`}>{link.label}</a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:3463947656" className="flex items-center gap-2 bg-crimson-600 hover:bg-crimson-500 text-white px-6 py-3 rounded-md text-sm font-bold font-sans uppercase tracking-widest transition-all">
              <Phone className="w-4 h-4" />
              (346) 394-7656
            </a>
          </div>
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="text-white w-6 h-6" /> : <Menu className="text-white w-6 h-6" />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-teal-900 border-t border-teal-500/20">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="block text-slate-200 hover:text-crimson-400 font-sans tracking-widest uppercase text-sm" onClick={() => setMobileOpen(false)}>{link.label}</a>
            ))}
            <div className="pt-4">
              <a href="tel:3463947656" className="flex items-center justify-center gap-2 bg-crimson-600 text-white px-5 py-4 rounded-md font-bold font-sans uppercase tracking-widest">
                <Phone className="w-4 h-4" />
                (346) 394-7656
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
