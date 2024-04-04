import React from "react";
import { FiMail, FiPhone, FiMessageSquare } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white ">
      <div className="container py-12 flex flex-col md:flex-row md:justify-between md:items-center ">
        <span className="text-3xl font-bold">LM</span>
        <div className="mt-8 md:mt-0 md:flex md:items-center flex-wrap">
          <div className="md:mr-8">
            <p className="text-slate-600">Contáctenos a estos números:</p>
            <p className="text-slate-600">
              <a href="tel:+51944202238" className="flex items-center text-slate-600">
                <FiPhone className="mr-2" /> +51 944 202 238 (Teléfono)
              </a>
            </p>
            <p className="text-slate-600">
              <a href="https://wa.me/51944202238" className="flex items-center text-slate-600">
                <FiMessageSquare className="mr-2" /> +51 944 202 238 (WhatsApp)
              </a>
            </p>
            <p className="text-slate-600">
              <a href="tel:+51944202238" className="flex items-center text-slate-600">
                <FiPhone className="mr-2" /> +51 913 334 439 (Teléfono)
              </a>
            </p>
            <p className="text-slate-600">
              <a href="https://wa.me/51944202238" className="flex items-center text-slate-600">
                <FiMessageSquare className="mr-2" /> +51 913 334 439 (WhatsApp)
              </a>
            </p>
            
            
            <p className="text-slate-600">
              <a href="mailto:Bebelidia_24@hotmail.com" className="flex items-center text-slate-600">
                <FiMail className="mr-2" /> Bebelidia_24@hotmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
