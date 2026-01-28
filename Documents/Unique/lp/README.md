# Unique Proteção Veicular - Landing Pages

Projeto Next.js com 3 landing pages otimizadas para conversão, desenvolvidas para gerar leads qualificados via tráfego pago (Meta Ads e Google Ads).

## 🚀 Estrutura do Projeto

O projeto possui 3 landing pages principais:

- **`/truck`** - Proteção para caminhões
- **`/picape`** - Proteção para picapes
- **`/leves`** - Proteção para veículos leves

## 📋 Pré-requisitos

- Node.js 18+ 
- pnpm (ou npm/yarn)

## 🛠️ Instalação

```bash
# Instalar dependências
pnpm install

# Rodar em desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Iniciar servidor de produção
pnpm start
```

## ⚙️ Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Webhook URL para envio de leads (obrigatório)
WEBHOOK_URL=https://seu-webhook-url.com/endpoint

# Google Tag Manager ID (opcional)
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Facebook Pixel ID (opcional)
NEXT_PUBLIC_FB_PIXEL_ID=123456789012345
```

### Configuração do Webhook

O webhook deve receber requisições POST com o seguinte payload:

```json
{
  "nome": "João Silva",
  "telefone": "(11) 98765-4321",
  "cidade": "São Paulo",
  "tipo_veiculo": "Truck",
  "placa": "ABC-1234",
  "mensagem": "Mensagem opcional",
  "utm_source": "google",
  "utm_medium": "cpc",
  "utm_campaign": "campanha-truck",
  "utm_content": "ad-1",
  "utm_term": "proteção veicular",
  "gclid": "gclid-value",
  "fbclid": "fbclid-value",
  "page_path": "/truck",
  "page_url": "https://lp.uniquecoop.com.br/truck?utm_source=google",
  "user_agent": "Mozilla/5.0...",
  "timestamp_iso": "2025-01-15T10:30:00.000Z"
}
```

### Exemplo de Webhook (Google Sheets)

Para integrar com Google Sheets, você pode usar Google Apps Script:

1. Crie uma nova planilha no Google Sheets
2. Vá em Extensões > Apps Script
3. Cole o seguinte código:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(),
    data.nome,
    data.telefone,
    data.cidade,
    data.tipo_veiculo,
    data.placa,
    data.mensagem,
    data.utm_source,
    data.utm_medium,
    data.utm_campaign,
    data.utm_content,
    data.utm_term,
    data.gclid,
    data.fbclid,
    data.page_path,
    data.page_url,
    data.user_agent,
    data.timestamp_iso
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Publique como aplicativo web
5. Copie a URL gerada e use como `WEBHOOK_URL`

## 📊 Tracking e Analytics

### DataLayer Events

O projeto implementa os seguintes eventos no dataLayer:

- `view_lp` - Disparado ao carregar a página
- `click_cta_primary` - Disparado ao clicar no CTA principal
- `lead_submit_attempt` - Disparado ao tentar enviar o formulário
- `lead_submit_success` - Disparado após envio bem-sucedido

### UTM Parameters

Os parâmetros UTM são capturados automaticamente da URL e persistidos por 7 dias no localStorage. Os seguintes parâmetros são capturados:

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `utm_term`
- `gclid` (Google Click ID)
- `fbclid` (Facebook Click ID)

### Google Tag Manager

Para adicionar o GTM:

1. Configure `NEXT_PUBLIC_GTM_ID` no `.env.local`
2. O script será carregado automaticamente no layout

### Facebook Pixel

Para adicionar o Facebook Pixel:

1. Configure `NEXT_PUBLIC_FB_PIXEL_ID` no `.env.local`
2. O pixel será carregado automaticamente no layout

## 🎨 Personalização de Conteúdo

### Alterar Textos das Landing Pages

Edite o arquivo `lib/page-config.ts` para alterar:

- Headlines e subheadlines
- Bullets de benefícios
- Público-alvo
- Depoimentos
- SEO metadata

### Exemplo:

```typescript
export const pageConfigs: Record<VehicleType, PageConfig> = {
  Truck: {
    vehicleType: 'Truck',
    headline: 'Sua nova headline aqui',
    subheadline: 'Sua nova subheadline aqui',
    // ... outros campos
  }
}
```

## 🧪 Testes Locais

### Testar Formulário

1. Configure o `WEBHOOK_URL` para um endpoint de teste (ex: webhook.site)
2. Preencha o formulário na landing page
3. Verifique se os dados são enviados corretamente

### Testar Tracking

1. Abra o console do navegador (F12)
2. Digite `window.dataLayer` para ver os eventos
3. Navegue pela página e envie o formulário
4. Verifique se os eventos são disparados

### Testar UTM Parameters

Acesse a URL com parâmetros UTM:

```
http://localhost:3000/truck?utm_source=google&utm_medium=cpc&utm_campaign=teste
```

Verifique no console se os parâmetros foram capturados.

## 📱 Responsividade

As landing pages são totalmente responsivas e otimizadas para:

- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)

### CTA Flutuante Mobile

No mobile, um botão flutuante (sticky) aparece na parte inferior da tela para facilitar a conversão.

## 🔒 Segurança

### Validações Implementadas

- Validação de telefone brasileiro (DDD + número)
- Campos obrigatórios (nome, telefone, cidade)
- Honeypot anti-spam
- Rate limiting (1 envio por minuto)
- Validação de dados no servidor

### Rate Limiting

O formulário implementa rate limiting client-side para evitar spam:
- Limite de 1 envio por minuto
- Mensagem de erro amigável quando o limite é atingido

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente na dashboard da Vercel
3. Deploy automático a cada push

### Outros Provedores

O projeto pode ser deployado em qualquer provedor que suporte Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 Estrutura de Arquivos

```
├── app/
│   ├── api/
│   │   └── lead/
│   │       └── route.ts          # API endpoint para envio de leads
│   ├── truck/
│   │   ├── layout.tsx            # Metadata para /truck
│   │   └── page.tsx              # Landing page Truck
│   ├── picape/
│   │   ├── layout.tsx            # Metadata para /picape
│   │   └── page.tsx              # Landing page Picape
│   ├── leves/
│   │   ├── layout.tsx            # Metadata para /leves
│   │   └── page.tsx              # Landing page Leves
│   ├── layout.tsx                # Layout raiz com dataLayer
│   └── globals.css               # Estilos globais
├── components/
│   ├── hero-section.tsx          # Seção hero
│   ├── lead-form.tsx             # Formulário de captura
│   ├── steps-section.tsx         # Seção "Como funciona"
│   ├── benefits-section.tsx       # Seção de benefícios
│   ├── target-audience-section.tsx # Seção "Para quem é"
│   ├── testimonials-section.tsx   # Depoimentos
│   ├── faq-section.tsx           # FAQ
│   ├── footer.tsx                 # Rodapé
│   ├── header.tsx                 # Cabeçalho
│   └── sticky-cta.tsx            # CTA flutuante mobile
├── lib/
│   ├── page-config.ts            # Configuração de conteúdo
│   ├── utm-tracker.ts            # Captura de UTM
│   ├── phone-mask.ts            # Máscara de telefone
│   ├── rate-limit.ts            # Rate limiting
│   └── data-layer.ts            # DataLayer helper
└── README.md
```

## 🐛 Troubleshooting

### Formulário não envia

1. Verifique se `WEBHOOK_URL` está configurada
2. Verifique o console do navegador para erros
3. Verifique os logs do servidor (se deployado)

### UTM não está sendo capturado

1. Verifique se os parâmetros estão na URL
2. Verifique o localStorage do navegador
3. Limpe o cache e tente novamente

### Tracking não funciona

1. Verifique se as variáveis de ambiente estão configuradas
2. Verifique o console do navegador
3. Verifique se o GTM/Pixel está carregado (Network tab)

## 📞 Suporte

Para dúvidas ou problemas, entre em contato com a equipe de desenvolvimento.

## 📄 Licença

Este projeto é propriedade da Unique Proteção Veicular.
