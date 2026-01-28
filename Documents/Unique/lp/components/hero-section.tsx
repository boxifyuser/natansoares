import { Check } from 'lucide-react'

interface HeroSectionProps {
  headline: string
  subheadline: string
  bullets: string[]
  ctaText?: string
  onCTAClick?: () => void
}

export function HeroSection({ 
  headline, 
  subheadline, 
  bullets, 
  ctaText = 'Fazer cotação agora',
  onCTAClick 
}: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-primary-hover text-white py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/modern-cars-on-road-abstract-background.jpg')] bg-cover bg-center" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
            {headline}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 text-pretty max-w-3xl mx-auto">
            {subheadline}
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:text-base mb-8">
            {bullets.map((bullet, index) => (
              <span key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Check className="h-4 w-4 text-accent" />
                {bullet}
              </span>
            ))}
          </div>

          {onCTAClick && (
            <button
              onClick={onCTAClick}
              className="inline-block bg-accent hover:bg-accent-hover text-foreground font-bold px-8 py-4 rounded-xl text-lg md:text-xl transition-all transform hover:scale-105 shadow-2xl"
            >
              {ctaText}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
