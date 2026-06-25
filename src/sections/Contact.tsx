import { MapPin, Phone, Clock, Send, AlertTriangle } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-crimson-600 font-sans tracking-[0.2em] uppercase text-sm font-bold block mb-4">Contact Us</span>
            <h2 className="text-4xl md:text-5xl font-sans font-extrabold text-teal-900 mb-8 leading-tight">
              Schedule Your <br/>
              <span className="text-crimson-500">Inspection Today</span>
            </h2>
            <div className="w-16 h-1 bg-crimson-500 mb-8"></div>
            <p className="text-slate-700 font-serif text-lg leading-relaxed mb-8">
              Don't wait for the problem to get worse. Contact us now for a fast, free inspection and a tailored treatment plan.
            </p>
            
            <div className="bg-crimson-50 border border-crimson-200 p-4 rounded-lg flex items-start gap-4 mb-10">
              <AlertTriangle className="w-6 h-6 text-crimson-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-sans font-bold text-crimson-900 mb-1">Need Emergency Service?</h4>
                <p className="text-crimson-800 font-serif text-sm">Our rapid response team is available 24/7. Call us directly for immediate assistance.</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-white border border-teal-800/20 rounded-full flex items-center justify-center shrink-0 group-hover:bg-teal-50 group-hover:border-teal-500 transition-colors shadow-sm">
                  <MapPin className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xl text-teal-900 mb-1">Service Area HQ</h4>
                  <p className="font-serif text-slate-600">
                    8581 Woodway Dr<br />
                    Houston, TX
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-white border border-teal-800/20 rounded-full flex items-center justify-center shrink-0 group-hover:bg-teal-50 group-hover:border-teal-500 transition-colors shadow-sm">
                  <Phone className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xl text-teal-900 mb-1">24/7 Dispatch Line</h4>
                  <p className="font-serif text-slate-600">
                    (346) 394-7656
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-white border border-teal-800/20 rounded-full flex items-center justify-center shrink-0 group-hover:bg-teal-50 group-hover:border-teal-500 transition-colors shadow-sm">
                  <Clock className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xl text-teal-900 mb-1">Availability</h4>
                  <p className="font-serif text-slate-600">
                    Standard: Monday - Saturday<br />
                    Emergency: 24/7/365
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full translate-x-16 -translate-y-16"></div>
            
            <h3 className="font-sans font-extrabold text-2xl text-teal-900 mb-8 relative z-10">Request Free Inspection</h3>
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-xs font-sans tracking-widest font-bold uppercase text-slate-500 mb-2">Full Name</label>
                <input type="text" id="name" className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all font-serif" placeholder="John Doe" />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-xs font-sans tracking-widest font-bold uppercase text-slate-500 mb-2">Phone Number</label>
                <input type="tel" id="phone" className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all font-serif" placeholder="(555) 123-4567" />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-xs font-sans tracking-widest font-bold uppercase text-slate-500 mb-2">Pest Issue</label>
                <select id="service" className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all font-serif text-slate-700">
                  <option>Termites</option>
                  <option>Rodents / Mice</option>
                  <option>Roaches / Ants</option>
                  <option>Bed Bugs</option>
                  <option>General Preventative</option>
                  <option>Not Sure / Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-sans tracking-widest font-bold uppercase text-slate-500 mb-2">Property Details</label>
                <textarea id="message" rows={3} className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all font-serif resize-none" placeholder="Residential/Commercial, severity of issue..."></textarea>
              </div>
              
              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-crimson-600 hover:bg-crimson-500 text-white py-4 rounded-lg font-bold font-sans uppercase tracking-widest text-sm transition-all shadow-md hover:shadow-lg group">
                <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
