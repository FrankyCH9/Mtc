"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { Button, Modal, Backdrop, Fade } from '@mui/material';
import './heros.css';
import dynamic from 'next/dynamic';
import InfoPortada from './infoportada/InfoPortada';
const Ubicacion = dynamic(() => import('./ubicacion/Ubicacion'), {
  ssr: false,
});

const HeroSection = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className="lg:py-16 ">
      <div className="absolute inset-0 flex items-center justify-center bg-opacity-100 ">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 object-cover w-full h-full"
        >
          <source src="/images/port1.mp4" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>

        <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
          <div className="flex flex-col items-center justify-center gap-y-4  w-full ">
            <span className="subt ">Obtén tu Licencia de Conducir</span>
            <hr className="border-white border-b-2 w-[40%] mt-1 linex" />
            <h1 className="port">LICENCIAS EN AREQUIPA </h1>
            <Button
              variant="contained"
              className="px-10 py-3 text-lg mt-5 bg-red-500 text-white"
              onClick={handleOpen}
            >
              Información
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className="modal">
                  <div className="modal-content">
                    <h2 className="modal-title" id="modal-modal-title">Información</h2>
                    <p className="modal-body" id="modal-modal-description">Para obtener tu licencia de conducir, ofrecemos los siguientes servicios:</p>
                    <ul>
                      <li>&#8226; <strong>Examen médico psicosomático</strong></li>
                      <li>&#8226; <strong>Nuevo AI</strong></li>
                      <li>&#8226; <strong>AI, AIIá, AIIb, AIIIa, AIIIB, AIIIC, AIV</strong></li>
                      <li>&#8226; <strong>Recategorización</strong></li>
                      <li>&#8226; <strong>AI, AIIá, AIIb, AIIIa, AIIIB, AIIIC, AIV</strong></li>
                      <li>&#8226; <strong>Revalidación</strong></li>
                      <li>&#8226; <strong>AI, AIIá, AIIb, AIIIa, AIIIB, AIIIC, AIV</strong></li>
                      <li>&#8226; <strong>Licencias electronicas</strong></li>
                    </ul>
                    <br></br>
                    <button className="modal-close" onClick={handleClose}>Cerrar</button>
                  </div>
                </div>
              </Fade>

            </Modal>
          </div>
        </div>

        <InfoPortada />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 prueba flex">
        <div className="col-span-5 lg:col-span-7 flex flex-col justify-center">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
              Hola, yo soy   {""}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Lidia ",
                1000,
                "Mercedes",
                1000,
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            y estoy aquí para ayudarte a facilitar el proceso de obtención de tu licencia de conducir de manera segura y eficiente.
          </p>

        </div>


        <div className="col-span-7 lg:col-span-5 flex justify-center">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/uno.jpeg"
              alt="images"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
      <br></br>

      <div className="">
        <div className="mt-10  font-bold text-4xl mb-4 text-white ">
          <h2>Ubicación</h2>
        </div>
        <div className="mapax ">
          <div className="flex items-center flex-col justify-center ">
            <div className="w-full lg:w-1/2 pb-[22%] text-white" >
              <h2 className="py-2 mb-4  font-bol">Encuentranos en:</h2>
              <p className="text-base lg:text-lg">
                <span className="block mb-2">🌍 Arequipa</span>
                <span className="block mb-2">📍 Av. Los Pinos</span>
                <span className="block">🏢 Urb. Casa Blanca MZ. A-Lote 5</span>
                <span className="block">🏢 Referencia a una cuadra del reservorio de Guardia Civil</span>
                <span className="block">🏢 Jose Luis Bustamante y Rivera - Arequipa</span>
              </p>




            </div>
          </div>

          <Ubicacion className="" />
        </div>

      </div>
    </section>
  )
}

export default HeroSection;
