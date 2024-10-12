import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/myTrip/section03.module.css';
import axios from "axios";

const Section03 = ({ tripName, numPeople, startDate, endDate, dayCount, rows = [] }) => {
    const navigate = useNavigate();

    const handleSave = async () => {

        if (!tripName || !numPeople || !startDate || !endDate || !dayCount) {
            alert("모든 정보를 입력해주세요");
            return;
        }

        const travelData = {
            travelName: tripName,
            headCount: parseInt(numPeople, 10),
            startDate: startDate,
            endDate: endDate,
            days: dayCount,
            tourListDtoList: rows
                .filter((row) => row.hotspotId)
                .map((row) => ({
                    number: row.id,
                    hotspot: row.hotspotId,
                    memo: row.memo || ""
                }))
        };

        try {
            await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/schedule`, travelData)
                .then(res => {
                    navigate(`/courseView?code=${res.data}`);
                });

        } catch (error) {
            console.error("저장 중 오류 발생:", error);
        }
    };

    if (rows.length === 0) {
        return null;
    }

    return (
        <div className={styles.allContainer}>
            <div className={styles.textAllContainer}>
                {rows.map((row, index) => (
                    <div key={row.id} className={styles.textContainer}>
                        <div className={styles.noTextContainer}>
                            <p className={styles.noText}>No. {index + 1}</p>
                        </div>
                        {row.place ? (
                            <>
                                <div className={styles.courseTextContainer}>
                                    <p className={styles.courseText}>{row.place} | {row.address}</p>
                                </div>
                                <div className={styles.memoTextContainer}>
                                    <p className={styles.memoText}>{row.memo}</p>
                                </div>
                            </>
                        ) : (
                            <div className={styles.courseTextContainer}>
                                <p className={styles.noDataText}>정보가 없습니다.</p>
                            </div>
                        )}
                    </div>
                ))}
                <div className={styles.buttonContainer}>
                    <button
                        className={styles.backButton}
                        onClick={() => navigate(-1)}
                    >
                        취소
                    </button>
                    <button
                        className={styles.saveButton}
                        onClick={handleSave}
                    >
                        저장
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Section03;
