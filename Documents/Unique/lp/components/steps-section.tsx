import { CheckCircle2, Phone, FileText } from 'lucide-react'

const steps = [
  {
    icon: FileText,
    title: 'Preencha o formulário',
    description: 'Informe seus dados e do veículo em menos de 2 minutos'
  },
  {
    icon: Phone,
    title: 'Receba sua cotação',
    description: 'Um consultor entra em contato via WhatsApp com a melhor proposta'
  },
  {
    icon: CheckCircle2,
    title: 'Proteja seu veículo',
    description: 'Aprove sua cotação e tenha proteção completa com assistência 24h'
  }
]

export function StepsSection() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Como funciona
          </h2>
          <p className="text-center text-muted mb-12 text-lg">
            Processo simples e rápido em 3 passos
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-primary text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 relative">
                    <Icon className="h-8 w-8" />
                    <span className="absolute -top-2 -right-2 bg-accent text-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted text-sm">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
