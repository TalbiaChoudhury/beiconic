import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import hero from '../../../public/assets/images/Hero.png';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.herocontainer}>
        <div className={styles.heroleft}>
          <h1 className={styles.heroheadline}>
            YOU DON&apos;T NEED MORE WILLPOWER. YOU NEED AN <span className={styles.highlight1}>ICON.</span>
          </h1>
          <p className={styles.herodescription}>
            Eat better. Recover Faster. <span className={styles.highlight2}>Train Smarter.</span> Your Icon tracks it all - powered by real coaches, available anytime
          </p>
          <form className={styles.heroform} onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter email address..."
              className={styles.heroinput}
            />
            <button type="submit" className={styles.herobutton}>
              Sign Up
            </button>
          </form>
        </div>
        <div className={styles.heroright}>
          <div className={styles.imagecontainer}>
            <Image
              src={hero} 
              alt="App placeholder"
              className={styles.image}
              width={700}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
}