'use client'

import Image from "next/image";

import { FaQuoteLeft,} from "react-icons/fa";

export default function Avis() {
  const testimonials = [
    {
      id: 1,
      name: "Marc Ouedraogo",
      image: "/images/papaOuedraogo.png",
      poste:  "Directeur de Supermarché",
      content: "Nos clients recherchent des produits locaux de qualité, et grâce à AgroAv, nous pouvons leur offrir des ananas et des pommes de terre d’une fraîcheur inégalée. Une vraie valeur ajoutée pour notre enseigne ",
    },
    {
        id: 2,
        name: "Nawal Adegbin",
        image: "/images/femmeAfricaine.png",
        poste:  "Importatrice de produits alimentaires",
        content: "Le séchage est parfaitement maîtrisé, et la qualité des ananas est constante. Un excellent produit qui plaît énormément à nos clients à la recherche de snacks sains et gourmands",
    },
    {
      id: 3,
      name: "Blaise Ouattara",
      image: "/images/Ouattara.png",
      poste:  "Responsable de la qualité",
      content: "Nos clients adorent ces ananas séchés ! Leur goût est authentique, et leur texture est juste parfaite. C’est un produit qui se vend très bien, et nous sommes fiers de proposer une telle qualité..",
    },
   
    {
      id: 4,
      name: "Patricia Kone",
      image: "/images/Patricia.png",
      poste:  "Restauratrice",
      content: "Depuis que je travaille avec AgroAv, je n’ai plus aucun souci d’approvisionnement en pommes de terre. Elles sont fermes, bien calibrées et parfaites pour tous types de plats. Un excellent rapport qualité-prix ",
    }
  ];

interface Testimonial {
    id: number;
    name: string;
    image: string;
    poste:string;
    content: string;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
    
    
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 mr-4">
                    <Image
                        src={ testimonial.image}
                        alt={testimonial.name}
                        className="rounded-full object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, 64px"
                        priority={false}
                    />
                </div>
                <div>
                    <h3 className="font-bold text-lg text-gray-900">{testimonial.name}</h3>
                    <h3 className="font-light text-xl text-gray-400">{testimonial.poste}</h3>
                </div>
            </div>
            <div className="flex-grow">
                <FaQuoteLeft className="text-[#2A9D8F] text-2xl mb-2" />
                <p className="text-gray-700 italic">{testimonial.content}</p>
            </div>
           
        </div>
    );
};

  return (
    <section className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
             Ce qu &apos; ils disent de nous
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Découvrez pourquoi nos client nous choisissent et nous font toujours confiance.
            </p>
            <button className="bg-[#2A9D8F] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#2A9D8F] transform hover:scale-105 transition-all duration-300 shadow-lg">
              Voir plus ... 
            </button>
          </div>

          <div className="space-y-6 max-h-[80vh] overflow-y-auto pr-4 testimonial-scrollbar">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonial-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .testimonial-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .testimonial-scrollbar::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }
        .testimonial-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </section>
  );
}