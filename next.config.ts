import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // next.js v14 以前の記述の仕方。これでも動くが、非推奨。
    // domains: ["raw.githubusercontent.com"],

    // next.js v14 以降は、下記のような記述が推奨
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
