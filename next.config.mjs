import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */
const nextConfig = {  images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'static.w2.app',
      port: '',
      pathname: '/20240627/**',
    },
  ],
},};

 if (process.env.NODE_ENV === 'development') {
   await setupDevPlatform();
 }

export default nextConfig;