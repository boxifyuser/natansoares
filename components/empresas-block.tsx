"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/section";
import { Check } from "lucide-react";

export interface EmpresaCard {
  name: string;
  description: string;
  bullets: readonly string[];
  cta: string;
  href: string;
}

interface EmpresasBlockProps {
  title: string;
  linkText: string;
  empresas: [EmpresaCard, EmpresaCard];
}

export function EmpresasBlock({ title, linkText, empresas }: EmpresasBlockProps) {
  return (
    <Section id="empresas">
      <SectionHeader title={title} subtitle={linkText} />
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {empresas.map((emp, i) => (
          <motion.div
            key={emp.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="h-full border-2 flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">{emp.name}</CardTitle>
                <CardDescription className="text-base">
                  {emp.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 space-y-4 flex-1 flex flex-col">
                <ul className="space-y-2">
                  {emp.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4">
                  <Button variant="outline" asChild>
                    <Link href={emp.href}>{emp.cta}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
