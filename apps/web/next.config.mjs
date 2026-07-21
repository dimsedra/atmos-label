/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@atmos/db', '@atmos/queue', '@atmos/validators'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

export default nextConfig;
