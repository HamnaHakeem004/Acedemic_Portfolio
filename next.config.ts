import path from "path";
import type { NextConfig } from "next";

const rootDir = path.resolve(process.cwd());

const nextConfig: NextConfig = {
  outputFileTracingRoot: rootDir,
  turbopack: {
    root: rootDir,
  },
};

export default nextConfig;
