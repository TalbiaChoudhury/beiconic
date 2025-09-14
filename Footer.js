"use client";

import React, { useState } from 'react';
import styles from './Footer.module.css';
import UserEmbeddedForm from '../UserEmbeddedForm/UserEmbeddedForm';

const Footer = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <>
      <footer className={styles.footerContainer}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.title}>Be The First To Experience Icon</h2>
          <p className={styles.subtitle}>
            Join our waitlist to get early access and exclusive updates.
          </p>
          <p className={styles.tagline}>
            Your fitness revolution is just one step away.
          </p>
          
          <button 
            type="button" 
            className={styles.button} 
            onClick={() => setIsFormVisible(true)}
          >
            Sign Up
          </button>
        </div>
      </footer>

      {isFormVisible && (
        <div className={styles.overlay} onClick={() => setIsFormVisible(false)}>
          <div className={styles.formPopup} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setIsFormVisible(false)}>
              &times;
            </button>
            <UserEmbeddedForm />
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
