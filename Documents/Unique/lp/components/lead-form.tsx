'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface LeadFormProps {
  vehicleType: string
}

export function LeadForm({ vehicleType }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    year: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log('Lead data:', { ...formData, vehicleType })
    setSubmitStatus('success')
    setIsSubmitting(false)
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        vehicle: '',
        year: '',
        message: ''
      })
      setSubmitStatus('idle')
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (submitStatus === 'success') {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-success mb-2">Cotação Enviada!</h3>
        <p className="text-muted">
          Entraremos em contato em breve com a melhor proposta para você.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Nome Completo *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Seu nome"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          Telefone/WhatsApp *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="(00) 00000-0000"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          E-mail *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="seu@email.com"
        />
      </div>

      <div>
        <label htmlFor="vehicle" className="block text-sm font-medium mb-2">
          Marca e Modelo *
        </label>
        <input
          type="text"
          id="vehicle"
          name="vehicle"
          required
          value={formData.vehicle}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Ex: Toyota Corolla"
        />
      </div>

      <div>
        <label htmlFor="year" className="block text-sm font-medium mb-2">
          Ano do Veículo *
        </label>
        <input
          type="text"
          id="year"
          name="year"
          required
          value={formData.year}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="2020"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Mensagem (opcional)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          placeholder="Alguma informação adicional?"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-lg text-lg transition-colors disabled:opacity-50"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <span className="animate-spin">⏳</span>
            Enviando...
          </span>
        ) : (
          'Receber Cotação Grátis'
        )}
      </Button>

      <p className="text-xs text-muted text-center">
        Ao enviar, você concorda com nossa política de privacidade
      </p>
    </form>
  )
}
