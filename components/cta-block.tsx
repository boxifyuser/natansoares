"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaBlockProps {
  title: string;
  subtitle?: string;
  ctaComunidade: string;
  ctaMentoria: string;
  className?: string;
}

export function CtaBlock({
  title,
  subtitle,
  ctaComunidade,
  ctaMentoria,
  className,
}: CtaBlockProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "container py-16 md:py-24 text-center",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" asChild>
          <Link href="/comunidade">{ctaComunidade}</Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/mentoria">{ctaMentoria}</Link>
        </Button>
      </div>
    </motion.section>
  );
}
