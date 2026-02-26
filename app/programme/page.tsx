import Link from "next/link";

import Container from "@/components/layout/Container";
import QRcodeSection from "@/components/sections/QRcodeSection";
import ContentImgSection from "@/components/sections/ContentImgSection";

export default function ProgrammePageOption3() {
  const programmeItems = [
    {
      time: "13h30",
      title: "Cérémonie a l'église",
      description: "Cérémonie religieuse à l'église de Thizy les bourgs.",
      icon: "⛪",
      color: "bg-primary ",
    },
    {
      time: "16h00",
      title: "Séance photos & moment de partage",
      description:
        "Séance photos de groupe et moment de partage avec les invités dans les jardins du château.",
      icon: "📸",
      color: "bg-primary ",
    },
    {
      time: "17h30",
      title: "Vin d'honneur",
      description: "Moment convivial avec le vin d'honneur.",
      icon: "💍",
      color: "bg-primary ",
    },
    {
      time: "19h00",
      title: "Dîner et début des festivités",
      description:
        "Rendez-vous dans la salle de réception pour le dîner et le début des festivités.",
      icon: "🍽️",
      color: "bg-primary ",
    },
  ];

  return (
    <div className="flex flex-col">
      <ContentImgSection
        backgroundColor="bg-primary"
        description="Découvrez le déroulement de notre journée spéciale du 16 Mai 2026. De la cérémonie à l'église de Tizy jusqu'aux festivités au Château de Laforest, chaque moment a été pensé pour partager notre bonheur avec vous."
        imageAlt="Programme du mariage"
        imageSrc="/assets/images/photo-jardin.jpeg"
        reverse={false}
        title="Programme de la journée"
      />

      <section className="bg-white py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl mb-4">
              Samedi 16 Mai 2026
            </h2>
            <p className="font-marcellus text-gray-600">
              Église de Thizy les bourgs & Château de Laforest
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 lg:left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary" />

            <div className="space-y-8 lg:space-y-12">
              {programmeItems.map((item, index) => (
                <div key={index} className="relative flex items-center">
                  <div className="flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-primary rounded-full border-1 border-black shadow-lg z-10">
                    <span className=" font-bold text-xs lg:text-sm">
                      {item.time}
                    </span>
                  </div>
                  <div className="ml-6 lg:ml-8 flex-1 p-6 bg-primary rounded-lg border border-black-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl lg:text-3xl">{item.icon}</span>
                      <h3 className="font-playfair text-lg lg:text-xl font-bold text-gray-800">
                        {item.title}
                      </h3>
                    </div>
                    <p className="font-marcellus text-sm lg:text-base text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-primary ">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl mb-8">
              Détails de la journée
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
              <div className="bg-primary border-1 border-black p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-3">🏰</div>
                <h3 className="font-marcellus font-bold mb-2">Lieu</h3>
                <p className="font-marcellus text-sm text-gray-600">
                  Église de Thizy les bourgs
                  <br />
                  Château de Laforest
                </p>
              </div>

              <div className="bg-primary border-1 border-black p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-3">👗</div>
                <h3 className="font-marcellus font-bold mb-2">Dress code</h3>
                <p className="font-marcellus text-sm text-gray-600">
                  Tenue de soirée
                  <br />
                  Élégante
                </p>
              </div>

              <div className="bg-primary border-1 border-black p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-3">🎵</div>
                <h3 className="font-marcellus font-bold mb-2">Ambiance</h3>
                <p className="font-marcellus text-sm text-gray-600"> DJ</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                className="bg-secondary text-black  px-8 py-3 rounded-lg font-marcellus text-center"
                href="/info-pratique"
              >
                Plus d&apos;infos pratiques
              </Link>
              <Link
                className="bg-secondary text-black px-8 py-3 rounded-lg font-marcellus text-center"
                href="/liste-mariage"
              >
                Liste de mariage
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <QRcodeSection />
    </div>
  );
}
