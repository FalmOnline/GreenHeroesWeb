/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'admin.green-heroes.info',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
