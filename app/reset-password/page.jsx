// "use client"
// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import styles from "../styles/reset-password.module.css";
// // import Footer from '../components/Footer';
// // import {useRouter} from 'next/navigation';

// // function ResetPassword() {
// //   const [formData, setFormData] = useState({
// //     email: '',
// //     existingPassword: '',
// //     phone: '',
// //     newPassword: '',
// //   });
// //   const [message, setMessage] = useState('');
// //   const router = useRouter(); 
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setMessage('');
// //     try {
// //       const response = await axios.post('http://localhost:3001/reset-password', formData);
// //       setMessage(response.data.message);
// //       setTimeout(() => {
// //         router.push('/login');
// //       }, 1000);
// //     } catch (error) {
// //       if (error.response) {
// //         setMessage(error.response.data.message);
// //       } else {
// //         setMessage('An error occurred. Please try again.');
// //       }
// //     }
// //   };

// //   return (
// //     <>
// //     <div className={styles.container}>
// //       <h1>Reset Password</h1>
// //       <form onSubmit={handleSubmit}>
// //         {message && <div className={styles.message}>{message}</div>}
// //         <div className={styles.formGroup}>
// //           <label htmlFor="email">Email</label>
// //           <input
// //             type="email"
// //             id="email"
// //             name="email"
// //             placeholder="Enter your email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         {/* <div className={styles.formGroup}>
// //           <label htmlFor="existingPassword">Existing Password</label>
// //           <input
// //             type="password"
// //             id="existingPassword"
// //             name="existingPassword"
// //             placeholder="Enter your existing password"
// //             value={formData.existingPassword}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div> */}
// //         <div className={styles.formGroup}>
// //           <label htmlFor="phone">Phone</label>
// //           <input
// //             type="text"
// //             id="phone"
// //             name="phone"
// //             placeholder="Enter your phone number"
// //             value={formData.phone}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div className={styles.formGroup}>
// //           <label htmlFor="newPassword">New Password</label>
// //           <input
// //             type="password"
// //             id="newPassword"
// //             name="newPassword"
// //             placeholder="Enter your new password"
// //             value={formData.newPassword}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <button type="submit">Reset Password</button>
// //       </form>
// //     </div>
// //     <Footer/>
// //     </>
// //   );
// // }

// // export default ResetPassword;
// import React, { useState } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";

// const ResetPassword = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     try {
//       const response = await axios.post("http://localhost:3001/reset-password", { email });
//       setMessage(response.data.message);
//       // Optional: Redirect to confirmation page
//       setTimeout(() => router.push("/login"), 3000);
//     } catch (error) {
//       setMessage(error.response?.data?.message || "An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <h1>Reset Password</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <button type="submit">Send Reset Link</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default ResetPassword;
