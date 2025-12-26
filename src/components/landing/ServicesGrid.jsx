import React from 'react';
import { 
  Wrench, 
  Disc, 
  Cpu, 
  Zap, 
  Snowflake, 
  ClipboardCheck,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: "Routine Maintenance",
    description: "Oil changes, filter replacements, fluid top-ups, and scheduled maintenance to keep your car running smoothly.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Disc,
    title: "Brake Repair",
    description: "Complete brake system inspection, pad replacement, rotor resurfacing, and brake fluid service.",
    color: "from-red-500 to-red-600"
  },
  {
    icon: Cpu,
    title: "Engine Diagnostics",
    description: "Advanced computer diagnostics to identify issues quickly and accurately. No guesswork.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Zap,
    title: "Electrical Systems",
    description: "Battery testing, alternator repair, starter replacement, and full electrical diagnostics.",
    color: "from-yellow-500 to-yellow-600"
  },
  {
    icon: Snowflake,
    title: "A/C Service",
    description: "Air conditioning inspection, recharge, leak detection, and compressor repair.",
    color: "from-cyan-500 to-cyan-600"
  },
  {
    icon: ClipboardCheck,
    title: "Inspection Prep",
    description: "Complete pre-inspection checks and repairs to ensure your vehicle passes state inspection.",
    color: "from-green-500 to-green-600"
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-orange-500 font-semibold tracking-wider uppercase text-sm mb-4">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Complete Auto Care Services
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            From routine maintenance to complex repairs, we handle it all with precision and care.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-slate-200 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="relative text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-800">
                {service.title}
              </h3>
              <p className="relative text-slate-600 leading-relaxed mb-4">
                {service.description}
              </p>
              
              {/* Learn More Link */}
              <div className="relative flex items-center text-orange-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm">Learn more</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}