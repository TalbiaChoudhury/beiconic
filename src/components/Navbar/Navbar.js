// Navbar.js

"use client";

import Link from 'next/link';
import styles from './Navbar.module.css';
import Image from 'next/image';
import { useState } from 'react';
import logoWithText from '../../../public/assets/images/LogoText.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Part 1: Logo */}
        <div className={styles.navSection}>
          <Link href="/" className={styles.logo}>
            <Image
              src={logoWithText}
              alt="Logo"
              width={100}
              height={50}
            />
          </Link>
        </div>

        {/* Part 2: Centered links for desktop */}
        <div className={`${styles.navSection} ${styles.navCenter}`}>
          <ul className={styles.desktopLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/trainers">Trainers</Link></li>
            <li><Link href="/">Vision</Link></li>
            <li><Link href="/">About</Link></li>
          </ul>
        </div>
        
        {/* Part 3: Contact button for desktop (will be hidden on mobile) */}
        <div className={`${styles.navSection} ${styles.navRight}`}>
            <Link href="/" className={styles.button}>Sign Up</Link>
        </div>

        {/* --- NEW: Wrapper for Mobile Controls --- */}
        <div className={styles.mobileControls}>
          <Link href="/" className={styles.button}>Sign Up</Link>
          <div 
            className={styles.hamburger} 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
        </div>

        {/* This list now serves as the mobile menu overlay (Sign Up button removed) */}
        <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
          <li>
            <Link href="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link href="/" onClick={closeMenu}>About</Link>
          </li>
          <li>
            <Link href="/" onClick={closeMenu}>Features</Link>
          </li>
          <li>
            <Link href="/" onClick={closeMenu}>Pricing</Link>
          </li>
          {/* The Sign Up button is no longer here */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;