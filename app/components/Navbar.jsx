import Image from "next/image";
import { useState } from 'react';
import styles from "../styles/Navbar.module.css"; // Import CSS module
import PictureSlider from "../components/Slide.jsx";
const NavBar = () => {
  return (
    <>
    <div className={styles.maincontainer}>
      <div className={styles.mainbar}>
     <div className={styles.navbar}>
      <div className={styles.naviteams}>
     {/* <img src="/images/G9.svg" alt="Image 2" /> */}
      <h1>Photograh</h1>
      {/* <nav>
     <ul>
      <li>Help</li>
     </ul>
     </nav> */}
      </div>
     </div>
     {/* <button>Help</button> */}
     <nav className={styles.nave}>
      
     <ul>
      <li>Help</li>
     </ul>
     </nav>
     </div>
     <PictureSlider />
    </div>

    </>
  );
};

export default NavBar;
// components/NavBar.js
// import Image from "next/image";
// import  "../styles/right.module.css"; // Import CSS module

// const Rightbar = () => {
//   return (
//     <nav className="vertical-navbar">
//       <ul>
//         <li>
//           <img src="/images/E2.svg" alt="Image 1" />
//           <a href="#">Home</a>
//         </li>
//         <li>
//           <img src="/images/E3.svg" alt="Image 2" />
//           <a href="#">Timeline</a>
//         </li>
//         {/* Add more list items as needed */}
//       </ul>
//     </nav>
//   );
// };

// export default Rightbar;
