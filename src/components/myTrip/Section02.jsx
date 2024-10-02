import React, { useState } from "react";
import styles from '../../styles/myTrip/section02.module.css';
import Map from './Map.jsx';

const Section02 = () => {
    const [rows, setRows] = useState([
        { id: 1, isMemoVisible: false },
        { id: 2, isMemoVisible: false },
        { id: 3, isMemoVisible: false }
    ]);

    // 일정 추가하기 버튼 클릭 시 새로운 row 추가
    const addRow = () => {
        const newId = rows.length + 1;
        setRows([...rows, { id: newId, isMemoVisible: false }]);
    };

    // 메모 보이기/숨기기 토글
    const toggleMemoVisibility = (id) => {
        setRows(rows.map(row => 
            row.id === id ? { ...row, isMemoVisible: !row.isMemoVisible } : row
        ));
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
                    <button className={styles.addScheduleButton} onClick={addRow}>일정 추가하기</button>
                </div>
            </div>
            <div className={styles.container}>
                {rows.map((row) => (
                    <div key={row.id} className={styles.row}>
                        <div className={styles.searchBox}>
                            <div className={styles.textContainer3}>
                                <p className={styles.text}>No.{row.id}</p>
                                <p className={styles.text}>명칭</p>
                                <input type="text" className={styles.textBox2} />
                            </div>
                        </div>
                        <button
                            onClick={() => toggleMemoVisibility(row.id)}
                            className={styles.arrowButton}
                        >
                            {row.isMemoVisible ? '▲' : '▼'}
                        </button>
                        <button className={styles.saveButton}>저장</button>
                        {row.isMemoVisible && (
                            <div className={styles.memoContainer}>
                                <input type="text" placeholder="메모를 작성해 주세요. (20자 이내)" className={styles.memoTextBox} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section02;
