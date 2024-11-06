"use client";
import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="flex justify-center items-center py-8 px-4">
      <div className="w-full md:w-1/2">
        <Image src="/images/policlinica.png" width={800} height={500} alt="Sobre nosotros" className="object-cover" />
      </div>
    </section>
  );
};

export default AboutSection;
