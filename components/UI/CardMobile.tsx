import Image from "next/image";
import Container from "../layout/Container";

interface CardMobileProps {
  title?: string;
  subtitle?: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

const CardMobile = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  className,
}: CardMobileProps) => {
  return (
    <div
      className={`flex flex-col p-4 rounded-lg overflow-hidden ${className}`}
    >
      <div className="flex flex-col gap-4">
        <small className="text-center text-sm uppercase text-gray-500">
          {subtitle}
        </small>
        <h2 className="text-4xl font-playfair text-center mb-6">{title}</h2>
        <p className="text-center">{description}</p>
        <div className="flex justify-center mt-4">
          <div className="relative w-64 h-52">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="w-full h-full object-cover object-center border-6 border-white rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMobile;
