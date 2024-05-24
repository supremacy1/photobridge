"use client"
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState(null);
  const [images, setImages] = useState([]);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', { username, password });
      setUserId(response.data.userId);
      fetchImages(response.data.userId);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const fetchImages = async (userId) => {
    try {
      const response = await axios.get('http://localhost:3001/images', { params: { userId } });
      setImages(response.data);
    } catch (error) {
      console.error('Failed to fetch images:', error);
    }
  };

  const handleImageUpload = async (event) => {
    const files = event.target.files;
    const formData = new FormData();
    formData.append('userId', userId);
    for (let file of files) {
      formData.append('images', file);
    }

    try {
      await axios.post('http://localhost:3001/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      fetchImages(userId);
    } catch (error) {
      console.error('Image upload failed:', error);
    }
  };

  return (
    <div>
      {!userId ? (
        <div>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          <h2>Upload Images</h2>
          <input type="file" multiple onChange={handleImageUpload} />
          <h2>Uploaded Images</h2>
          <div>
            {images.map((image) => (
              <img key={image.id} src={`http://localhost:3001/${image.image_path}`} alt="uploaded" width="200" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
