import Image from "next/image";

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
        <p className="font-marcellus text-sm text-gray-600 text-center">
          {subtitle}
        </p>
        <h2 className={`font-marcellus text-3xl md:text-4xl text-center`}>
          {title}
        </h2>
        <p className="font-marcellus text-center">{description}</p>
        <div className="flex justify-center ">
          <div className="relative w-64 h-52">
            <Image
              fill
              alt={imageAlt}
              className="w-full h-full object-cover object-center border-6 border-white rounded-xl"
              src={imageSrc}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMobile;
