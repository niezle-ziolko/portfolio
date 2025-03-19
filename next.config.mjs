import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

setupDevPlatform().catch(console.error);

/** @type {import('next').NextConfig} */
const nextConfig = {
    allowedDevOrigins: [
        'localhost',
        '*.gitpod.io',
        '3000-niezleziolko-portfolio-odr7n7z3cfy.ws-eu118.gitpod.io'
    ]
};

export default nextConfig;