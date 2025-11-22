/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizeCss: true
    }
};

export default nextConfig;

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
