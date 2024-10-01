import React, {useState} from "react";
import styles from '../../styles/myTrip/section02.module.css';
import Map from './Map.jsx';

const Section02 = () => {
    const [isMemoVisible, setIsMemoVisible] = useState(false);

    const toggleMemoVisibility = () => {
      setIsMemoVisible(!isMemoVisible);
    };

    return (
        <div className={styles.allContainer}>
            <div className={styles.textContainer}>
                <p className={styles.mapText}>지도</p>
            </div>
            <div className={styles.mapContainer}>
                <Map />
            </div>
            <div className={styles.searchContainer}>
                <div className={styles.textContainer2}>
                    <p className={styles.mapText}>관광지 검색하기</p>
                    <button className={styles.addScheduleButton}>일정 추가하기</button>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.row}>
                    <input type="text" placeholder="NO." className={styles.textBox} />
                    <input type="text" placeholder="명칭" className={styles.textBox} />
                    <button onClick={toggleMemoVisibility} className={styles.arrowButton}>
                        {isMemoVisible ? '▲' : '▼'}
                    </button>
                    <button className={styles.saveButton}>저장</button>
                </div>
                {isMemoVisible && (
                    <div className={styles.memoContainer}>
                        <input type="text" placeholder="메모를 작성해 주세요. (20자 이내)" className={styles.memoTextBox} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Section02;