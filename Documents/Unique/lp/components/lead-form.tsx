'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { formatPhone, validatePhone } from '@/lib/phone-mask'
import { checkRateLimit, setRateLimit } from '@/lib/rate-limit'
import { getUTMParams } from '@/lib/utm-tracker'
import { pushDataLayer } from '@/lib/data-layer'
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react'

interface LeadFormProps {
  vehicleType: 'Truck' | 'Picape' | 'Leve'
  className?: string
}

export function LeadForm({ vehicleType, className }: LeadFormProps) {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    cidade: '',
    tipo_veiculo: vehicleType,
    placa: '',
    mensagem: '',
    honeypot: '' // Anti-spam
  })
  
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (field: string, value: string) => {
    if (field === 'telefone') {
      value = formatPhone(value)
    }
    setFormData(prev => ({ ...prev, [field]: value }))
    // Limpar erro do campo quando o usuário começar a digitar
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório'
    }

    if (!formData.telefone.trim()) {
      newErrors.telefone = 'Telefone é obrigatório'
    } else if (!validatePhone(formData.telefone)) {
      newErrors.telefone = 'Telefone inválido. Use o formato (00) 00000-0000'
    }

    if (!formData.cidade.trim()) {
      newErrors.cidade = 'Cidade é obrigatória'
    }

    // Honeypot check
    if (formData.honeypot) {
      newErrors.honeypot = 'Spam detectado'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validar rate limit
    if (!checkRateLimit()) {
      setSubmitStatus('error')
      setErrorMessage('Não conseguimos enviar agora. Tente novamente em 1 minuto.')
      return
    }

    if (!validateForm()) {
      pushDataLayer('lead_submit_attempt', { 
        tipo_veiculo: vehicleType,
        status: 'validation_error'
      })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    // Disparar evento de tentativa
    pushDataLayer('lead_submit_attempt', { tipo_veiculo: vehicleType })

    try {
      // Capturar UTM params
      const utmParams = getUTMParams()

      // Preparar payload
      const payload = {
        nome: formData.nome.trim(),
        telefone: formData.telefone.trim(),
        cidade: formData.cidade.trim(),
        tipo_veiculo: formData.tipo_veiculo,
        placa: formData.placa.trim() || '',
        mensagem: formData.mensagem.trim() || '',
        ...utmParams,
        page_path: window.location.pathname,
        page_url: window.location.href,
        user_agent: navigator.userAgent,
        timestamp_iso: new Date().toISOString()
      }

      // Enviar para API
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar formulário')
      }

      // Sucesso
      setRateLimit()
      setSubmitStatus('success')
      
      // Disparar evento de sucesso
      pushDataLayer('lead_submit_success', {
        tipo_veiculo: vehicleType,
        utm_campaign: utmParams.utm_campaign || ''
      })

      // Limpar formulário após 5 segundos
      setTimeout(() => {
        setFormData({
          nome: '',
          telefone: '',
          cidade: '',
          tipo_veiculo: vehicleType,
          placa: '',
          mensagem: '',
          honeypot: ''
        })
        setSubmitStatus('idle')
      }, 5000)

    } catch (error) {
      console.error('Erro ao enviar lead:', error)
      setSubmitStatus('error')
      setErrorMessage('Não conseguimos enviar agora. Tente novamente em 1 minuto.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Estado de sucesso
  if (submitStatus === 'success') {
    return (
      <div className={`text-center py-12 ${className}`}>
        <div className="flex justify-center mb-4">
          <CheckCircle2 className="h-16 w-16 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Obrigado! Em instantes um consultor vai te chamar no WhatsApp.
        </h3>
        <p className="text-muted">
          Verificamos sua solicitação e já estamos preparando sua cotação personalizada.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {/* Honeypot field (hidden) */}
      <input
        type="text"
        name="website"
        value={formData.honeypot}
        onChange={(e) => handleChange('honeypot', e.target.value)}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div>
        <label htmlFor="nome" className="block text-sm font-medium mb-2 text-foreground">
          Nome Completo *
        </label>
        <Input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={(e) => handleChange('nome', e.target.value)}
          placeholder="Seu nome completo"
          className={errors.nome ? 'border-red-500' : ''}
          required
        />
        {errors.nome && (
          <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {errors.nome}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="telefone" className="block text-sm font-medium mb-2 text-foreground">
          Telefone/WhatsApp *
        </label>
        <Input
          type="tel"
          id="telefone"
          name="telefone"
          value={formData.telefone}
          onChange={(e) => handleChange('telefone', e.target.value)}
          placeholder="(00) 00000-0000"
          className={errors.telefone ? 'border-red-500' : ''}
          required
        />
        {errors.telefone && (
          <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {errors.telefone}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="cidade" className="block text-sm font-medium mb-2 text-foreground">
          Cidade *
        </label>
        <Input
          type="text"
          id="cidade"
          name="cidade"
          value={formData.cidade}
          onChange={(e) => handleChange('cidade', e.target.value)}
          placeholder="Sua cidade"
          className={errors.cidade ? 'border-red-500' : ''}
          required
        />
        {errors.cidade && (
          <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {errors.cidade}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="tipo_veiculo" className="block text-sm font-medium mb-2 text-foreground">
          Tipo de Veículo *
        </label>
        <Select
          value={formData.tipo_veiculo}
          onValueChange={(value) => handleChange('tipo_veiculo', value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Truck">Truck</SelectItem>
            <SelectItem value="Picape">Picape</SelectItem>
            <SelectItem value="Leve">Leve</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label htmlFor="placa" className="block text-sm font-medium mb-2 text-foreground">
          Placa (opcional)
        </label>
        <Input
          type="text"
          id="placa"
          name="placa"
          value={formData.placa}
          onChange={(e) => handleChange('placa', e.target.value.toUpperCase())}
          placeholder="ABC-1234"
          maxLength={8}
        />
      </div>

      <div>
        <label htmlFor="mensagem" className="block text-sm font-medium mb-2 text-foreground">
          Mensagem (opcional)
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          value={formData.mensagem}
          onChange={(e) => handleChange('mensagem', e.target.value)}
          rows={3}
          className="w-full px-3 py-2 rounded-md border border-input bg-transparent text-sm shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
          placeholder="Alguma informação adicional?"
        />
      </div>

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-md p-3">
          <p className="text-sm text-red-600 flex items-center gap-2">
            <AlertCircle className="h-4 w-4" />
            {errorMessage}
          </p>
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-lg text-lg transition-colors disabled:opacity-50"
        size="lg"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin" />
            Enviando...
          </span>
        ) : (
          'Fazer cotação agora'
        )}
      </Button>

      <p className="text-xs text-muted text-center">
        Ao enviar, você concorda com nossa política de privacidade. Seus dados estão seguros conosco.
      </p>
    </form>
  )
}
