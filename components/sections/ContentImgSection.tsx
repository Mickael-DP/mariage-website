import { Button } from "@heroui/button";
import Container from "../layout/Container";
import Image from "next/image";
import Link from "next/link";

interface ContentImgSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  descriptionHtml?: string;
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
  ctaVariant?:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost";
  ctaSize?: "sm" | "md" | "lg";
}

const ContentImgSection = ({
  title,
  subtitle,
  description,
  descriptionHtml,
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
  ctaSize = "md",
}: ContentImgSectionProps) => {
  const textContentDesktop = (
    <div className={`flex-1 flex flex-col justify-center text-${textAlign}`}>
      {subtitle && (
        <p className="font-marcellus text-2xl md:text-3xl mb-6">{subtitle}</p>
      )}
      <h2 className="font-marcellus-sc text-4xl md:text-5xl mb-4">{title}</h2>

      <p className="font-marcellus text-sm text-text md:text-xl mb-4">
        {description}
      </p>
      {descriptionHtml ? (
        <div
          className="font-marcellus text-sm text-text md:text-xl mb-4"
          dangerouslySetInnerHTML={{ __html: descriptionHtml }}
        />
      ) : description ? (
        <p className="font-marcellus text-sm text-text md:text-xl mb-4">
          {" "}
          {description}
        </p>
      ) : null}
      {children && children}

      {ctaText && (
        <div className="md:mt-6">
          {ctaHref ? (
            <Button
              as={Link}
              href={ctaHref}
              color={ctaColor}
              variant={ctaVariant}
              size={ctaSize}
              className={`font-marcellus-sc ${ctaClassName}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ctaText}
            </Button>
          ) : (
            <Button
              onPress={ctaOnClick}
              color={ctaColor}
              variant={ctaVariant}
              size={ctaSize}
              className={`font-marcellus-sc ${ctaClassName}`}
            >
              {ctaText}
            </Button>
          )}
        </div>
      )}
    </div>
  );

  const textContentMobile = (
    <div className="text-center md:hidden">
      {subtitle && <p className="font-marcellus text-xl mb-4">{subtitle}</p>}
      <h2 className="font-marcellus text-3xl mb-4">{title}</h2>
     {descriptionHtml ? (
        <div
          className="font-marcellus  text-text mb-4"
          dangerouslySetInnerHTML={{ __html: descriptionHtml }}
        />
      ) : description ? (
        <p className="font-marcellus text-sm text-text md:text-xl mb-4">
          {" "}
          {description}
        </p>
      ) : null}
      {children && children}
    </div>
  );

  const imageColumnDesktop = (
    <div className="hidden md:flex flex-1 items-center justify-center">
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

  const imageColumnMobile = (
    <div className="md:hidden flex items-center justify-center ">
      <div className="relative w-full h-[300px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="rounded-lg object-cover object-center"
        />
      </div>
    </div>
  );

  const buttonMobile = ctaText && (
    <div className="md:hidden flex justify-center ">
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
  );

  return (
    <Container className={`w-full ${backgroundColor}`}>
      <div className="md:hidden flex flex-col gap-4">
        {textContentMobile}
        {imageColumnMobile}
        {buttonMobile}
      </div>

      <div className="hidden md:flex md:flex-row gap-12">
        {reverse ? (
          <>
            {imageColumnDesktop}
            {textContentDesktop}
          </>
        ) : (
          <>
            {textContentDesktop}
            {imageColumnDesktop}
          </>
        )}
      </div>
    </Container>
  );
};

export default ContentImgSection;
