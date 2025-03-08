import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  basePath: "/store",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
