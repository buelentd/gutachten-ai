import withBundleAnalyzerInit from "@next/bundle-analyzer";

const withBundleAnalyzer = withBundleAnalyzerInit({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/datenschutz.html", destination: "/datenschutz", permanent: true },
      { source: "/impressum.html", destination: "/impressum", permanent: true },
      { source: "/kontakt.html", destination: "/kontakt", permanent: true },
    ];
  },
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
};

export default withBundleAnalyzer(nextConfig);
