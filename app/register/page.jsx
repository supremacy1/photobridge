// pages/register.js
"use client"
import { useState } from 'react';
// import { useRouter } from 'next/router';
import styles from "../styles/register.module.css";
import Footer from "../components/Footer.jsx"

 function Register() {
  // const router = useRouter();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    router.push('/success');
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
        <button type="submit">Register</button>

      </form>
    </div>
     <Footer />
     </>
  );
}
export default Register