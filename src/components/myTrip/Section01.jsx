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
                    <input type="text" className={styles.longInputBox}></input>
                    <p className={styles.tripText}>인원수</p>
                    <input type="text" className={styles.shortInputBox}></input>
                </div>
                <div className={styles.tripTextContainer}>
                    <p className={styles.tripText}>기간</p>
                    <input type="text" placeholder="시작 날짜" className={styles.longInputBox2}></input>
                    <p className={styles.tripText}>일차</p>
                    <input type="text" className={styles.shortInputBox}></input>
                </div>
                <div className={styles.tripTextContainer}>
                    <input type="text" placeholder="종료 날짜" className={styles.longInputBox3}></input>
                    <p className={styles.tripMiniText2}>| 1박2일 기준</p>
                </div>
            </div>
        </div>
    );
};

export default Section01;