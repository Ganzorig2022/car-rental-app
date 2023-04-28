/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'datawow.s3.amazonaws.com',
      'links.papareact.com',
      'www.pngmart.com',
      'e7.pngegg.com',
      'cdn-icons-png.flaticon.com',
      'firebasestorage.googleapis.com',
    ],
  },
};

module.exports = nextConfig;
