/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {  // alowing all domain for using next/image 
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
