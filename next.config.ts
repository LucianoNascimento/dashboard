import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // Any experimental flags can go here
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      child_process: false,  // Disable 'child_process' for the browser
    };
    return config;
  }
};

export default nextConfig;
