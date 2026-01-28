import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { LeadForm } from '@/components/lead-form'
import { Check, ArrowLeft, Shield, TruckIcon, Wrench, Clock } from 'lucide-react'
import { FAQSection } from '@/components/faq-section'

export const metadata: Metadata = {
  title: 'Proteção para Picapes | Unique Proteção Veicular',
  description: 'Proteção veicular para picapes de todas as marcas. Cobertura para uso pessoal e comercial, proteção de acessórios, assistência 24h. A partir de R$ 129/mês.',
  keywords: 'proteção picape, seguro pickup, proteção hilux, proteção ranger, seguro amarok, proteção S10',
  openGraph: {
    title: 'Proteção para Picapes | Cobertura Completa',
    description: 'Proteja sua picape com economia e cobertura completa incluindo acessórios',
    type: 'website',
  }
}

export default function PicapesPage() {
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
            src="/modern-pickup-truck-off-road-adventure.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-accent text-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <TruckIcon className="inline h-4 w-4 mr-2" />
              Picapes
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Proteção Total para sua <span className="text-accent">Picape</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Cobertura completa para uso pessoal e comercial. Proteção estendida para acessórios e equipamentos. A partir de R$ 129/mês.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Check className="h-5 w-5 text-accent" />
                <span>Cobre acessórios</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Check className="h-5 w-5 text-accent" />
                <span>Uso on/off-road</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Check className="h-5 w-5 text-accent" />
                <span>Guincho especializado</span>
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
                Proteção Pensada para Picapes
              </h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Cobertura Completa</h3>
                    <p className="text-muted">Roubo, furto, colisão, incêndio para uso pessoal e profissional</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Proteção de Acessórios</h3>
                    <p className="text-muted">Capota marítima, estribo, rack, farol auxiliar e outros equipamentos inclusos</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <TruckIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Guincho Especializado</h3>
                    <p className="text-muted">Equipamentos adequados para picapes, inclusive em situações off-road</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Assistência Completa 24h</h3>
                    <p className="text-muted">Socorro mecânico, elétrico, chaveiro e pane seca em todo Brasil</p>
                  </div>
                </div>
              </div>

              {/* Popular Models */}
              <div className="bg-surface rounded-2xl p-6 border border-border">
                <h3 className="font-bold text-xl mb-4">Marcas e Modelos Populares</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    'Toyota Hilux',
                    'Ford Ranger',
                    'Chevrolet S10',
                    'Volkswagen Amarok',
                    'Mitsubishi L200',
                    'Nissan Frontier',
                    'Fiat Toro',
                    'RAM 2500/3500'
                  ].map((model, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted">{model}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted italic">E muitos outros modelos!</p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-2xl shadow-xl border border-border p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Faça sua Cotação Grátis</h3>
                  <p className="text-muted">Receba sua proposta personalizada em minutos</p>
                </div>
                <LeadForm vehicleType="Picapes" />
              </div>

              <div className="mt-6 bg-surface rounded-xl p-4 text-center text-sm text-muted">
                <p className="flex items-center justify-center gap-2">
                  🔒 Seus dados estão seguros e protegidos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessories Coverage */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-foreground">
              Acessórios Cobertos
            </h2>
            <p className="text-center text-muted mb-12">
              Proteja também os equipamentos que valorizam sua picape
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Capota Marítima', icon: '🏠' },
                { name: 'Rack/Santo Antônio', icon: '📦' },
                { name: 'Estribo Lateral', icon: '🪜' },
                { name: 'Faróis Auxiliares', icon: '💡' },
                { name: 'Engate/Reboque', icon: '🔗' },
                { name: 'Som e Multimídia', icon: '🔊' },
              ].map((accessory) => (
                <div key={accessory.name} className="bg-white rounded-xl p-6 border border-border text-center hover:border-primary transition-colors">
                  <div className="text-4xl mb-3">{accessory.icon}</div>
                  <p className="font-semibold text-sm">{accessory.name}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-primary/10 border border-primary rounded-xl p-6 text-center">
              <p className="font-semibold text-primary mb-2">
                Cobertura de até R$ 15.000 em acessórios
              </p>
              <p className="text-sm text-muted">
                Consulte as condições e documentação necessária
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
              Ideal para Diferentes Usos
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-border">
                <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>
                <h3 className="text-2xl font-bold mb-3">Uso Familiar</h3>
                <p className="text-muted mb-4">
                  Proteja sua picape para viagens, passeios e o dia a dia da família com total tranquilidade.
                </p>
                <ul className="space-y-2 text-sm">
                  {['Viagens e aventuras', 'Proteção off-road', 'Cobertura para trailers', 'Assistência em rodovias'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-border">
                <div className="text-5xl mb-4">💼</div>
                <h3 className="text-2xl font-bold mb-3">Uso Profissional</h3>
                <p className="text-muted mb-4">
                  Cobertura adequada para quem usa a picape como ferramenta de trabalho todos os dias.
                </p>
                <ul className="space-y-2 text-sm">
                  {['Transporte de cargas', 'Uso em obras e canteiros', 'Equipamentos de trabalho', 'Sem limite de KM'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection 
        limit={6}
        title="Perguntas Frequentes"
        description="Tire suas dúvidas sobre proteção veicular para picapes"
      />

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proteja sua picape agora
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Cotação grátis e rápida. Sem compromisso.
          </p>
          <a
            href="#formulario"
            className="inline-block bg-accent hover:bg-accent-hover text-foreground font-bold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            Fazer Cotação Grátis
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
              <Link href="/trucks" className="hover:text-white transition-colors">Trucks</Link>
            </div>
            <p className="mt-8 text-sm">© 2025 Unique Proteção Veicular. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
