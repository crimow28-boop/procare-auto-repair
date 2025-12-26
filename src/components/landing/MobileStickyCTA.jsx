import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  
  const phoneNumber = "+1234567890";
  const whatsappNumber = "1234567890";

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isDismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden animate-slide-up">
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-t-2 border-orange-500 shadow-2xl">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1 grid grid-cols-2 gap-3">
              <Button 
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl shadow-lg"
                onClick={() => window.location.href = `tel:${phoneNumber}`}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call
              </Button>
              
              <Button 
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-lg"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </div>
            
            <button 
              onClick={() => setIsDismissed(true)}
              className="text-slate-400 hover:text-white transition-colors p-2"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}