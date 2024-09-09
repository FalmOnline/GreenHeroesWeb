
import localFont from 'next/font/local';

export const almarai = localFont({
  src: [
    {
      path: '../public/fonts/Almarai/Almarai-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Almarai/Almarai-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Almarai/Almarai-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Almarai/Almarai-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-almarai',
  display: 'swap', // Optional: improves loading performance
});
