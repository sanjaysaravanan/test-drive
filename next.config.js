/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'incredible-travesseiro-65b215.netlify.app'
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io'
      }
    ]
  }
}

module.exports = nextConfig
