// Static export so the site runs on GitHub Pages (or any static host / Vercel).
// NEXT_PUBLIC_BASE_PATH is "" for a custom domain and "/<repo>" for github.io/<repo>.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
