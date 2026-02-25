import type { Metadata } from "next";
import { site } from "@/content/site";
import { Section, SectionHeader } from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: site.nav.contato,
  description: `Entre em contato com ${site.name}. Formulário e WhatsApp.`,
};

export default function ContatoPage() {
  const whatsappUrl = `https://wa.me/${site.whatsapp}`;

  return (
    <div className="flex flex-col">
      <Section>
        <SectionHeader
          title={site.contato.title}
          subtitle={site.contato.subtitle}
        />
        <div className="grid lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Formulário</CardTitle>
              <CardDescription>
                Preencha e respondo em até 24 horas úteis.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm submitLabel={site.contato.form.submit} />
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardHeader>
              <CardTitle>WhatsApp</CardTitle>
              <CardDescription>
                Prefere falar direto? Chame no WhatsApp.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" className="w-full" asChild>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  {site.contato.whatsappCta}
                </a>
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                Ou envie um e-mail para{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="text-primary hover:underline"
                >
                  {site.email}
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
}
