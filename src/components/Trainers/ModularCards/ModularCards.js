"use client";

import React, { useRef, useMemo, useEffect, useState } from 'react';
import styles from './ModularCards.module.css';
import Image from 'next/image';

// --- Updated Data for the carousel cards ---
const CarouselCards = [
  {
    id: 1,
    header: 'Lifetime Free Access',
    text: 'Have free access to the platform for life, including all future features and updates.',
    image: '/assets/images/Home/Carousel/Carousel1.png'
  },
  {
    id: 2,
    header: 'Better Profit Rates',
    text: '70/30, compared to the standard 60/40',
    image: '/assets/images/Home/Carousel/Carousel1.png'
  },
  {
    id: 3,
    header: 'Direction and Design',
    text: 'Help shape the platform with your feedback and ideas',
    image: '/assets/images/Home/Carousel/Carousel1.png'
  },
  {
    id: 4,
    header: 'Founding Icon Badge',
    text: 'Boost your profile with a special badge that highlights your status as a Founding Icon.',
    image: '/assets/images/Home/Carousel/Carousel1.png'
  },
    {
    id: 5,
    header: 'Priority Placement',
    text: 'Place your content at the top of the feed and in search results.',
    image: '/assets/images/Home/Carousel/Carousel1.png'
  },
];

const ModularCards = () => {
  const scrollContainerRef = useRef(null);
  const scrollTimeout = useRef(null);
  const isInitialLoad = useRef(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const cardWidth = 300;
  const gap = 24;
  const itemWidth = cardWidth + gap;
  const cardsToClone = CarouselCards.length > 2 ? 2 : 1;

  const extendedCards = useMemo(() => {
    if (CarouselCards.length <= 1) return CarouselCards;
    const startClones = CarouselCards.slice(-cardsToClone);
    const endClones = CarouselCards.slice(0, cardsToClone);
    return [...startClones, ...CarouselCards, ...endClones];
  }, [cardsToClone]);

  const realIndex = useMemo(() => {
    const originalLength = CarouselCards.length;
    if (originalLength === 0) return 0;
    const calculatedIndex = (activeIndex - cardsToClone) % originalLength;
    return calculatedIndex < 0 ? calculatedIndex + originalLength : calculatedIndex;
  }, [activeIndex, cardsToClone]);

  const handleLoopAndActiveState = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const originalCardsWidth = CarouselCards.length * itemWidth;
    const currentActiveIndex = Math.round(scrollLeft / itemWidth);
    setActiveIndex(currentActiveIndex);
    if (scrollLeft >= originalCardsWidth + (cardsToClone * itemWidth)) {
      container.style.scrollBehavior = 'auto';
      container.scrollLeft -= originalCardsWidth;
      setActiveIndex(currentActiveIndex - CarouselCards.length);
      container.style.scrollBehavior = 'smooth';
    }
    if (scrollLeft < itemWidth) {
      container.style.scrollBehavior = 'auto';
      container.scrollLeft += originalCardsWidth;
      setActiveIndex(currentActiveIndex + CarouselCards.length);
      container.style.scrollBehavior = 'smooth';
    }
  };

  const handleScroll = () => {
    if (isInitialLoad.current) return;
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    scrollTimeout.current = setTimeout(handleLoopAndActiveState, 150);
  };

  useEffect(() => {
    if (scrollContainerRef.current && CarouselCards.length > 1) {
      const container = scrollContainerRef.current;
      const initialActiveIndex = cardsToClone;
      setTimeout(() => {
        container.style.scrollBehavior = 'auto';
        setActiveIndex(initialActiveIndex);
        container.scrollLeft = itemWidth * initialActiveIndex;
        container.style.scrollBehavior = 'smooth';
        isInitialLoad.current = false;
      }, 10);
    }
  }, [cardsToClone, itemWidth]);

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -itemWidth, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: itemWidth, behavior: 'smooth' });
    }
  };

  const handleIndicatorClick = (index) => {
    if (scrollContainerRef.current) {
      const targetScrollLeft = (index + cardsToClone) * itemWidth;
      scrollContainerRef.current.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.container}>
      {/* --- Start of New Content --- */}
      <h2 className={styles.mainHeader}>WHY JOIN NOW?</h2>
      <h3 className={styles.subHeader}>Be one of the first Icons in the world</h3>
      <p className={styles.introText}>
        We’re only inviting a small group of trainers and athletes to become Founding Icons. We’re looking for a range of people and experiences - so there is no reason you can’t join us - Apply now!
        <br /><br />
        As a Founding Icon, you’ll get early access to the platform and influence how it evolves, and you’ll enjoy exclusive benefits for life, including:
      </p>
      <br></br>
      {/* --- End of New Content --- */}

      <div className={styles.carouselWrapper}>
        <button
          className={`${styles.arrowButton} ${styles.leftArrow}`}
          onClick={handlePrev}
          aria-label="Scroll left"
        >
          <i className={styles.chevron}></i>
        </button>
        <div
          className={styles.cardContainer}
          ref={scrollContainerRef}
          onScroll={handleScroll}
        >
          {extendedCards.map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              className={`${styles.card} ${
                activeIndex === index ? styles.activeCard : styles.inactiveCard
              }`}
            >
              <div className={styles.cardImagePlaceholder}>
                <Image
                    src={card.image}
                    alt={card.header}
                    layout="fill"
                    objectFit="contain"
                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x800/000000/ffffff?text=Image+Not+Found'; }}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardHeader}>{card.header}</h3>
                <p className={styles.cardText}>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className={`${styles.arrowButton} ${styles.rightArrow}`}
          onClick={handleNext}
          aria-label="Scroll right"
        >
          <i className={styles.chevron}></i>
        </button>
      </div>
      <div className={styles.indicatorWrapper}>
        {CarouselCards.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicatorDot} ${
              realIndex === index ? styles.activeIndicator : ''
            }`}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
      {/* --- New Bottom Text --- */}
      <p className={styles.footerText}>
        <span className={styles.highlight}>Spaces are limited - </span> apply now to secure a spot on the waiting list!
      </p>
    </div>
  );
};

export default ModularCards;