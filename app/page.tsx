
import Header from "./header";
import HeroSection from "./herosection";
import Produits from "./produits";
import Footer from "./footer";
import Avis from "./avis";
import ContactForm from "./contact";


export default function Home() {
  return (
    <div>
      <Header />
      <section id="Acceuil">
        <HeroSection />
      </section>
      <section id="Topsales">
        <Produits />
      </section>
      <section id="Collections">
        <Avis />
      </section>
      <section id="Blog">
        <ContactForm />
      </section>
  
      <Footer />
    </div>
    
  );
}

