import React from "react";
import styles from '../../styles/courseView/section03.module.css';
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
                <div className={styles.card}>
                    <div className={styles.museumName}>경주 국립박물관</div>
                    <hr className={styles.underline} />
                    <div className={styles.museumAddress}>경북 경주시 일정로 186</div>
                </div>
                <div className={styles.card}>
                    <div className={styles.museumName}>경주 국립박물관</div>
                    <hr className={styles.underline} />
                    <div className={styles.museumAddress}>경북 경주시 일정로 186</div>
                </div>
                <div className={styles.card}>
                    <div className={styles.museumName}>경주 국립박물관</div>
                    <hr className={styles.underline} />
                    <div className={styles.museumAddress}>경북 경주시 일정로 186</div>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                    <button className={styles.customButton}>홈페이지 바로가기</button>
                    <button className={styles.customButton}>홈페이지 바로가기</button>
                    <button className={styles.customButton}>홈페이지 바로가기</button>
            </div>
            <div className={styles.underline2}></div>
            <button className={styles.saveButton}>코스 내보내기</button>
        </div>
    );
};

export default Section03;