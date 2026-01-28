export function formatPhone(value: string): string {
  // Remove tudo que não é número
  const numbers = value.replace(/\D/g, '')
  
  // Limita a 11 dígitos
  const limited = numbers.slice(0, 11)
  
  // Aplica máscara
  if (limited.length <= 10) {
    return limited.replace(/(\d{2})(\d{4})(\d{0,4})/, (match, p1, p2, p3) => {
      if (p3) return `(${p1}) ${p2}-${p3}`
      if (p2) return `(${p1}) ${p2}`
      if (p1) return `(${p1}`
      return limited
    })
  } else {
    return limited.replace(/(\d{2})(\d{5})(\d{0,4})/, (match, p1, p2, p3) => {
      if (p3) return `(${p1}) ${p2}-${p3}`
      if (p2) return `(${p1}) ${p2}`
      if (p1) return `(${p1}`
      return limited
    })
  }
}

export function validatePhone(phone: string): boolean {
  const numbers = phone.replace(/\D/g, '')
  // Deve ter 10 ou 11 dígitos (com DDD)
  return numbers.length >= 10 && numbers.length <= 11
}
