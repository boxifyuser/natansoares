'use client'

const RATE_LIMIT_KEY = 'unique_form_submit'
const RATE_LIMIT_MS = 60000 // 1 minuto

export function checkRateLimit(): boolean {
  if (typeof window === 'undefined') return true

  try {
    const lastSubmit = localStorage.getItem(RATE_LIMIT_KEY)
    if (lastSubmit) {
      const lastSubmitTime = parseInt(lastSubmit, 10)
      const now = Date.now()
      if (now - lastSubmitTime < RATE_LIMIT_MS) {
        return false // Rate limit exceeded
      }
    }
    return true
  } catch (e) {
    return true
  }
}

export function setRateLimit(): void {
  if (typeof window === 'undefined') return

  try {
    localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString())
  } catch (e) {
    console.error('Error setting rate limit:', e)
  }
}
