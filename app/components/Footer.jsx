import React from 'react'
import styles from "../styles/footer.module.css";
import Link from 'next/link';
import Gallery from "../components/Gallery.jsx"
function Footer() {
  return (
    <div className={styles.footercontainer}>
        <div className={styles.header}>
      <h1>Book one of our professional Photographer that will add color to your occasion</h1>
      </div>
      <div className={styles.line}>
        <h1>We are Realiabe and Proffissional </h1>
      </div>
      <div className={styles.footerimage}>
        <div className={styles.footimg}>
        <img 
         src="/images/x.jpg"
         alt="x"
         width={30}
         height={30}
         className='img'
         />
         <img 
         src="/images/x.jpg"
         alt="x"
         width={30}
         height={30}
         className='img'
         />
         <img 
         src="/images/x.jpg"
         alt="x"
         width={30}
         height={30}
         className='img'
         />
         </div>
         <div className={styles.footernave}>
         <nav className={styles.footnav1}>
        <ul>
          <li>Home</li>
          <li>About</li>
          {/* <li><Link to='/Gallery'>Gallery</Link></li> */}
          <li>Contact</li>
          {/* <Link href="/Got">
        About Page
      </Link> */}
        </ul>
      </nav>
    </div>
     <div className={styles.grid}>

     </div>
      </div>
    </div>
  )
}

export default Footer
