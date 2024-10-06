import { useState, useRef } from 'react';
import example1 from '../../assets/images/tourism/코스예시.png';
import example2 from '../../assets/images/tourism/코스예시.png';
import example3 from '../../assets/images/tourism/코스예시.png';
import styles from '../../styles/tourism/courseSelect.module.css';
import ImageLazy from '../imgLazy/ImageLazy';

const images = [
  { id: 1, src: example1, alt: 'Image 1' },
  { id: 2, src: example2, alt: 'Image 2' },
  { id: 3, src: example3, alt: 'Image 3' },
];

const CourseSelect = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRefs = useRef([]);
  const galleryRef = useRef(null);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    const clickedImage = imageRefs.current[index];
    const galleryElement = galleryRef.current;

    if (clickedImage && galleryElement) {
      const offsetLeft = clickedImage.offsetLeft - galleryElement.offsetWidth / 2 + clickedImage.offsetWidth / 2;
      galleryElement.scrollTo({
        left: offsetLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.imageContainer}>
      <div className={styles.textAndDotsContainer}>
        <div className={styles.dotIndicatorContainer}>
          {images.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${currentIndex === index ? styles.active : ''}`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      </div>

      <div className={styles.imageGallery} ref={galleryRef}>
        {images.map((image, index) => (
          <ImageLazy
            key={image.id}
            refer={(el) => (imageRefs.current[index] = el)}
            src={image.src}
            alt={image.alt}
            className={`${styles.galleryImage} ${currentIndex === index ? styles.active : ''}`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default CourseSelect;