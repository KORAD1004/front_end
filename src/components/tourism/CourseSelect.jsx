import { useState, useRef } from 'react';
import id1 from '../../assets/images/tourism/id1.png';
import id2 from '../../assets/images/tourism/id2.png';
import id3 from '../../assets/images/tourism/id3.png';
import styles from '../../styles/tourism/courseSelect.module.css';
import ImageLazy from '../imgLazy/ImageLazy';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import '../../styles/components/swiper.css';

const images = [
  { id: 1, src: id1, alt: 'Image 1' },
  { id: 2, src: id2, alt: 'Image 2' },
  { id: 3, src: id3, alt: 'Image 3' },
];

const CourseSelect = ({ onImageSelect }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRefs = useRef([]);
  const galleryRef = useRef(null);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);

    if (onImageSelect) {
      onImageSelect(images[swiper.realIndex].id); // props로 전달받은 함수 실행
      
    } else {
      console.warn("onImageSelect is not provided");
    }
  };

  const handleImageClick = (swiper, index) => {
    swiper.slideTo(swiper.clickedIndex);
    setCurrentIndex(index);
  };

  return (
    <div className={styles.imageContainer}>
      <div className={styles.textAndDotsContainer}>
        <div className={styles.dotIndicatorContainer}>
          {images.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${currentIndex === index ? styles.active : ''}`}
            />
          ))}
        </div>
      </div>

      <div className={styles.imageGallery} ref={galleryRef}>
        <Swiper
          ref={swiperRef}
          spaceBetween={10}
          autoHeight={true}
          slidesPerView={'auto'}
          centeredSlides={true}
          onSlideChange={handleSlideChange}
          slidesPerGroup={1}
          initialSlide={images.length - 2}
          loop={true}
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={image.id}
              onClick={() => handleImageClick(swiperRef.current.swiper, index)}
            >
              <ImageLazy
                key={image.id}
                refer={(el) => (imageRefs.current[index] = el)}
                src={image.src}
                alt={image.alt}
                className={`${styles.galleryImage} ${currentIndex === index ? styles.active : ''}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CourseSelect;