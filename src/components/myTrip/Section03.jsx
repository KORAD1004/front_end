import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/myTrip/section03.module.css';

const Section03 = ({ rows = [] }) => {
    const navigate = useNavigate();
    // 예시: 의존성 배열을 빈 배열([])로 설정하여 마운트될 때 한 번만 실행
    useEffect(() => {
        console.log("Section03 렌더링");
    }, []);  // 빈 배열을 사용하여 컴포넌트가 처음 마운트될 때만 실행


    return (
        <div className={styles.allContainer}>
            <div className={styles.textAllContainer}>
                {rows.length > 0 ? (
                    rows.map((row) => (
                        <div key={row.id} className={styles.textContainer}>
                            <p className={styles.noText}>No. {row.id}</p>
                            {row.place ? (
                                <>
                                    <p className={styles.courseText}>{row.place} | {row.address}</p>
                                    <p className={styles.memoText}>{row.memo}</p>
                                </>
                            ) : (
                                <p className={styles.noDataText}>정보가 없습니다.</p>
                            )}
                        </div>
                    ))
                ) : (
                    <div className={styles.buttonContainer}>
                        <button
                            className={styles.backButton}
                            onClick={() => navigate(-1)}
                        >
                            취소
                        </button>
                        <button
                            className={styles.saveButton}
                            onClick={() => navigate('/courseView')}
                        >
                            저장
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Section03;
