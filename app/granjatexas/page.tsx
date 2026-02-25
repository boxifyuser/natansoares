import type { Metadata } from "next";
import { site } from "@/content/site";
import { Section, SectionHeader } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: site.empresas.granjatexas.name,
  description: site.empresas.granjatexas.description,
};

export default function GranjatexasPage() {
  const { title, subtitle, description, bullets, cta } = site.granjatexasPage;
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=Olá! Gostaria de saber mais sobre a Granja Texas.`;

  return (
    <div className="flex flex-col">
      <Section>
        <SectionHeader title={title} subtitle={subtitle} />
        <div className="max-w-2xl mx-auto space-y-8">
          <p className="text-lg text-muted-foreground text-center">
            {description}
          </p>
          <ul className="flex flex-wrap justify-center gap-4">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-center gap-2 rounded-full border bg-card px-4 py-2"
              >
                <Check className="h-4 w-4 text-primary shrink-0" />
                {b}
              </li>
            ))}
          </ul>
          <div className="text-center">
            <Button size="lg" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                {cta}
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
