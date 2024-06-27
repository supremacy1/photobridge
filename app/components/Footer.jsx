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
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

// import React from 'react'
// import styles from "../styles/footer.module.css";
// import Link from 'next/link';

// function Footer() {
//   return (
//     <div className={styles.footercontainer}>
//         <div className={styles.header}>
//       <h1>Book one of our professional Photographer that will add color to your occasion</h1>
//       </div>
//       <div className={styles.line}>
//         <h1>We are Realiabe and Proffissional </h1>
//       </div>
//       <div className={styles.footerimage}>
//         <div className={styles.footimg}>
//         <img 
//          src="/images/x.jpg"
//          alt="x"
//          width={30}
//          height={30}
//          className='img'
//          />
//          <img 
//          src="/images/x.jpg"
//          alt="x"
//          width={30}
//          height={30}
//          className='img'
//          />
//          <img 
//          src="/images/x.jpg"
//          alt="x"
//          width={30}
//          height={30}
//          className='img'
//          />
//          </div>
//          <div className={styles.footernave}>
//          <nav className={styles.footnav1}>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           {/* <li><Link to='/Gallery'>Gallery</Link></li> */}
//           <li>Contact</li>
//           {/* <Link href="/Got">
//         About Page
//       </Link> */}
//         </ul>
//       </nav>
//     </div>
//      <div className={styles.grid}>

//      </div>
//       </div>
//     </div>
//   )
// }

// export default Footer
