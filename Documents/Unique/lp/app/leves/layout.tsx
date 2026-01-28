import { Metadata } from 'next'
import { pageConfigs } from '@/lib/page-config'

const config = pageConfigs.Leve

export const metadata: Metadata = {
  title: config.seo.title,
  description: config.seo.description,
  keywords: config.seo.keywords.join(', '),
  openGraph: {
    title: config.seo.title,
    description: config.seo.description,
    type: 'website',
    url: 'https://lp.uniquecoop.com.br/leves',
  },
  alternates: {
    canonical: 'https://lp.uniquecoop.com.br/leves',
  },
}

export default function LevesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
