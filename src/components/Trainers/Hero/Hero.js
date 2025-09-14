import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import hero from '../../../../public/assets/images/Trainers/Trainer_Images/Trainer_Hero.png';
import TrainerEmbeddedForm from '../TrainerEmbeddedForm/TrainerEmbeddedForm';

const Hero = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.leftColumn}>
          <h1 className={styles.headline}>
            COACH <span className={styles.highlight}>MORE. </span> EARN <span className={styles.highlight}>MORE. </span> STRESS <span className={styles.highlight}>LESS. </span>
          </h1>
          <p className={styles.subheadline}>
            Icon is building a new kind of fitness platform - with digital trainers, designed by <span className={styles.bold}>real athletes</span> like you.
            <br />
            <br />
            Launch your own Icon, and reach people everywhere, all at once.
          </p>
          <p className={styles.subheadline}>
            <span className={styles.bold}>Apply to join our roster of Founding Icons now!</span>
          </p>
          <div className={styles.signupForm}>
            <button type="button" className={styles.signupButton} onClick={() => setIsFormVisible(true)}>
              Apply Now
            </button>
          </div>
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
            <TrainerEmbeddedForm />
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;

