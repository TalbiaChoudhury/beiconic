import React from 'react';
import styles from './Footer.module.css'; // Import CSS module
import { FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social icons
import { FiArrowRight } from 'react-icons/fi'; // Import arrow icon
import Image from 'next/image'; // Import Next.js Image component
import Link from 'next/link'; // Import Next.js Link component                    
import logo from '../../../public/assets/images/logo.png'; // Import logo image 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top section of the footer */}
        <div className={styles.footerTop}>
          <div className={styles.contactInfo}>
            {/* START: Added a wrapper div here */}
            <div className={styles.logoContainer}>
              <Image src={logo} alt="Logo" width={50} height={50} />
              <div className={styles.logo}>Icon</div>
            </div>
            {/* END: Added a wrapper div here */}
            <a href="tel:">Number</a>
            <a href="mailto:">Email</a>
          </div>

          <div className={styles.quickLinks}>
            <h3>Quick Links</h3>
            <div className={styles.linksGrid}>
              <Link href="/">Home</Link>
              <Link href="/">About us</Link>
              <Link href="/">Contact us</Link>
            </div>
          </div>

          <div className={styles.subscribe}>
            <h3>Subscribe</h3>
            <form className={styles.subscribeForm}>
              <input type="email" placeholder="Get product updates" />
              <button type="submit">
                <FiArrowRight />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom section of the footer */}
        <div className={styles.footerBottom}>
          <div className={styles.socialIcons}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
          <div className={styles.productOf}>
            A product of <span className={styles.smallLogo}>Icon</span>
          </div>
          <div className={styles.copyright}>
            © 2025 Icon. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;