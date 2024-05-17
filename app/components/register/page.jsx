// pages/register.js
"use client"
import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
import styles from "../styles/register.module.css";
import Footer from "../components/Footer.jsx"

 function Register() {
  // const [message, setMessage] = useState('');
  
  // const [message, setMessage] = useState("Loading");
  // const [people, setPeople] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:8080/api/home').then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       console.log(data)
  //       console.log(data.setMessage)
  //       console.log(data.setPeople)
  //       setMessage(data.message)
  //       setPeople(data.people)
  //     }
  //   )
  // }, [])
  
  // const router = useRouter();
  const handleRegister = async () => {
    try {
      if (!fullname || !studio || !address || !email || !password ) {
        setMessage('All fields are required'); // Set message for empty fields
        return;
      }
      const response = await axios.post('http://localhost:8080/register', {
        fullnameme,
        studio,
        address,
        email,
        password,
      });
      
      setMessage(response.data.message); // Success or error message from server
      if (response.status === 200) {
        setMessage('Registration successful');

      }}
      catch (error) {
        if (error.response.status === 400 && error.response.data.message === 'Email already exists') {
          setMessage('Email already exists'); // Set message for existing email
        } else {
          setMessage('Registration unsuccessful'); // Set generic error message
        }
      
        console.error('Error:', error);
      }
    };

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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   router.push('/success');
  // };
  // const handleRegister = async () => {
  //   try {
  //     if (!fullname || !studio || !address || !email || !password ) {
  //       setMessage('All fields are required'); // Set message for empty fields
  //       return;
  //     }
  return (
    <>
    <div className={styles.container}>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
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
        <button type="submit" onClick={handleRegister}>Register</button>

      </form>
      {/* <div>
        <div>{message}</div>
        {
        people.map((person, index) => (
          <div key={index}>
            {person}
          </div>
        ))
        }
      </div> */}
      
    </div>
     <Footer />
     </>
  );
}
export default Register