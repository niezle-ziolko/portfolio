import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

setupDevPlatform().catch(console.error);

/** @type {import('next').NextConfig} */
const nextConfig = {
    allowedDevOrigins: [
        'localhost',
        '*.gitpod.io',
        '3000-niezleziolko-portfolio-13pezqoghjl.ws-eu118.gitpod.io'
    ]
};

export default nextConfig;