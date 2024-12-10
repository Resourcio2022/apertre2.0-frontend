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
};

export default nextConfig;
