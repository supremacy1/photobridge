// "use client"
// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// export default function UserPage() {
//   const router = useRouter();
// //   const { id } = router.query;
// const { query } = router;
// const { id } = query || {};

//   useEffect(() => {
//     if (id) {
//       router.push(`/?id=${id}`);
//     }
//   }, [id]);

//   return null;
// }
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import styles from "../styles/userDashboard.module.css";
import Footer from "../components/Footer";

const UserDashboard = () => {
  const router = useRouter();
  //    const { id } = router.query;
  const { query } = router;
  const { id } = query || {};
  const [user, setUser] = useState(null);
  const [images, setImages] = useState([]);
  const [previewSrc, setPreviewSrc] = useState("");

  useEffect(() => {
    if (id) {
      fetchUserDetails(id);
    }
  }, [id]);

  const fetchUserDetails = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:3001/user/${userId}`);
      setUser(response.data.user);
      setImages(response.data.images);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const handlePreview = (src) => {
    setPreviewSrc(src);
  };

  const handleClosePreview = () => {
    setPreviewSrc("");
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={styles.container}>
        <h1>{user.fullname}'s Dashboard</h1>
        {user.profile_picture && (
          <img
            src={`http://localhost:3001/${user.profile_picture}`}
            alt="Profile"
            className={styles.profilePicture}
          />
        )}
        <p>
          <strong>Studio:</strong> {user.studio}
        </p>
        <p>
          <strong>Address:</strong> {user.address}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>

        <div className={styles.imagesContainer}>
          {images.map((image, index) => (
            <div key={index} className={styles.imageWrapper}>
              <img
                src={`http://localhost:3001/${image.image_path}`}
                alt="Uploaded"
                onClick={() =>
                  handlePreview(`http://localhost:3001/${image.image_path}`)
                }
              />
            </div>
          ))}
        </div>
      </div>

      {previewSrc && (
        <div
          className={`${styles.previewOverlay} ${
            previewSrc ? styles.show : ""
          }`}
          onClick={handleClosePreview}
        >
          <img src={previewSrc} alt="Preview" />
        </div>
      )}

      <Footer />
    </>
  );
};

export default UserDashboard;
