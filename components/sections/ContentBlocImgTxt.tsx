import Image from "next/image";

interface ContentBlocImgTxtProps {
  title: string;
  subtitle?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  textAlign?: "left" | "center" | "right";
  children?: React.ReactNode;
  className?: string;
}

const ContentBlocImgTxt = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  textAlign = "left",
  className,
  children,
}: ContentBlocImgTxtProps) => {
  const textColumn = (
    <div
      className={`bg-white flex-1 max-w-2xl h-[450px] flex rounded-lg p-3 items-center`}
    >
      <div className={`w-full h-full content-center p-8`}>
        {subtitle && (
          <p className="font-marcellus text-lg md:text-xl mb-4 text-gray-600">
            {subtitle}
          </p>
        )}
        <h2
          className={`font-marcellus text-2xl lg:text-3xl xl:text-4xl mb-6 text-${textAlign}`}
        >
          {title}
        </h2>

        <p
          className={`font-marcellus text-sm md:text-base lg:text-lg mb-6 text-gray-700 text-${textAlign}`}
        >
          {description}
        </p>

        {children && <div className="mb-6">{children}</div>}
      </div>
    </div>
  );

  const imageColumn = (
    <div className="flex-1 max-w-2xl h-[450px] bg-white rounded-lg p-3 flex items-center justify-center">
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        <Image
          fill
          alt={imageAlt}
          className="object-cover object-center"
          src={imageSrc}
        />
      </div>
    </div>
  );

  return (
    <div
      className={`bg-primary py-6 flex flex-row justify-center items-center gap-12  max-w-7xl mx-auto ${className}`}
    >
      {reverse ? (
        <>
          {imageColumn}
          {textColumn}
        </>
      ) : (
        <>
          {textColumn}
          {imageColumn}
        </>
      )}
    </div>
  );
};

export default ContentBlocImgTxt;
