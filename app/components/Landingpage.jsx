import React from 'react'
import Image from 'next/image';
import styles from "../styles/Landingpage.module.css";
import Link from 'next/link';
function Landingpage() {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.contianer}>
      <div className={styles.image}>
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
          src="/images/watsap.png"
          alt="facebook"
          width={30}
          height={30}
          // layout="fill" // Take up the size of the parent container
          // objectFit="cover"
        />
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
          <li>Home</li>
          <li>About</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </nav>
      </div>
      <div className={styles.imagecontainer}>
      <Image
          src="/images/b2.jpg"
          alt="watsap"
          width={1000}
          height={10}
          // layout="fill" // Take up the size of the parent container
          // objectFit="cover"
        />
          <div className={styles.caption}>
       BOOK YOUR PHOTOGRAPHER
      </div>
        </div>
    </div>
   
  )
}

export default Landingpage
