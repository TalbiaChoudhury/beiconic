// Navbar.js

"use client";

import Link from 'next/link';
import styles from './Navbar.module.css';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import logoWithText from '../../../public/assets/images/LogoText.png';
import UserEmbeddedForm from '../Home/UserEmbeddedForm/UserEmbeddedForm';
import TrainerEmbeddedForm from '../Trainers/TrainerEmbeddedForm/TrainerEmbeddedForm';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Trainers', href: '/trainers' },
  { name: 'Vision', href: '/vision' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [underlineStyle, setUnderlineStyle] = useState({});
  const navItemsRef = useRef({});

  // State for form visibility
  const [isUserFormVisible, setIsUserFormVisible] = useState(false);
  const [isTrainerFormVisible, setIsTrainerFormVisible] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (navItemsRef.current[pathname]) {
      const { offsetLeft, offsetWidth } = navItemsRef.current[pathname];
      setUnderlineStyle({
        width: offsetWidth,
        left: offsetLeft,
      });
    }
  }, [pathname]);

  // Determine button text and href based on the current path
  const isTrainersPage = pathname === '/trainers';
  const buttonText = isTrainersPage ? 'Apply Now' : 'Sign Up';

  // Handle click for the "Sign Up" / "Apply Now" button
  const handleButtonClick = (e) => {
    e.preventDefault();
    
    if (pathname === '/trainers') {
      setIsTrainerFormVisible(true);
    } else if (pathname === '/vision') {
        window.dispatchEvent(new Event('showCarouselSlide10'));
    } else {
        // Default to user form for home page or others
        setIsUserFormVisible(true);
    }
    closeMenu();
  };

  // Define common props for the button to reduce redundancy
  const commonButtonProps = {
    className: `${styles.button} ${isTrainersPage ? styles.trainersButtonColor : ''}`,
    onClick: handleButtonClick,
    type: "button",
  };

  return (
    <>
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
              {navLinks.map(link => (
                <li 
                  key={link.name}
                  ref={el => (navItemsRef.current[link.href] = el)}
                >
                  <Link 
                    href={link.href} 
                    className={pathname === link.href ? styles.active : ''}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <div className={styles.underline} style={underlineStyle} />
            </ul>
          </div>
          
          {/* Part 3: Contact button for desktop (will be hidden on mobile) */}
          <div className={`${styles.navSection} ${styles.navRight}`}>
            <button {...commonButtonProps}>
              {buttonText}
            </button>
          </div>

          {/* --- NEW: Wrapper for Mobile Controls --- */}
          <div className={styles.mobileControls}>
            <button {...commonButtonProps}>
              {buttonText}
            </button>
            <div 
              className={styles.hamburger} 
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
            </div>
          </div>

          {/* This list now serves as the mobile menu overlay */}
          <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
            {navLinks.map(link => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  onClick={closeMenu} 
                  className={pathname === link.href ? styles.activeMobileLink : ''}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* User Form Modal */}
      {isUserFormVisible && (
        <div className={styles.overlay} onClick={() => setIsUserFormVisible(false)}>
          <div className={styles.formPopup} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setIsUserFormVisible(false)}>
              &times;
            </button>
            <UserEmbeddedForm />
          </div>
        </div>
      )}

      {/* Trainer Form Modal */}
      {isTrainerFormVisible && (
        <div className={styles.overlay} onClick={() => setIsTrainerFormVisible(false)}>
          <div className={styles.formPopup} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setIsTrainerFormVisible(false)}>
              &times;
            </button>
            <TrainerEmbeddedForm />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

