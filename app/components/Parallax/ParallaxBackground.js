
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

    const handleResize = () => {
      // Reapply initial offset based on screen size
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * speed}px)`;
        parallaxRef.current.style.backgroundPosition = `${backgroundPosition} ${initialOffset}px`;
      }
    };

    // Add event listener for scrolling and resizing
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    // Initial setup
    handleResize();

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [speed, initialOffset, backgroundPosition]);

  return (
    <div
      ref={parallaxRef}
      className="parallax-background"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundPosition: `${backgroundPosition} ${initialOffset}px`, // Apply background position directly
      }}
      aria-hidden="true" // Accessibility: hides decorative images from screen readers
    />
  );
};

export default ParallaxBackground;
