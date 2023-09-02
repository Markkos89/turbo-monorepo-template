// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: !!process.env.ANALYZE,
// });

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

module.exports = ({ basePath }) => {
  /** @type {import('next').NextConfig} */
  const config = {
    basePath,
    pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
    reactStrictMode: true,
    transpilePackages: ["ui", "utils"],
  };

  return withPWA(config);
};
