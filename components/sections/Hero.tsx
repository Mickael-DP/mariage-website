import Countdown from "../UI/Countdow";
import Container from "../layout/Container";
import Image from "next/image";

const Hero = () => {
  return (
    <Container className="w-full flex flex-col md:flex-row bg-primary">
      <div className="flex-1 flex flex-col justify-center text-center">
        <h1 className="font-marcellus text-5xl md:text-6xl mb-4">
          Amaury & Angélique
        </h1>
        <h2 className="font-marcellus text-3xl md:text-4xl mb-6">
            Save the date
        </h2>
        <p className="font-marcellus text-md text-text md:text-xl mb-4">Nous nous marions le 16 Mai 2026</p>
         <Countdown targetDate="2026-05-16T15:00:00" />
      </div>
          <div className="flex-1 flex items-center justify-center">
        <Image
          src="/amau&angelique.jpg"
          alt="Amaury et Angélique"
          layout="responsive"
          width={540}
          height={475}
          className="rounded-lg "
        />
      </div>
    </Container>
  );
};

export default Hero;
