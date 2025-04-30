import Image from "next/image";
import Link from "next/link";
import { MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <div className="md:px-16 py-12 bg-white">
      <div className="mb-1">
        <Image src="/images/logoAgroAV.jpg" alt="logo_nft" width={30} height={30} />
      </div>
      <hr className="font-extralight my-2" />
      <div className=" md:flex md:justify-between">
        <div className="space-y-1" >
          <p className="text-[24px] font-bold ">AgroAv</p>
          <p className="flex text-black font-semibold"> <MapPin /> Cotonou, Benin </p>
         
        </div>
          

        <div className="space-x-3 text-center font-semibold " >
          
          <Link href="/terms" className="hover:text-gray-700">Termes & Conditions</Link>
          <Link href="/about" className="hover:text-gray-700">A propos de Nous</Link>
          <Link href="/faq" className="hover:text-gray-700">FAQ</Link>
        </div>
      </div>
    </div>
  );
}
