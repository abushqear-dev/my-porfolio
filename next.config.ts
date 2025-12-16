import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: '/my-porfolio',
  assetPrefix: '/my-porfolio/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
