import Container from "@/components/layout/Container";
import Hero from "@/components/sections/Hero";
import ContentImgSection from "@/components/sections/ContentImgSection";
import ContentBlocImgTxt from "@/components/sections/ContentBlocImgTxt";
import QRcodeSection from "@/components/sections/QRcodeSection";
import CardProgram from "@/components/UI/CardProgram";
import CardMobile from "@/components/UI/CardMobile";

export default function HomePage() {
  const isMobileView = typeof window !== "undefined" && window.innerWidth < 768;
  const isDesktopView =
    typeof window !== "undefined" && window.innerWidth >= 768;
  return (
    <div className="flex flex-col ">
      <Hero />
      <ContentImgSection
        title="Bienvenue sur notre site de mariage"
        description="Nous sommes ravis de partager avec vous les détails de notre journée spéciale. Explorez le site pour en savoir plus sur notre histoire, le programme de la journée, et bien plus encore."
        imageSrc="/amau&angelique2.JPG"
        imageAlt="Notre Histoire"
        reverse={true}
        ctaText="Liste de mariage"
        ctaHref="/notre-histoire"
        ctaOnClick={() => console.log("CTA clicked")}
        ctaColor="primary"
        ctaClassName="text-black"
      />
      <section className="bg-primary">
        <h2 className="text-center text-5xl font-playfair py-12">
          Notre Histoire
        </h2>

        <div className="md:hidden px-6 flex flex-col gap-6 mb-12">
          <CardMobile
            subtitle="test"
            title="Notre Histoire"
            description="Découvrez l'histoire de notre amour et les moments clés qui nous ont réunis."
            imageSrc="https://placehold.co/256x200.png"
            imageAlt="Notre Histoire"
            className="bg-white"
          />
          <CardMobile
            subtitle="test"
            title="Notre Engagement"
            description="Nous nous engageons à faire de ce jour un moment inoubliable pour vous tous."
            imageSrc="https://placehold.co/256x200.png"
            imageAlt="Notre Engagement"
            className="bg-white"
          />
        </div>

        <div className="hidden md:block">
          <ContentBlocImgTxt
            title="Notre Histoire"
            description="Découvrez l'histoire de notre amour et les moments clés qui nous ont réunis."
            imageSrc="/amau&angelique.jpg"
            imageAlt="Notre Histoire"
            reverse={false}
          />
          <ContentBlocImgTxt
            title="Notre Engagement"
            description="Nous nous engageons à faire de ce jour un moment inoubliable pour vous tous."
            imageSrc="/amau&angelique.jpg"
            imageAlt="Notre Engagement"
            reverse={true}
          />
        </div>
      </section>
      <section className="bg-white ">
        <h2 className="text-center text-5xl font-playfair mt-10 ">
          Le Programme
        </h2>
        <Container className="flex gap-6 md:flex-row justify-between flex-wrap">
          <CardProgram
            title="Cérémonie Civile"
            description="Mairie du 16ème"
            imageSrc="https://placehold.co/360x240.png"
            imageAlt="Cérémonie civile"
            className="shadow-none border-1 border-text"
          />
          <CardProgram
            title="Vin d'honneur"
            description="Jardin du château"
            imageSrc="https://placehold.co/360x240.png"
            imageAlt="Vin d'honneur"
            className="shadow-none border-1 border-text"
          />
          <CardProgram
            title="Dîner & Soirée"
            description="Salle de réception"
            imageSrc="https://placehold.co/360x240.png"
            imageAlt="Dîner et soirée"
            className="shadow-none border-1 border-text"
          />
        </Container>
      </section>
      <QRcodeSection />
    </div>
  );
}
