import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Michael R.",
    car: "Honda Accord 2019",
    rating: 5,
    text: "Finally found a garage I can trust. They diagnosed my engine issue in minutes when two other shops couldn't figure it out. Fair price, fixed right the first time.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Sarah T.",
    car: "Toyota Camry 2021",
    rating: 5,
    text: "Transparent pricing and honest recommendations. They actually told me I didn't need a repair that another shop quoted me $800 for. That's integrity you don't find often.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "David L.",
    car: "Ford F-150 2020",
    rating: 5,
    text: "Been bringing all my vehicles here for 5 years. They treat you like family, explain everything clearly, and the work is always top-notch. Highly recommend!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-orange-500 font-semibold tracking-wider uppercase text-sm mb-4">
            Customer Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what real customers have to say about their experience.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-slate-100"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-2 text-orange-500/10 group-hover:text-orange-500/20 transition-colors duration-300">
                <Quote className="w-16 h-16" />
              </div>
              
              {/* Stars */}
              <div className="relative flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orange-400 fill-orange-400" />
                ))}
              </div>
              
              {/* Text */}
              <p className="relative text-slate-700 leading-relaxed mb-8 text-lg">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="relative flex items-center gap-4">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md"
                />
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.car}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Google Rating Badge */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 bg-slate-900 rounded-full px-6 py-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
              ))}
            </div>
            <span className="text-white font-semibold">4.9</span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-300 text-sm">200+ reviews on Google</span>
          </div>
        </div>
      </div>
    </section>
  );
}