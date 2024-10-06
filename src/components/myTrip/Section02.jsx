import React, { useState, useEffect } from "react";
import styles from '../../styles/myTrip/section02.module.css';
import Map from './Map.jsx';
import SearchModal from "./SearchModal.jsx";
import TrashCan from "../../assets/images/myTrip/trashCan.png";
import Section03 from "./Section03";

const Section02 = () => {
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    
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
    }, []);

    const [rows, setRows] = useState([
        { id: 1, place: "", latitude: "", longitude: "", isMemoVisible: false, address: "", memo: "" },
        { id: 2, place: "", latitude: "", longitude: "", isMemoVisible: false, address: "", memo: "" },
        { id: 3, place: "", latitude: "", longitude: "", isMemoVisible: false, address: "", memo: "" }
    ]);
    const [currentId, setCurrentId] = useState(null);
    const [showToggle, setShowToggle] = useState(false);

    const onSave = (place, latitude, longitude, address) => {
        setShowToggle(false);
        setRows(rows.map(row =>
            row.id === currentId ? { ...row, place, latitude, longitude, address } : row
        ));
    };

    const addRow = () => {
        const newId = rows.length + 1;
        setRows([...rows, { id: newId, isMemoVisible: false, address: "", memo: "" }]);
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
                <div className={styles.textContainer}>
                    <p className={styles.mapText}>지도</p>
                </div>
                <div className={styles.mapContainer}>
                    <Map rows={rows} />
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
                                        onChange={(e) => onMemoChange(row.id, e.target.value)}
                                    />
                                </div>
                            )}
                            
                        </div>
                    ))}
                </div>
                <div className={styles.underlineContainer}>
                    <div className={styles.underline}></div>
                </div>
            </div>
            {showToggle && (
                <SearchModal
                    lon={location.longitude}
                    lat={location.latitude}
                    onClose={() => setShowToggle(false)}
                    onSave={(place, latitude, longitude, address) => onSave(place, latitude, longitude, address)}
                    rows={rows}
                />
            )}
            {currentId && (
                <Section03
                    rows={rows}
                />
            )}
        </>
    );
};

export default Section02;
