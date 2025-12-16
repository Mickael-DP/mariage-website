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
        title="Bienvenue sur notre site de mariage"
        description="Nous sommes ravis de partager avec vous les détails de notre journée spéciale. Explorez le site pour en savoir plus sur notre histoire, le programme de la journée, et bien plus encore."
        imageSrc="/assets/images/amau&angelique2.JPG"
        subtitle=""
        imageAlt="Jour de notre rencontre"
        reverse={true}
        ctaText="Liste de mariage"
        ctaHref="/liste-mariage"
        ctaColor="primary"
        ctaClassName="text-black"
        ctaSize="lg"
      />
      <section className="bg-primary">
        <Container>
          <h2 className="text-center text-4xl md:text-5xl font-playfair mb-6">
            Notre Histoire
          </h2>

          <div className="md:hidden flex flex-col gap-6 mb-12">
            <CardMobile
              subtitle="1 Février 2021"
              title="Jour de notre rencontre"
              description="On s’est trouvés en plein Covid, un match improbable devenu une belle évidence, entre couvre-feu et stratagèmes amoureux"
              imageSrc="/assets/images/photo-rencontre.jpg"
              imageAlt="photo-rencontre"
              className="bg-white"
            />
            <CardMobile
              subtitle="26 Juin 2024"
              title="Jour de nos fiançailles"
              description='Un bateau, un faux prétexte de pêche, un vrai genou à terre… et moi, paniquée : "T’es vraiment sûr ?" — avant de dire oui, évidemment !'
              imageSrc="/assets/images/photo-demande.jpg"
              imageAlt="photo-demande"
              className="bg-white"
            />
          </div>

          <div className="hidden md:block">
            <ContentBlocImgTxt
              subtitle="1 Février 2021"
              title="Jour de notre rencontre"
              description="On s’est trouvés en plein Covid, un match improbable devenu une belle évidence, entre couvre-feu et stratagèmes amoureux"
              imageSrc="/assets/images/photo-rencontre.jpg"
              imageAlt="photo-rencontre"
              reverse={false}
            />
            <ContentBlocImgTxt
              subtitle="26 Juin 2024"
              title="Jour de nos fiançailles"
              description='Un bateau, un faux prétexte de pêche, un vrai genou à terre… et moi, paniquée : "T’es vraiment sûr ?" — avant de dire oui, évidemment !'
              imageSrc="/assets/images/photo-demande.jpg"
              imageAlt="photo-demande"
              reverse={true}
            />
          </div>
        </Container>
      </section>
      <section id="programme" className="bg-white ">
        <h2 className="text-center text-4xl md:text-5xl font-playfair pt-12">
          Le Programme
        </h2>
        <Container className="flex gap-4 md:gap-6 md:flex-row justify-between flex-wrap">
          <CardProgram
            title="Cérémonie à l'église"
            description="Église de Thizy les Bourgs"
            imageSrc="/assets/images/photo-eglise.jpg"
            imageAlt="Cérémonie civile"
            className="shadow-none border-1 border-text"
          />
          <CardProgram
            title="Vin d'honneur"
            description="Jardin du Domaine de Laforest"
            imageSrc="/assets/images/photo-domaine.jpg"
            imageAlt="Vin d'honneur"
            className="shadow-none border-1 border-text"
          />
          <CardProgram
            title="Dîner & Soirée"
            description="Salle de réception du Château de Laforest"
            imageSrc="/assets/images/photo-fete.jpeg"
            imageAlt="Dîner et soirée"
            className="shadow-none border-1 border-text"

          />
        </Container>
        <div className="text-center ">
          <LinkButton
            href="/programme"
            color="primary"
            variant="solid"
            className='font-marcellus-sc text-black '
          >
            Voir le programme complet
          </LinkButton>
        </div>

      </section>
      <QRcodeSection />
    </div>
  );
}
