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
  // Komprimierung aktivieren
  compress: true,
  // PoweredBy Header entfernen
  poweredByHeader: false,
};

export default nextConfig;
