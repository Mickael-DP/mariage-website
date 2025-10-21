import Image from "next/image";
import Container from "../layout/Container";

const QRcodeSection = () => {
  return (
    <section>
      <Container className="py-0">
        <div className="flex w-[800px] h-[500px] bg-primary mx-auto rounded-lg justify-center">
          <div className="flex flex-col gap-6 p-8">
            <h2 className="text-4xl font-playfair text-center mb-6">
              Vos photos comptent !
            </h2>
            <p className="text-center">
              Le jour de notre mariage sera rempli de moments uniques, et nous
              aimerions les revivre aussi à travers vos yeux. N’hésitez pas à
              prendre plein de photos et à les partager avec nous grâce à ce QR
              code. Un sourire, une danse, un détail ou un fou rire… chaque
              instant est précieux ! Merci d’avance de contribuer à nos
              souvenirs.
            </p>
            <div className="flex justify-center mt-4">
              <div className="relative w-[200px] h-[200px] p-4">
                <Image
                  src="https://placehold.co/200.png"
                  alt="QR Code pour partager les photos du mariage"
                  className="w-full h-full object-cover object-center border-6 border-white rounded-xl"
                    fill
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default QRcodeSection;
