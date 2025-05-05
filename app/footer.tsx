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
      
      <div className="md:flex md:justify-between">
        <div className="space-y-1 mb-4 md:mb-0 text-[#2A9D8F] ml-4">
          <p className="text-[24px] font-bold">AgroAv</p>
          <p className="flex text-black font-semibold items-center space-x-1 text-[#2A9D8F]">
            <MapPin className="mr-1 text-[#2A9D8F]" /> <span className="text-[#2A9D8F]">Cotonou, Benin</span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0 text-left md:text-center font-semibold ml-4">
          <Link href="/terms" className="hover:text-gray-700">Termes & Conditions</Link>
          <Link href="/about" className="hover:text-gray-700">À propos de Nous</Link>
          <Link href="/faq" className="hover:text-gray-700">FAQ</Link>
        </div>
      </div>
    </div>
  );
}
