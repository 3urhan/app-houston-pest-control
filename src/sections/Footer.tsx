import { ShieldAlert, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-teal-900 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-crimson-500/10 border border-crimson-500/40 rounded-lg flex items-center justify-center">
                <ShieldAlert className="w-5 h-5 text-crimson-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-extrabold text-xl text-white">Houston Pest Control</span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-teal-400">Available 24/7</span>
              </div>
            </div>
            <p className="text-slate-300/70 font-sans font-normal leading-relaxed max-w-sm mb-8">
              Houston's most trusted pest control and extermination experts. 4.7 stars across 351 verified reviews. Fast, safe, and guaranteed results for homes and businesses.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-slate-300 hover:border-crimson-500 hover:text-crimson-400 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-slate-300 hover:border-crimson-500 hover:text-crimson-400 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-slate-300 hover:border-crimson-500 hover:text-crimson-400 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-crimson-400 font-sans tracking-[0.2em] uppercase text-xs font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-slate-300/80 hover:text-crimson-400 font-sans text-sm transition-colors">Our Services</a></li>
              <li><a href="#about" className="text-slate-300/80 hover:text-crimson-400 font-sans text-sm transition-colors">About Us</a></li>
              <li><a href="#why-us" className="text-slate-300/80 hover:text-crimson-400 font-sans text-sm transition-colors">Why Choose Us</a></li>
              <li><a href="#testimonials" className="text-slate-300/80 hover:text-crimson-400 font-sans text-sm transition-colors">Customer Reviews</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-crimson-400 font-sans tracking-[0.2em] uppercase text-xs font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-300/80 font-sans text-sm">
              <li>8581 Woodway Dr</li>
              <li>Houston, TX 77063</li>
              <li><a href="tel:3463947656" className="hover:text-crimson-400 transition-colors">(346) 394-7656</a></li>
              <li className="text-crimson-400 font-semibold">Available 24/7</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-300/50 font-sans text-xs">
            &copy; {new Date().getFullYear()} Houston Pest Control. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-slate-300/50 font-sans text-xs">
            <a href="#" className="hover:text-crimson-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-crimson-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
