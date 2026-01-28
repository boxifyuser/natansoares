import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-surface-dark text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <Image
              src="https://uniquecoop.com.br/wp-content/uploads/2025/10/LOGO-1-azul-amarelo-HORIZONTAL-scaled.png"
              alt="Unique Proteção Veicular"
              width={180}
              height={50}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm">
              Cooperativa com mais de 20 anos protegendo seu patrimônio com confiança e transparência.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Produtos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/truck" className="hover:text-white transition-colors">
                  Proteção para Truck
                </Link>
              </li>
              <li>
                <Link href="/picape" className="hover:text-white transition-colors">
                  Proteção para Picape
                </Link>
              </li>
              <li>
                <Link href="/leves" className="hover:text-white transition-colors">
                  Proteção para Veículos Leves
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://uniquecoop.com.br" className="hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="https://uniquecoop.com.br" className="hover:text-white transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="tel:08007776677" className="hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>📞 0800 777 6677</li>
              <li>📧 contato@uniquecoop.com.br</li>
              <li>📍 Atendimento Nacional</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p className="mb-2 text-gray-300">
            UNICOOP – COOPERATIVA DE CONSUMO DOS CONDUTORES DE VEICULOS AUTOMOTORES. LTDA – 55.702.718/0001-11
          </p>
          <p className="text-xs text-gray-500">
            Associação de Proteção Veicular em regularização junto à Susep desde 01/07/2025 | Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
