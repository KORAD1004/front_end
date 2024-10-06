import React from "react";
import styles from '../../styles/courseView/section02.module.css';
import CourseMap from "./CourseMap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faUser } from '@fortawesome/free-solid-svg-icons';

const Section02 = () => {
    return (
        <div className={styles.allContainer}>
            <div className={styles.scheduleContainer}>
            <div className={styles.scheduleItem}>
                    <FontAwesomeIcon icon={faCalendarAlt} className={styles.icon} />
                    <p className={styles.scheduleText}>24.10.11 ~ 24.10.14</p>
                </div>
                <div className={styles.scheduleItem}>
                    <FontAwesomeIcon icon={faClock} className={styles.icon} />
                    <p className={styles.scheduleText}>2일차</p>
                </div>
                <div className={styles.scheduleItem}>
                    <FontAwesomeIcon icon={faUser} className={styles.icon} />
                    <p className={styles.scheduleText}>4인</p>
                </div>
            </div>
            <div className={styles.underline}></div>
            <CourseMap />
        </div>
    );
};

export default Section02;