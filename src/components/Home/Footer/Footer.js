"use client";

import React, { useState } from 'react';
import styles from './Footer.module.css';


const Footer = () => {
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
      const res = await fetch('/api/userSubscribe', {
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
    <footer className={styles.footerContainer}>
      <div className={styles.contentWrapper}> {/* Reverted to original contentWrapper */}
        <h2 className={styles.title}>Be The First To Experience Icon</h2>
        <p className={styles.subtitle}>
          Join our waitlist to get early access and exclusive updates.
        </p>
        <p className={styles.tagline}>
          Your fitness revolution is just one step away.
        </p>
        
        {/* Email signup form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter email address..."
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required // Make email input required
          />
          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>

        {message && <p className={styles.message}><br></br>{message}</p>}
      </div>
    </footer>
  );
};

export default Footer;
