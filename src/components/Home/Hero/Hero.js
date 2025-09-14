import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import hero from '../../../../public/assets/images/Home/Hero/Hero.png'; // Assuming this is correct for the Home page Hero
import UserEmbeddedForm from '../UserEmbeddedForm/UserEmbeddedForm';

const Hero = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <>
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
          <button
            type="button"
            className={styles.signupButton}
            onClick={() => setIsFormVisible(true)}
          >
            Sign Up
          </button>
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

      {isFormVisible && (
        <div className={styles.overlay} onClick={() => setIsFormVisible(false)}>
          <div className={styles.formPopup} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setIsFormVisible(false)}>
              &times;
            </button>
            <UserEmbeddedForm />
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;

