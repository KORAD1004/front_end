import { useState, useRef } from 'react';
import id1 from '../../assets/images/tourism/id1.png';
import id2 from '../../assets/images/tourism/id2.png';
import id3 from '../../assets/images/tourism/id3.png';
import styles from '../../styles/tourism/courseSelect.module.css';

const images = [
  { id: 1, src: id1, alt: 'Image 1' },
  { id: 2, src: id2, alt: 'Image 2' },
  { id: 3, src: id3, alt: 'Image 3' },
];

const CourseSelect = ({ onImageSelect }) => {
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

    // 선택된 이미지의 ID를 상위 컴포넌트로 전달
    if (onImageSelect) {
      onImageSelect(images[index].id); // props로 전달받은 함수 실행
    } else {
      console.warn("onImageSelect is not provided");
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
          <img
            key={image.id}
            ref={(el) => (imageRefs.current[index] = el)}
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