"use client";

import { site } from "@/content/site";
import { Section, SectionHeader } from "@/components/section";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Hero } from "@/components/hero";
import { ContactForm } from "@/components/contact-form";
import { CtaBlock } from "@/components/cta-block";
import { Faq } from "@/components/faq";

export default function MentoriaPage() {
  const { hero, pacotes, comoFunciona, comoFuncionaSteps, cta } =
    site.mentoriaPage;

  return (
    <div className="flex flex-col">
      <Hero
        headline={hero.title}
        subheadline={hero.subtitle}
        ctaComunidade={site.hero.ctaComunidade}
        ctaMentoria={cta}
      />

      <Section>
        <SectionHeader title="Formatos" subtitle="Escolha o que faz mais sentido para você." />
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pacotes.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full border-2">
                <CardHeader>
                  <CardTitle className="text-xl">{p.name}</CardTitle>
                  <p className="text-sm font-medium text-primary">{p.duration}</p>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {p.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeader title={comoFunciona} />
        <ol className="max-w-xl mx-auto space-y-6">
          {comoFuncionaSteps.map((step, i) => (
            <li key={i} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                {i + 1}
              </span>
              <span className="text-muted-foreground">{step}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="form">
        <SectionHeader
          title="Solicitar Mentoria"
          subtitle="Preencha o formulário que retorno em até 24h."
        />
        <div className="max-w-md mx-auto">
          <ContactForm submitLabel={cta} />
        </div>
      </Section>

      <Faq
        title={site.faq.title}
        items={site.faq.items.filter(
          (item) =>
            item.q.includes("mentoria") ||
            item.q.includes("agendamento") ||
            item.q.includes("contrato") ||
            item.q.includes("custa") ||
            item.q.includes("resultado")
        )}
      />

      <CtaBlock
        title={site.ctaFinal.title}
        subtitle={site.ctaFinal.subtitle}
        ctaComunidade={site.ctaFinal.ctaComunidade}
        ctaMentoria={site.ctaFinal.ctaMentoria}
      />
    </div>
  );
}
