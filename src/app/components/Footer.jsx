import React from "react";
import { FiMail, FiPhone, FiMessageSquare } from "react-icons/fi";
import "./Footer.css"; // Importa el archivo CSS aquí

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white bg-footer-image">
      <div className="container py-12 flex flex-col md:flex-row md:justify-between md:items-center ">
        <span className="text-3xl font-bold">Policlínico Atenea</span>
        <div className="mt-8 md:mt-0 md:flex md:items-center flex-wrap">
          <div className="md:mr-8">
            <ContactItem
              icon={<FiMessageSquare className="mr-2" />}
              text="+51 944 202 238 (WhatsApp)"
              link="https://wa.me/51944202238"
            />
            <ContactItem
              icon={<FiPhone className="mr-2" />}
              text="+51 913 334 439 (Teléfono)"
              link="tel:+51913334439"
            />
            <ContactItem
              icon={<FiMessageSquare className="mr-2" />}
              text="+51 913 334 439 (WhatsApp)"
              link="https://wa.me/51913334439"
            />
            <ContactItem
              icon={<FiMail className="mr-2" />}
              text="Bebelidia_24@hotmail.com"
              link="mailto:Bebelidia_24@hotmail.com"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

const ContactItem = ({ icon, text, link }) => {
  return (
    <p className="text-white">
      <a href={link} className="flex items-center text-white">
        {icon} {text}
      </a>
    </p>
  );
};

export default Footer;
