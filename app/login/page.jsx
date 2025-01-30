// //ALTER TABLE images ADD user_id INT;
// //ALTER TABLE images ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id);
"use client";
import { useEffect, useState } from 'react';
import styles from "../styles/login.module.css";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header";

import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function Login() {
  const [message, setMessage] = useState('');
  const [fullname, setFullname] = useState('');
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
  setMessage(''); // Reset message

  const { email, password } = formData;

  // Validate fields
  if (!email || !password) {
    setMessage('Please provide email and password');
    return;
  }

  try {
    const response = await axios.post('http://localhost:3001/login', formData);
    localStorage.setItem('fullname', response.data.fullname); // Store fullname in local storage
    localStorage.setItem('userId', response.data.userId); // Store userId in local storage
    setMessage(response.data.message);
    setTimeout(() => {
      router.push('/dashboard'); // Redirect after successful login
    }, 1000); // Redirect after 1 second
  } catch (error) {
    if (error.response) {
      setMessage(error.response.data.message); // Set specific error message from backend
    } else {
      setMessage('An error occurred. Please try again.');
    }
  }
};

  return (
    <>
    <Header />
      <div className={styles.container}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          {message && <div className={styles.message}>{message}</div>}
          {fullname && <div className={styles.welcome}>Welcome, {fullname}!</div>}
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
          <div className={styles.forgotbtn}>
          <Link href = "/reset-password">
          <button>Forgot Password</button>
          </Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;
