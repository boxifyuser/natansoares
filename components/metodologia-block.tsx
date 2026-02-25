"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/section";

interface Step {
  readonly title: string;
  readonly desc: string;
}

interface MetodologiaBlockProps {
  title: string;
  steps: readonly Step[];
}

export function MetodologiaBlock({ title, steps }: MetodologiaBlockProps) {
  return (
    <Section muted>
      <SectionHeader title={title} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="relative"
          >
            <div className="rounded-lg border-2 bg-card p-6 h-full">
              <span className="text-2xl font-bold text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <div
                className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border"
                aria-hidden
              />
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
