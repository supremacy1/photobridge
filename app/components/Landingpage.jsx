// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { useRouter } from 'next/router';
// import styles from "../styles/Landingpage.module.css";
// import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import Footer from "../components/Footer.jsx"



// function Landingpage() {
//   const [data, setData] = useState([]);

//   const [imageIndex, setImageIndex] = useState(0);
//   const images = ['/images/b1.jpg', '/images/b2.jpg', '/images/b4.jpg']; // Add your image paths here
//   const intervalTime = 7000; // Time interval in milliseconds
//   // const router = useRouter();
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setImageIndex(prevIndex => (prevIndex + 1) % images.length);
//     }, intervalTime);

//     return () => clearInterval(interval);
//     async function fetchData() {
//       try {
//         const response = await fetch('/api/data');
//         const result = await response.json();
//         setData(result);
//         console.log(result); // This logs the fetched data
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }
    
//     fetchData();
//   }, []);
//   return (
//     <div className={styles.maincontainer}>
//         <div className={styles.log}>
//       <Link href='/login'>
//       <button>Login</button>
//       </Link>
     
//       </div>
//       <div className={styles.imagecontainer}>
//         <div className={styles.imagecover}>
//           <img
//         src={images[imageIndex]}
//         alt={`Image ${imageIndex + 1}`}
//         width={1000}
//         height={10}
//       />
//         </div>
//           <div className={styles.caption}>
//        <h1 className={styles.text}>BOOK YOUR PHOTOGRAPHER</h1>
       
//        <div className={styles.buttonGroup}>
//         <Link href='/register' >
//       <button className={styles.button}>Register</button>
//       </Link>
//       <Link href='/allUsersDashboard' >
//       <button className={styles.button}>Book a Photographer</button>
//       </Link>
//     </div>
//       </div>
//         </div>
//     <div className={styles.boxes}>
//       <div className={styles.box1}>
//         <h1>Photographer</h1>
//         <p>Are you a professional Photographer / Videographer ? Register and get contacted by clients for their occasion</p>
//       </div>
//       <div className={styles.box2}>
//         <h1>Clients</h1>
//         <p>Are you looking to add color to your occassions? Contact any of our professional Photographer</p>
//       </div>
//     </div>
//     <div>
//       {/* <h1>Data from API</h1> */}
//       <ul>
//         {data.map(item => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//       <div className={styles.footercontainer}>
//          <div className={styles.header}>
//        <h1>Book one of our professional Photographer that will add color to your occasion</h1>
//        </div>
//        <div className={styles.line}>
//          <h1>We are Realiabe and Proffissional </h1>
//        </div>
//     </div>
//     </div>
//     <Footer />
//     </div>
   
//   )
// }

// export default Landingpage

// // CREATE TABLE `photousers`.`users` (`user_id` INT(100) NULL AUTO_INCREMENT , `fullname` VARCHAR(100) NOT NULL , `studio` VARCHAR(100) NOT NULL , `address` INT(45) NOT NULL , `phone` INT(100) NOT NULL , `email` INT(100) NOT NULL , `password` VARCHAR(1000) NOT NULL , PRIMARY KEY (`user_id`)) ENGINE = InnoDB;
// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import styles from "../styles/Landingpage.module.css";
// import Footer from "../components/Footer.jsx";


// function Landingpage() {
//   const [data, setData] = useState([]);
//   const [imageIndex, setImageIndex] = useState(0);
//   const images = ['/images/b1.jpg', '/images/b2.jpg', '/images/b4.jpg'];
//   const intervalTime = 7000;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setImageIndex(prevIndex => (prevIndex + 1) % images.length);
//     }, intervalTime);

//     return () => clearInterval(interval);

//     async function fetchData() {
//       try {
//         const response = await fetch('/api/data');
//         const result = await response.json();
//         setData(result);
//         console.log(result);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }

//     fetchData();
//   }, []);

//   return (
//     <div className={styles.maincontainer}>
//       <header className={styles.header}>
//         <div className={styles.logo}>
//           <h1>PHOTO WORLD</h1>
//         </div>
//         <nav className={styles.nav}>
//           <Link href='/about'>About</Link>
//           <Link href='/blog'>Blog</Link>
//           <Link href='/faq'>FAQ</Link>
//           <Link href='/login'>Sign In</Link>
//           <Link href='/register'>
//             <button className={styles.getStartedButton}>Get Started</button>
//           </Link>
//         </nav>
//       </header>

//       <section className={styles.heroSection}>
//         <div className={styles.heroContent}>
//           <h1>FIND YOUR PROFFESSIONAL PHOTOGRAPHER HERE</h1>
//           <Link href='/allUsersDashboard'>
//             <button className={styles.getStartedButton1}>Book A Photographer</button>
//           </Link>
//           <div className={styles.asSeenOn}>
//             <p>BOOK FOR YOUR:</p>
//             <div className={styles.logos}>
//               <span>WEDDINGs:</span>
//               <span>BIRTHDAY:</span>
//               <span>DEDICATION:</span>
//               <span>EVENTS</span>
//             </div>
//           </div>
//         </div>
       
//         <div className={styles.heroImage}>
//           <img
//             src={images[imageIndex]}
//             alt={`Image ${imageIndex + 1}`}
//             className={styles.image}
//           />
//           <div className={styles.imageOverlay}></div>
//         </div>
//       </section>

//       <section className={styles.infoSection}>
//         <div className={styles.infoBox}>
//           <p>PROFESSIONALISM</p>
//         </div>
//         <div className={styles.infoBox}>
//           <p>AFFORDABILITY</p>
//         </div>
//         <div className={styles.infoBox}>
//           <p>TRUSTED</p>
//         </div>
//         <Link href='/register'>
//           <button className={styles.joinButton}>Join the Community</button>
//         </Link>
//       </section>

//       <section className={styles.statsSection}>
//         <p>PHOTOGRAPHER PRIDES</p>
//       </section>

//       <Footer />
//     </div>
//   );
// }

// export default Landingpage;
// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import styles from "../styles/Landingpage.module.css";
import Footer from "../components/Footer.jsx";
import Link from 'next/link';
export default function Home() {
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
  }, []);

  return (
    <>
      <Head>
        <title>Aperture Digital Marketplace</title>
        <meta name="description" content="A digital marketplace for stunning photos and videos." />
      </Head>

      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image src="/images/SUB.jpg" alt="Aperture Logo" width={50} height={50} />
          <span>Aperture</span>
        </div>
        <button className={styles.menuButton} onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ''}`}>
          <li>Home</li>
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
        <h1>Aperture A place to find professional photographers</h1>
        <p></p>
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
