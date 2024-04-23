import Image from "next/image";
import styles from "../styles/rightcomp.module.css"; // Import CSS module

const Rightcomp = () => {
  return (
    <>
      <div className={styles.rightcontainer}>
      
        <h1>
       
          By{" "}
          <Image src="/images/vector.jpg" alt="logo" width={10} height={100} />
          Sedboi.euy
        </h1>

        <ul className={styles.list}>
          <a href="#">
            <li>
            
              <Image src="/images/Group.svg" alt="logo" width={100} height={100} />
              Home
            </li>
          </a>
          <a href="#">
            <li>
           
              <Image src="/images/Gr.svg" alt="logo" width={100} height={100} />
              Timeline
            </li>
          </a>
          <a href="#">
            <li>
              {" "}
              <Image src="/images/G9.svg" alt="logo" width={100} height={100} />
              Community
            </li>
          </a>
          <a href="#">
            <li>
              {" "}
              <Image src="/images/Gt.svg" alt="logo" width={100} height={100} />
              Discovery
            </li>
          </a>
          <a href="#">
            <li>
              {" "}
              <Image src="/images/Gr.svg" alt="logo" width={100} height={100} />
              Friends
            </li>
          </a>
          <a href="#">
            <li>
              {" "}
              <Image src="/images/Gk.svg" alt="logo" width={100} height={100} />
              Bookmark
            </li>
          </a>
          <a href="#">
            <li>
              {" "}
              <Image src="/images/Gp.svg" alt="logo" width={100} height={100} />
              Event
            </li>
          </a>
          <a href="#">
            <li>
              {" "}
              <Image src="/images/Gpp.svg" alt="logo" width={100} height={100} />
              Discussion
            </li>
          </a>
        </ul>
        <ul className={styles.list1}>
          <h3>Category</h3>
          <a href="#">
            <li>
              {" "}
              <Image src="/images/G8.svg" alt="logo" width={100} height={100} />
              Sport
            </li>
          </a>
          <a href="#">
            <li>
              {" "}
              <Image src="/images/Gt.svg" alt="logo" width={100} height={100} />
              Gaming
            </li>
          </a>
          <a href="#">
            <li>
              {" "}
              <Image src="/images/Gt.svg" alt="logo" width={100} height={100} />
              Music
            </li>
          </a>
          <a href="#">
            <li>
              {" "}
              <Image src="/images/Gt.svg" alt="logo" width={100} height={100} />
              Tech & Science
            </li>
          </a>
        </ul>
      </div>
    </>
  );
};

export default Rightcomp;
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
