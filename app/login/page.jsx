// // pages/login.js
// 'use client'
// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import styles from '../styles/login.module.css'; // Import the CSS module
// import Footer from "../components/Footer.jsx"



// export default function Login() {
// //   const router = useRouter();
//   const [formData, setFormData] = useState({
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

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can add code to send the form data to your backend for authentication
//     console.log(formData);
//     router.push('/dashboard'); // Redirect to dashboard after successful login
//   };

//   return (
//     <>
//     <div className={styles.container}>
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <div className={styles.formGroup}>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
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
//             value={formData.password}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//      <Footer />
//     </>
//   );
// }
"use client";
import { useState } from 'react';
import styles from "../styles/login.module.css";
import Footer from "../components/Footer.jsx";
import axios from 'axios';
import { useRouter } from 'next/navigation';

function Login() {
  const [message, setMessage] = useState();
  const router = useRouter();
  const [formData, setFormData] = useState({
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
      const response = await axios.post('http://localhost:3001/login', formData);
      console.log(response.data);
      // Handle success, redirect to dashboard or another page
      router.push('/dashboard'); // Redirect after successful login
    } catch (error) {
      if (error.response.status === 404) {
            setMessage('User not found'); // Set message for user not found
          } else {
            setMessage('All Field is Required'); // Set generic error message
          }
      console.error(error);
      // Handle error, show error message to user
    }
  };
// } catch (error) { 
  //     if (error.response.status === 404) {
  //     setMessage('User not found'); // Set message for user not found
  //   } else {
  //     setMessage('All Field is Required'); // Set generic error message
  //   }
  //     console.error('Error:', error);
  //   }
  // };


  // const handleSubmit = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:3001/login', {
  //       username,
  //       password,
  //     });
  //     setMessage(response.data.message); // Success or error message from server
  //     if (response.status === 200) {
  //       // If login successful, navigate to the dashboard
  //       router.push('/dashboard');
  //       setMessage('Login successful');
  //       // navigate('/dashboard', { state: { username } });
  //     }
  //   } catch (error) { 
  //     if (error.response.status === 404) {
  //     setMessage('User not found'); // Set message for user not found
  //   } else {
  //     setMessage('All Field is Required'); // Set generic error message
  //   }
  //     console.error('Error:', error);
  //   }
  // };


  return (
    <>
      <div className={styles.container}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;
