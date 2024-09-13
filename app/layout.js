// import { almarai } from './fonts';
// import "./globals.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import { ReCaptchaProvider } from "next-recaptcha-v3";
// import { RECAPTCHA_SITE_KEY } from '../lib/recaptcha'; // Import your keys
// import Script from 'next/script';

// export const metadata = {
//   title: "Green Heroes",
//   description: "Acționează local, să salvezi Global",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="ro">
//       <body className="z-30 &{almarai.variable}">
//         {/* Google Analytics - placed before Header */}
//         <Script
//           strategy="afterInteractive"
//           src={`https://www.googletagmanager.com/gtag/js?id=G-KVJMC0FDR8`}
//         />
//         <Script
//           id="google-analytics"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
//               gtag('config', 'G-KVJMC0FDR8', {
//                 page_path: window.location.pathname,
//               });
//             `,
//           }}
//         />

//         {/* Header */}
//         <Header />
        
//         {/* Main content */}
//         <main className='overflow-hidden'>
//           <ReCaptchaProvider siteKey={RECAPTCHA_SITE_KEY}>
//             {children}
//           </ReCaptchaProvider>
//         </main>

//         {/* Footer */}
//         <Footer />
//       </body>
//     </html>
//   );
// }

import { almarai } from './fonts';
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { RECAPTCHA_SITE_KEY } from '../lib/recaptcha'; // Import your keys
import Script from 'next/script';

export const metadata = {
  title: "Green Heroes",
  description: "Acționează local, să salvezi Global",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body className="z-30 &{almarai.variable}">
        {/* CookieYes Banner - placed before Google Analytics */}
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/c0fb151c9726ad01a6501640/script.js"
          type="text/javascript"
          async
        />

        {/* Google Analytics - placed after CookieYes */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-KVJMC0FDR8`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KVJMC0FDR8', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* Header */}
        <Header />
        
        {/* Main content */}
        <main className='overflow-hidden'>
          <ReCaptchaProvider siteKey={RECAPTCHA_SITE_KEY}>
            {children}
          </ReCaptchaProvider>
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
