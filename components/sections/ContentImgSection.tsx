import { Button } from "@heroui/button";
import Container from "../layout/Container";
import Image from "next/image";
import Link from "next/link";

interface ContentImgSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  backgroundColor?: string;
  textAlign?: "left" | "center" | "right";
  children?: React.ReactNode; 
  ctaText?: string;
  ctaHref?: string;
  ctaOnClick?: () => void;
  ctaClassName?: string;
  ctaColor?: "primary" | "secondary" | "success" | "warning" | "danger";
  ctaVariant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost";
}

const ContentImgSection = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  backgroundColor = "",
  textAlign = "right",
  children,
  ctaText,
  ctaHref,
  ctaOnClick,
  ctaClassName = "",
  ctaColor = "primary",
  ctaVariant = "solid",
}: ContentImgSectionProps) => {

  const textColumn = (
    <div className={`flex-1 flex flex-col justify-center text-${textAlign} p-8`}>
          {subtitle && (
        <p className="font-marcellus text-2xl md:text-3xl mb-6">
          {subtitle}
        </p>
      )}
      <h2 className="font-marcellus text-4xl md:text-5xl mb-4">
        {title}
      </h2>
    
      <p className="font-marcellus text-sm text-text md:text-xl mb-4">
        {description}
      </p>
      {children && children}
      
      {ctaText && (
        <div className="mt-6">
          {ctaHref ? (
            <Button 
              as={Link} 
              href={ctaHref}
              color={ctaColor}
              variant={ctaVariant}
              className={`font-marcellus-sc ${ctaClassName}`}
            >
              {ctaText}
            </Button>
          ) : (
            <Button
              onPress={ctaOnClick}
              color={ctaColor}
              variant={ctaVariant}
              className={`font-marcellus-sc ${ctaClassName}`}
            >
              {ctaText}
            </Button>
          )}
        </div>
      )}
    </div>
  );

  const imageColumn = (
    <div className="flex-1 flex items-center justify-center p-4">
      <div className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="rounded-lg object-cover object-center"
        />
      </div>
    </div>
  );

  return (
    <Container className={`w-full flex flex-col md:flex-row ${backgroundColor}`}>
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
    </Container>
  );
};

export default ContentImgSection;