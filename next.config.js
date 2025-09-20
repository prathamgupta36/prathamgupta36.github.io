/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // basePath and assetPrefix are removed as they are not needed for custom domains
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;