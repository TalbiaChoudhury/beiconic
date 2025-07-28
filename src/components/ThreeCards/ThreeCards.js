"use client";

import React from 'react';
import styles from './ThreeCards.module.css';

// Data for the cards, making it easy to update content
const cardData = [
  {
    className: 'card1',
    title: ['THE ', 'NEWCOMER'],
    tagline: 'Starting Fresh?',
    description: 'No gym anxiety here. Your icon keeps it chill, fun, and beginner-friendly — with workouts that don’t feel like work.',
  },
  {
    className: 'card2',
    title: ['THE ', 'HUSTLER'],
    tagline: 'Booked and busy?',
    description: 'Meet your personal hype bot. Fast, focused workouts that slide between meetings, classes, or late-night scrolls.',
  },
  {
    className: 'card3',
    title: ['THE ', 'ACHIEVER'],
    tagline: 'All in?',
    description: 'Train smart, not just hard. Your Icon brings you stats, structure, and savage-level support to help you level up.',
  },
];

const ThreeCards = () => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          BUILT FOR <span className={styles.highlight}>EVERYONE</span>
        </h2>
        <p className={styles.subtitle}>
          From Day 1 to Day 100 goals, your <span className={styles.highlight}>icon adapts to your fitness</span> and your world – not the other way around
        </p>
      </div>

      {/* Grid of Cards */}
      <div className={styles.cardsGrid}>
        {cardData.map((card, index) => (
          <div 
            key={index} 
            className={`${styles.card} ${styles[card.className]}`}
            onMouseMove={handleMouseMove}
          >
            <h3 className={styles.cardTitle}>
              {card.title[0]}<span className={styles.highlight}>{card.title[1]}</span>
            </h3>
            <p className={styles.cardTagline}>{card.tagline}</p>
            <p className={styles.cardDescription}>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeCards;