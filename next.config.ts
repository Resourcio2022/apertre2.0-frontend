import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: 'utfs.io',
        protocol: 'https'
      }
    ]
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  }
};

export default nextConfig;
