/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 告诉 Next.js 导出静态纯网页
  images: {
    unoptimized: true, // GitHub Pages 的硬性要求
  },
};

export default nextConfig;