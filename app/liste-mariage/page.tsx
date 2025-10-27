import Container from "@/components/layout/Container";
import ContentImgSection from "@/components/sections/ContentImgSection";
import Gallery from "@/components/sections/Gallery";
import QRcodeSection from "@/components/sections/QRcodeSection";

export default function ListeMariagePage() {
  const galleryImages = [
    {
      src: "https://placehold.co/250x300.png",
      alt: "Placeholder 1",
    },
    {
     src: "https://placehold.co/250x260.png",
      alt: "Placeholder 2",
    },
    {
     src: "https://placehold.co/250x180.png",
      alt: "Placeholder 3",
    },
    {
  src: "https://placehold.co/250x220.png",
      alt: "Placeholder 4",
    },
    {
    src: "https://placehold.co/250x180.png",
      alt: "Placeholder 5",
    },
    {
src: "https://placehold.co/250x220.png",
      alt: "Placeholder 6",
    },
    {
src: "https://placehold.co/250x300.png",
      alt: "Placeholder 7",
    },
  ];
  return (
     <div className="flex flex-col ">
      <section className="bg-primary">
        <Container className="mx-auto">
          <h1 className="text-center text-5xl font-playfair">
            Liste de Mariage
          </h1>
          <div className="max-w-6xl mx-auto pt-10">
            <Gallery images={galleryImages} />
          </div>
        </Container>
      </section>
        <ContentImgSection
        title="Notre voyage de noces"
        description="Pour notre mariage, nous avons choisi de troquer les cadeaux matériels contre une aventure unique : un voyage de noces en Polynésie. Chaque participation nous aidera à siroter des mojitos, à dormir dans un pilotis et à collectionner des souvenirs magiques que nous garderons toute notre vie. Votre cadeau = notre bonheur, et promis… on lèvera notre verre à votre santé à l’autre bout du monde !"
        imageSrc="/amau&angelique2.JPG"
        imageAlt="Notre Histoire"
        reverse={false}
        ctaText="Lien vers notre cagnotte"
        ctaHref="https://www.my-liste.fr/client/liste/show/49/nouvelle-liste-de-voyage-pour-angelique-sejalon"
        ctaColor="primary"
        ctaClassName="text-black"
      />
      <QRcodeSection />
    </div>
  );
}