import { Shield, Clock, MapPin, Users, Wrench, DollarSign } from 'lucide-react'

interface Benefit {
  icon: React.ElementType
  title: string
  description: string
}

interface BenefitsSectionProps {
  benefits: Benefit[]
  title?: string
}

const defaultBenefits: Benefit[] = [
  {
    icon: Shield,
    title: 'Cobertura Completa',
    description: 'Proteção para roubo, furto, colisão e muito mais'
  },
  {
    icon: Clock,
    title: 'Assistência 24h',
    description: 'Atendimento em qualquer lugar, a qualquer hora'
  },
  {
    icon: MapPin,
    title: 'Cobertura Nacional',
    description: 'Atendimento em todo território brasileiro'
  },
  {
    icon: Wrench,
    title: 'Rede de Oficinas',
    description: 'Oficinas credenciadas em todo o país'
  },
  {
    icon: Users,
    title: 'Atendimento Humano',
    description: 'Suporte personalizado quando você precisar'
  },
  {
    icon: DollarSign,
    title: 'Economia Garantida',
    description: 'Até 50% mais barato que seguros tradicionais'
  }
]

export function BenefitsSection({ 
  benefits = defaultBenefits, 
  title = 'Coberturas e benefícios' 
}: BenefitsSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            {title}
          </h2>
          <p className="text-center text-muted mb-12 text-lg">
            Tudo que você precisa para dirigir com tranquilidade
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{benefit.title}</h3>
                  <p className="text-muted text-sm">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
