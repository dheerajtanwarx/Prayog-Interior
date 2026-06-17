"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** entrance direction */
  direction?: Direction;
  /** seconds */
  delay?: number;
  /** seconds */
  duration?: number;
  /** render element tag */
  as?: "div" | "section" | "article" | "li" | "span";
  once?: boolean;
}

const offset = 40;

const directionOffset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: offset },
  down: { x: 0, y: -offset },
  left: { x: offset, y: 0 },
  right: { x: -offset, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Scroll-triggered reveal wrapper. Animates a single element into view.
 * Respects reduced-motion via Framer Motion's MotionConfig if present.
 */
export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.7,
  as = "div",
  once = true,
}: RevealProps) {
  const { x, y } = directionOffset[direction];
  const MotionTag = motion[as];

  const variants: Variants = {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "0px 0px -80px 0px" }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Staggered container — children fade/slide up in sequence.
 * Use together with <RevealItem>.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.1,
  as = "div",
  once = true,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  as?: "div" | "section" | "ul";
  once?: boolean;
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "0px 0px -60px 0px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </MotionTag>
  );
}

export const revealItemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag className={className} variants={revealItemVariants}>
      {children}
    </MotionTag>
  );
}
