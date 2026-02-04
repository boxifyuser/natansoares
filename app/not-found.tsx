import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container py-24">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-3xl font-semibold">Página não encontrada</h2>
        <p className="text-muted-foreground text-lg">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Button size="lg" asChild>
          <Link href="/">
            <Home className="mr-2 h-5 w-5" />
            Voltar para o início
          </Link>
        </Button>
      </div>
    </div>
  );
}
