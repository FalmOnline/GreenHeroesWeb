// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         remotePatterns: [
//           {
//             protocol: 'https',
//             hostname: 'greenheroes.falm.ro',
//             port: '',
//             pathname: '/**',
//           },
//         ],
//       },
// };

// export default nextConfig;



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
        {
          protocol: 'https',
          hostname: 'greengeneration.falm.ro', // Add the second domain here
          port: '',
          pathname: '/**',
        },
      ],
    },
};

export default nextConfig;