import React from 'react'
import styles from "../styles/footer.module.css";

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
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </nav>
                     </div>
      </div>
    </div>
  )
}

export default Footer
