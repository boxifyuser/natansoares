"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Check, Clock, Users, Building } from "lucide-react";
import { motion } from "framer-motion";

const whatsappLink = "https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre suas aulas e mentorias.";

const planos = [
  {
    nome: "Aula Particular",
    icone: Users,
    descricao: "Aulas individuais personalizadas para seu objetivo específico",
    inclui: [
      "Aula individual de 1h30",
      "Conteúdo personalizado",
      "Material de apoio",
      "Suporte via WhatsApp",
      "Flexibilidade de horário",
    ],
    formato: "Online ou Presencial",
    duracao: "1h30 por aula",
    preRequisitos: "Nenhum pré-requisito específico",
    preco: "A partir de R$ 150/aula",
  },
  {
    nome: "Mentoria 4 Semanas",
    icone: Clock,
    descricao: "Programa completo de mentoria com acompanhamento semanal",
    inclui: [
      "4 sessões de mentoria (1h30 cada)",
      "Plano de estudos personalizado",
      "Projetos práticos",
      "Revisão de código e portfólio",
      "Suporte contínuo",
      "Material exclusivo",
    ],
    formato: "Online",
    duracao: "4 semanas",
    preRequisitos: "Conhecimento básico na área escolhida",
    preco: "R$ 1.200 (ou 4x de R$ 300)",
  },
  {
    nome: "Mentoria para Equipes/Empresas",
    icone: Building,
    descricao: "Capacitação técnica para equipes e empresas",
    inclui: [
      "Treinamento em grupo",
      "Conteúdo adaptado à necessidade da empresa",
      "Projetos práticos reais",
      "Certificado de participação",
      "Suporte pós-treinamento",
      "Material corporativo",
    ],
    formato: "Online ou Presencial",
    duracao: "Personalizado (mínimo 8h)",
    preRequisitos: "Definido conforme necessidade",
    preco: "Sob consulta",
  },
];

const faqs = [
  {
    pergunta: "Como funcionam as aulas online?",
    resposta: "As aulas online são realizadas via videoconferência (Google Meet ou Zoom), com compartilhamento de tela e ambiente interativo. Você pode fazer perguntas em tempo real e receber feedback imediato.",
  },
  {
    pergunta: "Preciso ter conhecimento prévio?",
    resposta: "Depende do plano escolhido. Aulas particulares podem ser adaptadas para iniciantes. Mentorias geralmente requerem conhecimento básico na área. Entre em contato para discutirmos seu nível atual.",
  },
  {
    pergunta: "Como agendar uma aula ou mentoria?",
    resposta: "Entre em contato via WhatsApp ou preencha o formulário abaixo. Vamos conversar sobre seus objetivos e definir o melhor plano para você.",
  },
  {
    pergunta: "Oferece certificado?",
    resposta: "Sim, para mentorias e treinamentos corporativos oferecemos certificado de participação. Para aulas particulares, podemos emitir certificado mediante solicitação.",
  },
  {
    pergunta: "Qual a forma de pagamento?",
    resposta: "Aceitamos PIX, boleto e cartão de crédito (parcelado). Para empresas, também trabalhamos com nota fiscal e condições especiais.",
  },
  {
    pergunta: "Posso cancelar ou remarcar?",
    resposta: "Sim, desde que avise com pelo menos 24h de antecedência. Cancelamentos com menos de 24h podem estar sujeitos a taxa de remarcação.",
  },
];

export function AulasContent() {
  return (
    <div className="container py-12 md:py-24">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Hero */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">Aulas & Mentorias</h1>
          <p className="text-xl text-muted-foreground">
            Aprenda tecnologia de forma prática e personalizada. Escolha o formato que melhor se adapta
            ao seu objetivo e disponibilidade.
          </p>
        </div>

        {/* Planos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {planos.map((plano, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <plano.icone className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="text-2xl">{plano.nome}</CardTitle>
                  <CardDescription className="text-base">{plano.descricao}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="space-y-4 flex-1">
                    <div>
                      <h4 className="font-semibold mb-2">O que inclui:</h4>
                      <ul className="space-y-2">
                        {plano.inclui.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Formato:</strong> {plano.formato}
                      </p>
                      <p>
                        <strong>Duração:</strong> {plano.duracao}
                      </p>
                      <p>
                        <strong>Pré-requisitos:</strong> {plano.preRequisitos}
                      </p>
                    </div>
                    <div className="mt-auto pt-4 border-t">
                      <p className="text-2xl font-bold text-primary mb-4">{plano.preco}</p>
                      <Button className="w-full" asChild>
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Agendar agora
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-muted-foreground">
              Tire suas dúvidas sobre aulas e mentorias
            </p>
          </div>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.pergunta}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Formulário de Contato */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Entre em contato</CardTitle>
            <CardDescription>
              Preencha o formulário abaixo ou fale diretamente no WhatsApp
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                // Aqui você pode integrar com um serviço de email ou API
                alert("Obrigado! Entrarei em contato em breve.");
              }}
            >
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
                <Label htmlFor="interesse">Qual seu interesse?</Label>
                <select
                  id="interesse"
                  name="interesse"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  required
                >
                  <option value="">Selecione...</option>
                  <option value="aula-particular">Aula Particular</option>
                  <option value="mentoria-4semanas">Mentoria 4 Semanas</option>
                  <option value="empresa">Mentoria para Equipes/Empresas</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="mensagem">Mensagem</Label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  placeholder="Conte-me sobre seus objetivos e como posso ajudar..."
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Enviar mensagem
              </Button>
            </form>
            <div className="mt-6 text-center">
              <Button variant="outline" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Ou fale no WhatsApp
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
