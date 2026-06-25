import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      text: "Called Houston Pest Control at 10pm because I had a massive roach problem. They answered immediately and had a technician at my door within the hour. Thorough treatment, no-nonsense, and the problem was gone within 48 hours. These guys are the real deal.",
      author: "Sandra M.",
      location: "Houston, TX",
      rating: 5
    },
    {
      text: "I've tried three different pest control companies over the years. Houston Pest Control is hands down the most effective. They explained exactly what they were doing, used safe products around my kids and pets, and I haven't seen a bug since. 351 reviews don't lie.",
      author: "Robert E.",
      location: "Galleria Area, Houston",
      rating: 5
    },
    {
      text: "Woke up to a rodent situation on a Sunday. Most companies wouldn't even pick up. Houston Pest Control answered, dispatched someone same day, and sealed every entry point. Professional, efficient, and worth every penny.",
      author: "Lisa W.",
      location: "Woodway, Houston TX",
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-32 bg-gray-900 relative">
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-green-500 font-sans tracking-[0.3em] uppercase text-sm font-bold block mb-4">Customer Experiences</span>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-6">
            What <span className="text-green-400">Houston Families</span> Are Saying
          </h2>
          <div className="w-16 h-0.5 bg-green-500 mx-auto mb-6"></div>
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-green-500 fill-green-500" />
            ))}
          </div>
          <p className="text-gray-300 font-sans text-lg font-light">
            4.7 Stars · 351 Google Reviews · Available 24/7
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 border border-green-500/20 p-10 relative group hover:border-green-500/50 transition-colors">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-green-500/10 group-hover:text-green-500/20 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-green-500 fill-green-500" />
                ))}
              </div>
              <p className="text-gray-200 font-sans font-light italic leading-relaxed mb-8">
                "{testimonial.text}"
              </p>
              <div className="border-t border-white/10 pt-6">
                <span className="block font-sans font-bold text-white text-lg">{testimonial.author}</span>
                <span className="block font-sans text-green-400 text-sm tracking-wide">{testimonial.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
