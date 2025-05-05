"use client";


import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-white">
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-6xl font-medium text-black leading-tight text-left">
        Nous sommes ce que nous mangeons, 
        </h1>
        <p className="text-[#2A9D8F] text-lg text-left">
        Mangez sain, mangez bon et surtout mangez bien avec  AgroAv
        </p>
        <div className=" items-center md:items-start">
          <a href="https://wa.me/2290197205657"
    target="_blank"
    rel="noopener noreferrer" className="flex items-center gap-2 bg-transparent text-black px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition duration-300 ease-in-out" 
           >
            Contactez Nous
            <p className="border-1 border-black rounded-full px-2.5 py-1 text-[18px]" >
             →
            </p>  
          </a>
        </div>
      </div>

      {/* section 2*/}
      <div className="  ">
        <div className=" transform transition duration-500 hover:scale-105 mb-[-50px]">
     
        <Image
            src="/images/heroPromo.jpeg"
            alt="Famille heureuse"
            width={500}
            height={200}
            className="rounded-[264px] "
          />
          </div>
         
      </div>
    </section>
  );
}