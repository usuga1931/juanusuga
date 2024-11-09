/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.cache = false;
    }
    return config;
  },
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  // assetPrefix: isProd ? '/juanusuga/' : '',
  basePath: isProd ? '/juanusuga' : '',
  output: 'export'
};


module.exports = nextConfig;
