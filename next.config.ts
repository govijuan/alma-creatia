import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // ← This line is very important
  reactStrictMode: true,
  allowedDevOrigins: ['192.168.0.14'],
};

export default nextConfig;
