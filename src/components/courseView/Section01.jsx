import React from "react";
import styles from '../../styles/courseView/section01.module.css';
import background from '../../assets/images/courseView/background.png';
import clear from '../../assets/images/courseView/Clear.png';
import change from '../../assets/images/courseView/Change.png';


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
            <p className={styles.mainText}>코스선택하기</p>
            <div className={styles.courseNameBarContainer}>
                <p className={styles.courseNameBar}>|</p>
            </div>
            <div className={styles.courseNameContainer}>
                <p className={styles.courseName}> 가족여행코스</p>
                <p className={styles.codeBox}>#99764210</p>
            </div>
                  <div className={styles.buttonContainer}>
                    <img 
                        src={clear}
                        alt="course clear" 
                        className={styles.button}
                    />
                    <img 
                        src={change}
                        alt="course change" 
                        className={styles.button}
                    />
            </div>
        </div>
    );
};

export default Section01;