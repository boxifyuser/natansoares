import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { LeadForm } from '@/components/lead-form'
import { Check, ArrowLeft, Shield, Truck, Package, Clock } from 'lucide-react'
import { FAQSection } from '@/components/faq-section'

export const metadata: Metadata = {
  title: 'Proteção para Trucks | Unique Proteção Veicular',
  description: 'Proteção veicular especializada para caminhões leves e pesados. Cobertura para veículo e carga, assistência 24h nacional. Cotação personalizada grátis.',
  keywords: 'proteção caminhão, seguro truck, proteção carga, seguro frota, proteção veicular caminhão',
  openGraph: {
    title: 'Proteção para Trucks | Solução Completa para Transporte',
    description: 'Proteja seu caminhão e sua carga com a melhor cobertura do mercado',
    type: 'website',
  }
}

export default function TrucksPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-muted hover:text-foreground transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <Image
              src="https://uniquecoop.com.br/wp-content/uploads/2025/10/LOGO-1-azul-amarelo-HORIZONTAL-scaled.png"
              alt="Unique Proteção Veicular"
              width={180}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </div>
          <a
            href="tel:08007776677"
            className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-primary-hover transition-colors"
          >
            <span className="text-sm">📞 0800 777 6677</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-surface-dark text-white py-16 md:py-24">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/commercial-truck-on-highway-at-sunset.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-accent text-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Truck className="inline h-4 w-4 mr-2" />
              Trucks e Caminhões
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Proteção Especializada para seu <span className="text-accent">Caminhão</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Cobertura completa para veículo e carga. Solução ideal para transportadores autônomos e frotas comerciais.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Check className="h-5 w-5 text-accent" />
                <span>Cobertura nacional</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Check className="h-5 w-5 text-accent" />
                <span>Proteção da carga</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Check className="h-5 w-5 text-accent" />
                <span>Assistência 24h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form and Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Benefits */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Proteção Completa para Transporte
              </h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Cobertura do Veículo</h3>
                    <p className="text-muted">Roubo, furto, colisão, incêndio e danos diversos ao caminhão</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Proteção da Carga</h3>
                    <p className="text-muted">Cobertura para mercadorias transportadas contra roubos e avarias</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Assistência Especializada</h3>
                    <p className="text-muted">Guincho pesado, socorro mecânico e rede credenciada nacional</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Truck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Sem Limite de KM</h3>
                    <p className="text-muted">Proteção válida em todo território nacional, sem restrição de quilometragem</p>
                  </div>
                </div>
              </div>

              {/* Special Features */}
              <div className="bg-surface rounded-2xl p-6 border border-border">
                <h3 className="font-bold text-xl mb-4">Diferenciais para Trucks</h3>
                <ul className="space-y-3">
                  {[
                    'Cobertura para caminhões de todos os portes',
                    'Proteção de equipamentos e acessórios',
                    'Desconto para frotas acima de 3 veículos',
                    'Rastreamento veicular incluso',
                    'Consultoria de segurança para rotas'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-2xl shadow-xl border border-border p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Cotação Personalizada</h3>
                  <p className="text-muted">Fale com um especialista e receba a melhor oferta</p>
                </div>
                <LeadForm vehicleType="Trucks" />
              </div>

              <div className="mt-6 bg-surface rounded-xl p-4 text-center text-sm text-muted">
                <p className="flex items-center justify-center gap-2">
                  🔒 Atendimento especializado em até 1 hora
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Covered Trucks */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Tipos de Caminhões Cobertos
            </h2>
            <p className="text-muted mb-12">Proteção para todos os modelos e categorias</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { name: 'Toco', icon: '🚚' },
                { name: 'Truck', icon: '🚛' },
                { name: 'Carreta', icon: '🚚' },
                { name: 'Bitruck', icon: '🚛' },
                { name: 'Vanderleia', icon: '🚚' },
                { name: 'Graneleiro', icon: '🚛' },
              ].map((truck) => (
                <div key={truck.name} className="bg-white rounded-xl p-6 border border-border hover:border-primary transition-colors">
                  <div className="text-5xl mb-3">{truck.icon}</div>
                  <p className="font-semibold">{truck.name}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-primary/10 border border-primary rounded-xl p-6">
              <p className="text-lg font-semibold text-primary mb-2">
                Desconto Especial para Frotas
              </p>
              <p className="text-muted">
                A partir de 3 veículos, você garante condições exclusivas. Consulte nossos especialistas!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
              Mais de 20 Anos de Confiança
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: 'João Silva',
                  role: 'Transportador Autônomo',
                  text: 'Economia real todo mês e quando precisei, o atendimento foi rápido e transparente. A Unique realmente se importa com a gente!'
                },
                {
                  name: 'Transportes Rápido Ltda',
                  role: 'Frota com 8 caminhões',
                  text: 'Migramos toda nossa frota e reduzimos custos em 40%. A rede de oficinas referenciadas em todo Brasil facilita muito nosso trabalho.'
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-border">
                  <div className="flex gap-1 text-accent mb-4">
                    {'★★★★★'.split('').map((star, j) => (
                      <span key={j}>{star}</span>
                    ))}
                  </div>
                  <p className="text-muted mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection 
        limit={6}
        title="Perguntas Frequentes"
        description="Tire suas dúvidas sobre proteção veicular para trucks"
      />

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proteja seu caminhão e sua carga
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Fale com um especialista e receba uma proposta personalizada
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
          <div className="max-w-6xl mx-auto text-center">
            <Image
              src="https://uniquecoop.com.br/wp-content/uploads/2025/10/LOGO-1-azul-amarelo-HORIZONTAL-scaled.png"
              alt="Unique Proteção Veicular"
              width={180}
              height={50}
              className="h-10 w-auto mx-auto mb-6 brightness-0 invert"
            />
            <p className="mb-4">📞 0800 777 6677 | 📧 contato@unique.com.br</p>
            <div className="flex justify-center gap-6 text-sm">
              <Link href="/" className="hover:text-white transition-colors">Início</Link>
              <Link href="/veiculos-leves" className="hover:text-white transition-colors">Veículos Leves</Link>
              <Link href="/picapes" className="hover:text-white transition-colors">Picapes</Link>
            </div>
            <p className="mt-8 text-sm">© 2025 Unique Proteção Veicular. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
