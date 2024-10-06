import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/tourism/section01.module.css';
import background from '../../assets/images/tourism/Tourism_background.gif';
import title from '../../assets/images/tourism/Tourism_Title.png';
import Quiz from '../../components/quiz/Quiz1.jsx';
import CourseSelect from './CourseSelect.jsx';
import ImageLazy from '../imgLazy/ImageLazy.jsx';

const Section01 = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.allContainer}>
            <Quiz />
            <div className={styles.imageContainer}>
                <ImageLazy 
                    src={background}
                    alt="Tourism Background" 
                    className={styles.image}
                />
            </div>
            <div className={styles.tilteImageContainer}>
                <ImageLazy 
                    src={title}
                    alt="Tourism Title" 
                    className={styles.tilteImage}
                />
            </div>
            <div className={styles.mainTextContainer}>
                <p className={styles.mainSmallText}>KORAD가 눈여겨본 👀</p>
                <p className={styles.mainText}> 테마별 추천코스</p>
            </div>
                <CourseSelect/>
            <div className={styles.courseButtonContainer}>
                <button className={styles.courseButton} onClick={()=>navigate('/courseSelection')}>코스선택하기</button>
            </div>
        </div>
      );
  };
  
  export default Section01;