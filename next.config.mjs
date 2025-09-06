/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    if (config.cache) config.cache = false; // avoid ENOSPC
    return config;
  },
};

export default nextConfig;
