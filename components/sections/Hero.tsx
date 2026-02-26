import Image from "next/image";

import Countdown from "../UI/Countdow";
import Container from "../layout/Container";
import MotionWrapper from "../UI/MotionWrapper";

const Hero = () => {
  return (
    <Container className="w-full flex flex-col md:flex-row bg-primary gap-6">
      <div className="flex-1 flex flex-col justify-center text-center">
        <MotionWrapper delay={0.1} direction="up">
          <h1 className="font-marcellus text-5xl md:text-6xl mb-4">
            Angélique & Amaury
          </h1>
        </MotionWrapper>
        <MotionWrapper delay={0.2} direction="up">
          <h2 className="font-marcellus text-3xl md:text-4xl mb-6">
            Save the date
          </h2>
        </MotionWrapper>
        <MotionWrapper delay={0.3} direction="up">
          <p className="font-marcellus text-md text-text md:text-xl mb-4">
            Nous nous marions le 16 Mai 2026
          </p>
        </MotionWrapper>
        <MotionWrapper delay={0.4} direction="up">
          <Countdown
            className="hidden md:flex"
            targetDate="2026-05-16T13:30:00"
          />
        </MotionWrapper>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <MotionWrapper delay={0.5} direction="up">
          <Image
            alt="Amaury et Angélique"
            className="rounded-lg "
            height={475}
            layout="responsive"
            src="/assets/images/amau&angelique.jpg"
            width={540}
          />
        </MotionWrapper>
      </div>
      <Countdown
        className="flex md:hidden mt-10"
        targetDate="2026-05-16T13:30:00"
      />
    </Container>
  );
};

export default Hero;
