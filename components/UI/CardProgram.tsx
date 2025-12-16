import { Button } from "@heroui/button";
import { LinkButton } from "@/components/UI/LinkButton";
import { Card, CardBody, CardHeader } from "@heroui/card";
import Image from "next/image";

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
    <Card className={` w-[362px] h-[440px] ${className}`}>
      <CardHeader className="p-0  h-[264px] flex-col items-start">
        <div className="relative w-full h-full">
          <Image alt={imageAlt} className="object-cover" src={imageSrc} fill />
        </div>
      </CardHeader>
      <CardBody className="overflow-hidden p-6 flex flex-col gap-3">
        <h4 className="font-bold text-large font-marcellus">{title}</h4>
        <small className="text-default-500 font-marcellus">{description}</small>
        <div>
          <LinkButton
            variant="light"
            href="/info-pratique"
            size="sm"
            className=" p-0 underline uppercase font-marcellus"
          >

            Comment s'y rendre -{">"}{" "}
          </LinkButton>
        </div>
      </CardBody>
    </Card>
  );
};

export default CardProgram;
