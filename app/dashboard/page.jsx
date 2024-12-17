"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "../styles/dashboard.module.css";
import Footer from "../components/Footer.jsx";
import Link from 'next/link';

function Dashboard() {
  const [fullname, setFullname] = useState('');
  const [images, setImages] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewSrc, setPreviewSrc] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  
  useEffect(() => {
    const storedFullname = localStorage.getItem('fullname');
    const userId = localStorage.getItem('userId');
    if (storedFullname) {
      setFullname(storedFullname);
    }
    if (userId) {
      fetchImages(userId);
      fetchProfilePicture(userId);
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

  const fetchProfilePicture = async (userId) => {
    try {
      const response = await axios.get('http://localhost:3001/user-profile-picture', {
        headers: { 'Content-Type': 'application/json', 'userId': userId }
      });
      setProfilePicture(response.data.profilePicture);
    } catch (error) {
      console.error('Error fetching profile picture:', error);
    }
  };
  // const handleFileChange = (e) => {
  //   setSelectedFiles(e.target.files);
  // };
  const handleFileChange = (e) => {
    setSelectedFiles(Array.from(e.target.files));
  };
  const handleProfilePictureChange = async (e) => {
    const file = e.target.files[0];
    const userId = localStorage.getItem('userId');
    if (!userId || !file) return;

    const formData = new FormData();
    formData.append('profilePicture', file);
    formData.append('userId', userId);

    try {
      const response = await axios.post('http://localhost:3001/profile-picture', formData);
      setProfilePicture(response.data.profilePicturePath);
    } catch (error) {
      console.error('Error uploading profile picture:', error);
    }
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

  const handlePreview = (imagePath) => {
    setPreviewSrc(`http://localhost:3001/${imagePath}`);
  };

  const closePreview = () => {
    setPreviewSrc('');
  };

  return (
    <>
      <div className={styles.container}>
        {/* <Link href = "/home">
        <button className={styles.home}>Home</button>
        </Link> */}
        {fullname && <div className={styles.welcome}>Welcome Back, {fullname}!</div>}
        
        <div className={styles.uploadContainer}>
          <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
          {profilePicture && <img src={`http://localhost:3001/${profilePicture}`} alt="Profile" className={styles.profilePicture} />}
        </div>
        <div className={styles.uploadContainer}>
          <input type="file" multiple onChange={handleFileChange} />
          <button  onClick={handleUpload}>Upload Images</button>
        </div>
        <div className={styles.imagesContainer}>
          {images.map((image) => (
            <div key={image.image_id} className={styles.imageWrapper}>
              <img src={`http://localhost:3001/${image.image_path}`} alt="User Upload" onClick={() => handlePreview(image.image_path)} />
              <button onClick={() => handleDelete(image.image_id)}>Delete</button>
            </div>
          ))}
        </div>
        {previewSrc && (
          <div className={`${styles.previewOverlay} ${previewSrc ? styles.show : ''}`} onClick={closePreview}>
            <img src={previewSrc} alt="Preview" />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
