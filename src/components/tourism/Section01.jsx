import React from "react";
import styles from '../../styles/tourism/section01.module.css';
import background from '../../assets/images/tourism/Tourism_background.png';
import course1 from '../../assets/images/tourism/코스예시.png';
import course2 from '../../assets/images/tourism/코스예시.png';
import course3 from '../../assets/images/tourism/코스예시.png';
import title from '../../assets/images/tourism/Tourism_Title.png';

const images = [
    '../../assets/images/tourism/코스예시.png',
    '../../assets/images/tourism/코스예시.png',
    '../../assets/images/tourism/코스예시.png',
  ];

const Section01 = () => {
    return (
        <div className={styles.allContainer}>
            <div className={styles.imageContainer}>
                <img 
                    src={background}
                    alt="Tourism Background" 
                    className={styles.image}
                />
            </div>
            <div className={styles.tilteImageContainer}>
                <img 
                    src={title}
                    alt="Tourism Title" 
                    className={styles.tilteImage}
                />
            </div>
            <div className={styles.mainTextContainer}>
                <p className={styles.mainSmallText}>KORAD가 눈여겨본 👀</p>
                <p className={styles.mainText}> 테마별 추천코스</p>
            </div>
                <img 
                    src={course1}
                    alt="CourseImage" 
                    className={styles.courseImage}
                />
            <div className={styles.courseButtonContainer}>
                <button className={styles.courseButton}>코스선택하기</button>
            </div>
        </div>
      );
  };
  
  export default Section01;