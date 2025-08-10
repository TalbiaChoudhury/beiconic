"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import styles from './VisionCarousel.module.css';

// --- Data for the carousel. Replace with your own content ---
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
        <br />
      </>
    ),
    image: '/assets/images/Vision/10(1)-min.png'
  },
];

const VisionCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // State for User Form
  const [userEmail, setUserEmail] = useState('');
  const [userLoading, setUserLoading] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const userEmailInputRef = useRef(null);

  // State for Trainer Form
  const [trainerEmail, setTrainerEmail] = useState('');
  const [trainerLoading, setTrainerLoading] = useState(false);
  const [trainerMessage, setTrainerMessage] = useState('');
  const trainerEmailInputRef = useRef(null);


  const handlePrev = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? visionSlides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const handleNext = useCallback(() => {
    const isLastSlide = currentIndex === visionSlides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

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

  // Keyboard navigation effect
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

  // NEW: Event listener for navbar sign-up button click
  useEffect(() => {
    const handleShowSlide10 = () => {
      const slide10Index = visionSlides.findIndex(slide => slide.id === 10);
      if (slide10Index !== -1) {
        setCurrentIndex(slide10Index);
      }
    };
    window.addEventListener('showCarouselSlide10', handleShowSlide10);
    return () => {
      window.removeEventListener('showCarouselSlide10', handleShowSlide10);
    };
  }, []);


  // User Form Submission Handler
  const handleUserSubmit = async (event) => {
    event.preventDefault();
    setUserLoading(true);
    setUserMessage('');

    try {
      const res = await fetch('/api/userSubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail }),
      });
      const data = await res.json();
      if (res.ok) {
        setUserMessage('Success! User subscribed.');
        setUserEmail('');
      } else {
        setUserMessage(data.error || 'User subscription failed.');
      }
    } catch (error) {
      setUserMessage('Network error for user subscription.');
      console.error('User subscribe fetch error:', error);
    }
    setUserLoading(false);
  };

  // Trainer Form Submission Handler
  const handleTrainerSubmit = async (event) => {
    event.preventDefault();
    setTrainerLoading(true);
    setTrainerMessage('');

    try {
      const res = await fetch('/api/trainerSubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trainerEmail }),
      });
      const data = await res.json();
      if (res.ok) {
        setTrainerMessage('Success! Trainer applied.');
        setTrainerEmail('');
      } else {
        setTrainerMessage(data.error || 'Trainer application failed.');
      }
    } catch (error) {
      setTrainerMessage('Network error for trainer application.');
      console.error('Trainer subscribe fetch error:', error);
    }
    setTrainerLoading(false);
  };

  // Effect to listen for custom highlight events for these forms
  useEffect(() => {
    const handleHighlightUserForm = () => {
      if (userEmailInputRef.current) {
        userEmailInputRef.current.focus();
        userEmailInputRef.current.classList.add(styles.highlightInput);
        setTimeout(() => {
          if (userEmailInputRef.current) {
            userEmailInputRef.current.classList.remove(styles.highlightInput);
          }
        }, 2000);
      }
    };

    const handleHighlightTrainerForm = () => {
      if (trainerEmailInputRef.current) {
        trainerEmailInputRef.current.focus();
        trainerEmailInputRef.current.classList.add(styles.highlightInput);
        setTimeout(() => {
          if (trainerEmailInputRef.current) {
            trainerEmailInputRef.current.classList.remove(styles.highlightInput);
          }
        }, 2000);
      }
    };

    window.addEventListener('highlightVisionUserForm', handleHighlightUserForm);
    window.addEventListener('highlightVisionTrainerForm', handleHighlightTrainerForm);

    return () => {
      window.removeEventListener('highlightVisionUserForm', handleHighlightUserForm);
      window.removeEventListener('highlightVisionTrainerForm', handleHighlightTrainerForm);
    };
  }, []);

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
                  priority={index === 0}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <div className={styles.textContainer}>
                <h3 className={styles.miniTitle}>{slide.miniTitle}</h3>
                <h2 className={styles.header}>{slide.header}</h2>
                <div className={styles.text}>
                  {index === 9 ? (
                    <>
                      {slide.content}
                      <div className={styles.formsContainer}>
                        {/* User Sign Up Form */}
                        <div className={styles.formSection}>
                          <div className={styles.formRow}>
                            <h3 className={styles.formTitle}>Users</h3>
                            <input
                              type="email"
                              placeholder="Enter email address..."
                              className={`${styles.userEmailInput} ${styles.emailInput}`}
                              value={userEmail}
                              onChange={(e) => setUserEmail(e.target.value)}
                              required
                              ref={userEmailInputRef}
                            />
                          </div>
                          <button type="submit" className={styles.signupButton} disabled={userLoading} onClick={handleUserSubmit}>
                            {userLoading ? 'Submitting...' : 'Sign Up'}
                          </button>
                          {userMessage && <p className={`${styles.message} ${styles.absoluteMessage}`}>{userMessage}</p>}
                        </div>
                        {/* Trainer Sign Up Form */}
                        <div className={styles.formSection}>
                          <div className={styles.formRow}>
                            <h3 className={styles.formTitle}>Trainers</h3>
                            <input
                              type="email"
                              placeholder="Enter email address..."
                              className={`${styles.trainerEmailInput} ${styles.emailInput}`}
                              value={trainerEmail}
                              onChange={(e) => setTrainerEmail(e.target.value)}
                              required
                              ref={trainerEmailInputRef}
                            />
                          </div>
                          <button type="submit" className={styles.trainersButton} disabled={trainerLoading} onClick={handleTrainerSubmit}>
                            {trainerLoading ? 'Applying...' : 'Apply Now'}
                          </button>
                          {trainerMessage && <p className={`${styles.message} ${styles.absoluteMessage}`}>{trainerMessage}</p>}
                        </div>
                      </div>
                    </>
                  ) : (
                    slide.content
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