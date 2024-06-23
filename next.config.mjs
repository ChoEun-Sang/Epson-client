/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost:4000"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;
