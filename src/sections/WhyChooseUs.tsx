import { Shield, Clock, Star, CheckCircle } from 'lucide-react'

export default function WhyChooseUs() {
  const features = [
    {
      title: "24/7 Emergency Response",
      description: "Pests don't keep business hours — and neither do we. Call anytime and get a real technician dispatched fast.",
      icon: <Clock className="w-6 h-6 text-green-500" />
    },
    {
      title: "351+ Verified Reviews",
      description: "With 4.7 stars and 351 reviews, our track record speaks for itself. Houston trusts us because we deliver results.",
      icon: <Star className="w-6 h-6 text-green-500" />
    },
    {
      title: "Safe for Families & Pets",
      description: "EPA-approved treatments that eliminate pests without putting your family or animals at risk. We do it right.",
      icon: <Shield className="w-6 h-6 text-green-500" />
    },
    {
      title: "Guaranteed Effectiveness",
      description: "If pests return between scheduled visits, so do we — at no extra charge. Your satisfaction is non-negotiable.",
      icon: <CheckCircle className="w-6 h-6 text-green-500" />
    }
  ]

  return (
    <section id="why-us" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-green-600 font-sans tracking-[0.3em] uppercase text-sm font-bold block mb-4">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-gray-900 mb-8 leading-tight">
              Houston's Most <br/>
              <span className="text-green-600">Trusted Pest Control</span>
            </h2>
            <p className="text-gray-700 font-sans text-lg font-normal leading-relaxed mb-12">
              When you have a pest problem, you need fast, effective, and reliable service. With 351 verified reviews and 24/7 availability, we're the team Houston homeowners and businesses call first.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="space-y-4 border-l-2 border-green-500/20 pl-6 hover:border-green-500 transition-colors">
                  <div className="bg-green-50 w-12 h-12 rounded-sm flex items-center justify-center border border-green-200">
                    {feature.icon}
                  </div>
                  <h3 className="font-sans font-bold text-xl text-gray-900">{feature.title}</h3>
                  <p className="font-sans font-light text-gray-700 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-full min-h-[500px]">
            <div className="absolute inset-0 bg-gray-900 translate-x-4 translate-y-4"></div>
            <img 
              src={`${import.meta.env.BASE_URL}why-us.jpg`} 
              alt="Professional pest control technician inspecting Houston home" 
              className="absolute inset-0 w-full h-full object-cover z-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
