"use server";

import { redirect } from "next/navigation";

export type FormContactPayload = {
  nome: string;
  email: string;
  whatsapp: string;
  empresa?: string;
  objetivo?: string;
};

export async function submitContact(data: FormContactPayload) {
  // Mock: salvar em memória/console
  console.log("[Form Contact]", new Date().toISOString(), data);
  return { success: true };
}

export async function submitCommunity(data: {
  nome: string;
  email: string;
  whatsapp: string;
}) {
  console.log("[Form Community]", new Date().toISOString(), data);
  return { success: true };
}

export async function submitContactAndRedirect(data: FormContactPayload) {
  await submitContact(data);
  redirect("/obrigado");
}

export async function submitCommunityAndRedirect(data: {
  nome: string;
  email: string;
  whatsapp: string;
}) {
  await submitCommunity(data);
  redirect("/obrigado");
}
