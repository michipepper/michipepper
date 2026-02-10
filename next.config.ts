import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/michipepper",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
