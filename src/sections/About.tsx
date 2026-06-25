export default function About() {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-slate-50 skew-x-12 transform origin-top-left"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="lg:pr-10 order-2 lg:order-1">
            <span className="text-crimson-600 font-sans tracking-[0.2em] uppercase text-sm font-bold block mb-4">About Us</span>
            <h2 className="text-4xl md:text-5xl font-sans font-extrabold text-teal-900 mb-8 leading-tight">
              Decades of <br/>
              <span className="text-crimson-500">Proven Expertise.</span>
            </h2>
            <div className="w-16 h-1 bg-crimson-500 mb-8"></div>
            
            <div className="space-y-6 text-slate-700 font-serif text-lg leading-relaxed mb-10">
              <p>
                Houston Pest Control has been safeguarding homes and businesses from unwanted invaders for over 20 years. We know that dealing with pests is stressful, which is why we prioritize rapid response times and permanent solutions.
              </p>
              <p>
                Our team of state-licensed technicians undergoes rigorous continuous training on the latest, safest extermination methods. We use advanced, pet-friendly products that are tough on bugs but safe for your family.
              </p>
              <p>
                With over 350 positive reviews from your neighbors, we stand by our work. If the pests come back, so do we—at no additional cost.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 border-t border-slate-200 pt-10">
              <div>
                <span className="block text-4xl font-sans font-black text-teal-900 mb-2">350+</span>
                <span className="text-sm font-sans tracking-widest uppercase text-slate-500 font-bold">5-Star Reviews</span>
              </div>
              <div>
                <span className="block text-4xl font-sans font-black text-teal-900 mb-2">100%</span>
                <span className="text-sm font-sans tracking-widest uppercase text-slate-500 font-bold">Satisfaction Guarantee</span>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-4 border-2 border-teal-800/10 transform translate-x-4 -translate-y-4 rounded-xl"></div>
            <img 
              src="/about.jpg" 
              alt="Pest control technician inspecting a home" 
              className="relative w-full h-[600px] object-cover shadow-2xl rounded-xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-teal-900 p-8 text-white shadow-xl max-w-xs hidden md:block rounded-xl border-b-4 border-crimson-500">
              <span className="font-sans font-black text-5xl block mb-2 text-crimson-400">24/7</span>
              <span className="font-sans font-bold tracking-widest uppercase text-xs">Emergency Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
