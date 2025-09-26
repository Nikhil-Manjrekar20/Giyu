import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingActionButtons = () => {
  const phoneNumber = '+919959059632';
  const whatsappNumber = '919959059632';

  const handleCallClick = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Call Button */}
      <button
        onClick={handleCallClick}
        className="w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
      </button>
    </div>
  );
};

export default FloatingActionButtons;