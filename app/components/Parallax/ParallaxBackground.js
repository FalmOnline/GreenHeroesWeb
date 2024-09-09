// import React, { useEffect, useRef } from 'react';
// import './ParallaxBackground.css'; // Import the CSS file

// const ParallaxBackground = ({ imageSrc, speed = 0.5, initialOffset = 140 }) => {
//   const parallaxRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (parallaxRef.current && window.innerWidth > 768) {
//         const offset = window.scrollY;
//         parallaxRef.current.style.transform = `translateY(${offset * speed}px)`;
//       }
//     };

//     // Initial transform and background position
//     if (parallaxRef.current && window.innerWidth > 768) {
//       parallaxRef.current.style.transform = `translateY(${initialOffset}px)`;
//       parallaxRef.current.style.backgroundPosition = `center ${initialOffset}px`;
//     }

//     window.addEventListener('scroll', handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [speed, initialOffset]);

//   return (
//     <div
//       ref={parallaxRef}
//       className="parallax-background"
//       style={{
//         backgroundImage: `url(${imageSrc})`,
//       }}
//       aria-hidden="true" // Accessibility: hides decorative images from screen readers
//     />
//   );
// };

// export default ParallaxBackground;

import React, { useEffect, useRef } from 'react';
import './ParallaxBackground.css'; // Import the CSS file

const ParallaxBackground = ({ imageSrc, speed = 0.5, initialOffset = 0, backgroundPosition = 'center' }) => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current && window.innerWidth > 768) {
        const offset = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${offset * speed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return (
    <div
      ref={parallaxRef}
      className="parallax-background"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundPosition: `${backgroundPosition} ${initialOffset}px`,
        transform: `translateY(${initialOffset}px)`, // Apply inline style immediately
      }}
      aria-hidden="true" // Accessibility: hides decorative images from screen readers
    />
  );
};

export default ParallaxBackground;

