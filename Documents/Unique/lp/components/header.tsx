import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src="https://uniquecoop.com.br/wp-content/uploads/2025/10/LOGO-1-azul-amarelo-HORIZONTAL-scaled.png"
            alt="Unique Proteção Veicular"
            width={180}
            height={50}
            className="h-10 w-auto"
            priority
          />
        </Link>
        <a
          href="tel:08007776677"
          className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-primary-hover transition-colors"
        >
          <span className="text-sm">📞 0800 777 6677</span>
        </a>
      </div>
    </header>
  )
}
