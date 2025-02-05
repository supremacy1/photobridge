// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
