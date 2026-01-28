'use client'

declare global {
  interface Window {
    dataLayer?: any[]
  }
}

export function pushDataLayer(event: string, data?: Record<string, any>) {
  if (typeof window === 'undefined') return

  if (!window.dataLayer) {
    window.dataLayer = []
  }

  window.dataLayer.push({
    event,
    ...data
  })
}
