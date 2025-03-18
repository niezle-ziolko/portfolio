import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

setupDevPlatform().catch(console.error);

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    '*.gitpod.io',
    '3000-niezleziolko-portfolio-glfvzhmg3a7.ws-eu118.gitpod.io'
  ]
};

export default nextConfig;
