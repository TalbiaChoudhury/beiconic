import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import hero from '../../../../public/assets/images/Home/Hero/Hero.png';

const Hero = () => {
  // State for the email input
  const [email, setEmail] = useState('');
  // State to handle loading status
  const [loading, setLoading] = useState(false);
  // State for success or error messages
  const [message, setMessage] = useState('');

  // Function to handle the form submission
  const handleSubmit = async (event) => {
    // Prevent the default form behavior
    event.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      // Send a POST request to our new API route
      const res = await fetch('/api/trainerSubscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        // Handle success
        setMessage('Success! Thank you for subscribing.');
        setEmail(''); // Clear the input field
      } else {
        // Handle errors from the API
        setMessage(data.error || 'An error occurred. Please try again.');
      }
    } catch (error) {
      // Handle network errors
      setMessage('An error occurred. Please check your connection and try again.');
      console.error('Fetch error:', error);
    }

    setLoading(false);
  };

  return (
    <div className={styles.heroContainer}>
      <div className={styles.leftColumn}>
        <h1 className={styles.headline}>
          Coach <span className={styles.highlight}>More. </span> Earn <span className={styles.highlight}>More. </span> Stress <span className={styles.highlight}>Less. </span>
        </h1>
        <p className={styles.subheadline}>
          Icon is building a new kind of fitness platform - with digital trainers, designed by <span className={styles.bold}>real athletes</span> like you. Launch your own Icon, and reach people everywhere, all at once.
        </p>
        <p className={styles.subheadline}>
          <span className={styles.bold}>Apply to join our roster of Founding Icons now!</span>
        </p>
        <form className={styles.signupForm} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter email address..."
            className={styles.emailInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required // Make email input required
          />
          <button type="submit" className={styles.signupButton} disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
        {/* Display success or error messages */}
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
