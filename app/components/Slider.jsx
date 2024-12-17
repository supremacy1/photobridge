import { useState, useEffect } from 'react';
// import styles from './Slider.module.scss';
import styles from "../styles/Slider.module.css";


const images = [
  { src: '/images/p1.jpeg', alt: 'Drone' },
    { src: '/images/p2.jpg', alt: 'Elephant' },
    { src: '/images/c3.jpg', alt: 'Cat' },
    { src: '/images/c2.jpg', alt: 'Dog' },
    { src: '/images/pp.jpg', alt: 'Portrait' },
    { src: '/images/p4.jpg', alt: 'Dance' }
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to move to the previous image (optional)
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // Change every 3 seconds
    return () => clearInterval(interval); // Clean up the interval
  }, []);

  return (
    <div className={styles.slider}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      ></div>
      <div className={styles.controls}>
        <button onClick={prevImage}>&#10094;</button>
        <button onClick={nextImage}>&#10095;</button>
      </div>
    </div>
  );
};

export default Slider;
