"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './VisionCarousel.module.css';

const visionSlides = [
  {
    id: 1,
    miniTitle: "The Vision",
    header: '🚀 Coaching. Reimagined.',
    textLine1: 'Real trainers. AI scale. Limitless impact.',
    textLine2: 'Icon is where top coaches build AI-versions of themselves - delivering 24/7 support to thousands of clients at once, without losing their voice.',
    image: '/assets/images/Trainers/Carousel/Carousel4.png'
  },
  {
    id: 2,
    miniTitle: "The Problem(s)",
    header: "💔 The Fitness Industy isn't Working",
    textLine1: 'Clients face sky-high costs, soulless apps, and limited access to real support.',
    textLine2: 'Trainers burn out, trapped in a system that demands unpaid hours, capped income, and endless hustle — just to stay afloat.',
    textLine3: '💡 80% of personal trainers leave the industry within two years.',
    image: '/assets/images/vision/slide-problem.png'
  },
  {
    id: 3,
    miniTitle: "The Solution",
    header: '🧠 Meet Icon',
    textLine1: "Icon lets trainers create digital versions of themselves — personalised, intelligent, and always available. These AI-powered Icons deliver guidance in the coach’s own voice and style, supporting clients anytime, anywhere, without losing the human touch.",
    textLine2: 'Unlike generic fitness apps, Icons are fully trainer-controlled — every message, plan, and interaction reflects the real person behind it.',
    image: '/assets/images/vision/slide-solution.png'
  },
// Add this new slide object to your visionSlides array
{
  id: 4, // Make sure the ID is unique
  miniTitle: "Market Opportunity",
  header: "A $4.5 Trillion Opportunity",
  image: '/assets/images/vision/your-image-for-this-slide.png', // Add an image
  content: (
    <>
      <p>The demand for fitness has never been higher — but the way we deliver it is stuck in the past.</p>
      <p>Consumers want personalised support, available anytime, anywhere.</p>
      <p>Coaches want to scale without sacrificing quality.</p>
      <p>The industry needs a new model.</p>
      <p>Icon sits at the intersection of three unstoppable forces:</p>
      <ul className={styles.list}>
        <li className={styles.listItem}>💡 "AI that can coach with nuance"</li>
        <li className={styles.listItem}>🌍 "Global demand for remote fitness"</li>
        <li className={styles.listItem}>💼 "A new generation of coaches ready to scale their impact"</li>
      </ul>
      <p>The market is massive — and the moment is now.</p>
    </>
  )
},
  {
    id: 5,
    header: '',
    textLine1: '',
    textLine2: '',
    image: '/assets/images/vision/slide-users.png'
  },
  {
    id: 6,
    header: '',
    textLine1: '',
    textLine2: '',
    image: '/assets/images/vision/slide-ecosystem.png'
  }
];

const VisionCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? visionSlides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === visionSlides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const currentSlide = visionSlides[currentIndex];

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.slidesWrapper}>
  <div 
    className={styles.slideStrip} 
    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
  >
    {visionSlides.map((slide) => (
      <div key={slide.id} className={styles.slide}>
        <div className={styles.imageContainer}>
          <Image
            src={slide.image}
            alt={slide.header}
            layout="fill"
            objectFit="cover"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
        <div className={styles.textContainer}>
          <h3 className={styles.miniTitle}>{slide.miniTitle}</h3>
          <h2 className={styles.header}>{slide.header}</h2>
        <div className={styles.text}>
  {slide.content ? slide.content : (
    <>
      <p>{slide.textLine1}</p>
      {slide.textLine2 && (
        <>
          <br />
          <p>{slide.textLine2}</p>
        </>
      )}
      {slide.textLine3 && (
        <>
          <br />
          <p><em>{slide.textLine3}</em></p>
        </>
      )}
    </>
  )}
</div>
        </div>
      </div>
    ))}
  </div>
</div>

      <div className={styles.navigation}>
        <button onClick={handlePrev} className={styles.navButton}>{"<"}</button>
        <span className={styles.slideCounter}>{currentIndex + 1} / {visionSlides.length}</span>
        <button onClick={handleNext} className={styles.navButton}>{">"}</button>
      </div>
    </div>
  );
};

export default VisionCarousel;