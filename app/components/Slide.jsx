// // components/PictureSlider.tsx

// import { useState, useEffect } from 'react';
// import styles from "../styles/Slide.module.css"; 

// const images = [
//   '/images/p1.jpeg',
//   '/images/p2.jpg',
//   '/images/p4.jpg',
//   // Add more image URLs as needed
// ];

// const PictureSlider = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImage = () => {
//     const nextIndex = (currentImageIndex + 1) % images.length;
//     setCurrentImageIndex(nextIndex);
//   };

//   const prevImage = () => {
//     const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
//     setCurrentImageIndex(prevIndex);
//   };
//   useEffect(() => {
//     const interval = setInterval(nextImage, 3000); // Auto-slide every 3 seconds
//     return () => clearInterval(interval); // Clean up interval on component unmount
//   }, [currentImageIndex]); // Re-run effect when currentImageIndex changes

//   return (
//     <div className="picture-slider">
//       <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
//       {/* <div className="controls">
//         <button onClick={prevImage}>Previous</button>
//         <button onClick={nextImage}>Next</button>
//       </div> */}
//     </div>
//   );
// };

// export default PictureSlider;
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from "../styles/Slide.module.css";

const images = [
  '/images/p1.jpeg',
  '/images/p2.jpg',
  '/images/p4.jpg',
];

const PictureSlide = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000); // Change 3000 to the desired interval time in milliseconds (e.g., 5000 for 5 seconds)
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.container}>
      {/* <button onClick={prevImage}>Previous</button> */}
      <div className={styles.imageContainer}>
        <Image
          src={images[currentImage]}
          alt={`Image ${currentImage + 1}`}
          width={500}
          height={300}
        />
      </div>
      {/* <button onClick={nextImage}>Next</button> */}
    </div>
  );
};

export default PictureSlide;
