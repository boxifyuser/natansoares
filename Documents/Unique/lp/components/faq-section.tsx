import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const allFAQs: FAQItem[] = [
  {
    question: 'O que é uma cooperativa?',
    answer: 'A UNIQUE atua como uma cooperativa de mutualismo, um modelo legalmente regulamentado e constitucionalmente amparado (Artigo 5º da CF), onde os associados compartilham de forma solidária os custos de eventos veiculares como roubos, furtos, colisões e perdas totais. Diferente de um seguro tradicional, esse sistema colaborativo permite que cada membro contribua com cotas mensais para um fundo comum, garantindo proteção transparente, controle democrático e respaldo jurídico — assegurando solidez e seriedade em toda a proteção oferecida.'
  },
  {
    question: 'A UNIQUE é registrada e regulamentada pela SUSEP?',
    answer: 'Sim! Realizamos nosso cadastramento na SUSEP em 01/07/2025. Para consultar nosso processo de licenciamento, acesse o site oficial da SUSEP, insira nosso CNPJ 55.702.718/0001-11, selecione o período de cadastro que inclua a data mencionada (01/07/2025), filtre o resultado e confira diretamente no sistema. Transparência e segurança em cada detalhe.'
  },
  {
    question: 'Quais são os tipos de coberturas?',
    answer: 'Na UNIQUE, oferecemos cobertura completa para seu veículo, incluindo proteção contra roubo, furto, colisão, incêndio e danos causados por fenômenos naturais, com indenização de até 100% do valor FIPE em casos de perda total ou parcial, além de opcionais como carro reserva, proteção para vidros, terceiros e auxílio-renda – tudo adaptado às suas necessidades, conforme nosso regulamento vigente.'
  },
  {
    question: 'Quais veículos são aceitos e protegidos pela UNIQUE?',
    answer: 'Aceitamos carros (incluindo modelos vintage, importados e elétricos), motos (tradicionais e elétricas), vans, micro-ônibus, picapes, caminhões e carretas, para uso profissional ou particular, oferecendo cobertura adaptável para diferentes necessidades – desde o transporte diário até a operação comercial de frotas.'
  },
  {
    question: 'O atendimento é presencial ou online?',
    answer: 'Todo o processo de cotação e ativação da proteção é realizado online por nossos consultores no ato da contratação, de forma ágil e descomplicada. Os acionamentos também são 100% digitais, mas você conta com assistência 24h em todo o Brasil e uma rede de oficinas parceiras para atendimento presencial sempre que necessário. Conectamos tecnologia e proximidade para que sua experiência seja completa – do primeiro contato à resolução de imprevistos.'
  },
  {
    question: 'Preciso indicar um condutor principal na hora da contratação?',
    answer: 'Não. Diferente do sistema tradicional de seguros, não exigimos o cadastro de um condutor específico. Nossa única exigência é que, em qualquer situação, o veículo seja conduzido por uma pessoa devidamente habilitada e em conformidade com as leis de trânsito brasileiras. Aqui, a proteção é para o veículo – não apenas para o motorista.'
  },
  {
    question: 'Meu veículo fica na rua por não ter garagem. Vou pagar mais caro?',
    answer: 'Não. Diferente do sistema tradicional de seguros, não penalizamos você por fatores que fogem do seu controle. Itens como local de pernoite do veículo, perfil socioeconômico ou a indicação de condutor principal não influenciam no valor da sua proteção. Nosso modelo é transparente e justo: você paga por proteção de verdade, sem cobranças extras por não ter garagem.'
  },
  {
    question: 'Possuo restrição no SERASA/SPC, posso contratar assim mesmo?',
    answer: 'Sim! Na UNIQUE, todos são bem-vindos, independentemente da situação cadastral. Não realizamos consulta ao SERASA ou SPC como critério para aprovação. Nosso foco é oferecer proteção veicular acessível e transparente para que você possa dirigir com tranquilidade, sem barreiras burocráticas.'
  },
  {
    question: 'Posso cancelar a qualquer momento? Há multa?',
    answer: 'Sim, você pode cancelar a qualquer momento sem multa e sem burocracia. Basta solicitar o cancelamento através dos nossos canais oficiais, regularizar eventuais mensalidades em aberto e efetuar o pagamento proporcional aos dias de cobertura utilizados no mês em curso. Nosso compromisso é com a transparência e o respeito à sua liberdade de escolha.'
  },
  {
    question: 'Existe carência para utilizar os serviços?',
    answer: 'Não. Imediatamente após a aprovação da vistoria e ativação do seu plano em nosso sistema, todos os serviços contratados estarão disponíveis, incluindo assistência 24h e cobertura para sinistros. Sua proteção entra em vigor assim que o processo é concluído – sem espera e sem surpresas.'
  },
  {
    question: 'Como funciona a proteção?',
    answer: 'A proteção veicular da UNIQUE funciona através de um sistema cooperativo onde os associados compartilham os custos de forma solidária. Você paga uma mensalidade acessível e, em caso de sinistro (roubo, furto, colisão, etc.), a cooperativa cobre os custos através do fundo comum. É um modelo transparente, sem burocracia e com economia de até 50% em relação aos seguros tradicionais.'
  },
  {
    question: 'Em quanto tempo sou atendido?',
    answer: 'Nosso atendimento é imediato. Após o envio do formulário, um consultor entra em contato via WhatsApp em até 2 minutos. Para acionamentos de assistência, nossa central 24h atende imediatamente e despacha o serviço necessário (guincho, chaveiro, pane seca, etc.) em tempo recorde, com cobertura em todo território nacional.'
  },
  {
    question: 'Quais documentos preciso para contratar?',
    answer: 'O processo é simples e descomplicado. Você precisará de: documento de identidade (RG ou CNH), CPF, comprovante de residência, documento do veículo (CRLV) e comprovante de pagamento da primeira mensalidade. Não exigimos análise de perfil, consulta ao SERASA/SPC ou indicação de condutor principal. Tudo pode ser enviado digitalmente.'
  },
  {
    question: 'Atende em todo Brasil?',
    answer: 'Sim! A UNIQUE oferece cobertura e assistência 24h em todo território brasileiro. Nossa rede de oficinas parceiras e serviços de assistência estão disponíveis em todas as regiões do país, garantindo que você tenha suporte onde quer que esteja. Seja em uma estrada no interior ou em uma grande capital, nossa assistência chega até você.'
  },
  {
    question: 'Como pago a mensalidade?',
    answer: 'Oferecemos diversas formas de pagamento para sua comodidade: boleto bancário, cartão de crédito (parcelamento em até 12x), débito automático e PIX. O pagamento é mensal e você pode escolher a melhor forma que se adapta à sua situação. Não há cobranças extras ou taxas ocultas – apenas o valor da mensalidade acordada na contratação.'
  },
  {
    question: 'Como acionar a assistência?',
    answer: 'É muito simples! Em caso de necessidade, você pode acionar a assistência 24h através do nosso telefone 0800 777 6677 ou via WhatsApp. Nossa central recebe sua solicitação imediatamente e despacha o serviço necessário (guincho, chaveiro, pane seca, troca de pneu, etc.) para sua localização. Todo o processo é digital e ágil, sem complicação.'
  }
]

