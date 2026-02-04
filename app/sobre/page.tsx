import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, BookOpen, Target, Lightbulb } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça Natan Soares, professor de tecnologia com foco em Inteligência Artificial. Experiência, valores e metodologia de ensino.",
};

const whatsappLink = "https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre você e suas aulas.";

export default function SobrePage() {
  const valores = [
    {
      icon: BookOpen,
      title: "Didática",
      description: "Explico conceitos complexos de forma simples e acessível, sempre pensando no aprendizado do aluno.",
    },
    {
      icon: Target,
      title: "Prática",
      description: "Foco em projetos reais e aplicações práticas, não apenas teoria. Você aprende fazendo.",
    },
    {
      icon: Lightbulb,
      title: "Simplicidade",
      description: "Acredito que tecnologia deve ser acessível. Simplifico o complexo sem perder a profundidade.",
    },
  ];

  const timeline = [
    {
      ano: "2020",
      titulo: "Início no Ensino",
      descricao: "Comecei a dar aulas particulares de programação e redes, ajudando alunos a entenderem tecnologia na prática.",
    },
    {
      ano: "2021",
      titulo: "Foco em IA",
      descricao: "Especializei-me em Inteligência Artificial, acompanhando as transformações e aplicações práticas da área.",
    },
    {
      ano: "2022",
      titulo: "Mentorias e Consultorias",
      descricao: "Expandindo para mentorias de carreira e consultorias para empresas que queriam implementar IA.",
    },
    {
      ano: "2023",
      titulo: "Palestras e Conteúdos",
      descricao: "Comecei a compartilhar conhecimento em eventos e criar conteúdos educativos sobre tecnologia e IA.",
    },
    {
      ano: "2024",
      titulo: "Crescimento Contínuo",
      descricao: "Seguindo aprendendo, ensinando e ajudando cada vez mais pessoas a transformarem suas carreiras com tecnologia.",
    },
  ];

  return (
    <div className="container py-12 md:py-24">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Sobre mim</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professor de tecnologia apaixonado por ensinar e transformar vidas através do conhecimento
          </p>
        </div>

        {/* Foto e Bio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
            {/* Placeholder para foto - você pode substituir por uma imagem real */}
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <span className="text-4xl">Foto</span>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Natan Soares</h2>
            <p className="text-muted-foreground leading-relaxed">
              Sou professor de tecnologia com foco em Inteligência Artificial. Minha missão é tornar
              o conhecimento técnico acessível e prático, ajudando alunos, profissionais e empresas
              a entenderem e aplicarem tecnologia de forma efetiva.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Com experiência em ensino, desenvolvimento e consultoria, trabalho para que cada pessoa
              que passa pelas minhas aulas ou mentorias saia com conhecimento aplicável e confiança
              para seguir aprendendo e crescendo na área de tecnologia.
            </p>
            <Button asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Entre em contato
              </a>
            </Button>
          </div>
        </div>

        {/* Valores */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Meus valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valores.map((valor, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <valor.icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>{valor.title}</CardTitle>
                  <CardDescription>{valor.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Minha jornada</h2>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {item.ano.slice(-2)}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold mb-2">{item.titulo}</h3>
                  <p className="text-muted-foreground">{item.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-2xl">Vamos trabalhar juntos?</CardTitle>
            <CardDescription className="text-base">
              Entre em contato e vamos conversar sobre como posso ajudar você ou sua equipe
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="lg" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
