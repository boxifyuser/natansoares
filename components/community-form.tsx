"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { submitCommunityAndRedirect } from "@/app/actions/forms";
import { cn } from "@/lib/utils";

interface CommunityFormProps {
  ctaLabel: string;
  successMessage?: string;
  className?: string;
}

export function CommunityForm({
  ctaLabel,
  successMessage = "Ingresso gratuito. Vagas abertas.",
  className,
}: CommunityFormProps) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [toast, setToast] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const nome = (formData.get("nome") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const whatsapp = (formData.get("whatsapp") as string)?.trim();
    if (!nome || !email || !whatsapp) {
      setError("Preencha nome, e-mail e WhatsApp.");
      return;
    }
    setPending(true);
    try {
      await submitCommunityAndRedirect({ nome, email, whatsapp });
      setToast(true);
      router.push("/obrigado");
    } catch (err) {
      if (err && typeof err === "object" && "digest" in err) throw err;
      setError("Algo deu errado. Tente de novo.");
      setPending(false);
    }
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="com-nome">Nome</Label>
          <Input
            id="com-nome"
            name="nome"
            placeholder="Seu nome"
            required
            disabled={pending}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="com-email">E-mail</Label>
          <Input
            id="com-email"
            name="email"
            type="email"
            placeholder="seu@email.com"
            required
            disabled={pending}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="com-whatsapp">WhatsApp</Label>
          <Input
            id="com-whatsapp"
            name="whatsapp"
            placeholder="(11) 99999-9999"
            required
            disabled={pending}
          />
        </div>
        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}
        <Button type="submit" className="w-full" size="lg" disabled={pending}>
          {pending ? "Enviando..." : ctaLabel}
        </Button>
      </form>
      <p className="mt-3 text-sm text-muted-foreground">{successMessage}</p>
      {toast && (
        <div
          className={cn(
            "fixed bottom-4 left-1/2 -translate-x-1/2 z-50",
            "bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium shadow-lg"
          )}
          role="alert"
        >
          Enviado com sucesso!
        </div>
      )}
    </div>
  );
}
