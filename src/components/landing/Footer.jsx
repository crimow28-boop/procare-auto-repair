import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-orange-400">ProCare Auto</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Your trusted local auto repair shop. Quality service, honest pricing, and expert care since 2005.
            </p>
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                <span className="text-lg">f</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                <span className="text-lg">in</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                <span className="text-lg">✉</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-slate-400 hover:text-orange-400 transition-colors">Services</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#reviews" className="text-slate-400 hover:text-orange-400 transition-colors">Reviews</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              <li className="text-slate-400">Brake Repair</li>
              <li className="text-slate-400">Engine Diagnostics</li>
              <li className="text-slate-400">Oil Changes</li>
              <li className="text-slate-400">A/C Service</li>
              <li className="text-slate-400">Electrical Systems</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span>info@procare.com</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span>123 Main Street<br />Your City, State 12345</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Clock className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span>Mon-Fri: 8AM-6PM<br />Sat: 8AM-2PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center sm:text-left">
              © {currentYear} ProCare Auto Repair. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}