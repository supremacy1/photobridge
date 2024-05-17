// "use client";
// import { useState } from 'react';
// import styles from "../styles/login.module.css";
// import Footer from "../components/Footer.jsx";
// import axios from 'axios';
// import { useRouter } from 'next/navigation';

// function Login() {
//   const [message, setMessage] = useState('');
//   const router = useRouter();
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

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3001/login', formData);
//       console.log(response.data);
//       // Handle success, redirect to dashboard or another page
//       router.push('/dashboard'); // Redirect after successful login
//     } catch (error) {
//       if (error.response.status === 404) {
//             setMessage('User not found'); // Set message for user not found
//           } else {
//             setMessage('All Field is Required'); // Set generic error message
//           }
//       console.error(error);
//       // Handle error, show error message to user
//     }
//   };


//   return (
//     <>
//       <div className={styles.container}>
//         <h1>Login</h1>
//         <form onSubmit={handleSubmit}>
//           <div className={styles.formGroup}>
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder='Enter Email Address'
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//           <div className={styles.formGroup}>
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder='Enter Password'
//               value={formData.password}
//               onChange={handleChange}
//             />
//           </div>
//           <button type="submit">Login</button>
//         </form>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Login;
"use client";
import { useState } from 'react';
import styles from "../styles/login.module.css";
import Footer from "../components/Footer.jsx";
import axios from 'axios';
import { useRouter } from 'next/navigation';

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
    //alert the name on the screen
    // setFullname('');

    const { email, password } = formData;

    // Validate fields
    if (!email || !password) {
      setMessage('Please provide email and password');
      return;
    }

    try {
       //alert the name on the screen
      // const response = await axios.post('http://localhost:3001/login', formData);
      // setFullname(response.data.fullname); // Set fullname on successful login
      // setMessage(response.data.message);
      // setTimeout(() => {
      //   router.push('/dashboard'); // Redirect after successful login
      // }, 2000); // Redirect after 2 seconds
      const response = await axios.post('http://localhost:3001/login', formData);
      localStorage.setItem('fullname', response.data.fullname); // Store fullname in local storage
      setMessage(response.data.message);
      setTimeout(() => {
        router.push('/dashboard'); // Redirect after successful login
      }, 2000); // Redirect after 2 seconds
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
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;
