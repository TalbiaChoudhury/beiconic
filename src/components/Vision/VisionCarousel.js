"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './VisionCarousel.module.css';

const visionSlides = [
  {
    id: 1,
    miniTitle: "The Vision",
    header: '🚀 Coaching. Reimagined.',
    content: (
    <>
      <p><strong>Real trainers. AI scale. Limitless impact.</strong></p>
      <br />
      <p>Icon is where top coaches build AI-powered versions of themselves — delivering 24/7 personal support to thousands of clients at once, without ever losing their voice.</p>
      <br />
      <p>Technology driven. Human at heart.</p>
    </>
    ),
    image: '/assets/images/Vision/1(1)-min.png',
  },
  {
    id: 2,
    miniTitle: "The Problem(s)",
    header: '💔 The Fitness Industry is Broken',
    content: (
    <>
      <p><strong>Clients overpay. Coaches burn out. Everyone loses.</strong></p>
      <br />
      <p>Fitness apps are impersonal. Coaching is unaffordable. And the people who love helping others — trainers — are pushed to exhaustion. The system fails everyone it was meant to serve.</p>
      <br />
      <p>💡 <em>80% of personal trainers leave the industry within two years.</em></p>
    </>
    ),
    image: '/assets/images/Vision/2(1)-min.png'
  },
  {
    id: 3,
    miniTitle: "The Solution",
    header: '🧠 Meet Icon',
    content: (
    <>
      <p><strong>Coaching, powered by people - and scaled by AI.</strong></p>
      <br />
      <p>Icon lets real coaches create intelligent, always-available versions of themselves.</p>
      <br />
      <p>Each Icon is tailored to reflect the trainer’s voice, methods, and mindset — delivering personal, ongoing support to clients without the time pressure or burnout.</p>
    </>
    ),
    image: '/assets/images/Vision/3(1)-min.png'
  },
    {
    id: 4,
    miniTitle: "Market Opportunity",
    header: '📊 A $4.5 Trillion Industry',
    content: (
    <>
      <p><strong>Fitness is growing. Coaching hasn’t kept up.</strong></p>
      <br />
      <p>The wellness industry is massive, but coaching access is still limited.</p>
      <br />
      <p>AI is ready. Remote coaching is the norm.</p>
      <br />
      <p>Clients want tailored guidance — and coaches want to reach more people. Icon is where those needs finally meet.</p>
    </>
    ),
    image: '/assets/images/Vision/4(1)-min.png'
  },
  {
    id: 5,
    miniTitle: "Product Overview",
    header: '🛠️ What Icon Actually Does',
    content: (
    <>
      <p><strong>One platform. Two users. Infinite value.</strong></p>
      <br />
      <p>Coaches create, customise, and manage their own AI trainers — setting tone, logic, and goals.</p>
      <br />
      <p>Clients choose an Icon, get daily support, and track their progress.</p>
      <br />
      <p>💡 <em>Every interaction feels personal — because every Icon is designed (and refined) by a real person.</em></p>
    </>
    ),
    image: '/assets/images/Vision/5(1)-min.png'
  },
{
    id: 6,
    miniTitle: "Business Model",
    header: '🔄 Everyone Wins',
    content: (
    <>
      <p><strong>Scalable for coaches. Accessible for clients.</strong></p>
      <br />
      <p>Trainers coach without burnout.</p>
      <br />
      <p>Clients access real, genuine guidance.</p>
      <br />
      <p>No limits. No gatekeeping. No burnout.</p>
    </>
    ),
    image: '/assets/images/Vision/6(1)-min.png'
  },
  {
    id: 7,
    miniTitle: "Social Proof",
    header: "🌱 We're just getting started",
    content: (
    <>
      <p><strong>Icon is more than just an idea - it&apos;s already under construction.</strong></p>
      <br />
      <p>The platform is in development. Our first cohort of expert coaches are preparing to build their Icons.</p>
      <br />
      <p>Early feedback has been overwhelmingly clear:</p>
      <p><em>Trainers are ready to scale. Clients are ready for better.</em></p>
    </>
    ),
    image: '/assets/images/Vision/7(1)-min.png'
  },
    {
    id: 8,
    miniTitle: "Competitive Advantage",
    header: "🥇 Why Icon Will Succeed",
    content: (
    <>
      <p><strong>Authentic Intelligence: real expertise, infinite scale.</strong></p>
      <br />
      <p>Other apps offer templates. Icon offers people.</p>
      <br />
      <p>Real coaches. Real style. Always on.</p>
    </>
    ),
    image: '/assets/images/Vision/8(1)-min.png'
  },
  {
    id: 9,
    miniTitle: "The Future",
    header: "🔮 Thousands of Athletes. One Platform.",
    content: (
    <>
      <p><strong>Coaching becomes culture.</strong></p>
      <br />
      <p>From fitness to nutrition to recovery, and beyond - Icon will amplify expert voices worldwide.</p>
      <br />
      <p>We want to transform the way people train.</p>
    </>
    ),
    image: '/assets/images/Vision/9(1)-min.png'
  },
    {
    id: 10,
    miniTitle: "Call to Action",
    header: "📣 Ready to See The Future of Fitness?",
    content: (
    <>
      <p><strong>Build your Icon or find your fit.</strong></p>
      <br />
      <p>🔗 Join the waitlist. This is the future.</p>
    </>
    ),
    image: '/assets/images/Vision/10(1)-min.png'
  },
];

const VisionCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

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

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      handleNext();
    }
    if (touchStart - touchEnd < -75) {
      handlePrev();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        handlePrev();
      } else if (event.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handlePrev, handleNext]);

  return (
    <div className={styles.carouselContainer}>
      <div 
        className={styles.slidesWrapper}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className={styles.slideStrip} 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {visionSlides.map((slide, index) => (
            <div key={slide.id} className={styles.slide}>
              <div className={styles.imageContainer}>
                <Image
                  src={slide.image}
                  alt={slide.header}
                  layout="fill"
                  objectFit="cover"
                  priority={index === 0} // Only set priority for the first image
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <div className={styles.textContainer}>
                <h3 className={styles.miniTitle}>{slide.miniTitle}</h3>
                <h2 className={styles.header}>{slide.header}</h2>
                <div className={styles.text}>
                  {slide.content}
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