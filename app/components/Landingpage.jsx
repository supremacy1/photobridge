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
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from "../styles/Landingpage.module.css";
import Footer from "../components/Footer.jsx";


function Landingpage() {
  const [data, setData] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);
  const images = ['/images/b1.jpg', '/images/b2.jpg', '/images/b4.jpg'];
  const intervalTime = 7000;

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(interval);

    async function fetchData() {
      try {
        const response = await fetch('/api/data');
        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className={styles.maincontainer}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>PHOTO WORLD</h1>
        </div>
        <nav className={styles.nav}>
          <Link href='/about'>About</Link>
          <Link href='/blog'>Blog</Link>
          <Link href='/faq'>FAQ</Link>
          <Link href='/login'>Sign In</Link>
          <Link href='/register'>
            <button className={styles.getStartedButton}>Get Started</button>
          </Link>
        </nav>
      </header>

      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>FIND YOUR PROFFESSIONAL PHOTOGRAPHER HERE</h1>
          <Link href='/allUsersDashboard'>
            <button className={styles.getStartedButton1}>Book A Photographer</button>
          </Link>
          <div className={styles.asSeenOn}>a
            <p>BOOK FOR YOUR:</p>
            <div className={styles.logos}>
              <span>WEDDING:</span>
              <span>BIRTHDAY:</span>
              <span>DEDICATION:</span>
              <span>EVENTS</span>
            </div>
          </div>
        </div>
       
        <div className={styles.heroImage}>
          <img
            src={images[imageIndex]}
            alt={`Image ${imageIndex + 1}`}
            className={styles.image}
          />
          <div className={styles.imageOverlay}></div>
        </div>
      </section>

      <section className={styles.infoSection}>
        <div className={styles.infoBox}>
          <p>PROFESSIONALISM</p>
        </div>
        <div className={styles.infoBox}>
          <p>AFFORDABILITY</p>
        </div>
        <div className={styles.infoBox}>
          <p>TRUSTED</p>
        </div>
        <Link href='/register'>
          <button className={styles.joinButton}>Join the Community</button>
        </Link>
      </section>

      <section className={styles.statsSection}>
        <p>PHOTOGRAPHER PRIDES</p>
      </section>

      <Footer />
    </div>
  );
}

export default Landingpage;
