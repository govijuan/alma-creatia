import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // ← This line is very important
  reactStrictMode: true,
};

export default nextConfig;
