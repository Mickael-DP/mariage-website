import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-primary pt-8">

        <div className="flex flex-col md:flex-row md:justify-around mb-6">
          <div className="flex flex-col gap-2">
            <h2 className="font-playfair font-bold">Amaury et Angélique</h2>
            <p className="font-marcellus text-text">Notre site de mariage, save the date</p>
          </div>
          <div className="flex flex-col md:flex-row gap-10">
            <div>
              <h3 className="font-playfair font-bold mb-2">Plan du site</h3>
              <ul>
                <li className="font-marcellus text-text">Accueil</li>
                <li className="font-marcellus text-text">Liste de mariage</li>
                <li className="font-marcellus text-text">Programme</li>
                <li className="font-marcellus text-text">Info pratique</li>
              </ul>
            </div>
            <div>
              <h3 className="font-playfair font-bold mb-2">Contact</h3>
              <ul>
                <li className="font-marcellus text-text">
                Numéro de tel:
                  <a href="mailto: " className="underline" />
                </li>
                <li className="font-marcellus text-text">
                  Téléphone:
                  <a href="tel: " className="underline" />
                </li>
              </ul>
            </div>
          </div>
        </div>

      <div className='flex flex-col items-center text-center gap-2 px-4 py-4 text-xs'>
				
				<div className='w-full text-center py-2'>
					© {new Date().getFullYear()} MDP-Développeur Freelance. Tous droits
					réservés.
				</div>
			</div>

    </footer>
  );
};

export default Footer;
