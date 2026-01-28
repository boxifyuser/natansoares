import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Car, Truck, TruckIcon } from 'lucide-react'
import { FAQSection } from '@/components/faq-section'

export const metadata: Metadata = {
  title: 'Unique Proteção Veicular | Proteção Completa para seu Veículo',
  description: 'Proteção veicular com economia de até 50% em relação aos seguros tradicionais. Cobertura completa para veículos leves, trucks e picapes. Cotação rápida e fácil.',
  keywords: 'proteção veicular, seguro de carro, proteção truck, proteção picape, associação veicular, seguro barato',
  openGraph: {
    title: 'Unique Proteção Veicular | Economize até 50%',
    description: 'Proteção completa para seu veículo com economia garantida',
    type: 'website',
  }
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Image
            src="https://uniquecoop.com.br/wp-content/uploads/2025/10/LOGO-1-azul-amarelo-HORIZONTAL-scaled.png"
            alt="Unique Proteção Veicular"
            width={180}
            height={50}
            className="h-10 w-auto"
            priority
          />
          <a
            href="tel:08007776677"
            className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-primary-hover transition-colors"
          >
            <span className="text-sm">📞 0800 777 6677</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-surface-dark text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/modern-cars-on-road-abstract-background.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Proteção Veicular com Economia de até <span className="text-accent">50%</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 text-pretty">
              Escolha o tipo do seu veículo e descubra como proteger seu patrimônio com a melhor cobertura do mercado
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-2">✓ Assistência 24h</span>
              <span className="flex items-center gap-2">✓ Cobertura Nacional</span>
              <span className="flex items-center gap-2">✓ Sem Análise de Perfil</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Selection */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
              Qual é o seu tipo de veículo?
            </h2>
            <p className="text-center text-muted mb-12 text-lg">
              Selecione abaixo para ver a proteção ideal para você
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Veículos Leves */}
              <Link
                href="/veiculos-leves"
                className="group relative bg-white rounded-2xl border-2 border-border hover:border-primary transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl"
              >
                <div className="aspect-[4/3] relative bg-surface">
                  <Image
                    src="/modern-sedan.png"
                    alt="Veículos Leves"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-primary text-white p-3 rounded-xl mb-2 w-fit">
                      <Car className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">Veículos Leves</h3>
                    <p className="text-sm text-gray-200">Carros de passeio, SUVs e utilitários</p>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 mb-4 text-sm text-muted">
                    <li className="flex items-center gap-2">✓ Cobertura de roubo e furto</li>
                    <li className="flex items-center gap-2">✓ Assistência 24 horas</li>
                    <li className="flex items-center gap-2">✓ Carro reserva</li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold">A partir de R$ 89/mês</span>
                    <span className="text-primary group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </Link>

              {/* Trucks */}
              <Link
                href="/trucks"
                className="group relative bg-white rounded-2xl border-2 border-border hover:border-primary transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl"
              >
                <div className="aspect-[4/3] relative bg-surface">
                  <Image
                    src="/commercial-truck-on-highway.jpg"
                    alt="Trucks"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-primary text-white p-3 rounded-xl mb-2 w-fit">
                      <Truck className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">Trucks</h3>
                    <p className="text-sm text-gray-200">Caminhões leves e pesados</p>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 mb-4 text-sm text-muted">
                    <li className="flex items-center gap-2">✓ Proteção da carga</li>
                    <li className="flex items-center gap-2">✓ Cobertura de acidentes</li>
                    <li className="flex items-center gap-2">✓ Assistência mecânica</li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold">Cotação personalizada</span>
                    <span className="text-primary group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </Link>

              {/* Picapes */}
              <Link
                href="/picapes"
                className="group relative bg-white rounded-2xl border-2 border-border hover:border-primary transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl"
              >
                <div className="aspect-[4/3] relative bg-surface">
                  <Image
                    src="/modern-pickup-truck.png"
                    alt="Picapes"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-primary text-white p-3 rounded-xl mb-2 w-fit">
                      <TruckIcon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">Picapes</h3>
                    <p className="text-sm text-gray-200">Todas as marcas e modelos</p>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 mb-4 text-sm text-muted">
                    <li className="flex items-center gap-2">✓ Uso pessoal e comercial</li>
                    <li className="flex items-center gap-2">✓ Proteção de acessórios</li>
                    <li className="flex items-center gap-2">✓ Guincho especializado</li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold">A partir de R$ 129/mês</span>
                    <span className="text-primary group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Quem é a Unique?
            </h2>
            <p className="text-lg text-muted mb-4 text-balance">
              A <strong className="text-primary">Unique é uma cooperativa com mais de 20 anos de experiência</strong> no mercado de proteção veicular, 
              criada para unir pessoas em torno de um objetivo comum: oferecer tranquilidade real no cuidado de seus veículos.
            </p>
            <p className="text-lg text-muted text-balance">
              Nossa atuação nacional é respaldada por <strong>cobertura em todo o território brasileiro</strong>, 
              uma <strong>rede de oficinas referenciadas</strong> e <strong>assistência 24h</strong>, 
              compromisso com <strong>transparência total</strong> e soluções personalizadas para cada perfil de motorista.
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Por que escolher a Unique?
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">
                🏆
              </div>
              <h3 className="font-bold text-lg mb-2">20 Anos de Experiência</h3>
              <p className="text-muted text-sm">Mais de duas décadas cuidando do seu patrimônio</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">
                🤝
              </div>
              <h3 className="font-bold text-lg mb-2">Cooperativa Confiável</h3>
              <p className="text-muted text-sm">Relacionamentos duradouros baseados em confiança</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">
                🗺️
              </div>
              <h3 className="font-bold text-lg mb-2">Cobertura Nacional</h3>
              <p className="text-muted text-sm">Assistência 24h em todo território brasileiro</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">
                ⚡
              </div>
              <h3 className="font-bold text-lg mb-2">Agilidade e Inovação</h3>
              <p className="text-muted text-sm">Soluções personalizadas com tecnologia de ponta</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection limit={5} />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Pronto para proteger seu veículo?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Escolha o tipo do seu veículo acima e faça uma cotação gratuita em menos de 2 minutos
          </p>
          <a
            href="tel:08007776677"
            className="inline-block bg-accent hover:bg-accent-hover text-foreground font-bold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            Ligar Agora: 0800 777 6677
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-dark text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="https://uniquecoop.com.br/wp-content/uploads/2025/10/LOGO-1-azul-amarelo-HORIZONTAL-scaled.png"
                alt="Unique Proteção Veicular"
                width={180}
                height={50}
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-sm">Cooperativa com mais de 20 anos protegendo seu patrimônio com confiança e transparência.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Produtos</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/veiculos-leves" className="hover:text-white transition-colors">Veículos Leves</Link></li>
                <li><Link href="/trucks" className="hover:text-white transition-colors">Trucks</Link></li>
                <li><Link href="/picapes" className="hover:text-white transition-colors">Picapes</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Como Funciona</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contato</h4>
              <ul className="space-y-2 text-sm">
                <li>📞 0800 777 6677</li>
                <li>📧 contato@unique.com.br</li>
                <li>📍 Atendimento Nacional</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>© 2025 Unique Proteção Veicular. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
