import { User, Briefcase, Users } from 'lucide-react'

interface TargetAudienceSectionProps {
  title: string
  audiences: {
    icon: React.ElementType
    title: string
    description: string
  }[]
}

export function TargetAudienceSection({ title, audiences }: TargetAudienceSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Para quem é
          </h2>
          <p className="text-center text-muted mb-12 text-lg">
            {title}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {audiences.map((audience, index) => {
              const Icon = audience.icon
              return (
                <div
                  key={index}
                  className="bg-white border border-border rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="bg-primary text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-foreground">{audience.title}</h3>
                  <p className="text-muted">{audience.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
