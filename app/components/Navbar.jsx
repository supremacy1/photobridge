 "use client"
import Image from "next/image";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from "../styles/nav.module.css";
import Link from "next/link";


const NavBar = () => {
  return (
    <>
    <div className={styles.maincontainer}>
      <div className={styles.contianer}>
      {/* <div className={styles.image}>
        <Image
          src="/images/x.jpg"
          alt="x"
          width={30}
          height={30}
          // layout="fill" // Take up the size of the parent container
          // objectFit="cover"
        />
          <Image
          src="/images/watsap.png"
          alt="watsap"
          width={30}
          height={30}
          // layout="fill" // Take up the size of the parent container
          // objectFit="cover"
        />
          <Image
          src="/images/fsf.jpg"
          alt="facebook"
          width={30}
          height={30}
          // layout="fill" // Take up the size of the parent container
          // objectFit="cover"
        />
        </div> */}
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
        <div className={styles.subnav}>
          <h1>07026214314</h1>
          <h1>Email: andrewohej@gmail.com</h1>
        </div>
        </div>
        <div className={styles.navbars}>
      <h1>Photographer Word</h1>
      <nav className={styles.nav1}>
        <ul>
          <li>
            Home
            </li>

          <li>About</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </nav>
      </div>
      </div>
    
    </>
  );
};

export default NavBar;