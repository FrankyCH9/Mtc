// src/components/WhatsAppButton.js
'use client'; // Indica que este componente debe ser renderizado en el cliente

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => {
  const phoneNumber = '+51913334439';
  const goWasap = () => {
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`, '_blank');
  };

  return (
    <div className="fixed bottom-0 right-0 mb-4 mr-4">
      <FontAwesomeIcon 
        icon={faWhatsappSquare} 
        className="text-6xl text-green-500 cursor-pointer transform transition duration-300 hover:scale-110 hover:text-green-600 animate-bounce shadow-lg rounded-full bg-white p-4" 
        onClick={goWasap} 
      />
    </div>
  );
};

export default WhatsAppButton;
