import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

// Simulação de dados - em produção, você buscaria de arquivos MDX
const conteudos: Record<string, {
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}> = {
  "introducao-ia-generativa": {
    title: "Introdução à IA Generativa",
    description: "Aprenda os fundamentos das IAs generativas e como aplicá-las em projetos reais.",
    category: "IA",
    date: "2024-03-10",
    readTime: "8 min",
    tags: ["IA", "ChatGPT", "Fundamentos"],
    content: `
# Introdução à IA Generativa

A Inteligência Artificial Generativa está transformando a forma como criamos conteúdo, resolvemos problemas e interagimos com tecnologia.

## O que é IA Generativa?

IA Generativa é um tipo de inteligência artificial capaz de criar novos conteúdos, como texto, imagens, áudio e vídeo, baseado em padrões aprendidos de dados existentes.

## Principais Ferramentas

### ChatGPT
O ChatGPT revolucionou a forma como interagimos com IA. Ele pode:
- Responder perguntas complexas
- Escrever código
- Criar conteúdo criativo
- Auxiliar em tarefas diversas

### DALL-E e Midjourney
Ferramentas de geração de imagens que criam arte e ilustrações a partir de descrições textuais.

## Como Aplicar na Prática

1. **Automação de Conteúdo**: Use IAs generativas para criar rascunhos e ideias
2. **Assistência em Código**: Ferramentas como GitHub Copilot aceleram o desenvolvimento
3. **Análise de Dados**: Gere insights e relatórios automaticamente

## Conclusão

A IA Generativa não é apenas uma tendência, é uma ferramenta poderosa que está mudando o mercado. Aprender a usá-la é essencial para profissionais de tecnologia.
    `,
  },
  "redes-neurais-zero": {
    title: "Redes Neurais do Zero",
    description: "Entenda como funcionam as redes neurais na prática.",
    category: "IA",
    date: "2024-03-05",
    readTime: "12 min",
    tags: ["IA", "Machine Learning", "Python"],
    content: `
# Redes Neurais do Zero

Redes neurais são a base do aprendizado de máquina moderno. Vamos entender como funcionam.

## Conceitos Fundamentais

Uma rede neural é inspirada no funcionamento do cérebro humano, com neurônios conectados que processam informações.

## Estrutura Básica

- **Camada de Entrada**: Recebe os dados
- **Camadas Ocultas**: Processam a informação
- **Camada de Saída**: Produz o resultado

## Implementação Prática

Com Python e bibliotecas como TensorFlow ou PyTorch, você pode criar redes neurais poderosas.

## Conclusão

Entender redes neurais é fundamental para trabalhar com IA moderna.
    `,
  },
  "carreira-tech-guia": {
    title: "Carreira em Tech: Guia Completo",
    description: "Dicas práticas para crescer na área de tecnologia.",
    category: "Carreira",
    date: "2024-02-28",
    readTime: "10 min",
    tags: ["Carreira", "Dicas", "Profissional"],
    content: `
# Carreira em Tech: Guia Completo

Construir uma carreira sólida em tecnologia requer estratégia e dedicação.

## Primeiros Passos

1. **Escolha uma Área**: Frontend, Backend, IA, DevOps...
2. **Aprenda os Fundamentos**: Programação, algoritmos, estruturas de dados
3. **Pratique Constantemente**: Crie projetos reais

## Crescimento Profissional

- Participe de comunidades
- Contribua com open source
- Faça networking
- Continue aprendendo

## Conclusão

Uma carreira em tech é uma jornada contínua de aprendizado e crescimento.
    `,
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const conteudo = conteudos[params.slug];
  
  if (!conteudo) {
    return {
      title: "Conteúdo não encontrado",
    };
  }

  return {
    title: conteudo.title,
    description: conteudo.description,
  };
}

export default function ConteudoPage({ params }: { params: { slug: string } }) {
  const conteudo = conteudos[params.slug];

  if (!conteudo) {
    notFound();
  }

  return (
    <div className="container py-12 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <Button variant="ghost" asChild>
            <Link href="/conteudos">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para conteúdos
            </Link>
          </Button>
          
          <div>
            <span className="text-sm font-semibold text-primary">{conteudo.category}</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">{conteudo.title}</h1>
            <p className="text-xl text-muted-foreground">{conteudo.description}</p>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(conteudo.date).toLocaleDateString("pt-BR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {conteudo.readTime} de leitura
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {conteudo.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-muted text-sm"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <Card>
          <CardContent className="pt-6">
            <article className="prose prose-slate max-w-none">
              <div className="whitespace-pre-wrap">{conteudo.content}</div>
            </article>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="bg-muted/50">
          <CardContent className="pt-6 text-center space-y-4">
            <h3 className="text-2xl font-bold">Gostou do conteúdo?</h3>
            <p className="text-muted-foreground">
              Entre em contato para aulas, mentorias ou dúvidas sobre o tema.
            </p>
            <Button size="lg" asChild>
              <a href="https://wa.me/5511999999999?text=Olá! Gostei do conteúdo e gostaria de saber mais." target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
