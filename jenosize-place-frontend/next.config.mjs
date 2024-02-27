/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  serverRuntimeConfig: {
    BASE_URL: process.env.BASE_URL ?? 'http://localhost:3000',
    PORT: process.env.PORT,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000',
  }
};

export default nextConfig;
