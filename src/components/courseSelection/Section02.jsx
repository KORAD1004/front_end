import React from "react";
import styles from '../../styles/courseSelection/section02.module.css';
import map from '../../assets/images/courseSelection/지도예시.png';
import CourseMap from "./CourseMap";

const Section02 = () => {
    return (
        <div className={styles.allContainer}>
            <div className={styles.tagContainer}>
                <p className={styles.tag}>나홀로</p>
                <p className={styles.tag}>상징적</p>
                <p className={styles.tag}>역사적</p>
            </div>
            <CourseMap />
            <div className={styles.timeContainer}>
                <div className={styles.timeBox}>
                    <p className={styles.timeText}>이동시간 포함 예상 소요시간</p>
                    <div className={styles.time}></div>
                </div>
            </div>
        </div>
    );
};

export default Section02;