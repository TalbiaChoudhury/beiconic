"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './CarouselSlides.module.css';

// --- Data for the carousel. Replace with your own content ---
const carouselData = [
  {
    id: 1,
    image: '/assets/images/Trainers/Carousel/Carousel1.png', // Make sure to have these images in your public folder
    title: 'Step 1 - Share Your Style',
    description: 'We start by getting to know you - your training methods, mindset, stories, and communication style. This onboarding helps us build something that actually feels like you.',
  },
  {
    id: 2,
    image: '/assets/images/Trainers/Carousel/Carousel2.png',
    title: 'Step 2 - Build Your Icon',
    description: 'Our unique technology stack creates your custom trainer - your ‘Icon’ - based on your inputs. It talks like you. It coaches like you. It’s your knowledge, made scalable.',
  },
  {
    id: 3,
    image: '/assets/images/Trainers/Carousel/Carousel3.png',
    title: 'Step 3 - Client Train Anytime',
    description: 'Your Icon lives in the app, coaching clients around the clock. No time zones. No language barriers. No scheduling. Just high-quality training - on demand.',
  },
  {
    id: 4,
    image: '/assets/images/Trainers/Carousel/Carousel4.png',
    title: 'Step 4 - You Stay in Control',
    description: 'We don’t believe in replacing humans with artificial intelligence. You can review, guide and moderate your Icon’s behaviour anytime, making sure it evolves with you and stays try to your philosophy.',
  },
    {
    id: 5,
    image: '/assets/images/Trainers/Carousel/Carousel5.png',
    title: 'Step 5 - You Stay in Control',
    description: 'We don’t believe in replacing humans with artificial intelligence. You can review, guide and moderate your Icon’s behaviour anytime, making sure it evolves with you and stays try to your philosophy.',
  },
];

const CarouselSlides = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageWrapperRef = useRef(null);
  const timeoutRef = useRef(null);

  // --- Drag/Swipe State ---
  const isDragging = useRef(false);
  const startX = useRef(0);
  const dragThreshold = 50; // Min pixels to drag to trigger a slide change

  // --- Navigation Logic (memoized with useCallback) ---
  const goToNext = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  }, []);

  const goToPrev = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length);
  }, []);

  // --- Event Handlers ---

  // Handle clicking on a text box or indicator bar
  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  // Effect to handle wheel event for scrolling, preventing page scroll
  useEffect(() => {
    const element = imageWrapperRef.current;
    if (!element) return;

    const handleWheel = (e) => {
      e.preventDefault(); // This is the key to preventing page scroll
      e.stopPropagation(); // Stop the event from bubbling up

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        if (e.deltaY < 0) {
          goToPrev();
        } else {
          goToNext();
        }
      }, 50); // Debounce to prevent rapid scrolling
    };

    // Add event listener with passive: false to allow preventDefault
    element.addEventListener('wheel', handleWheel, { passive: false });

    // Cleanup function to remove the event listener
    return () => {
      element.removeEventListener('wheel', handleWheel);
      if(timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [goToPrev, goToNext]); // Dependencies for the effect


  // Handle drag/swipe start
  const handleDragStart = (e) => {
    isDragging.current = true;
    startX.current = e.pageX || e.touches[0].pageX;
  };

  // Handle drag/swipe end
  const handleDragEnd = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const endX = e.pageX || e.changedTouches[0].pageX;
    const dragDistance = endX - startX.current;

    if (Math.abs(dragDistance) > dragThreshold) {
      if (dragDistance > 0) {
        goToPrev(); // Swiped right
      } else {
        goToNext(); // Swiped left
      }
    }
  };

  // Handle mouse leave to cancel drag
  const handleMouseLeave = (e) => {
      if(isDragging.current) {
          handleDragEnd(e);
      }
  }


  return (
    <div className={styles.carouselContainer}>
      {/* Left Side: Image Carousel and Indicators */}
      <div
        className={styles.leftColumn}
        ref={imageWrapperRef}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
      >
        <div className={styles.imageWrapper}>
            {carouselData.map((item, index) => (
                <div
                    key={item.id}
                    className={`${styles.imageContainer} ${
                    activeIndex === index ? styles.active : ''
                    }`}
                >
                    <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="contain"
                    className={styles.image}
                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x800/000000/ffffff?text=Image+Not+Found'; }}
                    />
                </div>
            ))}
        </div>
        <div className={styles.indicatorWrapper}>
            {carouselData.map((_, index) => (
                <div
                    key={index}
                    className={`${styles.indicatorBar} ${
                        activeIndex === index ? styles.indicatorBarActive : ''
                    }`}
                    onClick={() => handleIndicatorClick(index)}
                ></div>
            ))}
        </div>
      </div>


      {/* Right Side: Text Content */}
      <div className={styles.textColumn}>
        <button
            className={`${styles.arrowButton} ${styles.upArrow}`}
            onClick={goToPrev}
            aria-label="Previous slide"
        >
            <i className={styles.chevron}></i>
        </button>

        <div className={styles.textWrapper}>
            <div className={styles.textSlider} style={{ transform: `translateY(-${activeIndex * 100}%)` }}>
                {carouselData.map((item, index) => (
                    <div
                        key={item.id}
                        className={`${styles.textBox} ${
                        activeIndex === index ? styles.activeText : ''
                        }`}
                        onClick={() => handleIndicatorClick(index)}
                    >
                        <h3 className={styles.textTitle}>{item.title}</h3>
                        <p className={styles.textDescription}>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>

        <button
            className={`${styles.arrowButton} ${styles.downArrow}`}
            onClick={goToNext}
            aria-label="Next slide"
        >
            <i className={styles.chevron}></i>
        </button>
      </div>
    </div>
  );
};

export default CarouselSlides;