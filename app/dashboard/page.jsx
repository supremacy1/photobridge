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
"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "../styles/dashboard.module.css";
import Footer from "../components/Footer.jsx";

function Dashboard() {
  const [fullname, setFullname] = useState('');
  const [images, setImages] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  useEffect(() => {
    const storedFullname = localStorage.getItem('fullname');
    const userId = localStorage.getItem('userId');
    if (storedFullname) {
      setFullname(storedFullname);
    }
    if (userId) {
      fetchImages(userId);
    }
  }, []);

  const fetchImages = async (userId) => {
    try {
      const response = await axios.get('http://localhost:3001/images', {
        headers: { 'Content-Type': 'application/json', 'userId': userId }
      });
      setImages(response.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleFileChange = (e) => {
    setSelectedFiles(Array.from(e.target.files));
  };

  const handleUpload = async () => {
    const userId = localStorage.getItem('userId');
    if (!selectedFiles.length || !userId) return;

    const formData = new FormData();
    selectedFiles.forEach(file => {
      formData.append('images', file);
    });
    formData.append('userId', userId);

    try {
      await axios.post('http://localhost:3001/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data', 'userId': userId }
      });
      fetchImages(userId);
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };

  const handleDelete = async (imageId) => {
    const userId = localStorage.getItem('userId');
    try {
      await axios.delete(`http://localhost:3001/images/${imageId}`, {
        headers: { 'Content-Type': 'application/json', 'userId': userId }
      });
      fetchImages(userId);
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Dashboard</h1>
        {fullname && <div className={styles.welcome}>Welcome, {fullname}!</div>}
        <div className={styles.uploadContainer}>
          <input type="file" multiple onChange={handleFileChange} />
          <button onClick={handleUpload}>Upload Images</button>
        </div>
        <div className={styles.imagesContainer}>
          {images.map((image) => (
            <div key={image.image_id} className={styles.imageWrapper}>
              <img src={`http://localhost:3001/${image.image_path}`} alt="User Upload" />
              <button onClick={() => handleDelete(image.image_id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;



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
