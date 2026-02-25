import Link from "next/link";
import { site } from "@/content/site";
import { Linkedin, Instagram, Youtube } from "lucide-react";

const footerLinks = [
  { href: "/", label: "Início" },
  { href: "/comunidade", label: "Comunidade" },
  { href: "/mentoria", label: "Mentoria" },
  { href: "/boxify", label: "Boxify" },
  { href: "/granjatexas", label: "Granja Texas" },
  { href: "/contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{site.name}</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              CRM, Tecnologia e IA para crescer com processo. Comunidade
              gratuita e mentoria.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Navegação</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Redes</h4>
            <ul className="flex gap-4">
              <li>
                <a
                  href={site.footer.redes.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href={site.footer.redes.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href={site.footer.redes.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>{site.footer.copy}</p>
        </div>
      </div>
    </footer>
  );
}
