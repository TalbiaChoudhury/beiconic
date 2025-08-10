import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import hero from '../../../../public/assets/images/Home/Hero/Hero.png'; // Assuming this is correct for the Home page Hero

const Hero = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const emailInputRef = useRef(null);
  const highlightTimeoutRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch('/api/userSubscribe', { // Assuming this is the correct API route for the Home page
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('Success! Thank you for subscribing.');
        setEmail('');
      } else {
        setMessage(data.error || 'An error occurred. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please check your connection and try again.');
      console.error('Fetch error:', error);
    }

    setLoading(false);
  };

  useEffect(() => {
    const handleHighlightInput = () => {
      console.log('Hero: highlightHeroInput event received!'); // Log when event is received
      if (emailInputRef.current) {
        emailInputRef.current.focus();
        emailInputRef.current.classList.add(styles.highlightInput);

        if (highlightTimeoutRef.current) {
          clearTimeout(highlightTimeoutRef.current);
        }

        highlightTimeoutRef.current = setTimeout(() => {
          if (emailInputRef.current) {
            emailInputRef.current.classList.remove(styles.highlightInput);
          }
          console.log('Hero: Highlight removed.'); // Log when highlight is removed
        }, 2000); // Highlight for 2 seconds
      } else {
        console.log('Hero: emailInputRef.current is null when event received.'); // Log if ref is null
      }
    };

    window.addEventListener('highlightHeroInput', handleHighlightInput);

    return () => {
      window.removeEventListener('highlightHeroInput', handleHighlightInput);
      if (highlightTimeoutRef.current) {
        clearTimeout(highlightTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.heroContainer}>
      <div className={styles.leftColumn}>
        <h1 className={styles.headline}>
          YOU DON’T NEED MORE WILLPOWER. <br />YOU NEED AN <span className={styles.highlight}>ICON.</span>
        </h1>
        <p className={styles.subheadline}>
          Eat better. Recover Faster. <span className={styles.bold}>Train Smarter.</span>
          <br />
          <br />
          Your Icon tracks it all - powered by real coaches, available anytime.
        </p>
        <form className={styles.signupForm} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter email address..."
            className={styles.emailInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            ref={emailInputRef}
          />
          <button type="submit" className={styles.signupButton} disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
        {message && <p className={styles.message}>{message}</p>}
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.imageWrapper}>
          <div className={`${styles.phoneImageContainer} ${styles.phoneImage1}`}>
            <Image
              src={hero}
              alt="App screenshot on a phone"
              width={400}
              height={560}
              className={styles.phoneImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
