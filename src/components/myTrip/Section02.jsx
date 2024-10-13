import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from 'react-responsive';
import styles from '../../styles/myTrip/section02.module.css';
import Map from './Map.jsx';
import SearchModal from "./SearchModal.jsx";
import TrashCan from "../../assets/images/myTrip/trashCan.svg";

const Section02 = ({ rows, setRows, location, setLocation }) => {
    const containerRef = useRef(null);
    const [currentId, setCurrentId] = useState(null);
    const [showToggle, setShowToggle] = useState(false);

    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });


    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                }
            );
        }
    }, [setLocation]);

    const onSave = (place, latitude, longitude, address, hotspotId) => {
        setShowToggle(false);
        setRows(rows.map(row =>
            row.id === currentId ? { ...row, place, latitude, longitude, address, hotspotId } : row
        ));
    };

    const addRow = () => {
        const newId = rows.length + 1;
        setRows([...rows, { id: newId, isMemoVisible: false, address: "", memo: "" }]);

        // 일정 추가 후 rows 컨테이너 내부에서만 스크롤이 마지막 row로 이동
        setTimeout(() => {
            if (containerRef.current) {
                containerRef.current.scrollTo({
                    top: containerRef.current.scrollHeight,
                    behavior: 'smooth',
                });
            }
        }, 0);
    };

    const toggleMemoVisibility = (id) => {
        setRows(rows.map(row => {
            if (row.id === id) {
                return { ...row, isMemoVisible: !row.isMemoVisible };
            }
            return row;
        }));
    };

    const onDeleteRow = (id) => {
        const newRows = rows.filter(row => row.id !== id);
        const updatedRows = newRows.map((row, index) => ({
            ...row,
            id: index + 1
        }));
        setRows(updatedRows);
    };

    const getValue = (row) => {
        if (row.id === currentId) {
            return rows.find(r => r.id === currentId)?.place || "";
        }
        return row.place;
    };

    const onMemoChange = (id, memo) => {
        setRows(rows.map(row =>
            row.id === id ? { ...row, memo } : row
        ));
    };


    return (
        <>
            <div className={styles.allContainer}>
                {!isDesktop && <div className={styles.textContainer}>
                    <p className={styles.mapText}>지도</p>
                </div>}
                <div className={styles.mapContainer}>
                    <Map rows={rows} />
                </div>
                <div className={styles.searchContainer}>
                    <div className={styles.textContainer2}>
                        <p className={styles.mapText}>관광지 검색하기</p>
                        <button className={styles.addScheduleButton} onClick={addRow}>일정 추가하기</button>
                    </div>
                </div>
                {isDesktop && (
                    <>
                        <div className={styles.underlineContainer}>
                            <div className={styles.underline}></div>
                        </div>
                    </>
                )}
                <div className={styles.container} ref={containerRef}>
                    {rows.map((row) => (
                        <div key={row.id} className={styles.row}>
                            <div className={styles.searchBox}>
                                <div className={styles.textContainer3}>
                                    <p className={styles.text}>No.{row.id}</p>
                                    <p className={styles.text}>명칭</p>
                                    <input
                                        onClick={() => { setShowToggle(true); setCurrentId(row.id); }}
                                        type="text"
                                        className={styles.textBox2}
                                        value={getValue(row) || ""}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <button
                                onClick={() => toggleMemoVisibility(row.id)}
                                className={styles.arrowButton}
                            >
                                {row.isMemoVisible ? '▲' : '▼'}
                            </button>
                            <div className={styles.trashCanContainer}>
                                <img
                                    src={TrashCan}
                                    className={styles.trashCan}
                                    onClick={() => onDeleteRow(row.id)}
                                    alt="삭제"
                                />
                            </div>
                            {row.isMemoVisible && (
                                <div className={styles.memoContainer}>
                                    <input
                                        type="text"
                                        placeholder="메모를 작성해 주세요. (20자 이내)"
                                        className={styles.memoTextBox}
                                        value={row.memo}
                                        maxLength={20}
                                        onChange={(e) => onMemoChange(row.id, e.target.value)}
                                    />
                                </div>
                            )}

                        </div>
                    ))}
                </div>
                {isDesktop && (
                    <>
                        <div className={styles.saveContainer}>
                            <div className={styles.textContainer2}>
                                <div className={styles.mapText}>여행지 저장목록</div>
                            </div>
                        </div>
                    </>
                )}
                <div className={styles.underlineContainer}>
                    <div className={styles.underline}></div>
                </div>
            </div>
            {showToggle && (
                <SearchModal
                    lon={location.longitude}
                    lat={location.latitude}
                    onClose={() => setShowToggle(false)}
                    onSave={(place, latitude, longitude, address, hotspotId) => onSave(place, latitude, longitude, address, hotspotId)}
                    rows={rows}
                />
            )}
        </>
    );
};

export default Section02;
