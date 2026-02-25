"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/section";

interface SobreBlockProps {
  title: string;
  bio: string;
  ctaComunidade: string;
  ctaMentoria: string;
}

export function SobreBlock({
  title,
  bio,
  ctaComunidade,
  ctaMentoria,
}: SobreBlockProps) {
  return (
    <Section id="sobre">
      <SectionHeader title={title} />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center space-y-8"
      >
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          {bio}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/comunidade">{ctaComunidade}</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/mentoria">{ctaMentoria}</Link>
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}
