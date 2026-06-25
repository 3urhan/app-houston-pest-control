import { Bug, ShieldCheck, ClockAlert } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: "Targeted Extermination",
      description: "Fast, effective removal of active infestations. We handle termites, rodents, roaches, ants, bed bugs, and more using advanced treatments.",
      icon: <Bug className="w-8 h-8 text-white" />,
      price: "Free Inspection",
      features: ["Immediate relief", "Pet-safe treatments", "Follow-up visits"]
    },
    {
      title: "Preventative Maintenance",
      description: "Keep pests away before they become a problem. Regular perimeter treatments and interior inspections to secure your home year-round.",
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      price: "Monthly Plans",
      features: ["Quarterly visits", "Exterior barrier", "Web/Nest removal"]
    },
    {
      title: "24/7 Emergency Services",
      description: "Pests don't wait for business hours. Our rapid response team is available day or night for urgent pest situations.",
      icon: <ClockAlert className="w-8 h-8 text-white" />,
      price: "Immediate Dispatch",
      features: ["Under 2hr response", "After-hours support", "Urgent abatement"]
    }
  ]

  return (
    <section id="services" className="py-32 bg-slate-100 border-t border-teal-800/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-crimson-600 font-sans tracking-[0.2em] uppercase text-sm font-bold block mb-4">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-sans font-extrabold text-teal-900 mb-6">Comprehensive Pest Solutions</h2>
          <div className="w-16 h-1 bg-crimson-500 mx-auto mb-6"></div>
          <p className="text-teal-800 font-serif text-lg leading-relaxed">
            From emergency removal to preventative care, our licensed exterminators provide tailored solutions to keep your home healthy and pest-free.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-teal-800/10 p-10 hover:border-crimson-500 hover:shadow-xl transition-all duration-300 rounded-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full translate-x-16 -translate-y-16 group-hover:bg-crimson-50 transition-colors z-0"></div>
              <div className="relative z-10">
                <div className="mb-8 p-4 bg-teal-900 inline-flex rounded-xl group-hover:bg-crimson-600 transition-colors shadow-md">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-sans font-bold text-teal-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 font-serif leading-relaxed mb-8 h-28">
                  {service.description}
                </p>
                <div className="mb-8">
                  <span className="text-teal-900 font-sans font-bold text-xl">{service.price}</span>
                </div>
                <ul className="space-y-4 border-t border-slate-200 pt-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-sans font-medium text-slate-700">
                      <div className="w-2 h-2 rounded-full bg-crimson-500"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
