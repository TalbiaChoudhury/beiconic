import React from 'react';
import styles from './VisionComponent.module.css';

const VisionComponent = () => {
  return (
    <div className={styles.visionContainer}>
      <div className={styles.section}>
        <h2 className={styles.header}>Why We Built Icon</h2>
        <h3 className={styles.subheader}>The Problem</h3>
        <p className={styles.text}>
          I’ve been coaching for over a decade. I’ve lived the hustle - and I know how brutal this industry can be, for everyone involved.
        </p>
        <p className={styles.text}>
          😖 Personal trainers are exploited by gyms to work unpaid hours, forced to burnout just to make ends meet.
        </p>
        <p className={styles.text}>
          💸 In response <span className={styles.highlight}>clients are stuck with high prices for limited access.</span>
        </p>
        <p className={styles.text}>
          I had to spend <span className={styles.highlight}>over £50,000</span> to build my own personal training studio just to coach my clients without limits.
        </p>
        <p className={styles.text}>
          <span className={styles.bold}>It shouldn’t have to be that way.</span>
        </p>
        <p className={styles.text}>
          I always felt there had to be a better way.
        </p>
        <p className={styles.text}>
          ⚡ Which is why I started <span className={styles.bold}>Icon.</span>
        </p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.subheader}>The Solution: Icons</h3>
        <p className={styles.text}>
          Icon is a platform where real trainers and athletes fine-tune their own AI-powered avatars - called <span className={styles.bold}>Icons.</span>
        </p>
        <p className={styles.text}>
          These Icons coach clients 24/7 using the <span className={styles.highlight}>exact style, methods, approach, communication, and voice</span> of the trainer they are based on.
        </p>
        <p className={styles.text}>
          The result: <span className={styles.bold}>A scalable, always-on personal trainer</span> - available to thousands without losing the personal touch.
        </p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.subheader}>Why Now</h3>
        <p className={styles.text}>
          Three trends collide to make Icon possible:
        </p>
        <ul className={styles.list}>
          <li>🧠 AI is finally robust enough to coach with context and nuance</li>
          <li>📱 Consumers expect on-demand, personalised experiences</li>
          <li>🏋🏽‍♀️ There is more demand for health and fitness than ever, but access hasn’t caught up</li>
        </ul>
        <p className={styles.text}>
          We’re building a solution that blends all three - democratising elite coaching while <span className={styles.highlight}>unlocking new income models for experts</span> and <span className={styles.highlight}>increasing access to expertise for clients.</span>
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.header}>What Makes Icon Different?</h2>
        <h3 className={styles.subheader}>🤝 Human + AI Harmony</h3>
        <p className={styles.text}>
          We don’t believe AI should replace real support. That’s why every Icon is <span className={styles.bold}>moderated by its creator</span>, ensuring it reflects their philosophy and stays true to their values.
        </p>

        <h3 className={styles.subheader}>💰 A Win-Win Business Model</h3>
        <p className={`${styles.text} ${styles.bold}`}>For Trainers:</p>
        <ul className={styles.list}>
          <li>More income with less effort</li>
          <li>Support clients all around the world</li>
          <li>60/40 revenue split in their favour</li>
          <li>Future white-label income stream</li>
        </ul>

        <p className={`${styles.text} ${styles.bold}`}>For Clients:</p>
        <ul className={styles.list}>
          <li>Elite coaching at a fraction of the price</li>
          <li>24/7 access</li>
          <li>No language barriers</li>
          <li>No scheduling, no awkward gaps - just answers and action</li>
        </ul>

        <h3 className={styles.subheader}>🌎 Built to Scale</h3>
        <p className={styles.text}>
          Icons get smarter and more accurate over time. One coach can now support thousands of people - without burning out or going broke.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.header}>The Opportunity</h2>
        <p className={styles.text}>
          The fitness and wellness market is worth over <span className={styles.highlight}>$4.5 trillion.</span>
        </p>
        <p className={styles.text}>
          Yet, most of it is built on outdated, linear models: 1-on-1 sessions, overpriced sessions, generic content, and slow delivery.
        </p>
        <p className={styles.text}>
          We’re creating a new category: <span className={styles.bold}>scalable coaching powered by AI, rooted in human expertise.</span>
        </p>
        <p className={styles.text}>
          It’s repeatable, defensible, and designed for everyone.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.header}>Our Promise</h2>
        <p className={styles.text}>
          <span className={styles.bold}>We are a people-first company.</span>
        </p>
        <p className={styles.text}>
          Here are some of our commitments:
        </p>
        <p className={styles.text}>
          1️⃣ <span className={styles.bold}>Low costs for clients</span> - Monthly access to an Icon will cost <span className={styles.highlight}>less than one PT session.</span>
        </p>
        <p className={styles.text}>
          2️⃣ <span className={styles.bold}>Low risk for PTs</span> - Every trainer will profit with <span className={styles.highlight}>just two clients.</span>
        </p>
        <p className={styles.text}>
          3️⃣ <span className={styles.bold}>Fitness for everyone</span> - Fitness shouldn’t be gatekept. That’s why we vow to keep access to our holistic fitness tracker <span className={styles.highlight}>free for everyone, always.</span>
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.header}>Our Mission</h2>
        <p className={styles.text}>
          To scale fitness training, so it is <span className={styles.highlight}>accessible</span>, <span className={styles.highlight}>personal</span>, and <span className={styles.highlight}>sustainable</span> for everyone.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.header}>Want to Get Involved?</h2>
        <p className={styles.text}>
          Whether you’re an investor, collaborator, or early adopter - we’d love to connect.
        </p>
        <p className={`${styles.text} ${styles.bold}`}>
          <a href="mailto:team@icon.com" className={styles.link}>👉🏼 Reach out to the team.</a>
        </p>
      </div>
    </div>
  );
};

export default VisionComponent;