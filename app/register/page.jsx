// // pages/register.js
// "use client"
// import { useEffect, useState } from 'react';
// // import { useRouter } from 'next/router';
// import styles from "../styles/register.module.css";
// import Footer from "../components/Footer.jsx"
// import axios from 'axios';
// import { useRouter, usePathname, useSearchParams } from 'next/navigation'

//  function Register() {
//   const router = useRouter(); 
//   const [message, setMessage] = useState('');
 
  

//   const [formData, setFormData] = useState({
//     fullname: '',
//     studio: '',
//     address: '',
//     email: '',
//     password: '',
//   });
 
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//         const response = await axios.post('/register', formData);
//         console.log(response.data);
//         // You can handle success or redirect here
//         router.push('/login');
//     } catch (error) {
//         console.error(error);
//         // Handle error response
//     }
// };
 
//   return (
//     <>
//     <div className={styles.container}>
//       <h1>Register</h1>
//       <form onSubmit={handleSubmit}>
//         <div className={styles.formGroup}>
//           <label htmlFor="fullname">Full Name</label>
//           <input
//             type="text"
//             id="fullname"
//             name="fullname"
//             placeholder='Enter Your FullName'
//             value={formData.fullname}
//             onChange={handleChange}
            
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="studio">Studio Name</label>
//           <input
//             type="text"
//             id="studio"
//             name="studio"
//             placeholder='Enter Studio Name'
//             value={formData.studio}
//             onChange={handleChange}
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="address">Address</label>
//           <input
//             type="text"
//             id="address"
//             name="address"
//             placeholder='Enter Personal or Studio Address'
//             value={formData.address}
//             onChange={handleChange}
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder='Enter Email Address'
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             placeholder='Enter Password'
//             value={formData.password}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit" >Register</button>

//       </form>
//       </div>
//      <Footer />
   
//      </>
//   );
// }
// export default Register
"use client";
import { useState } from 'react';
import styles from "../styles/register.module.css";
import Footer from "../components/Footer.jsx";
import axios from 'axios';
import { useRouter } from 'next/navigation';

function Register() {
  const router = useRouter(); 
  const [formData, setFormData] = useState({
    fullname: '',
    studio: '',
    address: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/register', formData);
      console.log(response.data);
      router.push('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder='Enter Your FullName'
              value={formData.fullname}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="studio">Studio Name</label>
            <input
              type="text"
              id="studio"
              name="studio"
              placeholder='Enter Studio Name'
              value={formData.studio}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder='Enter Personal or Studio Address'
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Enter Email Address'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder='Enter Password'
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Register;
