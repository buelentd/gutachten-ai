/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  experimental: {
    browsersListForSwc: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Zwingt Webpack moderne Browser als Target — eliminiert Polyfills
      config.target = ["web", "es2020"];
    }
    return config;
  },
};

export default nextConfig;
