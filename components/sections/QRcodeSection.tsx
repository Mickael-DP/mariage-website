import Image from "next/image";
import Container from "../layout/Container";

const QRcodeSection = () => {
  return (
    <section>
      <Container className="py-0">
        <div className="flex  bg-primary mx-auto md:mx-42 rounded-lg justify-center ">
          <div className="flex flex-col gap-4 md:gap-6 p-4 md:p-8">
            <h2 className="text-4xl font-playfair text-center mb-6">
              Vos photos comptent !
            </h2>
            <p className="text-center">
              Le jour de notre mariage sera rempli de moments uniques, et nous
              aimerions les revivre aussi à travers vos yeux. N’hésitez pas à
              prendre plein de photos et à les partager avec nous grâce à ce QR
              code. Un sourire, une danse, un détail ou un fou rire… chaque
              instant est précieux ! Merci d’avance de contribuer à nos
              souvenirs.
            </p>
            <div className="flex justify-center mt-4">
              <div className="relative w-[200px] h-[200px] p-4">
                <Image
                  src="https://placehold.co/200.png"
                  alt="QR Code pour partager les photos du mariage"
                  className="w-full h-full object-cover object-center border-6 border-white rounded-xl"
                  fill
                />
              </div>
            </div>
            <div>
              <p className="text-center">
                Téléchargez l'application mobile <strong>WedShoots</strong> pour
                accéder au QR code et partager vos photos facilement :
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <a
                  href="https://apps.apple.com/fr/app/wedshoots/id660256196"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src="/assets/badge-apple.svg"
                    alt="Télécharger sur l'App Store"
                    width={160}
                    height={50}
                    className="h-12 w-auto"
                  />
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=net.bodas.android.wedshoots&hl=fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src="/assets/badge-googleplay.svg"
                    alt="Disponible sur Google Play"
                    width={160}
                    height={50}
                    className="h-12 w-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default QRcodeSection;
