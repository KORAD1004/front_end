import React from "react";
import styles from '../../styles/tourism/section03.module.css';
import bottom from '../../assets/images/tourism/bottomImg.png';
import star from '../../assets/images/tourism/starImg.png'

const Section03 = () => {
    return (
        <div className={styles.allContainer}>
            <div className={styles.imgContainer}>
                <img 
                    src={bottom}
                    alt="bottom image" 
                    className={styles.bottomImg}
                />
            </div>
            <div className={styles.mainTextContainer}>
                <p className={styles.mainSmallText}>KORAD가 직접 선정한</p>
                <p className={styles.mainText}>경주 아티클 클립</p>
            </div>
            <div className={styles.clipContainer}>
                <div className={styles.clip}>
                    <div className={styles.clipBoxContainer}>
                        <div className={styles.clipBox}>BLOG</div>
                    </div>
                    <div className={styles.clipTextContainer}>
                        <p className={styles.clipText}>한국원자력공단 | 8월, 경주 어때?</p>
                    </div>
                    <div className={styles.clipTextContainer}>
                        <p className={styles.clipTextClick}>바로가기</p>
                    </div>
                </div>
                <div className={styles.clip}>
                    <div className={styles.clipBoxContainer}>
                        <div className={styles.clipBox}>BLOG</div>
                    </div>
                    <div className={styles.clipTextContainer}>
                        <p className={styles.clipText}>한국원자력공단 | 8월, 경주 어때?</p>
                    </div>
                    <div className={styles.clipTextContainer}>
                        <p className={styles.clipTextClick}>바로가기</p>
                    </div>
                </div>
                <div className={styles.clip}>
                    <div className={styles.clipBoxContainer}>
                        <div className={styles.clipBox}>BLOG</div>
                    </div>
                    <div className={styles.clipTextContainer}>
                        <p className={styles.clipText}>한국원자력공단 | 8월, 경주 어때?</p>
                    </div>
                    <div className={styles.clipTextContainer}>
                        <p className={styles.clipTextClick}>바로가기</p>
                    </div>
                </div>
                <div className={styles.clip}>
                    <div className={styles.clipBoxContainer}>
                        <div className={styles.clipBox}>BLOG</div>
                    </div>
                    <div className={styles.clipTextContainer}>
                        <p className={styles.clipText}>한국원자력공단 | 8월, 경주 어때?</p>
                    </div>
                    <div className={styles.clipTextContainer}>
                        <p className={styles.clipTextClick}>바로가기</p>
                    </div>
                </div>
                <div className={styles.clip}>
                    <div className={styles.clipBoxContainer}>
                        <div className={styles.clipBox}>BLOG</div>
                    </div>
                    <div className={styles.clipTextContainer}>
                        <p className={styles.clipText}>한국원자력공단 | 8월, 경주 어때?</p>
                    </div>
                    <div className={styles.clipTextContainer}>
                        <p className={styles.clipTextClick}>바로가기</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section03;