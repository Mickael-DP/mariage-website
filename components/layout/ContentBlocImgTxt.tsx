import { Button } from "@heroui/button";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";

interface ContentBlocImgTxtProps {
  title: string;
  subtitle?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  textAlign?: "left" | "center" | "right";
  children?: React.ReactNode; 
}

const ContentBlocImgTxt = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  textAlign = "left",
  children,
}: ContentBlocImgTxtProps) => {

  const textColumn = (
    <div className={`bg-white w-[704px] h-[450px]  flex rounded-lg p-6 `}>
      <div className={`w-full h-full content-center`}>
        {subtitle && (
          <p className="font-marcellus text-lg md:text-xl mb-4 text-gray-600">
            {subtitle}
          </p>
        )}
        <h2 className={`font-marcellus text-3xl md:text-4xl mb-6 text-${textAlign}`}>
          {title}
        </h2>
        
        <p className={`font-marcellus text-sm md:text-lg mb-6 text-gray-700 text-${textAlign}`}>
          {description}
        </p>
        
        {children && (
          <div className="mb-6">
            {children}
          </div>
        )}
        
  
      </div>
    </div>
  );

  const imageColumn = (
    <div className=" flex items-center">
      <div className="relative w-[704px] h-[450px] ">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="rounded-lg object-cover object-center border-12 border-white"
        />
      </div>
    </div>
  );

  return (
      <div className=" bg-primary py-6 flex flex-row justify-around ">
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