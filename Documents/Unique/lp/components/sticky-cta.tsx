'use client'

import { Button } from '@/components/ui/button'
import { pushDataLayer } from '@/lib/data-layer'

interface StickyCTAProps {
  text: string
  onClick: () => void
}

export function StickyCTA({ text, onClick }: StickyCTAProps) {
  const handleClick = () => {
    pushDataLayer('click_cta_primary', { source: 'sticky_mobile' })
    onClick()
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-border shadow-2xl p-4">
      <Button
        onClick={handleClick}
        className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-lg text-lg"
        size="lg"
      >
        {text}
      </Button>
    </div>
  )
}
