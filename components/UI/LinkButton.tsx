"use client";

import { Button, ButtonProps } from "@heroui/button";
import Link from "next/link";
import { forwardRef } from "react";

interface LinkButtonProps extends ButtonProps {
    href: string;
}

export const LinkButton = forwardRef<HTMLButtonElement, LinkButtonProps>(
    (props, ref) => {
        return <Button as={Link} ref={ref} {...props} />;
    }
);

LinkButton.displayName = "LinkButton";
