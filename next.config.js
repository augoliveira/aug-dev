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
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
}
