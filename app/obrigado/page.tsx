import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Obrigado",
  description: "Mensagem recebida. Em breve entraremos em contato.",
  robots: { index: false, follow: true },
};

export default function ObrigadoPage() {
  return (
    <section className="container py-24 md:py-32">
      <div className="max-w-xl mx-auto text-center space-y-8">
        <CheckCircle2 className="h-16 w-16 text-primary mx-auto" />
        <h1 className="text-3xl md:text-4xl font-bold">{site.obrigado.title}</h1>
        <p className="text-lg text-muted-foreground">{site.obrigado.message}</p>
        <ul className="text-left list-disc list-inside space-y-2 text-muted-foreground">
          {site.obrigado.nextSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
        <Button size="lg" asChild>
          <Link href="/">{site.obrigado.back}</Link>
        </Button>
      </div>
    </section>
  );
}
