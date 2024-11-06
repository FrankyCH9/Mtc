'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const WhatsAppButton = ({ productou }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const phoneNumber = '51913334439';

  const isMobile = () => /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  const sendWhatsAppMessage = (productou) => {
    const message = userMessage
      ? userMessage
      : `Hola, estoy interesado en el producto: ${productou ? productou.name : ''}. Quisiera más información.`;
    const encodedMessage = encodeURIComponent(message);

    const whatsappLink = isMobile()
      ? `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(whatsappLink, '_blank');
  };

  const closeChat = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setShowMessage(false);
      setIsAnimatingOut(false);
    }, 300);
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end z-10">
      {showMessage ? (
        <div className={`relative mb-2 w-72 p-4 bg-white rounded-2xl shadow-xl border ${isAnimatingOut ? 'animate-slideOut' : 'animate-slideIn'}`}>
          <div className="bg-green-500 rounded-t-xl p-3 flex items-center justify-between">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faWhatsapp} className="text-white mr-2 text-lg" />
              <span className="text-white font-semibold text-lg">WhatsApp</span>
            </div>
            <button onClick={closeChat} className="text-white hover:text-gray-200 transition">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          <div className="p-4 bg-gray-50 rounded-b-xl">
            <div className="relative bg-green-100 p-3 rounded-xl shadow-inner mb-3 before:absolute before:left-0 before:top-4 before:w-4 before:h-4 before:bg-green-100 before:rotate-45 before:-ml-2">
              <p className="text-gray-800">¡Hola! ¿En qué podemos ayudarte?</p>
            </div>

            <textarea
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 mb-3"
              placeholder="Escribe tu mensaje..."
              rows="3"
              style={{ backgroundColor: '#f9f9f9', color: '#333', fontSize: '14px', resize: 'none' }}
            />

            <button
              onClick={() => sendWhatsAppMessage(productou)}
              className="bg-green-500 text-white w-full py-2 rounded-full flex items-center justify-center hover:bg-green-600 transition"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-white mr-2" />
              Enviar mensaje
            </button>
          </div>
        </div>
      ) : (
        <div
          onClick={() => setShowMessage(true)}
          className="bg-green-500 w-12 h-12 flex items-center justify-center rounded-full shadow-lg cursor-pointer hover:bg-green-600 transform transition-all duration-300 hover:scale-110"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="text-white text-2xl" />
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;
