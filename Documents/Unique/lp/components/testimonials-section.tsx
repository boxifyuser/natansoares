import { Star } from 'lucide-react'

interface Testimonial {
  name: string
  location: string
  text: string
  rating?: number
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            O que nossos clientes dizem
          </h2>
          <p className="text-center text-muted mb-12 text-lg">
            Depoimentos reais de quem confia na Unique
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted mb-4 text-sm leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
