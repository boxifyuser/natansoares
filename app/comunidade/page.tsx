"use client";

import { site } from "@/content/site";
import { Section, SectionHeader } from "@/components/section";
import { Hero } from "@/components/hero";
import { CommunityForm } from "@/components/community-form";
import { CtaBlock } from "@/components/cta-block";
import { Check } from "lucide-react";

export default function ComunidadePage() {
  const { hero, oQueTem, oQueTemItems, regras, regrasItems, cta } =
    site.comunidadePage;

  return (
    <div className="flex flex-col">
      <Hero
        headline={hero.title}
        subheadline={hero.subtitle}
        ctaComunidade={cta}
        ctaMentoria={site.hero.ctaMentoria}
      />

      <Section>
        <SectionHeader title={oQueTem} />
        <ul className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-4">
          {oQueTemItems.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-lg border bg-card px-4 py-3"
            >
              <Check className="h-5 w-5 text-primary shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section muted>
        <SectionHeader title={regras} />
        <ul className="max-w-xl mx-auto space-y-3">
          {regrasItems.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <Check className="h-5 w-5 text-primary shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeader
          title="Garantir acesso gratuito"
          subtitle="Preencha os dados abaixo. Entrada liberada."
        />
        <div className="max-w-md mx-auto">
          <CommunityForm
            ctaLabel={cta}
            successMessage={site.produtos.comunidade.formMessage}
          />
        </div>
      </Section>

      <CtaBlock
        title={site.ctaFinal.title}
        subtitle={site.ctaFinal.subtitle}
        ctaComunidade={site.ctaFinal.ctaComunidade}
        ctaMentoria={site.ctaFinal.ctaMentoria}
      />
    </div>
  );
}
