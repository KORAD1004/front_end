import React from "react";
import styles from '../../styles/courseView/section02.module.css';
import CourseMap from "./CourseMap";
import Days from '../../assets/images/courseView/Days.png';
import Number from '../../assets/images/courseView/Number.png';
import People from '../../assets/images/courseView/People.png';

const Section02 = () => {
    return (
        <div className={styles.allContainer}>
            <div className={styles.scheduleContainer}>
                <img 
                        src={Days}
                        alt="course Days" 
                        className={styles.scheduleImage}
                />
                <p className={styles.scheduleText}>
                    24.10.11 ~ 24.10.14
                </p>
                <img 
                        src={Number}
                        alt="course Number" 
                        className={styles.scheduleImage}
                />
                <p className={styles.scheduleText}>
                    2일차
                </p>
                <img 
                        src={People}
                        alt="course People" 
                        className={styles.scheduleImage}
                />
                <p className={styles.scheduleText}>
                    4인
                </p>
            </div>
            <div className={styles.underline}></div>
            <CourseMap />
        </div>
    );
};

export default Section02;