import Container from "@/components/layout/Container";
import ContentImgSection from "@/components/sections/ContentImgSection";
import Gallery from "@/components/sections/Gallery";
import QRcodeSection from "@/components/sections/QRcodeSection";

export default function ListeMariagePage() {
  const galleryImages = [
    {
      src: "/assets/gallery/polynesie.jpg",
      alt: "Placeholder 1",
    },
    {
      src: "/assets/gallery/polynesie-5.jpg",
      alt: "Placeholder 2",
    },
    {
      src: "/assets/gallery/polynesie-2.jpg",
      alt: "Placeholder 3",
    },
    {
      src: "/assets/gallery/polynesie-1.jpg",
      alt: "Placeholder 4",
    },
    {
      src: "/assets/gallery/polynesie-3.jpg",
      alt: "Placeholder 5",
    },
    {
      src: "/assets/gallery/polynesie-7.jpg",
      alt: "Placeholder 6",
    },
    {
      src: "/assets/gallery/polynesie-6.jpg",
      alt: "Placeholder 7",
    },
  ];

  const description = {
    __html: `
      <p class="text-md md:text-lg  mb-4">
        Pour notre mariage, nous avons choisi de troquer les cadeaux matériels contre une aventure unique : 
        <strong>un voyage de noces en Polynésie</strong>.
      </p>
      <p class="text-md md:text-lg mb-4">
        Chaque participation nous aidera à réaliser ce rêve lointain, que ce soit pour explorer les lagons cristallins,
        découvrir la culture locale ou simplement profiter de moments inoubliables ensemble.
      </p>

       <p class="text-md md:text-lg  mb-4">
        Pour ceux qui souhaitent contribuer, nous avons créé une cagnotte en ligne, elle sera cloturée le <strong> 1 avril 2026 </strong> !
      </p>
      <p class="text-md md:text-lg italic text-center">
        Votre cadeau = notre bonheur, et promis… on lèvera notre verre à votre santé à l'autre bout du monde ! 🥂
      </p>
    
    `,
  };
  return (
    <div className="flex flex-col ">
      <section className="bg-primary">
        <Container className="mx-auto">
          <h1 className="text-center text-4xl md:text-5xl font-playfair">
            Liste de Mariage
          </h1>
          <div className="max-w-6xl mx-auto pt-10">
            <Gallery images={galleryImages} />
          </div>
        </Container>
      </section>
      <ContentImgSection
        title="Notre voyage de noces"
        descriptionHtml={description.__html}
        imageSrc="/assets/gallery/tahiti.jpeg"
        imageAlt="Notre Histoire"
        reverse={false}
        ctaText=" Notre cagnotte"
        ctaHref="https://www.my-liste.fr/client/liste/show/49/nouvelle-liste-de-voyage-pour-angelique-sejalon"
        ctaColor="primary"
        ctaClassName="text-black"
        ctaSize="lg"
      />
      <QRcodeSection />
    </div>
  );
}
