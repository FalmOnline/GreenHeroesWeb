import { almarai } from './fonts';
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { RECAPTCHA_SITE_KEY } from '../lib/recaptcha'; // Import your keys



// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Green Heroes",
  description: "Acționează local, să salvezi Global",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body className="z-30 &{almarai.variable}">
        <Header />
        <main className='overflow-hidden'>
          <ReCaptchaProvider siteKey={RECAPTCHA_SITE_KEY}>
          {children}
          </ReCaptchaProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
