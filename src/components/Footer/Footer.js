"use client"; // Add this directive to mark it as a Client Component

import React from 'react';
import styles from './Footer.module.css';

/**
 * A responsive footer component that prompts users to sign up for a waitlist.
 * It includes a title, descriptive text, and an email submission form.
 */
const Footer = () => {
  // A simple handler for form submission to prevent page reload.
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // You can add your form submission logic here, e.g., sending the email to a server.
    console.log('Form submitted!');
  };

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Be The First To Experience Icon</h2>
        <p className={styles.subtitle}>
          Join our waitlist to get early access and exclusive updates.
        </p>
        <p className={styles.tagline}>
          Your fitness revolution is just one step away.
        </p>
        
        {/* Email signup form */}
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <input
            type="email"
            placeholder="Enter email address..."
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            Sign Up
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
