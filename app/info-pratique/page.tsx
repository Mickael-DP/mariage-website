import Container from "@/components/layout/Container";
import ContentImgSection from "@/components/sections/ContentImgSection";
import QRcodeSection from "@/components/sections/QRcodeSection";

export default function InfoPratiquePage() {
  return (
    <div className="flex flex-col">
      <section>
        <ContentImgSection
          reverse={true}
          title="Lieu de reception"
          description="La réception aura lieu au Château de Laforest. Situé près de Lyon, le chateau offre un environnement parfait pour célébrer notre journée spéciale entourés de nos proches. Cliquez sur le bouton ci-dessous pour voir l'emplacement exact afin de ne pas vous perdre en chemin !"
          backgroundColor="bg-primary"
          ctaVariant="solid"
          ctaText="Voir sur la carte"
          ctaColor="secondary"
          ctaHref="https://www.google.com/maps?ll=46.044871,4.289548&z=16&t=m&hl=fr&gl=FR&mapclient=embed&cid=6612243881793437512"
          ctaClassName="text-black"
            imageSrc="/assets/images/photo-domaine.jpg"
            imageAlt="lieu de reception"
        />
      </section>
      <section>
        <ContentImgSection
          title="Hébergement"
          description="Pour ceux qui souhaitent réserver un hébergement pour le week-end du mariage, n'hésitez pas à revenir vers nous ! Nous avons préparé une liste d'adresses de logements situés à proximité du lieu de la cérémonie et de la réception. Que ce soit hôtel, gites ou chambres d'hôtes, nous avons ce qu'il faut pour vous aidez à organiser votre séjour. Contactez-nous et nous serons ravis de vous transmettre toutes les informations nécessaires."
          imageSrc="/assets/images/hebergement.jpg"
          imageAlt="hebergement"
          reverse={false}
          backgroundColor="bg-white"
          ctaText="Contactez-nous"
          ctaColor="primary"
          ctaHref="tel:+33684755457"
          ctaClassName="text-black"
        />
      </section>
      <section>
        <QRcodeSection />
      </section>
    </div>
  );
}
