"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from "../styles/userDashboard.module.css";
import Footer from "../components/Footer.jsx";

function UserDashboard() {
  const [user, setUser] = useState({});
  const [images, setImages] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const userId = searchParams.get('userId');

  useEffect(() => {
    if (userId) {
      fetchUserDetails(userId);
    }
  }, [userId]);

  const fetchUserDetails = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:3001/user/${userId}`);
      setUser(response.data.user);
      setImages(response.data.images);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const handlePreview = (src) => {
    setPreviewSrc(src);
  };

  const handleClosePreview = () => {
    setPreviewSrc('');
  };

  return (
    <>
      <div className={styles.container}>
        <h1>{user.fullname}'s Dashboard</h1>
        {user.profile_picture && <img src={`http://localhost:3001/${user.profile_picture}`} alt="Profile" className={styles.profilePicture} />}
        <p><strong>Studio:</strong> {user.studio}</p>
        <p><strong>Address:</strong> {user.address}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Email:</strong> {user.email}</p>

        <div className={styles.imagesContainer}>
          {images.map((image, index) => (
            <div key={index} className={styles.imageWrapper}>
              <img src={`http://localhost:3001/${image.image_path}`} alt="Uploaded" onClick={() => handlePreview(`http://localhost:3001/${image.image_path}`)} />
            </div>
          ))}
        </div>
      </div>

      {previewSrc && (
        <div className={styles.previewOverlay} onClick={handleClosePreview}>
          <img src={previewSrc} alt="Preview" />
        </div>
      )}

      <Footer />
    </>
  );
}

export default UserDashboard;
