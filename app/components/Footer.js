import Image from "next/image";
import logo from '../../public/GH-Logo.svg';
import facebookIcon from '../../public/facebook-icon.svg';
import Link from "next/link";

export default function Footer() {
    return (
    <footer className="bg-[url('/bg-pamant-gri-si-verde.svg')] bg-no-repeat bg-contain relative z-30 border-t border-gh-grey-buttons">
        <div className="container lg:max-w-screen-lg 2xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 pb-8 px-3">
                <div className="text-center md:text-left">
                    <div className="mb-8 text-center">
                    <Link href="/">
                          <Image className="text-center md:text-left md:mx-0 block mx-auto" src={logo} alt="Green Heroes logo" width={111} height={51}></Image>
					</Link>
                    </div>
                    <nav>
                        <ul className="[&>li]:list-none [&>li]:text-base [&>li>a:hover]:text-gh-dark-green">
                        <li><Link className='no-underline' href="/despre-noi">Despre noi</Link></li>
                            <li><Link className='no-underline' href="/blog">Resurse educaționale</Link></li>
                            <li><Link className='no-underline' href="/contact">Contact</Link></li>
                            <li><Link className='no-underline' href="/politica-de-confidentialitate">Politică de confidențialitate</Link></li>
                            <li><Link className='no-underline' href="/politica-de-cookies">Politică de cookies</Link></li>
                            <li><Link className='no-underline' href="/harta-site">Harta site</Link></li>
                        </ul>
                    </nav>
                    <div className="flex flex-row mt-4">
                        {/* Facebook */}
                        <div>
                            <a href="https://www.facebook.com/AsociatiaUMAN/" target="_blank" rel="noopener noreferrer">
                            <svg
                                className="h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 26 26"
                            >
                                <path d="M17.525 9H14V7c0-1.032.084-1.682 1.563-1.682h1.868v-3.18A26.065 26.065 0 0014.693 2C11.98 2 10 3.657 10 6.699V9H7v4l3-.001V22h4v-9.003l3.066-.001L17.525 9z"></path>
                            </svg>
                            </a>
                        </div>

                        {/* Instagram */}
                        {/* <div className="pl-2 pr-3">
                            <a href="https://www.instagram.com/pilfis_lifestyle/" target="_blank" rel="noopener noreferrer">
                            <svg
                                className="h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 23 23"
                            >
                                <path d="M8 3C5.243 3 3 5.243 3 8v8c0 2.757 2.243 5 5 5h8c2.757 0 5-2.243 5-5V8c0-2.757-2.243-5-5-5H8zm0 2h8c1.654 0 3 1.346 3 3v8c0 1.654-1.346 3-3 3H8c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3zm9 1a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1zm-5 1c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z"></path>
                            </svg>
                            </a>
                        </div> */}

                        {/* YouTube */}
                        {/* <div>
                            <svg
                            className="h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 50 50"
                            >
                            <path
                                fillRule="evenodd"
                                d="M13 5l3 9v6h2v-6l3-9h-2l-2 6-2-6zm11 4c-1.066 0-1.59.168-2.242.703-.625.527-.797.934-.758 2.297v5c0 .996.164 1.652.766 2.234.625.582 1.214.766 2.234.766 1.066 0 1.648-.184 2.25-.766.625-.558.75-1.238.75-2.234v-5c0-.883-.156-1.719-.762-2.277C25.613 9.148 24.968 9 24 9zm5 0v9c0 .973.98 2 2 2s1.559-.512 2-1v1h2V9h-2v8c-.012.684-.816 1-1 1-.207 0-1-.043-1-1V9zm-5 2c.3 0 1-.004 1 1v5c0 .969-.676 1-1 1-.3 0-1-.012-1-1v-5c0-.816.434-1 1-1zM10 22c-3.594 0-6 2.383-6 6v9.5c0 3.617 2.406 6.5 6 6.5h30c3.594 0 6-2.383 6-6V28c0-3.617-2.406-6-6-6zm2 4h6v2h-2v12h-2V28h-2zm14 0h2v4c.23-.36.574-.645.902-.805a2.13 2.13 0 01.973-.258c.648 0 1.156.235 1.504.672.348.442.621 1.028.621 1.891v6c0 .742-.25 1.203-.578 1.598-.32.394-.8.894-1.422.902-1.05.012-1.613-.55-2-1v1h-2zm-8 3h2v8c0 .23.27 1.008 1 1 .813-.008.82-.766 1-1v-8h2v11h-2v-1c-.371.438-.563.574-.98.781-.415.235-.836.219-1.227.219-.484 0-1.035-.438-1.293-.766-.23-.3-.5-.609-.5-1.234zm18.2 0c.948 0 1.616.203 2.12.734.516.532.68 1.153.68 2.153V35h-4v1.547c0 .558.074.914.219 1.125.136.23.414.332.781.328.406-.004.664-.086.8-.27.141-.164.2-.628.2-1.23V36h2v.594c0 1.09-.086 1.902-.625 2.433-.508.559-1.3.817-2.34.817-.95 0-1.691-.282-2.222-.86-.532-.578-.81-1.37-.81-2.39v-4.707c0-.907.317-1.578.9-2.176.468-.48 1.347-.711 2.296-.711zM29 30.5c-.55 0-.992.496-1 1v6c.008.29.45.5 1 .5s1-.426 1-.977V32c0-1-.45-1.5-1-1.5zm7 .5c-.55 0-.992.465-1 1v1h2v-1c0-.613-.45-1-1-1z"
                            ></path>
                            </svg>
                        </div> */}
</div>

                </div>
                <div className="flex flex-col items-center gap-2">
                <Link className="text-gh-dark-green text-sm" href="https://www.afm.ro" target="_blank"><Image src="/logo-afm-200.png" alt="Logo AFM" width={100} height={72} /></Link>
                   <h3 className="text-sm text-center leading-tight">Proiect finanţat din Fondul pentru mediu în cadrul Programului vizând educaţia şi conştientizarea publicului privind protecţia mediului</h3>
                   <Link className="text-gh-dark-green text-sm" href="https://www.afm.ro" target="_blank">www.afm.ro</Link>
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
                  <Link href="https://www.green-heroes.ro" target="_blank"><button className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>Pornește aventura</button></Link>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center border-t border-line-grey pt-6 pb-8 px-3">
                {/* <!-- Credentials --> */}
                <div className="text-sm md:text-xs mt-4 sm:mt-0 flex md:flex-row flex-col items-center gap-6 w-full">
                    Creat de: 
                    <Link className="flex text-gh-medium-grey items-center w-full md:w-auto no-underline justify-center" href="https://asociatiauman.ro" target="_blank"><Image className="w-12 md:w-auto mr-2" src="/Logo-UMAN.png" alt="logo asociatia uman" width={60} height={56} />Asociația Uman</Link>
                    <p className="hidden md:block text-gh-medium-grey font-light">|</p>
                    <Link className="pl-6 flex text-gh-medium-grey items-center gap-2 no-underline justify-center" href="https://www.saguna.ro" target="_blank"><Image src="/colegiul-national-andrei-saguna-brasov-logo.png" alt="logo asociatia uman" width={60} height={56} />Colegiul Național <br /> &quot;Andrei Șaguna&quot; Brașov</Link>
                </div>
            </div>
        </div>
    </footer>
    );
  }