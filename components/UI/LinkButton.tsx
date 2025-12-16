"use client";

import { Button, ButtonProps } from "@heroui/button";
import Link from "next/link";
import { forwardRef } from "react";

interface LinkButtonProps extends ButtonProps {
    href: string;
}

export const LinkButton = forwardRef<HTMLButtonElement, LinkButtonProps>(
    (props, ref) => {
        const defaultClasses = "hover:scale-105 active:scale-95 transition-transform duration-200";
        return <Button as={Link} ref={ref} {...props} className={`${defaultClasses} ${props.className || ""}`} />;
    }
);

LinkButton.displayName = "LinkButton";
