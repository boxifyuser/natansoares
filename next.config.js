const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname),
  images: {
    domains: ['images.unsplash.com'],
  },
  // Ignorar diretórios fora do projeto
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  // Garantir que apenas arquivos do diretório atual sejam processados
  webpack: (config, { isServer }) => {
    // Não ignorar a pasta do projeto: evite '**/Documents/**' se o projeto
    // estiver em .../Documents/natansoares (causa __webpack_modules__[moduleId] is not a function).
    config.watchOptions = {
      ...config.watchOptions,
      ignored: [
        '**/node_modules/**',
        '**/.next/**',
        '**/Unique/**',
        '**/lp/**',
      ],
    };
    return config;
  },
}

module.exports = nextConfig
