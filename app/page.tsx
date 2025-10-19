

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
          Bienvenue
        </h1>
        <h2 className="font-marcellus-sc text-2xl md:text-3xl mb-4 text-primary">
          Notre Mariage
        </h2>
        <p className="font-marcellus text-lg md:text-xl text-gray-600">
          Découvrez tous les détails de notre grand jour
        </p>
      </div>
    </section>
  );
}
