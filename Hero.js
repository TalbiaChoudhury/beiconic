"use client";

import styles from "./Hero.module.css";
import SequentialTyper from "../SequentialTyper/SequentialTyper"; // Adjust the import path if needed

export default function Hero() {
  // Define all your animation lines in one simple array
  const animationLines = [
    "Access elite AI fitness trainers, 24/7 in your pocket",
    "Get personalised guidance and motivation"
    // Add as many new lines as you want here!
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.header}>Be Iconic.</h1>

        <ol className={styles.mainOl}>
          {/* Use the modular component here */}
          <SequentialTyper lines={animationLines} />
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Onboard now
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Contact us
          </a>
        </div>
      </main>
    </div>
  );
}