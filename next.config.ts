import type { NextConfig } from 'next'

import { nextConf } from '@/config/next.conf'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  basePath: nextConf.basePath === '/' ? '' : nextConf.basePath,
  images: {
    unoptimized: true
  }
}

export default nextConfig
