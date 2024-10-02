import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/myTrip/section03.module.css';

const Section03 = () => {
    const navigate = useNavigate();
    
    return(
        <div className={styles.allContainer}>
            <div className={styles.textAllContainer}>
                <div className={styles.underline}></div>
                <div className={styles.textContainer}>
                    <p className={styles.noText}>No. 1</p>
                    <p className={styles.courseText}>경주 국립박물관|경주시 일정로 186</p>
                    <p className={styles.memoText}>오전20:00~오후16:00</p>
                </div>
                <div className={styles.textContainer}>
                    <p className={styles.noText}>No. 1</p>
                    <p className={styles.courseText}>경주 국립박물관|경주시 일정로 186</p>
                    <p className={styles.memoText}>오전20:00~오후16:00</p>
                </div>
                <div className={styles.textContainer}>
                    <p className={styles.noText}>No. 1</p>
                    <p className={styles.courseText}>경주 국립박물관|경주시 일정로 186</p>
                    <p className={styles.memoText}>오전20:00~오후16:00</p>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.backButton}>취소</button>
                <button className={styles.saveButton} onClick={()=>navigate('/courseView')}>저장</button>
            </div>
        </div>
    );
}

export default Section03;