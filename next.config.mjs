/** @type {import('next').Next.js} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '', // Deixe vazio se for para domínio próprio ou root.
};

export default nextConfig;
