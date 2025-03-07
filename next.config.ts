import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // Remove turbopack if it doesn't exist in your version of Next.js
    // turbopack: false,
  },
};

export default nextConfig;
