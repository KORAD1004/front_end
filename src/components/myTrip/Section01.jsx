import React from "react";
import styles from '../../styles/myTrip/section01.module.css';
import Background from '../../assets/images/myTrip/background.png';

const Section01 = () => {
    return (
        <div className={styles.allContainer}>
            <div className={styles.imgContainer}>
                <img 
                    src={Background}
                    alt="myTrip Background" 
                    className={styles.image}
                />
            </div>
            <div className={styles.tripBigContainer}>
                <div className={styles.tripMiniTextContainer}>
                    <p className={styles.tripMiniText}>코스 저장 코드 #89002261</p>
                </div>
                <div className={styles.tripTextContainer}>
                    <p className={styles.tripText}>여행명</p>
                    <div className={styles.longInputBox}></div>
                    <p className={styles.tripText}>인원수</p>
                    <div className={styles.shortInputBox}></div>
                </div>
                <div className={styles.tripTextContainer}>
                    <p className={styles.tripText}>기간</p>
                    <div className={styles.longInputBox2}></div>
                    <p className={styles.tripText}>일차</p>
                    <div className={styles.shortInputBox}></div>
                </div>
                <div className={styles.tripTextContainer}>
                    <div className={styles.longInputBox3}></div>
                    <p className={styles.tripMiniText2}>| 1박2일 기준</p>
                </div>
            </div>
        </div>
    );
};

export default Section01;