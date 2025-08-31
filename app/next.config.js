const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR || '.next',
  output: process.env.NEXT_OUTPUT_MODE,
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/DSA_Learning_Plan' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/DSA_Learning_Plan/' : '',
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../'),
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: { 
    unoptimized: true,
    loader: 'custom',
    loaderFile: './lib/image-loader.js'
  },
};

module.exports = nextConfig;
