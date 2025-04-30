import React from "react";
export default function Terms() {
  return (
    <div className="px-6 py-10 bg-white text-gray-800 max-w-5xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-6 text-[#2A9D8F] text-center">Termes et Conditions</h1>

      <p className="mb-8 text-lg leading-relaxed text-center">
        Bienvenue sur notre site. Veuillez lire attentivement les présents Termes et Conditions avant d'utiliser nos services. 
        En accédant à notre site ou en passant commande, vous acceptez de vous conformer aux présentes conditions.
      </p>

      <div className="space-y-8">
        <Section title="1. Présentation du Site">
          Ce site est exploité par <span className="font-semibold">AgroAv</span>, spécialiste de la vente d'ananas séchés et de pommes de qualité supérieure. 
          Notre mission : vous offrir des produits naturels et savoureux, directement issus des meilleurs producteurs.
        </Section>

        <Section title="2. Produits">
          Les produits proposés à la vente sont décrits avec la plus grande précision possible. Les photographies sont non contractuelles mais représentatives de la qualité attendue.
        </Section>

        <Section title="3. Commandes">
          Toute commande passée via notre site implique une acceptation entière et sans réserve des présentes Conditions Générales de Vente.
          Nous nous réservons le droit de refuser ou d'annuler toute commande pour des motifs légitimes (litige antérieur, stock insuffisant, erreur manifeste).
        </Section>

        <Section title="4. Prix">
          Les prix affichés sont indiqués en [devise locale], toutes taxes comprises (TTC), hors frais de livraison.
          Nous nous réservons le droit de modifier nos prix à tout moment, sans préavis, tout en garantissant l'application du tarif en vigueur au moment de la commande.
        </Section>

        <Section title="5. Paiement">
          
         Les paiements sont sécurisés et peuvent s'effectuer par :
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Espèces à la livraison</li>
            <li>Paiement mobile (MoMo, Moov Money…)</li>
            <li>Virement bancaire</li>
          </ul>
          La commande est considérée comme définitive uniquement après validation du paiement.
        </Section>

        <Section title="6. Livraison">
          Nous livrons dans les zones précisées sur notre site.
          Les délais de livraison sont donnés à titre indicatif. Tout retard raisonnable ne saurait donner lieu à l’annulation de la commande ou à des pénalités.
        </Section>

        <Section title="7. Droit de Rétractation">
          Étant donné la nature périssable de nos produits, aucun droit de rétractation ne pourra être exercé après la validation de la commande, conformément aux dispositions légales en vigueur.
        </Section>

        <Section title="8. Responsabilité">
          Nous nous engageons à apporter tout le soin nécessaire à l’exécution de nos services. Toutefois, notre responsabilité ne saurait être engagée en cas d’inconvénients ou de dommages inhérents à l’utilisation d’Internet (rupture de service, intrusion extérieure, virus…).
        </Section>

        <Section title="9. Données Personnelles">
          Les informations personnelles collectées sont nécessaires pour le traitement de vos commandes.
          Elles sont traitées de manière confidentielle et sécurisée. Conformément à la législation applicable, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles.
        </Section>

        <Section title="10. Propriété Intellectuelle">
          Tout contenu présent sur notre site (textes, images, logos, charte graphique) est protégé par le droit d’auteur. Toute reproduction, intégrale ou partielle, est strictement interdite sans autorisation écrite préalable.
        </Section>

        <Section title="11. Modification des Conditions">
          Nous nous réservons le droit de modifier les présentes Conditions à tout moment. Les nouvelles conditions seront applicables dès leur publication sur le site.
        </Section>

        <Section title="12. Droit Applicable">
          Les présentes Conditions sont régies par la loi du Bénin. Tout litige relatif à leur interprétation ou à leur exécution sera soumis aux tribunaux compétents.
        </Section>

        <p className="text-center text-gray-500 text-sm mt-10">
          Dernière mise à jour : Avril 2025
        </p>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-3 text-[#2A9D8F]">{title}</h2>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </div>
  )
}
