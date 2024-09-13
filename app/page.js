"use client"

import React, { useEffect } from 'react';
import ParallaxBackground from './components/Parallax/ParallaxBackground';
import Image from 'next/image';
import ArrowButton from './components/ArrowButton/ArrowButton';
import BeforeAfterSlider from './components/BeforeAfterSlider/BeforeAfterSlider';

const Home = () => {
  useEffect(() => {
    const layers = document.querySelectorAll('.layer');

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      layers.forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        layer.style.transform = `translateY(${scrollPosition * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <ParallaxBackground
        imageSrc="/Green-heroes-banner.png"
        speed={0.5}
        initialOffset={140} // No jump
        backgroundPosition="center"
      />
      {/* Banner */}
      <section className="relative height-hero overflow-hidden w-screen">
        <div className="container lg:max-w-screen-lg 2xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto px-8 overflow-hidden z-20 relative flex flex-col items-center text-center">
            <h1 className="w-full sm:ml-4 md:ml-0 h-2/5 md:h-2/5 justify-center flex z-20 mt-12 2xl:mt-24 xl:mt-16 text-gh-dark-green 2xl:text-9xl lg:text-8xl sm:text-8xl text-6xl leading-none">
              GREEN HEROES
            </h1>
            <h3 className="w-full sm:ml-4 md:ml-0 h-3/5 md:h-3/5 text-center z-20 text-gh-dark-grey font-light 2xl:text-5xl lg:text-4xl 2xl:mb-8 sm:text-5xl text-4xl mb-4 mt-4 ">
              Acționează local, să salvezi global
            </h3>
            <p className="w-9/12 sm:ml-4 md:ml-0 h-4/5 md:h-4/5 z-20 2xl:text-lg lg:text-base">
              Planeta este puternic afectată de activitățile oamenilor și are nevoie de ajutor. Descoperă cum să devii Green Hero, salvează lumea și adu-ți prietenii în echipa ta de supereroi eco!
            </p>
        </div>
      </section>
      {/* Poluarea aerului */}
      <section className="bg-white w-screen h-screen bg-[url('/poluarea-aerului.jpg')] bg-no-repeat bg-contain flex justify-center">
        <div className='container flex'>
          <div className='flex flex-col p-4 w-5/12 justify-center'>
            <div className='flex gap-6'>
              <div className='w-2/12'><Image src="/GH-iconite-probleme-mediu.svg" alt="Iconita poluarea aerului" width={80} height={80} /></div>
              <div className='flex flex-col gap-5 w-10/12 items-start'>
                <h3 className='text-5xl'>Poluarea aerului</h3>
                <p className='text-base'>Orașul tău e acoperit de poluare, iar aerul greu îți afectează sănătatea și calitatea vieții. Mașinile care circulă pe străzile aglomerate, uzinele care funcționează non-stop și încălzirea locuințelor sunt doar câteva dintre principalele surse de poluare. Poluarea nu se vede doar în aerul pe care îl respirăm, ci și în efectele devastatoare asupra mediului și asupra sănătății tale: creșterea problemelor respiratorii, poluarea solului și a apei, dar și schimbările climatice.
                <br /><br />

Pentru a combate acest fenomen, poți face câteva schimbări simple în viața ta.</p>
                <ArrowButton text="Citește mai multe despre poluarea aerului" href="/despre-noi" />
              </div>
            </div>
            <div className="w-full h-px bg-gh-medium-grey mx-auto my-8 justify"></div>
            <div>
              <h3 className='text-sm mb-4 uppercase'>Tips & tricks pentru reducerea poluării:</h3>
              <div className='flex gap-4'>
                <div className="relative group">
                    <button className="px-4 py-2">Utilizarea Transportului Public</button>
                    <div className="absolute shadow-lg left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-48 p-4 bg-white text-gh-dark-grey text-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <Image src="/foloseste-transport-public.jpg" alt="Public Transport" className="mb-2 rounded-md" width={160} height={206} />
                      <p className='text-base leading-4'>Utilizarea transportului public reduce emisiile de carbon.</p>
                    </div>
                  </div>
                  <div className="relative group">
                    <button className="px-4 py-2">Folosirea Bicicletei</button>
                    <div className="absolute shadow-lg left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-48 p-4 bg-white text-gh-dark-grey text-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <Image src="/foloseste-bicicleta.jpg" alt="Public Transport" className="mb-2 rounded-md" width={160} height={206} />
                      <p className='text-base leading-4'>Bicicleta reduce impactul asupra mediului și îți menține corpul în formă.</p>
                    </div>
                  </div>
                  <div className="relative group">
                    <button className="px-4 py-2">Plantarea Copacilor</button>
                    <div className="absolute shadow-lg left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-48 p-4 bg-white text-gh-dark-grey text-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <Image src="/planteaza-copaci.jpg" alt="Public Transport" className="mb-2 rounded-md" width={160} height={206} />
                      <p className='text-base leading-4'>Plantarea copacilor ajută la purificarea aerului și la reducerea emisiilor de CO2.</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className='w-7/12 flex justify-center items-center py-16 px-4'>
          <BeforeAfterSlider
           beforeImage="/brasovul-verde.jpg" 
           afterImage="/brasov-poluat.jpg" 
          />            
          </div>
        </div>
      </section>
{/* Poluarea apelor */}  
      <section className="bg-blue-300 w-screen bg-[url('/bg-green-heroes-poluarea-apelor.jpg')] bg-no-repeat bg-cover flex justify-center shadow-md ">
        <div className='container flex'>
        <div className='w-7/12 flex justify-center py-16 px-4'>
          <Image className="w-1/2" src="/green-hero-ape-poluate.png" 
        alt="Green Hero intalneste ape poluate"
        width={608} 
        height={654} ></Image>           
          </div>
          <div className='flex flex-col p-4 w-5/12 justify-center'>
            <div className='flex gap-6'>
              <div className='w-2/12'><Image src="/icon-poluarea-apelor.svg" alt="Iconita poluarea aerului" width={80} height={80} /></div>
              <div className='flex flex-col w-10/12 gap-5 items-start'>
                <h3 className='text-5xl'>Poluarea apelor</h3>
                <p className='text-base'>Parcurgând calea marilor descoperiri, pașii te-au purtat către o apă limpede odinioară, acum tulbure și plină de resturi. În adâncurile ei, viețuitoarele se zbăteau pentru supraviețuire. Peștii înotau dezorientați printre sticle de plastic și deșeuri industriale, iar plantele subacvatice care cândva susțineau ecosistemul erau sufocate de un strat gros de chimicale și de reziduuri. Păsările care obișnuiau să se hrănească din apele curate acum zăboveau pe mal, slăbite și dezorientate.
                  < br />< br />
                  Ai înțeles atunci că, pentru a le salva, trebuie să iei măsuri. Curățarea apelor și protejarea ecosistemului erau esențiale pentru restabilirea echilibrului. 
                </p>
                <ArrowButton text="Citește mai multe despre poluarea apelor" href="/despre-noi" />
              </div>
            </div>
            <div className="w-full h-px bg-gh-medium-grey mx-auto my-8 justify"></div>
            <div>
              <h3 className='text-sm mb-4 uppercase'>Tips & tricks pentru reducerea poluării:</h3>
              <div className='flex gap-4 flex-wrap'>
                <div className="relative group">
                    <button className="px-4 py-2">Utilizarea Detergenților Biodegradabili</button>
                    <div className="absolute shadow-lg left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-48 p-4 bg-white text-gh-dark-grey text-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <Image src="/folosirea-detergentilor-biodegradabili.jpg" alt="Public Transport" className="mb-2 rounded-md" width={160} height={206} />
                      <p className='text-base leading-4'>Folosirea detergenților biodegradabili și fără substanțe chimice toxice ajută la protejarea surselor de apă.</p>
                    </div>
                  </div>
                  <div className="relative group">
                    <button className="px-4 py-2">Mai puține pesticide și îngrășăminte</button>
                    <div className="absolute shadow-lg left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-48 p-4 bg-white text-gh-dark-grey text-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <Image src="/mai-putine-pesticide-si-ingrasaminte.jpg" alt="Public Transport" className="mb-2 rounded-md" width={160} height={206} />
                      <p className='text-base leading-4'>Minimizarea utilizării produselor chimice în agricultură scade riscul de contaminare a apei prin infiltrarea lor în sol și râuri.</p>
                    </div>
                  </div>
                  <div className="relative group">
                    <button className="px-4 py-2">Reducerea consumului de plastic</button>
                    <div className="absolute shadow-lg left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-48 p-4 bg-white text-gh-dark-grey text-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <Image src="/reducerea-utilizarii-plasticului.jpg" alt="Public Transport" className="mb-2 rounded-md" width={160} height={206} />
                      <p className='text-base leading-4'>Evitarea produselor din plastic și utilizarea materialelor reutilizabile previn acumularea acestora în ape, protejând fauna marină și calitatea apei.</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Home;
