"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitContactAndRedirect } from "@/app/actions/forms";

const OBJETIVOS = [
  "Entrar na Comunidade",
  "Solicitar Mentoria",
  "Conhecer Boxify",
  "Conhecer Granja Texas",
  "Outro",
];

interface ContactFormProps {
  submitLabel?: string;
  className?: string;
}

export function ContactForm({
  submitLabel = "Enviar",
  className,
}: ContactFormProps) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [objetivo, setObjetivo] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const nome = (formData.get("nome") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const whatsapp = (formData.get("whatsapp") as string)?.trim();
    const empresa = (formData.get("empresa") as string)?.trim() || undefined;
    const obj = (formData.get("objetivo") as string)?.trim() || objetivo || undefined;
    if (!nome || !email || !whatsapp) {
      setError("Preencha nome, e-mail e WhatsApp.");
      return;
    }
    if (!objetivo?.trim()) {
      setError("Selecione um objetivo.");
      return;
    }
    setPending(true);
    try {
      await submitContactAndRedirect({
        nome,
        email,
        whatsapp,
        empresa,
        objetivo: obj,
      });
      router.push("/obrigado");
    } catch (err) {
      if (err && typeof err === "object" && "digest" in err) throw err;
      setError("Algo deu errado. Tente de novo.");
      setPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={className ?? "space-y-4"}>
      <div className="space-y-2">
        <Label htmlFor="contato-nome">Nome</Label>
        <Input
          id="contato-nome"
          name="nome"
          placeholder="Seu nome"
          required
          disabled={pending}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contato-email">E-mail</Label>
        <Input
          id="contato-email"
          name="email"
          type="email"
          placeholder="seu@email.com"
          required
          disabled={pending}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contato-whatsapp">WhatsApp</Label>
        <Input
          id="contato-whatsapp"
          name="whatsapp"
          placeholder="(11) 99999-9999"
          required
          disabled={pending}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contato-empresa">Empresa (opcional)</Label>
        <Input
          id="contato-empresa"
          name="empresa"
          placeholder="Nome da empresa"
          disabled={pending}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contato-objetivo">Objetivo</Label>
        <input type="hidden" name="objetivo" value={objetivo} />
        <Select
          value={objetivo}
          onValueChange={setObjetivo}
          disabled={pending}
        >
          <SelectTrigger id="contato-objetivo">
            <SelectValue placeholder="Selecione..." />
          </SelectTrigger>
          <SelectContent>
            {OBJETIVOS.map((o) => (
              <SelectItem key={o} value={o}>
                {o}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <Button type="submit" className="w-full" size="lg" disabled={pending}>
        {pending ? "Enviando..." : submitLabel}
      </Button>
    </form>
  );
}
