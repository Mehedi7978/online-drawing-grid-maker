import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'rainews.netlify.app',
      },
    ],
  },
  
  typescript: {
    ignoreBuildErrors: true, // Disables TypeScript errors in production
  },
};

export default nextConfig;
