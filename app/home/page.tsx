import ContentBlocImgTxt from "@/components/layout/ContentBlocImgTxt";
import ContentImgSection from "@/components/layout/ContentImgSection";
import Hero from "@/components/layout/Hero";

export default function HomePage() {
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
        <h2 className="text-center text-5xl font-playfair py-12">Notre Histoire</h2>
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
      </section>
    </div>
  );
}
