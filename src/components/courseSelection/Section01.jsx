import React from "react";
import styles from '../../styles/courseSelection/section01.module.css';
import background from '../../assets/images/courseSelection/backgroundImg.png';

const Section01 = () => {
    return (
        <div className={styles.allContainer}>
            <div className={styles.imageContainer}>
                <img 
                    src={background}
                    alt="course Background" 
                    className={styles.image}
                />
            </div>
            <p className={styles.mainText}>코스 보기</p>
            <div className={styles.courseNameBarContainer}>
                <p className={styles.courseNameBar}>|</p>
            </div>
            <div className={styles.courseNameContainer}>
                <p className={styles.courseName}> 혼자서도 잘 다녀요,</p>
                <p className={styles.courseName}> 역사가 깃든 경주 한 바퀴</p>
            </div>
        </div>
    );
};

export default Section01;