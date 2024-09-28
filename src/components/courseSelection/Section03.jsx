import React from "react";
import styles from '../../styles/courseSelection/section03.module.css';
import course1 from '../../assets/images/courseSelection/코스1.png';
import course2 from '../../assets/images/courseSelection/코스2.png';
import course3 from '../../assets/images/courseSelection/코스3.png';

const Section03 = () => {
    return (
        <div className={styles.allContainer}>
            <div className={styles.courseImgeAllContainer}>
                <div className={styles.courseImageContainer}>
                    <img 
                        src={course1}
                        alt="course Imgaes1" 
                        className={styles.courseImage}
                    />
                </div>
                <div className={styles.courseImageContainer}>
                    <img 
                        src={course2}
                        alt="course Imgaes2" 
                        className={styles.courseImage}
                    />
                </div>
                <div className={styles.courseImageContainer}>
                    <img 
                        src={course3}
                        alt="course Imgaes3" 
                        className={styles.courseImage}
                    />
                </div>
            </div>
            <div className={styles.courseContainer}>
                <div className={styles.courseBox}>
                    <div className={styles.courseTextContainer}>
                        <p className={styles.courseText}>📍경주 국립박물관</p>
                    </div>
                    <div className={styles.courseTextContainer}>
                        <p className={styles.courseText}>⟶</p>
                    </div>
                    <div className={styles.courseTextContainer}>
                        <p className={styles.courseText}>📍경주 국립박물관</p>
                    </div>
                    <div className={styles.courseTextContainer}>
                        <p className={styles.courseText}>⟶</p>
                    </div>
                    <div className={styles.courseTextContainer}>
                        <p className={styles.courseText}>📍경주 국립박물관</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section03;