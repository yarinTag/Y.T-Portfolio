import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */

  env: {
    GAPI_KEY: process.env.GAPI_KEY,
  },
};

export default nextConfig;
