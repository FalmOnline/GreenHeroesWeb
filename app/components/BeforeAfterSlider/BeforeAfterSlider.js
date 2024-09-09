'use client';

import React, { useRef, useState } from 'react';
import styles from './BeforeAfterSlider.module.css';

export default function BeforeAfterSlider({ beforeImage, afterImage }) {
  const [sliderPosition, setSliderPosition] = useState(50); // Start with the slider in the middle
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const { left, width } = containerRef.current.getBoundingClientRect();
    const newPosition = ((e.clientX - left) / width) * 100;
    setSliderPosition(Math.max(0, Math.min(newPosition, 100)));
  };

  const handleTouchMove = (e) => {
    if (!containerRef.current) return;

    const { left, width } = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const newPosition = ((touch.clientX - left) / width) * 100;
    setSliderPosition(Math.max(0, Math.min(newPosition, 100)));
  };

  return (
    <div
      ref={containerRef}
      className={styles.sliderContainer}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <div className={styles.imageWrapper}>
        <img src={beforeImage} className={styles.image} alt="Before" />
        <div
          className={styles.afterImageContainer}
          style={{ width: `${sliderPosition}%`, backgroundImage: `url(${afterImage})` }}
        ></div>
      </div>
      <div
        className={styles.sliderHandle}
        style={{ left: `calc(${sliderPosition}% - 10px)` }}
      >
        <div className={styles.line}></div>
        {sliderPosition > 0 && (
          <div className={styles.leftArrow}>
            &larr;
          </div>
        )}
        {sliderPosition < 100 && (
          <div className={styles.rightArrow}>
            &rarr;
          </div>
        )}
      </div>
    </div>
  );
}
