
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import styles from "../styles/dashboard.module.css";
// import Footer from "../components/Footer.jsx";

// function Dashboard() {
//   const [fullname, setFullname] = useState('');
//   const [images, setImages] = useState([]);
//   const [selectedFiles, setSelectedFiles] = useState([]);

//   useEffect(() => {
//     const storedFullname = localStorage.getItem('fullname');
//     const userId = localStorage.getItem('userId');
//     if (storedFullname) {
//       setFullname(storedFullname);
//     }
//     if (userId) {
//       fetchImages(userId);
//     }
//   }, []);

//   const fetchImages = async (userId) => {
//     try {
//       const response = await axios.get('http://localhost:3001/images', {
//         headers: { 'Content-Type': 'application/json', 'userId': userId }
//       });
//       setImages(response.data);
//     } catch (error) {
//       console.error('Error fetching images:', error);
//     }
//   };

//   const handleFileChange = (e) => {
//     setSelectedFiles(Array.from(e.target.files));
//   };

//   const handleUpload = async () => {
//     const userId = localStorage.getItem('userId');
//     if (!selectedFiles.length || !userId) return;

//     const formData = new FormData();
//     selectedFiles.forEach(file => {
//       formData.append('images', file);
//     });
//     formData.append('userId', userId);

//     try {
//       await axios.post('http://localhost:3001/upload', formData, {
//         headers: { 'Content-Type': 'multipart/form-data', 'userId': userId }
//       });
//       fetchImages(userId);
//     } catch (error) {
//       console.error('Error uploading images:', error);
//     }
//   };

//   const handleDelete = async (imageId) => {
//     const userId = localStorage.getItem('userId');
//     try {
//       await axios.delete(`http://localhost:3001/images/${imageId}`, {
//         headers: { 'Content-Type': 'application/json', 'userId': userId }
//       });
//       fetchImages(userId);
//     } catch (error) {
//       console.error('Error deleting image:', error);
//     }
//   };

//   return (
//     <>
//       <div className={styles.container}>
//         <h1>Dashboard</h1>
//         {fullname && <div className={styles.welcome}>Welcome, {fullname}!</div>}
//         <div className={styles.uploadContainer}>
//           <input type="file" multiple onChange={handleFileChange} />
//           <button onClick={handleUpload}>Upload Images</button>
//         </div>
//         <div className={styles.imagesContainer}>
//           {images.map((image) => (
//             <div key={image.image_id} className={styles.imageWrapper}>
//               <img src={`http://localhost:3001/${image.image_path}`} alt="User Upload" />
//               <button onClick={() => handleDelete(image.image_id)}>Delete</button>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Dashboard;



//  //working
// "use client";
// import { useEffect, useState } from 'react';
// import styles from "../styles/dashboard.module.css";
// import Footer from "../components/Footer.jsx";

// function Dashboard() {
//   const [fullname, setFullname] = useState('');
//   const [images, setImages] = useState([]);
//   const [selectedFiles, setSelectedFiles] = useState([]);

//   useEffect(() => {
//     const storedFullname = localStorage.getItem('fullname');
//     if (storedFullname) {
//       setFullname(storedFullname);
//       fetchImages();
//     }
//   }, []);

//   const fetchImages = async () => {
//     const response = await fetch('http://localhost:3001/images', {
//       credentials: 'include'
//     });
//     const data = await response.json();
//     setImages(data.images);
//   };

//   const handleFileChange = (event) => {
//     setSelectedFiles(event.target.files);
//   };

//   const handleUpload = async () => {
//     const formData = new FormData();
//     Array.from(selectedFiles).forEach(file => {
//       formData.append('images', file);
//     });

//     const response = await fetch('http://localhost:3001/upload', {
//       method: 'POST',
//       body: formData,
//       credentials: 'include'
//     });

//     if (response.ok) {
//       fetchImages();
//       setSelectedFiles([]);
//     } else {
//       alert('Error uploading images');
//     }
//   };

