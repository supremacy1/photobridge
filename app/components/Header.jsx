import React, {useState, useEffect} from 'react'
import styles from "../styles/header.module.css";
import Image from 'next/image';
import Link from 'next/link';




const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
 
  // Toggle menu for responsive navbar
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const closePreview = () => {
    setPreviewImage(null);
  };

  return (
    <div>
       {/* Navbar */}
       <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image src="/images/va.png" alt="Aperture Logo" border-radius="90%" width={50} height={50} />
          <span>PhotoBridge</span>
        </div>
        <button className={styles.menuButton} onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ''}`}>
          
          <Link href='./components/Landingpage.jsx'>Home</Link>
          <Link href='/home'>Image</Link>
          <li>Videos</li>
          <li>Shop</li>
          <li>Seller Dashboard</li>
        </ul>
      </nav>

    </div>
  )
}

export default Header;
