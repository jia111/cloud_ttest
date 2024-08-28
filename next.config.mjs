/** @type {import('next').NextConfig} */
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
const nextConfig = {
  devServer: {
    https: true,
    ignoreCertificateErrors: true, // 忽略证书错误
  },
};

// if (process.env.NODE_ENV === 'development') {
//   await setupDevPlatform();
// }
export default nextConfig;
