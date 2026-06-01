import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel handles output automatically — no "output" config needed
  images: {
    formats: ["image/avif", "image/webp"],
  },
  reactStrictMode: true,
  allowedDevOrigins: [
    ".space-z.ai",
  ],
};

export default nextConfig;
