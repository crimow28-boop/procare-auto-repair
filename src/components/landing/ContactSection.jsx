import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Mail,
  Navigation
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
  const phoneNumber = "+1234567890";
  const whatsappNumber = "1234567890";
  const address = "123 Main Street, Your City, State 12345";
  const email = "info@yourgaragename.com";
  
  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-orange-500 font-semibold tracking-wider uppercase text-sm mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Call us, send a message, or stop by the shop. We're here to help with all your auto repair needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            {/* CTA Buttons */}
            <div className="p-8 bg-gradient-to-br from-slate-900 to-slate-800">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Us Today</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-6 rounded-xl shadow-lg shadow-orange-500/25"
                  onClick={() => window.location.href = `tel:${phoneNumber}`}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
                <Button 
                  size="lg"
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-6 rounded-xl shadow-lg shadow-green-500/25"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
            
            {/* Contact Details */}
            <div className="p-8 space-y-6">
              {/* Phone */}
              <a 
                href={`tel:${phoneNumber}`}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Phone</div>
                  <div className="text-lg font-semibold text-slate-900 group-hover:text-orange-600 transition-colors">(123) 456-7890</div>
                </div>
              </a>
              
              {/* Email */}
              <a 
                href={`mailto:${email}`}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Email</div>
                  <div className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{email}</div>
                </div>
              </a>
              
              {/* Address */}
              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Address</div>
                  <div className="text-lg font-semibold text-slate-900 group-hover:text-green-600 transition-colors">{address}</div>
                </div>
              </a>
              
              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-2">Business Hours</div>
                  <div className="space-y-1">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between gap-4">
                        <span className="text-slate-600">{schedule.day}</span>
                        <span className="font-semibold text-slate-900">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="relative h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Garage Location"
              />
              
              {/* Get Directions Button */}
              <div className="absolute bottom-4 left-4 right-4">
                <Button 
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 rounded-xl shadow-xl"
                  onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(address)}`, '_blank')}
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}