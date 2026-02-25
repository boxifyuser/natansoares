"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  innerClassName?: string;
  /** Se true, fundo levemente acinzentado */
  muted?: boolean;
  /** Animação de entrada ao entrar na viewport */
  animate?: boolean;
}

export function Section({
  children,
  id,
  className,
  innerClassName,
  muted,
  animate = true,
}: SectionProps) {
  const Wrapper = animate ? motion.section : "section";
  const wrapperProps = animate
    ? {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-48px" },
        transition: { duration: 0.4 },
      }
    : {};

  return (
    <Wrapper
      id={id}
      className={cn(
        "py-16 md:py-24",
        muted && "bg-muted/50",
        className
      )}
      {...wrapperProps}
    >
      <div className={cn("container", innerClassName)}>{children}</div>
    </Wrapper>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn("text-center mb-12 md:mb-16", className)}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
