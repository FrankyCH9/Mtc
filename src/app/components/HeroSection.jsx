"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from "react-type-animation";
import "./heros.css"



import dynamic from 'next/dynamic';
import InfoPortada from './infoportada/InfoPortada';
const Ubicacion = dynamic(() => import('./ubicacion/Ubicacion'), {
    ssr: false,
})


const HeroSection = () => {
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
                    {/* Aquí puedes agregar más fuentes de video para otros formatos */}
                    Tu navegador no soporta la etiqueta de video.
                </video>

                <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                    <div className='flex flex-col items-center justify-center gap-y-4  w-full '>
                        <span className='subt '>Obtén tu Licencia de Conducir</span>
                        <hr className="border-white border-b-2 w-[40%] mt-1 linex" />
                        <h1 className='port'>LICENCIAS EN AREQUIPA </h1>
                        <button className='px-10 py-3 text-lg mt-5   bg-red-500    text-white'>Info</button>
                    </div>

                </div>

                <InfoPortada />

            </div>



            <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 prueba'>
                <div className='col-span-5 lg:col-span-7 flex flex-col justify-center'>
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 '>
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
                    <br></br>

                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        y estoy aquí para ayudarte a facilitar el proceso de obtención de tu licencia de conducir de manera segura y eficiente.
                    </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Nuevo</button>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white  mt-3'>
                            <span className='block  hover:bg-slate-800 roun-full px-5 py-2'>Descargar Tarjeta</span>
                        </button>
                    </div>
                </div>

                <div className='col-span-7 lg:col-span-5 flex justify-center'>
                    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image
                            src="/images/Lidia.png"
                            alt="images"
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={300}
                            height={300} />
                    </div>
                </div>




            </div>
            <div className=''>
                <div className='mt-10  font-bold text-4xl mb-4 text-white '>
                    <h2>Ubicacion</h2>
                </div>
                <div className='mapax '>
                    <div className='flex items-center flex-col justify-center '>
                        <div className='w-full lg:w-1/2 pb-[22%] text-white' >
                            <h2 className='py-2 mb-4  font-bol'>ENCUENTRANOS EN</h2>
                            <p className='text-base lg:text-lg' >
                                Arequipa <br />Av. ... <br />Referencia ...
                            </p>
                        </div>

                    </div>

                    <Ubicacion className='' />
                </div>

            </div>




        </section>
    )
}

export default HeroSection