//   return (
//     <>
//       <div className={styles.container}>
//         <h1>Dashboard</h1>
//         {fullname && <div className={styles.welcome}>Welcome, {fullname}!</div>}
//         <input type="file" multiple onChange={handleFileChange} />
//         <button onClick={handleUpload}>Upload</button>
//         <div className={styles.gallery}>
//           {images.map((image, index) => (
//             <img key={index} src={`http://localhost:3001/uploads/${image.filename}`} alt="User upload" />
//           ))}
//         </div>
//         {/* Other dashboard content */}
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Dashboard;

// "use client";
// import { useEffect, useState } from 'react';
// import styles from "../styles/dashboard.module.css";
// import Footer from "../components/Footer.jsx";
// import axios from 'axios';

// function Dashboard() {
//   const [fullname, setFullname] = useState('');
//   const [images, setImages] = useState([]);
//   const [selectedFiles, setSelectedFiles] = useState([]);

//   useEffect(() => {
//     const storedFullname = localStorage.getItem('fullname');
//     const userId = localStorage.getItem('userId');
//     if (storedFullname && userId) {
//       setFullname(storedFullname);
//       fetchImages();
//     }
//   }, []);

//   const fetchImages = async () => {
//     const userId = localStorage.getItem('userId');
//     const response = await fetch(`http://localhost:3001/images?userId=${userId}`, {
//       credentials: 'include'
//     });
//     const data = await response.json();
//     setImages(data.images);
//   };

//   const handleFileChange = (event) => {
//     setSelectedFiles(event.target.files);
//   };
//   const handleUpload = async () => {
//     const userId = localStorage.getItem('userId');
//     const formData = new FormData();
//     Array.from(selectedFiles).forEach(file => {
//       formData.append('images', file);
//     });
//     formData.append('userId', userId);
  
//     try {
//       const response = await fetch('http://localhost:3001/upload', {
//         method: 'POST',
//         body: formData,
//         credentials: 'include'
//       });
  
//       if (response.ok) {
//         fetchImages();
//         setSelectedFiles([]);
//       } else {
//         alert('Error uploading images');
//       }
//     } catch (error) {
//       console.error('Error uploading images:', error);
//     }
//   };
  
//   // const handleUpload = async () => {
//   //   const userId = localStorage.getItem('userId');
//   //   const formData = new FormData();
//   //   Array.from(selectedFiles).forEach(file => {
//   //     formData.append('images', file);
//   //   });
//   //   formData.append('userId', userId);

//   //   const response = await fetch('http://localhost:3001/upload', {
//   //     method: 'POST',
//   //     body: formData,
//   //     credentials: 'include'
//   //   });
   
    

//   //   if (response.ok) {
//   //     fetchImages();
//   //     setSelectedFiles([]);
//   //   } else {
//   //     alert('Error uploading images');
//   //   }
//   // };

//   return (
//     <>
//       <div className={styles.container}>
//         <h1>Dashboard</h1>
//         {fullname && <div className={styles.welcome}>Welcome, {fullname}!</div>}
//         <input type="file" multiple onChange={handleFileChange} />
//         <button onClick={handleUpload}>Upload</button>
//         <div className={styles.gallery}>
//           {images.map((image, index) => (
//             <img key={index} src={`http://localhost:3001/uploads/${image.filename}`} alt="User upload" />
//           ))}
//         </div>
//         {/* Other dashboard content */}
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Dashboard;
// "use client";
// import { useEffect, useState } from 'react';
// import styles from "../styles/dashboard.module.css";

// import Footer from "../components/Footer.jsx";

// function Dashboard() {
//   const [fullname, setFullname] = useState('');

//   useEffect(() => {
//     const storedFullname = localStorage.getItem('fullname');
//     if (storedFullname) {
//       setFullname(storedFullname);
//     }
//   }, []);

//   return (
//     <>
//       <div className={styles.container}>
//         <h1>Dashboard</h1>
//         {fullname && <div className={styles.welcome}>Welcome, {fullname}!</div>}
//         {/* Other dashboard content */}
//       </div>
//       <Footer />
//     </>
//   );
// }
//  export default Dashboard;

