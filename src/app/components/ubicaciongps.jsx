import { Mail, MapPin, Phone, Timer } from "lucide-react";
import Image from "next/image";

export default function Ubicaciongps({ handleOpenMapModal, handleOpenDirectionsModal }) {
  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-12 mt-24">
      {/* Título principal */}
      <div className="text-center mb-12">
        <h1 className="text-6xl font-extrabold text-white">Ubícanos en</h1> {/* Título más grande y color blanco */}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Información de la ubicación */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 p-6 space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Nuestra Ubicación</h2> {/* Título más grande */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-blue-600 mt-1" />
              <span className="text-xl text-gray-700">Av. Calle Los Pinos 107 (Frente al Ministerio de Transporte)</span> {/* Texto más grande */}
            </div>
            <div className="flex items-start gap-4">
              <Timer className="h-6 w-6 text-blue-600 mt-1" />
              <div className="space-y-1">
                <p className="text-xl text-gray-700">Lunes - Viernes: 8:00am - 4:00pm</p> {/* Texto más grande */}
                <p className="text-xl text-gray-700">Sábados: 8:00am - 1:00pm</p> {/* Texto más grande */}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-blue-600" />
              <span className="text-xl text-gray-700">+51 234 5678</span> {/* Texto más grande */}
            </div>

            <button
              className="w-full bg-blue-500 text-white py-3 rounded-xl shadow-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 mt-6"
              onClick={handleOpenDirectionsModal}
            >
              Cómo llegar
            </button>
          </div>
        </div>

        {/* Mapa */}
        <div className="relative h-[450px] rounded-lg overflow-hidden shadow-lg border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d-71.5933!3d-16.3730!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDIyJzMwLjIiUyA3McKwMzMnMzUuNyJX!5e0!3m2!1ses!2spe!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-allowed"
          />
        </div>
      </div>
    </div>
  );
}
