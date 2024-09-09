/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'greenheroes.falm.ro',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
