"use client";

import React from 'react';
import styles from './Pricing.module.css';

// Data for the pricing cards, making it easy to update content
const pricingCardData = [
  {
    title: 'FREE',
    tagline: 'Kickstart your journey',
    description: 'Use our world-class fitness trackers + Get daily credits to try our mascot Icon',
  },
  {
    title: 'CORE',
    tagline: 'Level up your fitness',
    description: 'Select from a range of Icons – Each created by a qualified fitness professional',
  },
  {
    title: 'PRO',
    tagline: 'Train with the best',
    description: 'Gain access to our hand-picked experts. Choose the specialist that’s right for you',
  },
];

/**
 * The Pricing component displays the different subscription plans.
 * It features interactive cards with a hover effect to scale them up and apply a shadow.
 */
const Pricing = () => {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <h2 className={styles.title}>CHOOSE YOUR PLAN</h2>
        <p className={styles.subtitle}>
          Start for free, or <span className={styles.highlight}>unlock more power</span> with our premium plans designed for every level of your fitness journey.
        </p>
      </div>

      {/* Grid of the three main pricing cards */}
      <div className={styles.cardsGrid}>
        {pricingCardData.map((card, index) => (
          <div 
            key={index} 
            className={styles.card}
            // The onMouseMove handler is no longer needed for this hover effect
          >
            {/* The content is in a separate div to ensure it sits above the pseudo-elements */}
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardTagline}>{card.tagline}</p>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Large premium card displayed below the grid */}
      <div className={styles.premiumCard}>
        <h3 className={styles.premiumTitle}>PREMIUM</h3>
        <p className={styles.premiumTagline}>Build your very own dream team</p>
        <p className={styles.premiumDescription}>
          Combine up to 3 Icons for a fully personalized, high-performance experience – All working in beautiful harmony to help you succeed
        </p>
      </div>

      {/* Footer note with additional information */}
      <p className={styles.footerNote}>
        <span className={styles.footerNoteHighlights}>* We&#39;re still finalising our pricing - </span>But here&#39;s one thing we know for sure: Fitness should be affordable. We guarantee that a monthly CORE membership - our most popular plan - will cost less than a single session with a personal trainer.
      </p>
    </div>
  );
};

export default Pricing;
