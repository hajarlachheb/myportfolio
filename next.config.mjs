/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH || "";
const nextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  images: { unoptimized: true },
};

export default nextConfig;