interface FAQSectionProps {
  limit?: number
  title?: string
  description?: string
}

export function FAQSection({ 
  limit, 
  title = 'Perguntas Frequentes (FAQ)',
  description = 'Tire suas dúvidas sobre a proteção veicular da UNIQUE'
}: FAQSectionProps) {
  const faqs = limit ? allFAQs.slice(0, limit) : allFAQs

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground text-balance">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-muted text-balance">
              {description}
            </p>
            <p className="text-muted mt-4 max-w-2xl mx-auto">
              Selecionamos as questões mais comuns para explicar, de forma clara e direta, como nossa cooperativa funciona — da contratação ao suporte no dia a dia. Sem juridiquês, sem enrolação: só informações que realmente importam para você.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-xl border-2 border-border p-6 group hover:border-primary/50 transition-colors"
              >
                <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-start gap-4 text-foreground">
                  <span className="text-balance">{faq.question}</span>
                  <ChevronDown className="h-5 w-5 text-primary flex-shrink-0 mt-1 group-open:rotate-180 transition-transform duration-300" />
                </summary>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-muted leading-relaxed text-pretty">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          {limit && limit < allFAQs.length && (
            <div className="mt-8 text-center">
              <p className="text-muted">
                Ainda tem dúvidas? Entre em contato conosco pelo{' '}
                <a href="tel:08007776677" className="text-primary font-semibold hover:underline">
                  0800 777 6677
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
