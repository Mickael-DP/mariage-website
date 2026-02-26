import { Card, CardBody, CardHeader } from "@heroui/card";
import Image from "next/image";

import { LinkButton } from "@/components/UI/LinkButton";

interface CardProgramProps {
  title: string;

  description: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

const CardProgram = ({
  title,

  description,
  imageSrc,
  imageAlt,
  className = "",
}: CardProgramProps) => {
  return (
    <Card
      className={`w-[362px] h-[440px] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ${className}`}
    >
      <CardHeader className="p-0  h-[264px] flex-col items-start">
        <div className="relative w-full h-full">
          <Image fill alt={imageAlt} className="object-cover" src={imageSrc} />
        </div>
      </CardHeader>
      <CardBody className="overflow-hidden p-6 flex flex-col gap-3">
        <h4 className="font-bold text-large font-marcellus">{title}</h4>
        <small className="text-default-500 font-marcellus">{description}</small>
        <div>
          <LinkButton
            className=" p-0 underline uppercase font-marcellus"
            href="/info-pratique"
            size="sm"
            variant="light"
          >
            Comment s&apos;y rendre -&gt;{" "}
          </LinkButton>
        </div>
      </CardBody>
    </Card>
  );
};

export default CardProgram;
