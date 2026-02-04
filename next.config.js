/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  // Ignorar diretórios fora do projeto
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  // Garantir que apenas arquivos do diretório atual sejam processados
  webpack: (config, { isServer }) => {
    // Ignorar arquivos fora do diretório do projeto
    config.watchOptions = {
      ...config.watchOptions,
      ignored: [
        '**/node_modules/**',
        '**/.next/**',
        '**/Documents/**',
        '**/Unique/**',
        '**/lp/**',
      ],
    };
    return config;
  },
}

module.exports = nextConfig
