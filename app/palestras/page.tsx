import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users, MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Palestras",
  description: "Temas de palestras sobre Inteligência Artificial, Tecnologia e Carreira. Contrate para seu evento.",
};

const whatsappLink = "https://wa.me/5511999999999?text=Olá! Gostaria de contratar uma palestra.";

const temas = [
  {
    titulo: "IA na Educação: Oportunidades e Desafios",
    descricao: "Como a Inteligência Artificial está transformando o ensino e aprendizagem. Oportunidades práticas e desafios éticos.",
    duracao: "60-90 minutos",
    publico: "Educadores, gestores educacionais, estudantes",
    formato: "Presencial ou Online",
  },
  {
    titulo: "Como Implementar IA em Pequenas Empresas",
    descricao: "Guia prático para pequenas e médias empresas que querem começar a usar IA. Casos reais e primeiros passos.",
    duracao: "45-60 minutos",
    publico: "Empreendedores, gestores, equipes de tecnologia",
    formato: "Presencial ou Online",
  },
  {
    titulo: "O Futuro do Desenvolvimento com IA",
    descricao: "Como ferramentas de IA estão mudando a forma como desenvolvemos software. GitHub Copilot, ChatGPT e o futuro da programação.",
    duracao: "60 minutos",
    publico: "Desenvolvedores, tech leads, estudantes de programação",
    formato: "Presencial ou Online",
  },
  {
    titulo: "Carreira em Tech: Do Zero ao Primeiro Emprego",
    descricao: "Roteiro prático para quem quer entrar na área de tecnologia. O que estudar, como montar portfólio e conseguir oportunidades.",
    duracao: "45-60 minutos",
    publico: "Iniciantes, estudantes, pessoas em transição de carreira",
    formato: "Presencial ou Online",
  },
  {
    titulo: "Redes Neurais Explicadas de Forma Simples",
    descricao: "Entenda como funcionam as redes neurais sem precisar ser matemático. Conceitos visuais e exemplos práticos.",
    duracao: "60 minutos",
    publico: "Interessados em IA, estudantes, profissionais curiosos",
    formato: "Presencial ou Online",
  },
  {
    titulo: "Ética e Responsabilidade em IA",
    descricao: "Discussão sobre os aspectos éticos do uso de IA. Viés, privacidade, transparência e responsabilidade social.",
    duracao: "60-90 minutos",
    publico: "Profissionais de IA, gestores, educadores",
    formato: "Presencial ou Online",
  },
];

const proximasPalestras = [
  {
    data: "15/03/2024",
    horario: "14:00",
    titulo: "IA na Educação: Oportunidades e Desafios",
    local: "Universidade XYZ",
    endereco: "São Paulo, SP",
    tipo: "Presencial",
  },
  {
    data: "22/03/2024",
    horario: "19:00",
    titulo: "Como Implementar IA em Pequenas Empresas",
    local: "Evento TechSP",
    endereco: "Online",
    tipo: "Online",
  },
  {
    data: "05/04/2024",
    horario: "10:00",
    titulo: "O Futuro do Desenvolvimento com IA",
    local: "Conferência DevBR",
    endereco: "Rio de Janeiro, RJ",
    tipo: "Presencial",
  },
];

export default function PalestrasPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Hero */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">Palestras</h1>
          <p className="text-xl text-muted-foreground">
            Levo conhecimento sobre IA, tecnologia e carreira para eventos, empresas e instituições.
            Conteúdo prático e acessível para todos os públicos.
          </p>
        </div>

        {/* Próximas Palestras */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Próximas Palestras</h2>
            <p className="text-muted-foreground">
              Confira onde estarei nos próximos eventos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proximasPalestras.map((palestra, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    {palestra.data} às {palestra.horario}
                  </div>
                  <CardTitle className="text-xl">{palestra.titulo}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-2 mt-2">
                      <MapPin className="h-4 w-4" />
                      {palestra.local}
                    </div>
                    <div className="mt-1">{palestra.endereco}</div>
                    <div className="mt-2">
                      <span className="inline-block px-2 py-1 rounded bg-muted text-xs">
                        {palestra.tipo}
                      </span>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Temas de Palestras */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Temas de Palestras</h2>
            <p className="text-muted-foreground">
              Conteúdos que posso apresentar no seu evento. Todos os temas podem ser adaptados
              conforme a necessidade do público e duração do evento.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {temas.map((tema, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{tema.titulo}</CardTitle>
                  <CardDescription className="text-base">{tema.descricao}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <div>
                        <strong>Duração:</strong> {tema.duracao}
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Users className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <div>
                        <strong>Público:</strong> {tema.publico}
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <div>
                        <strong>Formato:</strong> {tema.formato}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA para Contratar */}
        <Card className="bg-primary text-primary-foreground">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Quer me contratar para uma palestra?</CardTitle>
            <CardDescription className="text-primary-foreground/80 text-base">
              Entre em contato e vamos conversar sobre como posso contribuir com seu evento.
              Posso adaptar o conteúdo conforme sua necessidade.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href="mailto:contato@natansoares.com.br">
                Enviar e-mail
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
