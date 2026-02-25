"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/section";
import { Check } from "lucide-react";

interface ParaQuemBlockProps {
  title: string;
  items: readonly string[];
}

export function ParaQuemBlock({ title, items }: ParaQuemBlockProps) {
  return (
    <Section>
      <SectionHeader title={title} />
      <motion.ul
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-4"
      >
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 rounded-lg border bg-card px-4 py-3"
          >
            <Check className="h-5 w-5 text-primary shrink-0" />
            <span className="font-medium">{item}</span>
          </li>
        ))}
      </motion.ul>
    </Section>
  );
}
