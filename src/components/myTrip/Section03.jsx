import { useNavigate } from 'react-router-dom';
import styles from '../../styles/myTrip/section03.module.css';
import axios from "axios";
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Section03 = ({ tripName, numPeople, startDate, endDate, dayCount, rows }) => {
    const navigate = useNavigate();
    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
    const [selectedRowId, setSelectedRowId] = useState(null); // 클릭된 행의 ID를 추적

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

    const handleRowClick = (id) => {
        // 클릭된 row의 ID를 토글 (이미 클릭된 거라면 닫기)
        setSelectedRowId((prevId) => (prevId === id ? null : id));
    };

    if (rows.length === 0) {
        return null;
    }

    return (
        <div className={styles.allContainer}>
            <div className={styles.textAllContainer}>
                {isDesktop && (
                    <div className={styles.saveContainer}>
                        <div className={styles.textContainer2}>
                            <div className={styles.mapText}>여행지 저장목록</div>
                        </div>
                    </div>
                )}
                {!isDesktop && (
                    <div className={styles.underlineContainer}>
                        <div className={styles.underline}></div>
                    </div>
                )}
                {rows.map((row, index) => (
                    <div key={row.id} style={{position:"relative", marginLeft:"5%"}}>
                        {/* 여행지 정보 */}
                        <div
                            className={styles.textContainer} 
                            onClick={() => handleRowClick(row.id)}
                            style={selectedRowId===row.id?{height:"90px"}:null}
                        >
                            <div className={styles.noTextContainer}>
                                {!isDesktop ? (
                                    <p className={styles.noText}>No. {index + 1}</p>
                                ) : (
                                    <p className={styles.noText}>{index + 1}번째 여행지</p>
                                )}
                            </div>
                            {row.place ? (
                            <>
                                <div className={styles.courseTextContainer}>
                                    <p className={styles.courseText}>{row.place}</p>
                                    <p className={styles.courseText}>|</p>
                                    <p className={styles.courseText}>{row.address}</p>
                                </div>
                                {!isDesktop&&
                                <div className={styles.memoTextContainer}>
                                    <p className={styles.memoText}>{row.memo}</p>
                                </div>}
                            </>
                            ) : (
                                <div className={styles.courseTextContainer}>
                                    <p className={styles.noDataText}>정보가 없습니다.</p>
                                </div>
                            )}
                        </div>
                        {isDesktop&&selectedRowId === row.id && (
                            <div className={styles.memoContainer}>
                                <p className={styles.memoText}>{row.memo || "메모가 없습니다."}</p>
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
};

export default Section03;

Section03.propTypes = {
    tripName: PropTypes.string, 
    numPeople: PropTypes.string, 
    startDate: PropTypes.string, 
    endDate: PropTypes.string,
    dayCount: PropTypes.string, 
    rows: PropTypes.array
}