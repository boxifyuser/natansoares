import { User, Briefcase, Users, Truck, TruckIcon, Car } from 'lucide-react'

export type VehicleType = 'Truck' | 'Picape' | 'Leve'

export interface PageConfig {
  vehicleType: VehicleType
  headline: string
  subheadline: string
  bullets: string[]
  targetAudience: {
    icon: React.ElementType
    title: string
    description: string
  }[]
  testimonials: {
    name: string
    location: string
    text: string
    rating?: number
  }[]
  seo: {
    title: string
    description: string
    keywords: string[]
  }
}

export const pageConfigs: Record<VehicleType, PageConfig> = {
  Truck: {
    vehicleType: 'Truck',
    headline: 'Proteção completa para seu caminhão, com assistência 24h',
    subheadline: 'Cobertura especializada para caminhoneiros autônomos, pequenos frotistas e agregados. Proteja seu patrimônio e sua fonte de renda.',
    bullets: [
      'Cobertura para cavalo mecânico e implemento',
      'Assistência 24h em qualquer estrada',
      'Atendimento rápido',
      'Condições para autônomos e frotas'
    ],
    targetAudience: [
      {
        icon: User,
        title: 'Caminhoneiros Autônomos',
        description: 'Proteção para quem trabalha por conta própria e depende do caminhão para gerar renda'
      },
      {
        icon: Briefcase,
        title: 'Pequenos Frotistas',
        description: 'Cobertura para empresas com poucos veículos que precisam de proteção acessível'
      },
      {
        icon: Users,
        title: 'Agregados',
        description: 'Proteção para motoristas agregados que precisam de segurança na estrada'
      }
    ],
    testimonials: [
      {
        name: 'Carlos',
        location: 'Almenara-MG',
        text: 'Já usei a assistência duas vezes e foi muito rápido. Recomendo para qualquer caminhoneiro.',
        rating: 5
      },
      {
        name: 'Roberto',
        location: 'São Paulo-SP',
        text: 'Economizei bastante comparado ao seguro tradicional. O atendimento é excelente.',
        rating: 5
      },
      {
        name: 'José',
        location: 'Belo Horizonte-MG',
        text: 'Como autônomo, preciso de algo confiável. A Unique não me decepcionou.',
        rating: 5
      }
    ],
    seo: {
      title: 'Proteção Veicular para Caminhão | Unique - Assistência 24h',
      description: 'Proteção veicular completa para caminhão com assistência 24h. Cobertura para cavalo mecânico, implemento e condições especiais para autônomos e frotas. Cotação rápida.',
      keywords: ['proteção veicular caminhão', 'seguro caminhão', 'assistência 24h caminhão', 'proteção veicular truck', 'cobertura caminhoneiro']
    }
  },
  Picape: {
    vehicleType: 'Picape',
    headline: 'Sua picape protegida para trabalho e dia a dia',
    subheadline: 'Cobertura sob medida para quem usa picape no trabalho e na vida pessoal. Proteção completa com assistência 24h.',
    bullets: [
      'Cobertura sob medida',
      'Assistência 24h',
      'Economia e tranquilidade',
      'Processo simples'
    ],
    targetAudience: [
      {
        icon: User,
        title: 'Produtor Rural',
        description: 'Proteção para quem usa a picape no campo e precisa de cobertura completa'
      },
      {
        icon: Briefcase,
        title: 'Prestador de Serviço',
        description: 'Ideal para profissionais que usam picape no trabalho e precisam de segurança'
      },
      {
        icon: Users,
        title: 'Uso Misto',
        description: 'Perfeito para quem usa a picape tanto no trabalho quanto no dia a dia'
      }
    ],
    testimonials: [
      {
        name: 'Maria',
        location: 'Uberlândia-MG',
        text: 'Uso minha picape no trabalho e a Unique me dá toda segurança que preciso.',
        rating: 5
      },
      {
        name: 'João',
        location: 'Goiânia-GO',
        text: 'Processo muito simples e o atendimento é rápido. Recomendo!',
        rating: 5
      },
      {
        name: 'Ana',
        location: 'Campinas-SP',
        text: 'Economizei bastante e a cobertura é completa. Muito satisfeita.',
        rating: 5
      }
    ],
    seo: {
      title: 'Proteção Veicular para Picape | Unique - Cobertura Completa',
      description: 'Proteção veicular para picape com assistência 24h. Cobertura sob medida para produtores rurais, prestadores de serviço e uso misto. Cotação rápida.',
      keywords: ['proteção veicular picape', 'seguro picape', 'assistência 24h picape', 'cobertura picape', 'proteção veicular pickup']
    }
  },
  Leve: {
    vehicleType: 'Leve',
    headline: 'Proteção veicular simples e acessível para seu carro',
    subheadline: 'Cobertura essencial para seu veículo com assistência 24h. Sem burocracia, sem complicação.',
    bullets: [
      'Assistência 24h',
      'Coberturas essenciais',
      'Atendimento ágil',
      'Sem burocracia'
    ],
    targetAudience: [
      {
        icon: User,
        title: 'Motorista de Carro Popular',
        description: 'Proteção acessível para quem precisa de segurança no dia a dia'
      },
      {
        icon: Briefcase,
        title: 'Uso no Trabalho',
        description: 'Ideal para profissionais que usam o carro no trabalho e precisam de cobertura'
      },
      {
        icon: Users,
        title: 'Uso Familiar',
        description: 'Proteção completa para famílias que querem dirigir com tranquilidade'
      }
    ],
    testimonials: [
      {
        name: 'Paulo',
        location: 'Rio de Janeiro-RJ',
        text: 'Processo muito simples e rápido. Já precisei da assistência e foi excelente.',
        rating: 5
      },
      {
        name: 'Fernanda',
        location: 'Curitiba-PR',
        text: 'Economizei bastante comparado ao seguro tradicional. Recomendo!',
        rating: 5
      },
      {
        name: 'Ricardo',
        location: 'Porto Alegre-RS',
        text: 'Atendimento humano e rápido. Muito satisfeito com o serviço.',
        rating: 5
      }
    ],
    seo: {
      title: 'Proteção Veicular para Carro | Unique - Assistência 24h',
      description: 'Proteção veicular simples e acessível para carro com assistência 24h. Coberturas essenciais sem burocracia. Cotação rápida e fácil.',
      keywords: ['proteção veicular carro', 'seguro carro', 'assistência 24h carro', 'proteção veicular leve', 'cobertura veicular']
    }
  }
}
