import Container from "@/components/layout/Container";
import Hero from "@/components/sections/Hero";
import ContentImgSection from "@/components/sections/ContentImgSection";
import ContentBlocImgTxt from "@/components/sections/ContentBlocImgTxt";
import QRcodeSection from "@/components/sections/QRcodeSection";
import CardProgram from "@/components/UI/CardProgram";
import CardMobile from "@/components/UI/CardMobile";
import { LinkButton } from "@/components/UI/LinkButton";

export default function HomePage() {
  return (
    <div className="flex flex-col ">
      <Hero />
      <ContentImgSection
        ctaClassName="text-black"
        ctaColor="primary"
        ctaHref="/liste-mariage"
        ctaSize="lg"
        ctaText="Liste de mariage"
        description="Nous sommes ravis de partager avec vous les détails de notre journée spéciale. Explorez le site pour en savoir plus sur notre histoire, le programme de la journée, et bien plus encore."
        imageAlt="Jour de notre rencontre"
        imageSrc="/assets/images/amau&angelique2.JPG"
        reverse={true}
        subtitle=""
        title="Bienvenue sur notre site de mariage"
      />
      <section className="bg-primary">
        <Container>
          <h2 className="text-center text-4xl md:text-5xl font-playfair mb-6">
            Notre Histoire
          </h2>

          <div className="md:hidden flex flex-col gap-6 mb-12">
            <CardMobile
              className="bg-white"
              description="On s’est trouvés en plein Covid, un match improbable devenu une belle évidence, entre couvre-feu et stratagèmes amoureux"
              imageAlt="photo-rencontre"
              imageSrc="/assets/images/photo-rencontre.jpg"
              subtitle="1 Février 2021"
              title="Jour de notre rencontre"
            />
            <CardMobile
              className="bg-white"
              description='Un bateau, un faux prétexte de pêche, un vrai genou à terre… et moi, paniquée : "T’es vraiment sûr ?" — avant de dire oui, évidemment !'
              imageAlt="photo-demande"
              imageSrc="/assets/images/photo-demande.jpg"
              subtitle="26 Juin 2024"
              title="Jour de nos fiançailles"
            />
          </div>

          <div className="hidden md:block">
            <ContentBlocImgTxt
              description="On s’est trouvés en plein Covid, un match improbable devenu une belle évidence, entre couvre-feu et stratagèmes amoureux"
              imageAlt="photo-rencontre"
              imageSrc="/assets/images/photo-rencontre.jpg"
              reverse={false}
              subtitle="1 Février 2021"
              title="Jour de notre rencontre"
            />
            <ContentBlocImgTxt
              description='Un bateau, un faux prétexte de pêche, un vrai genou à terre… et moi, paniquée : "T’es vraiment sûr ?" — avant de dire oui, évidemment !'
              imageAlt="photo-demande"
              imageSrc="/assets/images/photo-demande.jpg"
              reverse={true}
              subtitle="26 Juin 2024"
              title="Jour de nos fiançailles"
            />
          </div>
        </Container>
      </section>
      <section className="bg-white " id="programme">
        <h2 className="text-center text-4xl md:text-5xl font-playfair pt-12">
          Le Programme
        </h2>
        <Container className="flex gap-4 md:gap-6 md:flex-row justify-between flex-wrap">
          <CardProgram
            className="shadow-none border-1 border-text"
            description="Église de Thizy les Bourgs"
            imageAlt="Cérémonie civile"
            imageSrc="/assets/images/photo-eglise.jpg"
            title="Cérémonie à l'église"
          />
          <CardProgram
            className="shadow-none border-1 border-text"
            description="Jardin du Domaine de Laforest"
            imageAlt="Vin d'honneur"
            imageSrc="/assets/images/photo-domaine.jpg"
            title="Vin d'honneur"
          />
          <CardProgram
            className="shadow-none border-1 border-text"
            description="Salle de réception du Château de Laforest"
            imageAlt="Dîner et soirée"
            imageSrc="/assets/images/photo-fete.jpeg"
            title="Dîner & Soirée"
          />
        </Container>
        <div className="text-center ">
          <LinkButton
            className="font-marcellus-sc text-black "
            color="primary"
            href="/programme"
            variant="solid"
          >
            Voir le programme complet
          </LinkButton>
        </div>
      </section>
      <QRcodeSection />
    </div>
  );
}
