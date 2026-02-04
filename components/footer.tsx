import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";

export function Footer() {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre suas aulas e mentorias.";
  const email = "contato@natansoares.com.br";

  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Natan Soares</h3>
            <p className="text-sm text-muted-foreground">
              Professor de tecnologia com foco em Inteligência Artificial.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-muted-foreground hover:text-primary">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/aulas" className="text-muted-foreground hover:text-primary">
                  Aulas & Mentorias
                </Link>
              </li>
              <li>
                <Link href="/conteudos" className="text-muted-foreground hover:text-primary">
                  Conteúdos
                </Link>
              </li>
              <li>
                <Link href="/palestras" className="text-muted-foreground hover:text-primary">
                  Palestras
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Serviços</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Aulas Particulares</li>
              <li>Mentorias</li>
              <li>Consultorias</li>
              <li>Palestras</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                  {email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Natan Soares. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
