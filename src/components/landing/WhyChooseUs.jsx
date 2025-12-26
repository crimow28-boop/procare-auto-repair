import React from 'react';
import { 
  Clock, 
  DollarSign, 
  Gauge, 
  UserCheck, 
  Shield,
  Award
} from 'lucide-react';

const features = [
  {
    icon: Clock,
    stat: "20+",
    label: "Years Experience",
    description: "Two decades of trusted auto repair excellence"
  },
  {
    icon: DollarSign,
    stat: "100%",
    label: "Transparent Pricing",
    description: "Upfront quotes with no hidden fees or surprises"
  },
  {
    icon: Gauge,
    stat: "Latest",
    label: "Diagnostic Tech",
    description: "State-of-the-art equipment for accurate diagnosis"
  },
  {
    icon: UserCheck,
    stat: "Personal",
    label: "Honest Service",
    description: "We treat your car like it's our own"
  },
  {
    icon: Shield,
    stat: "12mo",
    label: "Work Warranty",
    description: "Full warranty on all parts and labor"
  },
  {
    icon: Award,
    stat: "5,000+",
    label: "Happy Customers",
    description: "Trusted by families across the community"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      {/* Decorative Blurs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-orange-400 font-semibold tracking-wider uppercase text-sm mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Built on Trust & Excellence
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We've earned our reputation through years of honest, quality work. 
            Here's what sets us apart.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-orange-500/30 transition-all duration-500 hover:bg-white/10"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              {/* Stat */}
              <div className="text-4xl font-bold text-white mb-1 tracking-tight">
                {feature.stat}
              </div>
              
              {/* Label */}
              <div className="text-orange-400 font-semibold mb-3">
                {feature.label}
              </div>
              
              {/* Description */}
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}