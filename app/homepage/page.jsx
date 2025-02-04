"use client"
import Head from 'next/head';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import styles from "../styles/home.module.css";
import Footer from "../components/Footer.jsx";
import Link from 'next/link';






export default function Homepage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // State for current image index
  const [previewImage, setPreviewImage] = useState(null);


  const images = [
    { src: '/images/p1.jpeg', alt: 'Drone' },
    { src: '/images/p2.jpg', alt: 'Elephant' },
    { src: '/images/c3.jpg', alt: 'Cat' },
    { src: '/images/c2.jpg', alt: 'Dog' },
    { src: '/images/pp.jpg', alt: 'Portrait' },
    { src: '/images/p4.jpg', alt: 'Dance' }
  ];
  const openPreview = (imgSrc) => {
    setPreviewImage(imgSrc);
  };

  const closePreview = () => {
    setPreviewImage(null);
  };
  // Toggle menu for responsive navbar
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Auto-slider for hero section images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <>
      <Head>
        <title>PhotoBridge Digital Place</title>
        <meta name="description" content="Your go-to platform for finding photographers." />
      </Head>

      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image src="/images/val1.jpg" alt="Aperture Logo" border-radius="50%" width={50} height={50} radius="20%" />
          <span>PhotoBridge</span>
        </div>
        <button className={styles.menuButton} onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ''}`}>
          <Link href='/Landingpage'>Home</Link>
          <li>Images</li>
          <li>Videos</li>
          <li>Shop</li>
          <li>Seller Dashboard</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        className={styles.hero}
        style={{
          backgroundImage: `url(${images[currentIndex].src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 0.5s ease-in-out',
        }}
      >
        <h1>PhotoBridge A place to find professional photographers</h1>
        <p>Your go-to platform for finding photographers.</p>
        <div className={styles.features}>
          <div>  <Link href='/allUsersDashboard'>
           <button className={styles.joinButton}>Book a photogrpher</button>
       </Link></div>
         
          <div>
          <Link href='/register'>
           <button className={styles.joinButton}>Am a photogrpher</button>
       </Link>
</div>
          <div> <Link href='/login'>
           <button className={styles.joinButton}>Login</button>
       </Link></div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className={styles.gallery}>
        {images.map((img, index) => (
          <div key={index} className={styles.card} onClick={() => openPreview(img.src)}>
            <Image src={img.src} alt={img.alt} width={400} height={300} className={styles.image} />
          </div>
        ))}
      </section>

      {/* Lightbox Preview */}
      {previewImage && (
        <div className={styles.lightbox} onClick={closePreview}>
          <div className={styles.lightboxContent}>
            <Image src={previewImage} alt="Preview" width={800} height={600} />
            <button className={styles.closeButton} onClick={closePreview}>
              &times;
            </button>
          </div>
        </div>
      )}
   
      <Footer />
    </>
  );
}
