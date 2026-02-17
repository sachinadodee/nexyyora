/** @type {import('next').NextConfig} */
const nextConfig = {
   output: 'export',
   images: {
    unoptimized: true
   },
   basePath:'\${nexyyora}',
   assetPrefix:'\${nexyyora}'
}
 

module.exports = nextConfig
