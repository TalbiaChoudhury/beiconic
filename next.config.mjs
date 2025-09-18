/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // Force phones/browsers to download the PDF instead of previewing
  async headers() {
    return [
      {
        source: '/prospectus.pdf', // file in /public
        headers: [
          { key: 'Content-Type', value: 'application/pdf' },
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="Icon_Investor_Prospectus.pdf"',
          },
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
