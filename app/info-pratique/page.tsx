import ContentImgSection from "@/components/sections/ContentImgSection";
import QRcodeSection from "@/components/sections/QRcodeSection";

export default function InfoPratiquePage() {
  return (
    <div className="flex flex-col">
      <section>
        <ContentImgSection
          backgroundColor="bg-primary"
          ctaClassName="text-black"
          ctaColor="secondary"
          ctaHref="https://www.google.com/maps?ll=46.044871,4.289548&z=16&t=m&hl=fr&gl=FR&mapclient=embed&cid=6612243881793437512"
          ctaText="Voir sur la carte"
          ctaVariant="solid"
          description="La réception aura lieu au Château de Laforest. Situé près de Lyon, le chateau offre un environnement parfait pour célébrer notre journée spéciale entourés de nos proches. Cliquez sur le bouton ci-dessous pour voir l'emplacement exact afin de ne pas vous perdre en chemin !"
          imageAlt="lieu de reception"
          imageSrc="/assets/images/photo-domaine.jpg"
          reverse={true}
          title="Lieu de reception"
        />
      </section>
      <section>
        <ContentImgSection
          backgroundColor="bg-white"
          ctaClassName="text-black"
          ctaColor="primary"
          ctaHref="tel:+33684755457"
          ctaText="Contactez-nous"
          description="Pour ceux qui souhaitent réserver un hébergement pour le week-end du mariage, n'hésitez pas à revenir vers nous ! Nous avons préparé une liste d'adresses de logements situés à proximité du lieu de la cérémonie et de la réception. Que ce soit hôtel, gites ou chambres d'hôtes, nous avons ce qu'il faut pour vous aidez à organiser votre séjour. Contactez-nous et nous serons ravis de vous transmettre toutes les informations nécessaires."
          imageAlt="hebergement"
          imageSrc="/assets/images/hebergement.jpg"
          reverse={false}
          title="Hébergement"
        />
      </section>
      <section>
        <QRcodeSection />
      </section>
    </div>
  );
}
