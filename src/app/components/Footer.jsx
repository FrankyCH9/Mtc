import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex flex-col md:flex-row md:justify-between md:items-center">
        <span className="text-3xl font-bold">LM</span>
        <div className="mt-8 md:mt-0 md:flex md:items-center flex-wrap">
          <div className="md:mr-8">
            <p className="text-slate-600">Contáctenos a estos números:</p>
            <p className="text-slate-600">Teléfono: 944202238</p>
            <p className="text-slate-600">Correo Electrónico: Bebelidia_24@hotmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
