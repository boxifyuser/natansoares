# Configuração do Vercel - IMPORTANTE

## Problema
O repositório Git está em um nível acima do diretório do projeto. O projeto está em `Documents/Unique/lp/` mas o repositório Git está na raiz.

## Solução Definitiva

### No Dashboard do Vercel:

1. Acesse **Settings** → **General**
2. Procure o campo **Root Directory**
3. Configure como: `Documents/Unique/lp`
4. Clique em **Save**

### Verificar Framework Settings:

1. Acesse **Settings** → **Build and Deployment** → **Framework Settings**
2. Verifique se está configurado:
   - **Framework Preset**: `Next.js`
   - **Build Command**: `pnpm build` (com override ativo)
   - **Install Command**: `pnpm install --frozen-lockfile` (com override ativo)

Após configurar o Root Directory, o Vercel vai:
- Encontrar o `package.json` corretamente
- Detectar o Next.js automaticamente
- Usar o `pnpm` conforme configurado
