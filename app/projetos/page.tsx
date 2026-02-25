import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import { Section, SectionHeader } from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Meus projetos",
  description: `Projetos independentes de ${site.name} — CRM, IA, Educação e mais.`,
};

const statusStyles: Record<string, string> = {
  "Em andamento": "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  "Lançado": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  Ideia: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
};

export default function ProjetosPage() {
  return (
    <div className="flex flex-col">
      <Section>
        <SectionHeader
          title="Meus projetos"
          subtitle="Projetos independentes além das empresas — CRM, IA, Educação e mais."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project) => (
            <Card
              key={project.slug}
              className="h-full border-2 flex flex-col hover:border-primary/20 transition-colors"
            >
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <span
                    className={cn(
                      "text-xs font-medium px-2 py-1 rounded-full shrink-0",
                      statusStyles[project.status] ?? "bg-muted text-muted-foreground"
                    )}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-xs font-medium text-primary">{project.category}</p>
              </CardHeader>
              <CardContent className="pt-0 flex-1 flex flex-col">
                <CardDescription className="text-sm flex-1">
                  {project.description}
                </CardDescription>
                <Button variant="outline" size="sm" className="mt-4 w-fit" asChild>
                  <Link href={`/projetos/${project.slug}`}>
                    {site.empresas.verDetalhes}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
