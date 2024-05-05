import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from "../styles/Landingpage.module.css";
import Link from 'next/link';
import Footer from "../components/Footer.jsx"


function Landingpage() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = ['/images/b1.jpg', '/images/b2.jpg', '/images/b3.jfif']; // Add your image paths here
  const intervalTime = 5000; // Time interval in milliseconds

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);
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
        <div className={styles.imagecover}>
        {/* <div className={styles.cover}> */}
      {/* <Image
          src="/images/b2.jpg"
          alt="watsap"
          width={1000}
          height={10}
          // layout="fill" // Take up the size of the parent container
          // objectFit="cover"
        /> */}
          <img
        src={images[imageIndex]}
        alt={`Image ${imageIndex + 1}`}
        width={1000}
        height={10}
      />
        </div>
          <div className={styles.caption}>
       <h1 className={styles.text}>BOOK YOUR PHOTOGRAPHER</h1>
       <div className={styles.buttonGroup}>
      <button className={styles.button}>Register</button>
      <button className={styles.button}>Book a Photographer</button>
    </div>
      </div>
        </div>
    <div className={styles.boxes}>
      <div className={styles.box1}>
        <h1>Photographer</h1>
        <p>Are you a professional Photographer / Videographer? Register and get contacted by clients for their occasion</p>
      </div>
      <div className={styles.box2}>
        <h1>Clients</h1>
        <p>Are you looking to add color to your occassions? Contact any of our professional Photographer</p>
      </div>
    </div>
    <Footer />
    </div>
   
  )
}

export default Landingpage
