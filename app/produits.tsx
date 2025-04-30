"use client";
import Image from "next/image";


export default function Produits() {
    const cards = [
        {
            image:"/images/ananasséchés.png",
            title:"Ananas séché",
            pack:"box de 150g",
        },
        {
            image:"/images/27424516.webp",
            title:"Pommes de Terre",
            pack:"sac de 5-40kg",
        },
        {
            image:"/images/Capture.png",
            title:"Friandises",
            pack:"Box de 50g",
        },
       
    ]

  return (  
    <div className="px-6 md:px-16 py-12 bg-white">
        <h1 className="text-4xl md:text-6xl font-medium text-black py-3"> Nos Produits</h1>
        <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-3 lg:gap-4 my-2">
            {cards.map((card, idx) => (
              <div 
                key={`${idx}`} 
                className="bg-transparent py-4 px-4 rounded-[24px] space-y-2 lg:mx-1 md:mx-1 mx-6 border-1 border-[#E8E9EA]"
              >
                <div className="w-full h-[260px] relative"> 
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-[8px] object-cover" 
                  />
                </div>
                <div className="px-1 space-y-1 flex justify-between">
                  <h3 className="text-[16px] font-bold text-black">
                    {card.title}
                  </h3>
                  <div className="inline-flex font-bold">
                    <div>
                  
                    </div>
                    <div>
                    <p className="text-black text-[17px]">
                     {card.pack}
                    </p>
                    </div>
                  </div>
                </div>
                <div className="items-center">
                <button className="text-center text-[#E8E9EA] bg-[#2A9D8F] border-1 border-transparent rounded-xl px-4 py-2 w-full mx-1 " onClick = {()=> { window.open("https://wa.me/22997205657", "_blank")}} >
                    Commandez Maintenant
                </button>
                </div>
              </div>
            ))}
        </div>
    </div>)
}