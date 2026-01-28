import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const {
      nome,
      telefone,
      cidade,
      tipo_veiculo,
      placa,
      mensagem,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
      gclid,
      fbclid,
      page_path,
      page_url,
      user_agent,
      timestamp_iso
    } = body

    // Validação básica
    if (!nome || !telefone || !cidade) {
      return NextResponse.json(
        { error: 'Campos obrigatórios: nome, telefone e cidade' },
        { status: 400 }
      )
    }

    // Validar telefone (deve ter pelo menos 10 dígitos)
    const phoneNumbers = telefone.replace(/\D/g, '')
    if (phoneNumbers.length < 10) {
      return NextResponse.json(
        { error: 'Telefone inválido' },
        { status: 400 }
      )
    }

    // Preparar payload para webhook
    const payload = {
      nome,
      telefone,
      cidade,
      tipo_veiculo: tipo_veiculo || 'Não informado',
      placa: placa || '',
      mensagem: mensagem || '',
      utm_source: utm_source || '',
      utm_medium: utm_medium || '',
      utm_campaign: utm_campaign || '',
      utm_content: utm_content || '',
      utm_term: utm_term || '',
      gclid: gclid || '',
      fbclid: fbclid || '',
      page_path: page_path || '',
      page_url: page_url || '',
      user_agent: user_agent || '',
      timestamp_iso: timestamp_iso || new Date().toISOString()
    }

    // Enviar para webhook
    const webhookUrl = process.env.WEBHOOK_URL
    
    if (!webhookUrl) {
      console.error('WEBHOOK_URL não configurada')
      // Em desenvolvimento, apenas logar
      if (process.env.NODE_ENV === 'development') {
        console.log('Lead recebido (dev mode):', payload)
        return NextResponse.json({ success: true, message: 'Lead recebido (modo desenvolvimento)' })
      }
      return NextResponse.json(
        { error: 'Configuração do servidor incompleta' },
        { status: 500 }
      )
    }

    // Fazer requisição para webhook
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Erro ao enviar para webhook:', errorText)
      return NextResponse.json(
        { error: 'Erro ao processar solicitação' },
        { status: 500 }
      )
    }

    return NextResponse.json({ 
      success: true,
      message: 'Lead enviado com sucesso'
    })

  } catch (error) {
    console.error('Erro ao processar lead:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
