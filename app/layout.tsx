import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/content/site";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | CRM, Tecnologia e IA`,
    template: `%s | ${site.name}`,
  },
  description:
    "15 anos de experiência em CRM e tecnologia. Especialista em IA aplicada a vendas, marketing e operação. Comunidade gratuita e mentoria.",
  keywords: [
    "CRM",
    "IA",
    "inteligência artificial",
    "automação",
    "vendas",
    "marketing",
    "mentoria",
    "Natan Soares",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  metadataBase: new URL(site.domain),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.domain,
    siteName: site.name,
    title: `${site.name} | CRM, Tecnologia e IA`,
    description:
      "15 anos de experiência em CRM e tecnologia. IA aplicada a vendas, marketing e operação. Comunidade gratuita e mentoria.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | CRM, Tecnologia e IA`,
    description: "CRM, Tecnologia e IA. Comunidade gratuita e mentoria.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={plusJakarta.variable}>
      <body className="min-h-screen font-sans antialiased bg-background text-foreground">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
