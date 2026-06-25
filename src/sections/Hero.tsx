import { ArrowRight, Star, ShieldAlert, PhoneCall } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-teal-900">
      <div className="absolute inset-0">
        <img src="/hero.jpg" alt="Pest control professional" className="w-full h-full object-cover opacity-40 mix-blend-overlay grayscale-[50%]" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/90 to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 bg-teal-800/80 backdrop-blur-md rounded-lg px-5 py-2.5 w-fit mb-8 border border-teal-500/30">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-crimson-400 fill-crimson-400' : 'text-crimson-400 fill-crimson-400'}`} />
              ))}
            </div>
            <span className="text-slate-200 text-sm font-sans tracking-wider font-semibold border-l border-teal-500/50 pl-3">4.7 Stars from 351 Reviews</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white leading-tight mb-8">
            Protecting Your Home.<br/>
            <span className="text-crimson-500">24/7 Emergency Service.</span>
          </h1>
          <p className="text-xl text-slate-300 font-serif leading-relaxed mb-12 max-w-2xl">
            Houston's most trusted pest control and extermination experts. Fast, effective, and guaranteed solutions to keep your property safe and pest-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <a href="#contact" className="inline-flex items-center justify-center gap-3 bg-crimson-600 hover:bg-crimson-500 text-white px-10 py-5 rounded-md font-bold font-sans uppercase tracking-widest text-sm transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)]">
              Book Now
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="tel:3463947656" className="inline-flex items-center justify-center gap-3 border-2 border-teal-500 hover:bg-teal-800 text-white px-10 py-5 rounded-md font-bold font-sans uppercase tracking-widest text-sm transition-all">
              Call (346) 394-7656
              <PhoneCall className="w-5 h-5" />
            </a>
          </div>
          <div className="flex flex-wrap gap-8 border-t border-teal-500/30 pt-8">
            <div className="flex items-center gap-3">
              <ShieldAlert className="w-6 h-6 text-crimson-500" />
              <span className="text-slate-200 text-sm font-sans font-semibold tracking-wide uppercase">Available 24/7</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldAlert className="w-6 h-6 text-crimson-500" />
              <span className="text-slate-200 text-sm font-sans font-semibold tracking-wide uppercase">Guaranteed Results</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldAlert className="w-6 h-6 text-crimson-500" />
              <span className="text-slate-200 text-sm font-sans font-semibold tracking-wide uppercase">Safe for Pets & Kids</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
