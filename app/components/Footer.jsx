// components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
        <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
        <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
      </div>
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} suprem. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;