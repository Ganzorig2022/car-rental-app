/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: false, // THIS IS THE FLAG THAT MATTERS
  },
  images: {
    domains: [
      'datawow.s3.amazonaws.com',
      'links.papareact.com',
      'www.pngmart.com',
      'e7.pngegg.com',
      'cdn-icons-png.flaticon.com',
      'firebasestorage.googleapis.com',
      'res.cloudinary.com',
      'images.unsplash.com',
      'toyota-topmotors.mn',
    ],
  },
};

module.exports = nextConfig;
