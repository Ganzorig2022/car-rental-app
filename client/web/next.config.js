/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'datawow.s3.amazonaws.com',
      'links.papareact.com',
      'www.pngmart.com',
    ],
  },
};

module.exports = nextConfig;
