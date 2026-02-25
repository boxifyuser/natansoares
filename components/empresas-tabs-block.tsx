"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Section, SectionHeader } from "@/components/section";
import { Check } from "lucide-react";
import { projects } from "@/content/projects";
import type { Project } from "@/content/projects";

export interface EmpresaCard {
  name: string;
  description: string;
  bullets: readonly string[];
  cta: string;
  href: string;
}

interface EmpresasTabsBlockProps {
  title: string;
  linkText: string;
  tabEmpresas: string;
  tabProjetos: string;
  empresas: [EmpresaCard, EmpresaCard];
  verDetalhes: string;
}

const statusStyles: Record<string, string> = {
  "Em andamento": "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  "Lançado": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  Ideia: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
};

export function EmpresasTabsBlock({
  title,
  linkText,
  tabEmpresas,
  tabProjetos,
  empresas,
  verDetalhes,
}: EmpresasTabsBlockProps) {
  return (
    <Section id="empresas">
      <SectionHeader title={title} subtitle={linkText} />
      <Tabs defaultValue="empresas" className="w-full max-w-5xl mx-auto">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 h-12">
          <TabsTrigger value="empresas" className="text-base font-semibold">
            {tabEmpresas}
          </TabsTrigger>
          <TabsTrigger value="projetos" className="text-base font-semibold">
            {tabProjetos}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="empresas" className="mt-8">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="grid md:grid-cols-2 gap-8"
          >
              {empresas.map((emp) => (
                <Card key={emp.name} className="h-full border-2 flex flex-col">
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
              ))}
          </motion.div>
        </TabsContent>

        <TabsContent value="projetos" className="mt-8">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
              {projects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  verDetalhes={verDetalhes}
                />
              ))}
          </motion.div>
        </TabsContent>
      </Tabs>
    </Section>
  );
}

function ProjectCard({
  project,
  verDetalhes,
}: {
  project: Project;
  verDetalhes: string;
}) {
  return (
    <Card className="h-full border-2 flex flex-col hover:border-primary/20 transition-colors">
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
          <Link href={`/projetos/${project.slug}`}>{verDetalhes}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
