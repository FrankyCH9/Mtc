import React from "react";
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import './Footer.css'; // Asegúrate de tener este archivo y la ruta correcta

const Footer = () => {
  return (
    <footer className="footer-background text-white mt-0 rounded-none">
      <div className="container mx-auto py-10 px-5">
        <div className="flex flex-wrap gap-10 justify-between">
          {/* Logo y Redes Sociales */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold mb-4">
              <span className="text-black">Policlínico</span>
              <span className="text-gradient bg-gradient-to-r text-white text-transparent bg-clip-text">
                {" "}Alcides Carrión AQP
              </span>
            </h1>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" aria-label="Facebook">
                <FaFacebook className="text-3xl hover:text-gray-300" />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram className="text-3xl hover:text-gray-300" />
              </a>
            </div>
          </div>

          

          <div>
            <h2 className="text-xl font-bold mb-4">Contáctanos</h2>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FaPhone />
                <span>913334439</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope />
                <span>lidiamercedesca24@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt />
                <span>Arequipa Paucarpata Av.Calle los pinos</span>
              </li>
              <li>Lun a viernes 8am - 5 pm</li>
              <li>Sabados: 8:00 am - 1:00pm</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center mt-10">
          <div className="space-x-4">
            <span>Yape</span>
            <span>BCP</span>
          </div>
          <div>
            <p>Policlínico Alcides Carrión AQP © 2024 Creado por <a href="https://www.facebook.com/profile.php?id=61562778300214" className="underline">Fiel-Store</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
