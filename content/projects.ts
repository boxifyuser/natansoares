/**
 * Projetos independentes (vitrine "Meus projetos").
 * Edite aqui para adicionar ou alterar projetos.
 */

export type ProjectStatus = "Em andamento" | "Lançado" | "Ideia";

export interface Project {
  slug: string;
  name: string;
  category: string;
  description: string;
  status: ProjectStatus;
}

export const projects: readonly Project[] = [
  {
    slug: "automacao-vendas",
    name: "Automação de Vendas",
    category: "CRM",
    description:
      "Sistema de automação de follow-up e pipeline para equipes comerciais B2B.",
    status: "Lançado",
  },
  {
    slug: "assistente-ia-atendimento",
    name: "Assistente IA para Atendimento",
    category: "IA",
    description:
      "Copilot para triagem e respostas iniciais em canais de suporte.",
    status: "Em andamento",
  },
  {
    slug: "bootcamp-tecnologia",
    name: "Bootcamp Fundamentos em Tecnologia",
    category: "Educação",
    description:
      "Curso prático de fundamentos em TI para quem quer entrar na área.",
    status: "Ideia",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
