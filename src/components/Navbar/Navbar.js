// Navbar.js

"use client"; // This makes it a client component

import Link from 'next/link';
import styles from './Navbar.module.css';
import Image from 'next/image';
import { useState } from 'react'; // Import useState
import logo from '../../../public/assets/images/logo.png'; // Import the logo image

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src={logo}
            alt="Logo"
            width={50}
            height={50}
          />
          Icon
        </Link>
        <div 
          className={styles.hamburger} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)}>About Us</Link>
          </li>
          <li>
            {/* Apply the button class to the Contact Us link */}
            <Link href="/" className={styles.button} onClick={() => setMenuOpen(false)}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;