// components/Slideshow.js
import { useState, useEffect } from 'react';
import styles from '../styles//Slideshow.module.css';

const images = [
    '/images/b1.jpg',
    '/images/b2.jpg',
    '/images/b4.jpg',
];

const texts = [
    'Caption for Image 1',
    'Caption for Image 2',
    'Caption for Image 3',
];

const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.slideshowContainer}>
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
                    style={{ backgroundImage: `url(${image})` }}
                >
                    {index === currentIndex && <div className={styles.caption}>{texts[index]}</div>}
                </div>
            ))}
        </div>
    );
};

export default Slideshow;
