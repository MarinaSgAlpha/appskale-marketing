import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.appskale.ai" }],
        destination: "https://appskale.ai/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
