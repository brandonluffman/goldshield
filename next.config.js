/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["media.graphassets.com", "localhost"],
  },
  experimental: {
    images: {
      unoptimized: true,
      allowFutureImage: true,
    },
    newNextLinkBehavior: false,
  }
};

module.exports = nextConfig;