//sever
//working
// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');
// const multer = require('multer');
// const path = require('path');

// const app = express();

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'photousers',
// });

// db.connect((err) => {
//   if (err) throw err;
//   console.log('MySQL connected');
// });

// app.use(cors({
//   origin: 'http://localhost:3000',
//   methods: ['GET', 'POST'],
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Setup multer for file uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   }
// });
// const upload = multer({ storage: storage });

// app.post('/register', (req, res) => {
//   const { fullname, studio, address, phone, email, password } = req.body;

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     return res.status(400).json({ message: 'Invalid email format' });
//   }
//   if (!fullname || !studio || !address || !phone || !email || !password) {
//     return res.status(400).send({ error: 'All fields are required' });
//   }

//   const CHECK_EMAIL_QUERY = `SELECT * FROM users WHERE email = ?`;
//   db.query(CHECK_EMAIL_QUERY, [email], (err, results) => {
//     if (err) {
//       console.error('Error checking email:', err);
//       return res.status(500).send({ error: 'Error registering user' });
//     }

//     if (results.length > 0) {
//       return res.status(400).send({ error: 'Email already exists' });
//     }

//     const INSERT_USER_QUERY = `INSERT INTO users (fullname, studio, address, phone, email, password) VALUES (?, ?, ?, ?, ?, ?)`;
//     db.query(INSERT_USER_QUERY, [fullname, studio, address, phone, email, password], (err, result) => {
//       if (err) {
//         console.error('Error inserting user:', err);
//         return res.status(500).send({ error: 'Error registering user' });
//       }

//       res.status(200).send({ message: 'User registered successfully' });
//     });
//   });
// });

// app.post('/login', (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ message: 'Please provide email and password' });
//   }

//   const SELECT_USER_QUERY = 'SELECT fullname FROM users WHERE email = ? AND password = ?';
//   db.query(SELECT_USER_QUERY, [email, password], (err, result) => {
//     if (err) {
//       return res.status(500).json({ message: 'Error while logging in' });
//     }
//     if (result.length === 0) {
//       return res.status(404).json({ message: 'Invalid credentials' });
//     }
//     return res.status(200).json({ message: 'Login successful', fullname: result[0].fullname });
//   });
// });

// app.post('/upload', upload.array('images', 12), (req, res) => {
//   const files = req.files;
//   const imageInsertPromises = files.map(file => {
//     const INSERT_IMAGE_QUERY = `INSERT INTO images (filename) VALUES (?)`;
//     return new Promise((resolve, reject) => {
//       db.query(INSERT_IMAGE_QUERY, [file.filename], (err, result) => {
//         if (err) {
//           console.error('Error inserting image:', err);
//           reject(err);
//         } else {
//           resolve(result);
//         }
//       });
//     });
//   });

//   Promise.all(imageInsertPromises)
//     .then(() => {
//       res.status(200).send({ message: 'Images uploaded successfully' });
//     })
//     .catch((err) => {
//       res.status(500).send({ error: 'Error uploading images' });
//     });
// });

// app.get('/images', (req, res) => {
//   const SELECT_IMAGES_QUERY = 'SELECT filename FROM images';
//   db.query(SELECT_IMAGES_QUERY, (err, results) => {
//     if (err) {
//       return res.status(500).json({ message: 'Error fetching images' });
//     }
//     res.status(200).json({ images: results });
//   });
// });

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');
// const multer = require('multer');
// const path = require('path');

// const app = express();

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'photousers',
// });

// db.connect((err) => {
//   if (err) throw err;
//   console.log('MySQL connected');
// });

// app.use(cors({
//   origin: 'http://localhost:3000',
//   methods: ['GET', 'POST'],
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Setup multer for file uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   }
// });
// // const upload = multer({ storage: storage });
// const upload = multer({ dest: 'uploads/' });
// app.post('/register', (req, res) => {
//   const { fullname, studio, address, phone, email, password } = req.body;

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     return res.status(400).json({ message: 'Invalid email format' });
//   }
//   if (!fullname || !studio || !address || !phone || !email || !password) {
//     return res.status(400).send({ error: 'All fields are required' });
//   }

