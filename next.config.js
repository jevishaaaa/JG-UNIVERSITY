/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["jguni.in"],
  },
};

module.exports = nextConfig;