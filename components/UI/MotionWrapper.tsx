"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionWrapperProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export default function MotionWrapper({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: MotionWrapperProps) {
  const getVariants = () => {
    switch (direction) {
      case "up":
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        };
      case "down":
        return {
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0 },
        };
      case "left":
        return {
          hidden: { opacity: 0, x: 30 },
          visible: { opacity: 1, x: 0 },
        };
      case "right":
        return {
          hidden: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0 },
        };
      case "none":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
      default:
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      variants={getVariants()}
      viewport={{ once: true, amount: 0.2 }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  );
}
