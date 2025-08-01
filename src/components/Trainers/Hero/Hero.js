import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import hero from '../../../../public/assets/images/Home/Hero/Hero.png'

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.leftColumn}>
        <h1 className={styles.headline}>
          YOU DON’T NEED MORE WILLPOWER. <br></br>YOU NEED AN <span className={styles.highlight}>ICON.</span>
        </h1>
        <p className={styles.subheadline}>
          Eat better. Recover Faster. <span className={styles.bold}>Train Smarter.</span> Your Icon tracks it all - powered by real coaches, available anytime
        </p>
        <form className={styles.signupForm}>
          <input
            type="email"
            placeholder="Enter email address..."
            className={styles.emailInput}
          />
          <button type="submit" className={styles.signupButton}>
            Sign Up
          </button>
        </form>
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
