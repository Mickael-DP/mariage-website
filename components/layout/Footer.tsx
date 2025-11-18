import { MailIcon, PhoneCall, PhoneIcon } from "lucide-react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-primary pt-8 text-center md:text-left ">
      <div className="flex flex-col md:flex-row md:justify-around gap-4 md:mb-6">
        <div className="flex flex-col md:gap-2 md:text-start">
          <h2 className="font-playfair font-bold">Amaury et Angélique</h2>
          <p className="font-marcellus text-text">
            Nous avons hâte de partager ce moment unique avec vous ! 
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <div>
            <h3 className="font-playfair font-bold mb-2">Plan du site</h3>
            <ul>
              <li className="font-marcellus text-text">
                <a href="/">Accueil</a>
              </li>
              <li className="font-marcellus text-text">
                <a href="/programme">Programme</a>
              </li>
              <li className="font-marcellus text-text">
                <a href="/liste-mariage">Liste de mariage</a>
              </li>
              <li className="font-marcellus text-text">
                <a href="/info-pratique">Info Pratique</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-playfair  font-bold mb-2">Contact</h3>
            <ul>
              <li className="font-marcellus flex gap-3 items-center text-text">
                <MailIcon size={18} />sejalon.angelique@gmail.com 
                <a href="mailto:sejalon.angelique@gmail.com 
 " className="underline" />
              </li>
              <li className="font-marcellus flex gap-3 items-center text-text">
                 <PhoneIcon size={18}/>33 6 84 75 54 57
                <a href="tel:+33684755457" className="underline" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center text-center gap-2 px-4 py-4 text-xs">
        <div className="w-full text-center py-2">
          © {new Date().getFullYear()} <a href="https://www.mdallepasqualine.com/" target="_blank" className="underline">MDP-Développeur Freelance</a>. Tous droits
          réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
