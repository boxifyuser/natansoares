import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Natan Soares | Professor de Tecnologia | IA na Prática",
    template: "%s | Natan Soares",
  },
  description: "Professor de tecnologia com foco em Inteligência Artificial. Aulas, mentorias e consultorias em IA, Redes, Desenvolvimento Web e Programação.",
  keywords: ["inteligência artificial", "IA", "tecnologia", "professor", "mentoria", "aulas", "programação", "redes", "desenvolvimento web"],
  authors: [{ name: "Natan Soares" }],
  creator: "Natan Soares",
  publisher: "Natan Soares",
  metadataBase: new URL("https://www.natansoares.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.natansoares.com.br",
    siteName: "Natan Soares",
    title: "Natan Soares | Professor de Tecnologia | IA na Prática",
    description: "Professor de tecnologia com foco em Inteligência Artificial. Aulas, mentorias e consultorias em IA, Redes, Desenvolvimento Web e Programação.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Natan Soares - Professor de Tecnologia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Natan Soares | Professor de Tecnologia | IA na Prática",
    description: "Professor de tecnologia com foco em Inteligência Artificial. Aulas, mentorias e consultorias.",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
