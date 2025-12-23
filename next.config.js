/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.example.com'],
    unoptimized: true
  }
}

module.exports = nextConfig
