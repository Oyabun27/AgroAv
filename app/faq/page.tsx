import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="px-6 py-10 bg-white text-gray-800 max-w-5xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-6 text-[#2A9D8F] text-center">
        FAQ - Ananas Séchés & Pommes d&apos;Exception
      </h1>

      <p className="mb-10 text-lg leading-relaxed text-center text-gray-700">
        Retrouvez ici les réponses aux questions les plus fréquentes sur nos produits d&apos;exception, leur préparation, leur conservation, et nos modalités de commande.
      </p>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-[#2A9D8F]  font-semibold text-3xl">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 leading-relaxed text-2xl">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

const faqData = [
  {
    question: "1. Quels produits proposez-vous ?",
    answer: "Nous vous offrons une sélection raffinée d'ananas séchés artisanaux et de pommes d'exception, choisis pour leur saveur, leur fraîcheur et leur qualité irréprochable.",
  },
  {
    question: "2. Vos produits sont-ils naturels ?",
    answer: "Absolument. Nos ananas séchés sont 100% naturels, sans sucres ajoutés, sans additifs ni conservateurs. Nos pommes sont issues d'une culture raisonnée, respectueuse de l'environnement.",
  },
  {
    question: "3. Quelle est votre méthode de préparation ?",
    answer: "Nos ananas sont préparés à la main et séchés lentement à basse température afin de préserver toutes leurs qualités gustatives et nutritionnelles.",
  },
  {
    question: "4. Quelle est l'origine de vos fruits ?",
    answer: "Nous collaborons avec des producteurs locaux de renom, sélectionnés pour leur excellence et leur engagement envers une agriculture durable.",
  },
  {
    question: "5. Comment conserver vos produits ?",
    answer: "Ananas séchés : conservez-les dans un endroit frais, sec et à l'abri de la lumière. Pommes fraîches : préférez une conservation dans un environnement frais pour prolonger leur croquant naturel.",
  },
  {
    question: "6. Quelle est la durée de conservation ?",
    answer: "Ananas séchés : jusqu’à 6 mois après ouverture. Pommes fraîches : idéales à consommer sous 10 jours pour savourer pleinement leur qualité.",
  },
  {
    question: "7. Quels formats proposez-vous ?",
    answer: "Nous proposons des sachets d’ananas séchés de 100g, 250g et 500g ainsi que des paniers de pommes de 3 kg, soigneusement présentés.",
  },
  {
    question: "8. Est-il possible de commander en quantité importante ?",
    answer: "Oui. Pour vos événements, cadeaux d'entreprise ou approvisionnements réguliers, nous offrons des solutions sur mesure. Contactez notre service clientèle pour une offre personnalisée.",
  },
  {
    question: "9. Proposez-vous la livraison ?",
    answer: "Nous assurons des livraisons élégantes et ponctuelles, avec des frais variables selon votre localisation.",
  },
  {
    question: "10. Comment passer commande ?",
    answer: "Commandez en toute simplicité via notre site internet, par téléphone ou message privé sur nos réseaux sociaux. Un conseiller dédié est également à votre disposition pour toute demande spéciale.",
  },
  {
    question: "11. Quels sont vos moyens de paiement acceptés ?",
    answer: "Nous acceptons les paiements par espèces, paiement mobile (MoMo, Orange Money…) et virement bancaire sécurisé.",
  },
  {
    question: "12. Vos produits conviennent-ils aux régimes particuliers ?",
    answer: "Oui, nos ananas séchés sont compatibles avec les régimes végétariens, végans, ainsi que les régimes sans gluten, pour une gourmandise saine et responsable.",
  },
];
