import { Metadata } from 'next'
import { pageConfigs } from '@/lib/page-config'

const config = pageConfigs.Picape

export const metadata: Metadata = {
  title: config.seo.title,
  description: config.seo.description,
  keywords: config.seo.keywords.join(', '),
  openGraph: {
    title: config.seo.title,
    description: config.seo.description,
    type: 'website',
    url: 'https://lp.uniquecoop.com.br/picape',
  },
  alternates: {
    canonical: 'https://lp.uniquecoop.com.br/picape',
  },
}

export default function PicapeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
