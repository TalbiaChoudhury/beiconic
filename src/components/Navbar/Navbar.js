// Navbar.js

"use client"; // This makes it a client component

import Link from 'next/link';
import styles from './Navbar.module.css';
import Image from 'next/image';
import { useState } from 'react'; // Import useState
import logoWithText from '../../../public/assets/images/logo with text.png'; // Import the logo image

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to close the menu, useful for mobile view
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
            <li><Link href="/">Trainers</Link></li>
            <li><Link href="/">Vision</Link></li>
            <li><Link href="/">About us</Link></li>
          </ul>
        </div>
        
        {/* Part 3: Contact button for desktop */}
        <div className={`${styles.navSection} ${styles.navRight}`}>
            <Link href="/" className={styles.button}>Sign Up</Link>
        </div>

        {/* Hamburger for mobile */}
        <div 
          className={styles.hamburger} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>

        {/* This list now serves as the mobile menu overlay */}
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
          <li>
            {/* The button is a regular list item in the mobile menu */}
            <Link href="/" className={styles.button} onClick={closeMenu}>Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
