"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Brain, Network, Code, GraduationCap, Users, Building, School, MessageCircle, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

const whatsappLink = "https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma mentoria.";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Home() {
  const areas = [
    {
      icon: Brain,
      title: "IA Aplicada",
      description: "Inteligência Artificial prática e aplicada em projetos reais",
    },
    {
      icon: Network,
      title: "Redes & Infraestrutura",
      description: "Fundamentos de redes, cloud e infraestrutura moderna",
    },
    {
      icon: Code,
      title: "Desenvolvimento Web",
      description: "Full-stack development com tecnologias atuais",
    },
    {
      icon: GraduationCap,
      title: "Programação",
      description: "Lógica, algoritmos e estruturas de dados",
    },
    {
      icon: Users,
      title: "Carreira em Tech",
      description: "Orientação profissional e crescimento na área",
    },
  ];

  const publicos = [
    {
      icon: GraduationCap,
      title: "Alunos",
      description: "Estudantes que querem aprender tecnologia na prática",
    },
    {
      icon: Users,
      title: "Profissionais",
      description: "Quem busca se atualizar ou mudar de área",
    },
    {
      icon: Building,
      title: "Empresas",
      description: "Equipes que precisam de capacitação técnica",
    },
    {
      icon: School,
      title: "Escolas",
      description: "Instituições que querem modernizar o ensino",
    },
  ];

  const depoimentos = [
    {
      nome: "Maria Silva",
      cargo: "Desenvolvedora",
      texto: "As aulas do Natan transformaram minha compreensão sobre IA. Consegui aplicar os conceitos no meu trabalho imediatamente.",
      rating: 5,
    },
    {
      nome: "João Santos",
      cargo: "Estudante",
      texto: "A didática é excelente e o conteúdo é sempre atualizado. Recomendo para quem quer aprender de verdade.",
      rating: 5,
    },
    {
      nome: "Ana Costa",
      cargo: "Tech Lead",
      texto: "A mentoria ajudou nossa equipe a implementar soluções de IA com muito mais confiança e conhecimento.",
      rating: 5,
    },
  ];

  const conteudosDestaque = [
    {
      title: "Introdução à IA Generativa",
      description: "Aprenda os fundamentos das IAs generativas e como aplicá-las",
      category: "IA",
      href: "/conteudos/introducao-ia-generativa",
    },
    {
      title: "Redes Neurais do Zero",
      description: "Entenda como funcionam as redes neurais na prática",
      category: "IA",
      href: "/conteudos/redes-neurais-zero",
    },
    {
      title: "Carreira em Tech: Guia Completo",
      description: "Dicas práticas para crescer na área de tecnologia",
      category: "Carreira",
      href: "/conteudos/carreira-tech-guia",
    },
  ];

  const palestras = [
    {
      data: "15/03/2024",
      titulo: "IA na Educação: Oportunidades e Desafios",
      local: "Universidade XYZ - São Paulo",
    },
    {
      data: "22/03/2024",
      titulo: "Como Implementar IA em Pequenas Empresas",
      local: "Evento TechSP - Online",
    },
    {
      data: "05/04/2024",
      titulo: "O Futuro do Desenvolvimento com IA",
      local: "Conferência DevBR - Rio de Janeiro",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Professor de Tecnologia
            <br />
            <span className="text-primary">IA na Prática</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transformo conhecimento técnico em resultados práticos. Aulas, mentorias e consultorias
            em Inteligência Artificial, Desenvolvimento Web e Tecnologia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Agendar Mentoria
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/conteudos">
                Ver Conteúdos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* O que eu ensino */}
      <section className="container py-16 md:py-24 bg-muted/50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que eu ensino</h2>
          <p className="text-muted-foreground text-lg">
            Áreas de conhecimento para transformar sua carreira
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {areas.map((area, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <area.icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>{area.title}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Para quem é */}
      <section className="container py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Para quem é</h2>
          <p className="text-muted-foreground text-lg">
            Meus serviços atendem diferentes perfis e necessidades
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {publicos.map((publico, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full text-center">
                <CardHeader>
                  <publico.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>{publico.title}</CardTitle>
                  <CardDescription>{publico.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Depoimentos */}
      <section className="container py-16 md:py-24 bg-muted/50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que dizem sobre mim</h2>
          <p className="text-muted-foreground text-lg">
            Depoimentos de alunos e profissionais que trabalharam comigo
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {depoimentos.map((depoimento, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(depoimento.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base">{depoimento.texto}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-semibold">{depoimento.nome}</p>
                    <p className="text-sm text-muted-foreground">{depoimento.cargo}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Conteúdos em destaque */}
      <section className="container py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Conteúdos em destaque</h2>
          <p className="text-muted-foreground text-lg">
            Artigos e materiais para você aprender continuamente
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {conteudosDestaque.map((conteudo, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link href={conteudo.href} className="block h-full">
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-primary">{conteudo.category}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{conteudo.title}</CardTitle>
                    <CardDescription>{conteudo.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <Link href="/conteudos">
              Ver todos os conteúdos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* Agenda / Palestras */}
      <section className="container py-16 md:py-24 bg-muted/50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Agenda / Palestras</h2>
          <p className="text-muted-foreground text-lg">
            Próximos eventos e palestras
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {palestras.map((palestra, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{palestra.data}</p>
                      <h3 className="font-semibold text-lg">{palestra.titulo}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{palestra.local}</p>
                    </div>
                    <Button variant="outline" asChild>
                      <Link href="/palestras">Ver detalhes</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Formulário de Captura */}
      <section className="container py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Fique por dentro</CardTitle>
              <CardDescription className="text-base">
                Receba conteúdos exclusivos e novidades sobre tecnologia e IA
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                // Aqui você pode integrar com um serviço de email marketing
                alert("Obrigado! Em breve você receberá nossos conteúdos.");
              }}>
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome completo</Label>
                  <Input id="nome" name="nome" placeholder="Seu nome" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="objetivo">Qual seu principal objetivo?</Label>
                  <Textarea
                    id="objetivo"
                    name="objetivo"
                    placeholder="Ex: Aprender IA, mudar de carreira, capacitar minha equipe..."
                    rows={4}
                    required
                  />
                </div>
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="optin"
                    name="optin"
                    className="mt-1"
                    required
                  />
                  <Label htmlFor="optin" className="text-sm">
                    Concordo em receber e-mails com conteúdos e novidades (você pode cancelar a qualquer momento)
                  </Label>
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Quero receber conteúdos
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}
