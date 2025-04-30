"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";



const links = [
  { path: "", label: "Acceuil" },
  { path: "Topsales", label: "Nos Offres" },
  { path: "Collections", label: "Avis" },
  { path: "Contact", label: "Nous Contacter" },
 
];
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex  justify-between py-2 px-6">
      <div className="py-1 flex">
        <Image src="/images/logoAgroAV.jpg" alt="logo_nft" width={90} height={60} />
        <p className=" items-center  ml-1 mt-3">
            <span className="text-2xl font-bold text-gray-800"> AgroAV</span> <br />
            <span>Agro Alimentaire Vivi</span>
        </p>
      </div>

      <nav className="hidden md:flex gap-6 py-8">
        {links.map((link) => (
          <Link
            key={link.path}
            href={`#${link.path}`}
            className=" text-xl font-normal text-[#2A9D8F] hover:text-green-500">
            {link.label}
          </Link>
        ))}
      </nav>
      
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {
            menuOpen ? (
                <Image
                src="/images/icones/Close.png"
                alt="Bouton Menu"
                width={20}
                height={20}
              />
            ):(
                <Image
            src="/images/icones/Menu.png"
            alt="Bouton Menu"
            width={36}
            height={36}
          />
            )
          }
          
        </button>
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white text-left text-black flex flex-col items-start py-5 shadow-lg md:hidden">
            <div className=" mx-6 flex flex-col">
            {links.map((link) => (
            <Link
              key={link.path}
              href={`/${link.path}`}
              className="py-2.5  hover:text-gray-400"
              onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
            </div>
         
            
          
        </div>
      )}
    </div>
  );
}
