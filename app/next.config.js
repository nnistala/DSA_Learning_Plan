const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR || '.next',
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/DSA_Learning_Plan' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/DSA_Learning_Plan/' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../'),
  },
  images: { 
    unoptimized: true,
    loader: 'custom',
    loaderFile: './lib/image-loader.js'
  },
};

module.exports = nextConfig;
