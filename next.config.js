/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/AI-Dashboard-UI-',
  images: {
    unoptimized: true,
    domains: ['reqres.in']
  },
  assetPrefix: '/AI-Dashboard-UI-/',
  trailingSlash: true
}

module.exports = nextConfig 