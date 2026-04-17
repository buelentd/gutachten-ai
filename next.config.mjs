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
    // Zwingt SWC auf moderne Browser — eliminiert Polyfills für Array.at, Object.hasOwn etc.
    browsersListForSwc: true,
  },
};

export default nextConfig;
