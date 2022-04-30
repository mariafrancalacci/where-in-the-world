/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "flagcdn.com"
    ]
  }
}

// next.config.js

module.exports = nextConfig
