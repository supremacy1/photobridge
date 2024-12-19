// "use client";

// import { useState } from 'react';
// import axios from 'axios';
// import styles from '../styles/forgotPassword.module.css';
// import Footer from "../components/Footer.jsx";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:3001/forgot-password', { email });
//       setMessage(response.data.message);
//     } catch (error) {
//       setMessage('Error sending reset email');
//       console.error(error);
//     }
//   };

//   return (
//     <>
//       <div className={styles.container}>
//         <h1>Forgot Password</h1>
//         {message && <div className={styles.message}>{message}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className={styles.formGroup}>
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Send Reset Link</button>
//         </form>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ForgotPassword;
"use client";
import React, { useState } from "react";
import axios from "axios";
// import { useRouter } from "next/router";
import { useRouter } from 'next/navigation';


const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await axios.post("http://localhost:3001/reset-password", { email });
      setMessage(response.data.message);
      // Optional: Redirect to confirmation page
      setTimeout(() => router.push("/login"), 3000);
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;

