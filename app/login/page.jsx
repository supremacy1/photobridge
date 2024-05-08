// pages/login.js
'use client'
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/login.module.css'; // Import the CSS module
import Footer from "../components/Footer.jsx"



export default function Login() {
//   const router = useRouter();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add code to send the form data to your backend for authentication
    console.log(formData);
    router.push('/dashboard'); // Redirect to dashboard after successful login
  };

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
