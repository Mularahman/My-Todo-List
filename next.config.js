/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/My-Todo-List',
  assetPrefix: '/My-Todo-List/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  trailingSlash: true, 
};

module.exports = nextConfig;
