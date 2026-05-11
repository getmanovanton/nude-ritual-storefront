import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/nude-ritual-storefront" : "",
  assetPrefix: isGitHubPages ? "/nude-ritual-storefront/" : "",
};

export default nextConfig;
