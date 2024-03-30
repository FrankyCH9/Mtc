"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from "react-type-animation";
import "./heros.css"

const HeroSection = () => {
    return (
        <section className="lg:py-16">
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-50">
                <Image
                    src="/images/licencia.jpg"
                    alt="images"
                    objectFit="cover"
                    layout="fill"
                    className="opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                    <p>lICENCIAS EN AREQUIPA </p>
                </div>
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
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white border botder border-white mt-3'>
                            <span className='block bg-[#121212] hover:bg-slate-800 roun-full px-5 py-2'>Descargar Tarjeta</span>
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
        </section>
    )
}

export default HeroSection

