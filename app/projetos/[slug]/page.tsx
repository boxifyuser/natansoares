import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/content/site";
import { getProjectBySlug } from "@/content/projects";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  "Em andamento": "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  "Lançado": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  Ideia: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Projeto não encontrado" };
  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <section className="container py-16 md:py-24">
      <div className="max-w-2xl mx-auto">
        <p className="text-sm font-medium text-primary mb-2">{project.category}</p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          {project.name}
        </h1>
        <span
          className={cn(
            "inline-block mt-3 text-xs font-medium px-3 py-1 rounded-full",
            statusStyles[project.status] ?? "bg-muted text-muted-foreground"
          )}
        >
          {project.status}
        </span>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          {project.description}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Button variant="outline" asChild>
            <Link href="/projetos">Ver todos os projetos</Link>
          </Button>
          <Button asChild>
            <Link href="/contato">Falar comigo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
