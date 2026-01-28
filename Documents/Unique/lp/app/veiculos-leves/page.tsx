import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { LeadForm } from '@/components/lead-form'
import { Check, ArrowLeft, Shield, Clock, Car, Users } from 'lucide-react'
import { FAQSection } from '@/components/faq-section'

export const metadata: Metadata = {
  title: 'Proteção para Veículos Leves | Unique Proteção Veicular',
  description: 'Proteção veicular para carros de passeio com economia de até 50%. Cobertura completa contra roubo, furto, colisão e assistência 24h. Cotação online grátis.',
  keywords: 'proteção veicular carros, seguro carro popular, proteção sedan, seguro SUV, proteção veicular barata',
  openGraph: {
    title: 'Proteção para Veículos Leves | Economia de até 50%',
    description: 'Cobertura completa para seu carro com o melhor custo-benefício',
    type: 'website',
  }
}

export default function VeiculosLevesPage() {
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
            src="/modern-sedan-car-in-city.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-accent text-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Car className="inline h-4 w-4 mr-2" />
              Veículos Leves
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Proteção Completa para seu Carro com <span className="text-accent">Economia Real</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Cobertura contra roubo, furto, colisão e muito mais. A partir de R$ 89/mês com assistência 24 horas em todo Brasil.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Check className="h-5 w-5 text-accent" />
                <span>Sem análise de perfil</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Check className="h-5 w-5 text-accent" />
                <span>Aprovação em 24h</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Check className="h-5 w-5 text-accent" />
                <span>Carro reserva incluso</span>
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
                O que está incluído na proteção?
              </h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Cobertura Completa</h3>
                    <p className="text-muted">Roubo, furto, colisão, incêndio, fenômenos naturais e danos a terceiros</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Assistência 24 Horas</h3>
                    <p className="text-muted">Guincho, socorro mecânico, troca de pneu, chaveiro e muito mais</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Car className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Carro Reserva</h3>
                    <p className="text-muted">Veículo substituto durante reparos ou após sinistros cobertos</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Proteção para Motoristas</h3>
                    <p className="text-muted">Cobertura de despesas médicas para você e seus passageiros</p>
                  </div>
                </div>
              </div>

              {/* Price Comparison */}
              <div className="bg-surface rounded-2xl p-6 border border-border">
                <h3 className="font-bold text-xl mb-4">Compare e Economize</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted">Seguro Tradicional</span>
                    <span className="font-semibold text-lg line-through text-danger">R$ 180/mês</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Unique Proteção</span>
                    <span className="font-bold text-2xl text-primary">R$ 89/mês</span>
                  </div>
                  <div className="bg-accent/10 text-accent font-bold text-center py-2 rounded-lg mt-4">
                    Economia de 50% = R$ 1.092/ano
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-2xl shadow-xl border border-border p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Faça sua Cotação Grátis</h3>
                  <p className="text-muted">Preencha o formulário e receba sua proposta em minutos</p>
                </div>
                <LeadForm vehicleType="Veículos Leves" />
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

      {/* Covered Vehicles */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Veículos Cobertos
            </h2>
            <p className="text-muted mb-12">Proteção para todas as principais marcas e modelos</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Sedan', 'Hatch', 'SUV', 'Crossover', 'Utilitário', 'Compacto', 'Esportivo', 'Van'].map((type) => (
                <div key={type} className="bg-white rounded-xl p-6 border border-border hover:border-primary transition-colors">
                  <div className="text-4xl mb-2">🚗</div>
                  <p className="font-semibold">{type}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection 
        limit={6}
        title="Perguntas Frequentes"
        description="Tire suas dúvidas sobre proteção veicular para carros"
      />

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proteja seu carro agora mesmo
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Cotação grátis em 2 minutos. Sem compromisso.
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
              <Link href="/trucks" className="hover:text-white transition-colors">Trucks</Link>
              <Link href="/picapes" className="hover:text-white transition-colors">Picapes</Link>
            </div>
            <p className="mt-8 text-sm">© 2025 Unique Proteção Veicular. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
