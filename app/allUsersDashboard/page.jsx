"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import styles from '../styles/allUsersDashboard.module.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Image from 'next/image';

// import '/styles/globals.css'

export default function Home() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [previewSrc, setPreviewSrc] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isProfilePreview, setIsProfilePreview] = useState(false);
  const [profilePreviewSrc, setProfilePreviewSrc] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const fetchUserDetails = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:3001/user/${userId}`);
      setSelectedUser(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const handleUserClick = (userId) => {
    fetchUserDetails(userId);
  };

  const handlePreview = (index) => {
    setIsProfilePreview(false);
    setCurrentImageIndex(index);
    setPreviewSrc(`http://localhost:3001/${selectedUser.images[index].image_path}`);
  };

  const handleProfilePreview = (src) => {
    setIsProfilePreview(true);
    setProfilePreviewSrc(src);
  };

  const handleClosePreview = () => {
    setPreviewSrc('');
  };

  const handleCloseProfilePreview = () => {
    setProfilePreviewSrc('');
  };

  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % selectedUser.images.length;
    setCurrentImageIndex(nextIndex);
    setPreviewSrc(`http://localhost:3001/${selectedUser.images[nextIndex].image_path}`);
  };

  const handlePrevImage = () => {
    const prevIndex = (currentImageIndex - 1 + selectedUser.images.length) % selectedUser.images.length;
    setCurrentImageIndex(prevIndex);
    setPreviewSrc(`http://localhost:3001/${selectedUser.images[prevIndex].image_path}`);
  };

  const handleBackToUsers = () => {
    setSelectedUser(null);
  };

  return (
    <>
    <Header />
     <div className={styles.maincontainer}>
      <div className={styles.container}>
        {!selectedUser ? (
          <>
            <h1>All Certify photographer</h1>
            <div className={styles.usersContainer}>
            {users.map((user) => (
    <div key={user.user_id} className={styles.userCard} onClick={() => handleUserClick(user.user_id)}>
      {user.profile_picture && (
        <Image
          src={`http://localhost:3001/${user.profile_picture}`}
          alt="Profile"
          className={styles.profilePicture}
          width={100} // Set the width of the image
          height={100} // Set the height of the image
        />
      )}                  <h3><strong>Name:</strong> {user.fullname}</h3>
                  <p><strong>Studio Name:</strong>{user.studio}</p>
                  <p><strong>Phone:</strong>{user.phone}</p>
                  <p><strong>Email:</strong>{user.email}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div>
            <button onClick={handleBackToUsers} className={styles.backButton}>Back to All Users</button>
            <h1>{selectedUser.user.fullname}'s Dashboard</h1>
            {selectedUser.user.profile_picture && (
              <image
                src={`http://localhost:3001/${selectedUser.user.profile_picture}`} 
                alt="Profile" 
                className={styles.profilePicture} 
                onClick={() => handleProfilePreview(`http://localhost:3001/${selectedUser.user.profile_picture}`)}
                width={100} // Set the width of the image
                height={100} 
              />
            )}
            <p><strong>Studio:</strong> {selectedUser.user.studio}</p>
            <p><strong>Address:</strong> {selectedUser.user.address}</p>
            <p><strong>Phone:</strong> {selectedUser.user.phone}</p>
            <p><strong>Email:</strong> {selectedUser.user.email}</p>

            <div className={styles.imagesContainer}>
              {selectedUser.images.map((image, index) => (
                <div key={index} className={styles.imageWrapper}>
                  <image src={`http://localhost:3001/${image.image_path}`} alt="Uploaded" onClick={() => handlePreview(index)} 
                   width={100} // Set the width of the image
                   height={100} 
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {previewSrc && (
        <div className={`${styles.previewOverlay} ${previewSrc ? styles.show : ''}`}>
         
          <button className={styles.prevButton} onClick={handlePrevImage}>Previous</button>
          <image src={previewSrc} alt="Preview"
           width={100} // Set the width of the image
           height={100} 
          />
          <button className={styles.nextButton} onClick={handleNextImage}>Next</button>
          <button className={styles.closeButton} onClick={handleClosePreview}>Close</button>
        </div>
      )}

      {profilePreviewSrc && (
        <div className={`${styles.previewOverlay} ${profilePreviewSrc ? styles.show : ''}`}>
          <image src={profilePreviewSrc} alt="Profile Preview" 
           width={100} // Set the width of the image
           height={100} />
          <button className={styles.closeButton} onClick={handleCloseProfilePreview}>Close</button>
        </div>
      )}
</div>
      <Footer />
    </>
  );
}


