import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Tag } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conteúdos",
  description: "Artigos, tutoriais e materiais sobre Inteligência Artificial, Desenvolvimento Web, Redes e Carreira em Tech.",
};

// Simulação de conteúdos - em produção, você buscaria de arquivos MDX
const conteudos = [
  {
    slug: "introducao-ia-generativa",
    title: "Introdução à IA Generativa",
    description: "Aprenda os fundamentos das IAs generativas e como aplicá-las em projetos reais. Entenda ChatGPT, DALL-E e outras ferramentas.",
    category: "IA",
    date: "2024-03-10",
    readTime: "8 min",
    tags: ["IA", "ChatGPT", "Fundamentos"],
  },
  {
    slug: "redes-neurais-zero",
    title: "Redes Neurais do Zero",
    description: "Entenda como funcionam as redes neurais na prática. Do conceito matemático à implementação em código.",
    category: "IA",
    date: "2024-03-05",
    readTime: "12 min",
    tags: ["IA", "Machine Learning", "Python"],
  },
  {
    slug: "carreira-tech-guia",
    title: "Carreira em Tech: Guia Completo",
    description: "Dicas práticas para crescer na área de tecnologia. Do primeiro emprego ao crescimento profissional.",
    category: "Carreira",
    date: "2024-02-28",
    readTime: "10 min",
    tags: ["Carreira", "Dicas", "Profissional"],
  },
  {
    slug: "nextjs-app-router",
    title: "Next.js 14: App Router na Prática",
    description: "Aprenda a usar o App Router do Next.js 14 para criar aplicações modernas e performáticas.",
    category: "Web",
    date: "2024-02-20",
    readTime: "15 min",
    tags: ["Next.js", "React", "Web"],
  },
  {
    slug: "cloud-fundamentos",
    title: "Fundamentos de Cloud Computing",
    description: "Entenda os conceitos básicos de cloud computing e como escolher o melhor provedor para seu projeto.",
    category: "Redes",
    date: "2024-02-15",
    readTime: "9 min",
    tags: ["Cloud", "AWS", "Infraestrutura"],
  },
  {
    slug: "typescript-avancado",
    title: "TypeScript Avançado: Dicas e Truques",
    description: "Aprofunde seus conhecimentos em TypeScript com padrões avançados e boas práticas.",
    category: "Programação",
    date: "2024-02-10",
    readTime: "11 min",
    tags: ["TypeScript", "Programação", "Dicas"],
  },
];

const categorias = ["Todos", "IA", "Web", "Redes", "Programação", "Carreira"];

export default function ConteudosPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Hero */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">Conteúdos</h1>
          <p className="text-xl text-muted-foreground">
            Artigos, tutoriais e materiais sobre tecnologia, IA e carreira. Aprenda continuamente.
          </p>
        </div>

        {/* Busca e Filtros */}
        <div className="space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Buscar conteúdos..."
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categorias.map((categoria) => (
              <Button
                key={categoria}
                variant={categoria === "Todos" ? "default" : "outline"}
                size="sm"
              >
                {categoria}
              </Button>
            ))}
          </div>
        </div>

        {/* Lista de Conteúdos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conteudos.map((conteudo) => (
            <Card key={conteudo.slug} className="h-full hover:shadow-lg transition-shadow cursor-pointer" asChild>
              <Link href={`/conteudos/${conteudo.slug}`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-primary">{conteudo.category}</span>
                    <span className="text-xs text-muted-foreground">{conteudo.readTime}</span>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">{conteudo.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{conteudo.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{new Date(conteudo.date).toLocaleDateString("pt-BR")}</span>
                    <div className="flex gap-1">
                      {conteudo.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="flex items-center gap-1">
                          <Tag className="h-3 w-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {/* Paginação (placeholder) */}
        <div className="flex justify-center gap-2">
          <Button variant="outline" disabled>
            Anterior
          </Button>
          <Button variant="default">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">
            Próxima
          </Button>
        </div>
      </div>
    </div>
  );
}
