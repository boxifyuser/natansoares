'use client'

export interface UTMParams {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
  gclid?: string
  fbclid?: string
}

const UTM_STORAGE_KEY = 'unique_utm_params'
const UTM_EXPIRY_DAYS = 7

export function getUTMParams(): UTMParams {
  if (typeof window === 'undefined') return {}

  // Try to get from URL first
  const urlParams = new URLSearchParams(window.location.search)
  const urlUTM: UTMParams = {}
  
  if (urlParams.get('utm_source')) urlUTM.utm_source = urlParams.get('utm_source')!
  if (urlParams.get('utm_medium')) urlUTM.utm_medium = urlParams.get('utm_medium')!
  if (urlParams.get('utm_campaign')) urlUTM.utm_campaign = urlParams.get('utm_campaign')!
  if (urlParams.get('utm_content')) urlUTM.utm_content = urlParams.get('utm_content')!
  if (urlParams.get('utm_term')) urlUTM.utm_term = urlParams.get('utm_term')!
  if (urlParams.get('gclid')) urlUTM.gclid = urlParams.get('gclid')!
  if (urlParams.get('fbclid')) urlUTM.fbclid = urlParams.get('fbclid')!

  // If we have URL params, save them
  if (Object.keys(urlUTM).length > 0) {
    saveUTMParams(urlUTM)
    return urlUTM
  }

  // Otherwise, try to get from storage
  try {
    const stored = localStorage.getItem(UTM_STORAGE_KEY)
    if (stored) {
      const parsed = JSON.parse(stored)
      const expiry = new Date(parsed.expiry)
      if (expiry > new Date()) {
        return parsed.params
      } else {
        localStorage.removeItem(UTM_STORAGE_KEY)
      }
    }
  } catch (e) {
    console.error('Error reading UTM params from storage:', e)
  }

  return {}
}

function saveUTMParams(params: UTMParams) {
  if (typeof window === 'undefined') return

  try {
    const expiry = new Date()
    expiry.setDate(expiry.getDate() + UTM_EXPIRY_DAYS)
    
    localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify({
      params,
      expiry: expiry.toISOString()
    }))
  } catch (e) {
    console.error('Error saving UTM params:', e)
  }
}

export function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null
  return null
}
