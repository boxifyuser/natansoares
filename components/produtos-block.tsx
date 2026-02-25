"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/section";
import { Check } from "lucide-react";
import { CommunityForm } from "@/components/community-form";

interface ProdutoComunidade {
  title: string;
  paraQuem: string;
  oQueRecebe: readonly string[];
  cta: string;
  formMessage: string;
}

interface ProdutoMentoria {
  title: string;
  proposta: string;
  formatos: readonly string[];
  cta: string;
  entrega: readonly string[];
  observacao: string;
}

interface ProdutosBlockProps {
  title: string;
  comunidade: ProdutoComunidade;
  mentoria: ProdutoMentoria;
}

export function ProdutosBlock({
  title,
  comunidade,
  mentoria,
}: ProdutosBlockProps) {
  return (
    <Section id="produtos" muted>
      <SectionHeader title={title} />
      <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Comunidade */}
        <motion.div
          id="comunidade"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="h-full border-2 flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">{comunidade.title}</CardTitle>
              <CardDescription className="text-base">
                {comunidade.paraQuem}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 flex flex-col flex-1">
              <ul className="space-y-2 mb-6">
                {comunidade.oQueRecebe.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <CommunityForm
                ctaLabel={comunidade.cta}
                successMessage={comunidade.formMessage}
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Mentoria */}
        <motion.div
          id="mentoria"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Card className="h-full border-2 flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">{mentoria.title}</CardTitle>
              <CardDescription className="text-base">
                {mentoria.proposta}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 flex flex-col flex-1">
              <p className="text-sm font-medium mb-2">Formatos:</p>
              <ul className="space-y-1 text-sm text-muted-foreground mb-6">
                {mentoria.formatos.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <ul className="space-y-2 mb-4">
                {mentoria.entrega.map((e) => (
                  <li key={e} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    {e}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground mb-6 italic">
                {mentoria.observacao}
              </p>
              <div className="mt-auto">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="/mentoria#form">{mentoria.cta}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
