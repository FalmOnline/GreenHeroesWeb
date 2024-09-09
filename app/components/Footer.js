import Image from "next/image";
import logo from '../../public/GH-Logo.svg';
import facebookIcon from '../../public/facebook-icon.svg';
import Link from "next/link";

export default function Footer() {
    return (
    <footer className="bg-[url('/bg-pamant-gri-si-verde.svg')] bg-no-repeat bg-cover relative z-30">
        <div className="container lg:max-w-screen-lg 2xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 pb-8 px-3">
                <div className="text-center md:text-left">
                    <div className="mb-8">
                    <Link href="/">
                            <Image src={logo} alt="Green Heroes logo" width={111} height={51}></Image>
					</Link>
                    </div>
                    <nav>
                        <ul className="[&>li]:list-none [&>li]:text-base">
                        <li><Link className='no-underline' href="/despre-noi">Despre noi</Link></li>
                            <li><Link className='no-underline' href="/blog">Resurse educaționale</Link></li>
                            <li><Link className='no-underline' href="/contact">Contact</Link></li>
                            <li><Link className='no-underline' href="/politica-de-confidentialitate">Politică de confidențialitate</Link></li>
                            <li><Link className='no-underline' href="/politica-de-cookies">Politică de cookies</Link></li>
                            <li><Link className='no-underline' href="/harta-site">Harta site</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="flex flex-col items-center gap-2">
                <Link className="text-gh-dark-green text-sm" href="https:/www.afm.ro"><Image src="/logo-afm-200.png" alt="Logo AFM" width={100} height={72} /></Link>
                   <h3 className="text-sm text-center leading-tight">Proiect finanţat din Fondul pentru mediu în cadrul Programului vizând educaţia şi conştientizarea publicului privind protecţia mediului</h3>
                   <Link className="text-gh-dark-green text-sm" href="https:/www.afm.ro">www.afm.ro</Link>
                   <p className="text-xs text-center"><strong>Beneficiar</strong>: Asociația Uman <br />
                   <strong>Partener</strong>: Colegiul Național “Andrei Șaguna” Brașov<br />
                   Valoarea totală a proiectului este de 499.482,00 lei<br />
                   Data începerii investiției: 15.05.2024<br />
                   Data finalizării investiției: 14.11.2025</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Link className="w-44" href="https:/www.green-heroes.ro"><Image src="/green-heroes.png" alt="Green Heroes" width={600} height={300} /></Link>
                  <p4 className="font-bold text-center leading-tight">Accesează aplicația<br /> 
                  Green Heroes:</p4>
                  <Link href="https:/www.green-heroes.ro"><button className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>Pornește aventura</button></Link>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center border-t border-line-grey pt-6 pb-8 px-3">
                {/* <!-- Credentials --> */}
                <div className="text-xs mt-4 sm:mt-0 flex items-center gap-6">
                    Creat de: 
                    <Link className="flex text-gh-medium-grey items-center" href="https://asociatiauman.ro" target="_blank"><Image src="/Logo-UMAN.png" alt="logo asociatia uman" width={60} height={56} />Asociația Uman</Link>
                    <p className="text-gh-medium-grey font-light">|</p>
                    <Link className="flex text-gh-medium-grey items-center gap-2" href="https://www.saguna.ro"><Image src="/colegiul-national-andrei-saguna-brasov-logo.png" alt="logo asociatia uman" width={60} height={56} />Colegiul Național &quot;Andrei Șaguna&quot;, Brașov</Link>
                </div>
            </div>
        </div>
    </footer>
    );
  }