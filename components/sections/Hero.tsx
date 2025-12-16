import Countdown from "../UI/Countdow";
import Container from "../layout/Container";
import Image from "next/image";
import MotionWrapper from "../UI/MotionWrapper";

const Hero = () => {
  return (
    <Container className="w-full flex flex-col md:flex-row bg-primary gap-6">
      <div className="flex-1 flex flex-col justify-center text-center">
        <MotionWrapper direction="up" delay={0.1}>
          <h1 className="font-marcellus text-5xl md:text-6xl mb-4">
            Angélique & Amaury
          </h1>
        </MotionWrapper>
        <MotionWrapper direction="up" delay={0.2}>
          <h2 className="font-marcellus text-3xl md:text-4xl mb-6">
            Save the date
          </h2>
        </MotionWrapper>
        <MotionWrapper direction="up" delay={0.3}>
          <p className="font-marcellus text-md text-text md:text-xl mb-4">Nous nous marions le 16 Mai 2026</p>
        </MotionWrapper>
        <MotionWrapper direction="up" delay={0.4}>
          <Countdown targetDate="2026-05-16T13:30:00" className="hidden md:flex" />
        </MotionWrapper>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <MotionWrapper direction="up" delay={0.5}>
          <Image
            src="/assets/images/amau&angelique.jpg"
            alt="Amaury et Angélique"
            layout="responsive"
            width={540}
            height={475}
            className="rounded-lg "
          />
        </MotionWrapper>
      </div>
      <Countdown targetDate="2026-05-16T13:30:00" className="flex md:hidden mt-10" />
    </Container>
  );
};

export default Hero;
