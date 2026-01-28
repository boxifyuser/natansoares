'use client'

import { useEffect, useRef } from 'react'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { LeadForm } from '@/components/lead-form'
import { StepsSection } from '@/components/steps-section'
import { BenefitsSection } from '@/components/benefits-section'
import { TargetAudienceSection } from '@/components/target-audience-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { FAQSection } from '@/components/faq-section'
import { Footer } from '@/components/footer'
import { StickyCTA } from '@/components/sticky-cta'
import { pageConfigs } from '@/lib/page-config'
import { pushDataLayer } from '@/lib/data-layer'

const config = pageConfigs.Truck

export default function TruckPage() {
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Disparar evento de visualização
    pushDataLayer('view_lp', {
      tipo_veiculo: 'Truck',
      page_path: '/truck'
    })
  }, [])

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    pushDataLayer('click_cta_primary', { source: 'hero', tipo_veiculo: 'Truck' })
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <HeroSection
        headline={config.headline}
        subheadline={config.subheadline}
        bullets={config.bullets}
        onCTAClick={scrollToForm}
      />

      {/* Form Section - Above the fold on desktop */}
      <section ref={formRef} className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div className="md:sticky md:top-24">
              <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  Faça sua cotação agora
                </h2>
                <p className="text-muted mb-6">
                  Preencha o formulário e receba uma cotação personalizada em minutos
                </p>
                <LeadForm vehicleType="Truck" />
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <h3 className="font-bold text-lg mb-3 text-foreground">✓ Atendimento humano</h3>
                <p className="text-muted text-sm">
                  Nossos consultores estão prontos para te ajudar com qualquer dúvida
                </p>
              </div>
              
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <h3 className="font-bold text-lg mb-3 text-foreground">✓ Suporte rápido</h3>
                <p className="text-muted text-sm">
                  Resposta em até 2 minutos via WhatsApp após o envio do formulário
                </p>
              </div>
              
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <h3 className="font-bold text-lg mb-3 text-foreground">✓ Cotação em poucos minutos</h3>
                <p className="text-muted text-sm">
                  Processo rápido e sem burocracia. Receba sua proposta personalizada em minutos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StepsSection />
      <BenefitsSection />
      <TargetAudienceSection 
        title="Ideal para caminhoneiros que buscam proteção completa e economia"
        audiences={config.targetAudience}
      />
      <TestimonialsSection testimonials={config.testimonials} />
      <FAQSection />
      <Footer />
      
      <StickyCTA text="Fazer cotação agora" onClick={scrollToForm} />
    </main>
  )
}
