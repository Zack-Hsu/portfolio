import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  output: "export",
  basePath: '/portfolio', // 設定 GitHub Pages 的子目錄
  assetPrefix: '/portfolio/', // 確保靜態資源的路徑正確
  images: {
    unoptimized: true,
  }
};

export default nextConfig;