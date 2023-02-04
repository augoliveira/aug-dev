/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true,
  },
  transpilePackages: ['@acme/ui', 'lodash-es'],
};
module.exports = {
  images: {
    deviceSizes: [320, 640, 768, 1024, 1600],
    domains: ["sumitdey.netlify.app"],
  },
};
const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public'
  }
})
module.exports = nextConfig;