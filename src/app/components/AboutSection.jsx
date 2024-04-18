  "use client";
  import React, { useState } from "react";
  import Image from "next/image";
  import TabButton from "./TabButton";
  
  const TAB_DATA = [
    {
      title: "Dias laborables",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Lunes</li>
          <li>Martes</li>
          <li>Miercoles</li>
          <li>Jueves</li>
          <li>Viernes</li>
          <li>Sabado</li>
        </ul>
      ),
    },
    {
      title: "Ofrecemos",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>EXAMENES MEDICOS</li>
          <li>REVALIDACIONES</li>
          <li>LICENCIAS ELECTRONICAS</li>
        </ul>
      ),
    },
  ];
  
  const AboutSection = () => {
    const [tab, setTab] = useState("skills");
  
    const handleTabChange = (id) => {
      setTab(id);
    };
  
    return (
      <section className="text-white" id="about">
        <div className="container mx-auto py-8 px-4 xl:px-16 md:flex items-center">
          <div className="md:w-1/2 md:pr-8">
            <Image src="/images/hola.jpeg" width={800} height={500} />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 text-left">
            <h2 className="text-4xl font-bold mb-4">Sobre Nosotros</h2>
            <p className="text-base lg:text-lg">
              Nos dedicamos apasionadamente a facilitar el proceso de obtención de licencias de conducir, brindando a nuestros clientes una experiencia personalizada y sin complicaciones.
            </p>
            <div className="flex flex-row justify-start flex-wrap mt-8">
              {TAB_DATA.map((tabItem) => (
                <TabButton
                  key={tabItem.id}
                  selectTab={() => handleTabChange(tabItem.id)}
                  active={tab === tabItem.id}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mr-4 mb-4 text-xl"
                >
                  {tabItem.title}
                </TabButton>
              ))}
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;
  