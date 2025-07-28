import React from 'react';
import styles from './Pricing.module.css'; // Import CSS module

const Pricing = () => {
  return (
    <section className={styles.pricingSection}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <h2 className={styles.header}>Find the Perfect Plan</h2>
          <p className={styles.subHeader}>
            Choose the plan that&apos;s right for you and unlock your full potential.
          </p>
        </div>
        <div className={styles.pricingGrid}>
          {/* Free Tier */}
          <div className={`${styles.pricingCard} ${styles.free}`}>
            <div className={styles.cardHeader}>
              <h3>Free</h3>
              <p className={styles.price}>
                $0<span>/month</span>
              </p>
            </div>
            <ul className={styles.featureList}>
              <li>Access to basic workout plans</li>
              <li>Community support</li>
              <li>Track your progress</li>
            </ul>
            <button className={`${styles.button} ${styles.secondary}`}>
              Get Started
            </button>
          </div>

          {/* Gold Tier */}
          <div className={`${styles.pricingCard} ${styles.gold}`}>
            <div className={styles.cardHeader}>
              <h3>Gold</h3>
              <p className={styles.price}>
                $49<span>/month</span>
              </p>
            </div>
            <ul className={styles.featureList}>
              <li>Everything in Free, plus:</li>
              <li>Personalised AI coaching</li>
              <li>Advanced progress analytics</li>
              <li>Priority support</li>
            </ul>
            <button className={`${styles.button} ${styles.primary}`}>
              Choose Gold
            </button>
          </div>

          {/* Platinum Tier */}
          <div className={`${styles.pricingCard} ${styles.platinum}`}>
            <div className={styles.cardHeader}>
              <h3>Platinum</h3>
              <p className={styles.price}>
                $99<span>/month</span>
              </p>
            </div>
            <ul className={styles.featureList}>
              <li>Everything in Gold, plus:</li>
              <li>Direct access to a human coach</li>
              <li>Customised nutrition plans</li>
              <li>Exclusive content and events</li>
            </ul>
            <button className={`${styles.button} ${styles.secondary}`}>
              Choose Platinum
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;