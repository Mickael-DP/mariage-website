import Image from "next/image";
import Container from "../layout/Container";

const QRcodeSection = () => {
  return (
    <section id="partage-photos" className="bg-white py-10 md:py-16">
      <Container>
        <div className="bg-primary rounded-3xl p-8 md:p-12 max-w-5xl mx-auto shadow-sm">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-playfair text-text mb-4">
              Vos photos comptent !
            </h2>
            <p className="font-marcellus text-sm md:text-base text-gray-800 italic max-w-2xl mx-auto">
              "Aidez-nous à immortaliser cette journée en partageant vos plus beaux clichés sur notre album partagé."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-10">
            {/* Étape 1 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <h3 className="font-playfair font-bold text-xl text-text">
                1. Téléchargez l'application
              </h3>
              <p className="font-marcellus text-sm text-gray-800">
                Recherchez <strong>WedShoots</strong> sur votre store :
              </p>
              <div className="flex flex-col items-center gap-4 pt-2">
                <a
                  href="https://apps.apple.com/fr/app/wedshoots/id660256196"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <Image
                    src="/assets/badge-apple.svg"
                    alt="App Store"
                    width={160}
                    height={50}
                    className="h-12 w-auto"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=net.bodas.android.wedshoots&hl=fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <Image
                    src="/assets/badge-googleplay.svg"
                    alt="Google Play"
                    width={160}
                    height={50}
                    className="h-12 w-auto"
                  />
                </a>
              </div>
            </div>

            {/* Étape 2 */}
            <div className="flex flex-col items-center text-center space-y-4 border-t md:border-t-0 md:border-l border-black/10 pt-8 md:pt-0 md:pl-8">
              <h3 className="font-playfair font-bold text-xl text-text">
                2. Scannez le QR code
              </h3>
              <p className="font-marcellus text-sm text-gray-800">
                Entrez sur l'application et scannez le code :
              </p>
              <div className="bg-white p-3 rounded-2xl shadow-md transition-transform hover:scale-105 duration-300">
                <div className="relative w-[130px] h-[130px]">
                  <Image
                    src="/assets/QRcode-album.png"
                    alt="QR Code WedShoots"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-black/10 text-center">
            <h3 className="font-playfair font-bold text-xl text-text mb-2">
              3. Partagez l'instant
            </h3>
            <p className="font-marcellus text-sm md:text-base text-gray-800 leading-relaxed max-w-2xl mx-auto">
              Prenez des photos pendant la fête ! Elles s'ajouteront automatiquement à notre souvenir commun.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default QRcodeSection;
