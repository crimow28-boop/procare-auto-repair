import React, { useEffect } from 'react';
import HeroSection from '@/components/landing/HeroSection';
import ServicesGrid from '@/components/landing/ServicesGrid';
import WhyChooseUs from '@/components/landing/WhyChooseUs';
import Testimonials from '@/components/landing/Testimonials';
import ContactSection from '@/components/landing/ContactSection';
import Footer from '@/components/landing/Footer';
import MobileStickyCTA from '@/components/landing/MobileStickyCTA';

export default function Home() {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "ProCare Auto Repair - Reliable Auto Service | Fair Prices | Expert Mechanics";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Trusted local auto repair shop with 20+ years of experience. Transparent pricing, honest service, expert diagnostics. Call now for reliable car repair.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Trusted local auto repair shop with 20+ years of experience. Transparent pricing, honest service, expert diagnostics. Call now for reliable car repair.';
      document.head.appendChild(meta);
    }

    // Smooth scroll for anchor links
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a');
      if (target && target.hash) {
        const element = document.querySelector(target.hash);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Section */}
      <section id="services">
        <ServicesGrid />
      </section>
      
      {/* Why Choose Us Section */}
      <section id="about">
        <WhyChooseUs />
      </section>
      
      {/* Testimonials Section */}
      <section id="reviews">
        <Testimonials />
      </section>
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
      
      {/* Mobile Sticky CTA */}
      <MobileStickyCTA />
      
      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}