//   const CHECK_EMAIL_QUERY = `SELECT * FROM users WHERE email = ?`;
//   db.query(CHECK_EMAIL_QUERY, [email], (err, results) => {
//     if (err) {
//       console.error('Error checking email:', err);
//       return res.status(500).send({ error: 'Error registering user' });
//     }

//     if (results.length > 0) {
//       return res.status(400).send({ error: 'Email already exists' });
//     }

//     const INSERT_USER_QUERY = `INSERT INTO users (fullname, studio, address, phone, email, password) VALUES (?, ?, ?, ?, ?, ?)`;
//     db.query(INSERT_USER_QUERY, [fullname, studio, address, phone, email, password], (err, result) => {
//       if (err) {
//         console.error('Error inserting user:', err);
//         return res.status(500).send({ error: 'Error registering user' });
//       }

//       res.status(200).send({ message: 'User registered successfully' });
//     });
//   });
// });

// app.post('/login', (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ message: 'Please provide email and password' });
//   }

//   const SELECT_USER_QUERY = 'SELECT user_id, fullname FROM users WHERE email = ? AND password = ?';
//   db.query(SELECT_USER_QUERY, [email, password], (err, result) => {
//     if (err) {
//       return res.status(500).json({ message: 'Error while logging in' });
//     }
//     if (result.length === 0) {
//       return res.status(404).json({ message: 'Invalid credentials' });
//     }
//     return res.status(200).json({ message: 'Login successful', fullname: result[0].fullname, userId: result[0].id });
//   });
// });

// app.post('/upload', upload.array('images', 12), (req, res) => {
//   const files = req.files;
//   const userId = req.body.userId;

//   if (!userId) {
//     return res.status(400).send({ error: 'User ID is required' });
//   }

//   const imageInsertPromises = files.map(file => {
//     const INSERT_IMAGE_QUERY = `INSERT INTO images (filename, user_id) VALUES (?, ?)`;
//     return new Promise((resolve, reject) => {
//       db.query(INSERT_IMAGE_QUERY, [file.filename, userId], (err, result) => {
//         if (err) {
//           console.error('Error inserting image:', err);
//           reject(err);
//         } else {
//           resolve(result);
//         }
//       });
//     });
//   });

//   Promise.all(imageInsertPromises)
//     .then(() => {
//       res.status(200).send({ message: 'Images uploaded successfully' });
//     })
//     .catch((err) => {
//       console.error('Error uploading images:', err);
//       res.status(500).send({ error: 'Error uploading images' });
//     });
// });

// app.get('/images', (req, res) => {
//   const userId = req.query.userId;

//   if (!userId) {
//     return res.status(400).json({ message: 'User ID is required' });
//   }

//   const SELECT_IMAGES_QUERY = 'SELECT filename FROM images WHERE user_id = ?';
//   db.query(SELECT_IMAGES_QUERY, [userId], (err, results) => {
//     if (err) {
//       return res.status(500).json({ message: 'Error fetching images' });
//     }
//     res.status(200).json({ images: results });
//   });
// });

// app.listen(3001, () => {
//   console.log('Server is running on port 3001');
// });
 
///login and regiserter server
//original
// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');
// const path = require('path');
// const fs = require('fs');
// const multer = require('multer');

// const app = express();

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'photousers',
// });

// db.connect((err) => {
//   if (err) throw err;
//   console.log('MySQL connected');
// });

// app.use(cors({
//   origin: 'http://localhost:3000',
//   methods: ['POST'],
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.post('/register', (req, res) => {
//   const { fullname, studio, address, phone, email, password } = req.body;

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     return res.status(400).json({ message: 'Invalid email format' });
//   }
//   if (!fullname || !studio || !address || !phone || !email || !password) {
//     return res.status(400).send({ error: 'All fields are required' });
//   }

//   const CHECK_EMAIL_QUERY = `SELECT * FROM users WHERE email = ?`;
//   db.query(CHECK_EMAIL_QUERY, [email], (err, results) => {
//     if (err) {
//       console.error('Error checking email:', err);
//       return res.status(500).send({ error: 'Error registering user' });
//     }

//     if (results.length > 0) {
//       return res.status(400).send({ error: 'Email already exists' });
//     }

//     const INSERT_USER_QUERY = `INSERT INTO users (fullname, studio, address, phone, email, password) VALUES (?, ?, ?, ?, ?, ?)`;
//     db.query(INSERT_USER_QUERY, [fullname, studio, address, phone, email, password], (err, result) => {
//       if (err) {
//         console.error('Error inserting user:', err);
//         return res.status(500).send({ error: 'Error registering user' });
//       }

//       res.status(200).send({ message: 'User registered successfully' });
//     });
//   });
// });

// // //original login
// app.post('/login', (req, res) => {
//   const { email, password } = req.body;

//   // Validate fields
//   if (!email || !password) {
//     return res.status(400).json({ message: 'Please provide email and password' });
//   }

//   // Check credentials in the database
//   const SELECT_USER_QUERY = 'SELECT fullname FROM users WHERE email = ? AND password = ?';
//   db.query(SELECT_USER_QUERY, [email, password], (err, result) => {
//     if (err) {
//       return res.status(500).json({ message: 'Error while logging in' });
//     }
//     if (result.length === 0) {
//       return res.status(404).json({ message: 'Invalid credentials' });
//     }
//     return res.status(200).json({ message: 'Login successful', fullname: result[0].fullname });
//   });
// });
  
// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
///logins
// "use client";
// import { useState } from 'react';
// import styles from "../styles/login.module.css";
// import Footer from "../components/Footer.jsx";
// import axios from 'axios';
// import { useRouter } from 'next/navigation';

// function Login() {
//   const [message, setMessage] = useState('');
//   const [fullname, setFullname] = useState('');
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
//     setMessage(''); // Reset message
  
//     const { email, password } = formData;
  
//     // Validate fields
//     if (!email || !password) {
//       setMessage('Please provide email and password');
//       return;
//     }
  
//     try {
//       const response = await axios.post('http://localhost:3001/login', formData);
//       localStorage.setItem('fullname', response.data.fullname); // Store fullname in local storage
//       setMessage(response.data.message);
//       setTimeout(() => {
//         router.push('/dashboard'); // Redirect after successful login
//       }, 1000); // Redirect after 1 second
//     } catch (error) {
//       if (error.response) {
//         setMessage(error.response.data.message); // Set specific error message from backend
//       } else {
//         setMessage('An error occurred. Please try again.');
//       }
//     }
//   };
  
//   return (
//     <>
//       <div className={styles.container}>
//         <h1>Login</h1>
//         <form onSubmit={handleSubmit}>
//           {message && <div className={styles.message}>{message}</div>}
//           {fullname && <div className={styles.welcome}>Welcome, {fullname}!</div>}
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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setMessage(''); // Reset message
  
  //   const { email, password } = formData;
  
  //   // Validate fields
  //   if (!email || !password) {
  //     setMessage('Please provide email and password');
  //     return;
  //   }
  
  //   try {
  //     const response = await axios.post('http://localhost:3001/login', formData);
  //     localStorage.setItem('fullname', response.data.fullname); // Store fullname in local storage
  //     localStorage.setItem('userId', response.data.userId); // Store userId in local storage
  //     setMessage(response.data.message);
  //     setTimeout(() => {
  //       router.push('/dashboard'); // Redirect after successful login
  //     }, 1000); // Redirect after 1 second
  //   } catch (error) {
  //     if (error.response) {
  //       setMessage(error.response.data.message); // Set specific error message from backend
  //     } else {
  //       setMessage('An error occurred. Please try again.');
  //     }
  //   }
  // };
  // Existing Login component with the handleSubmit method adjusted