import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from 'react-responsive';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styles from '../../styles/myTrip/section02.module.css';
import Map from './Map.jsx';
import SearchModal from "./SearchModal.jsx";
import PropTypes from 'prop-types';
import { Row } from "./Row.jsx";

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

    const moveRow = (fromIndex, toIndex) => {
        const updatedRows = [...rows];
        const [movedRow] = updatedRows.splice(fromIndex, 1);
        updatedRows.splice(toIndex, 0, movedRow);

        // 행의 순서에 맞게 번호를 업데이트합니다.
        const reIndexedRows = updatedRows.map((row, index) => ({
            ...row,
            id: index + 1,
        }));
        setRows(reIndexedRows);
    };

    const onSave = (place, latitude, longitude, address, hotspotId) => {
        setShowToggle(false);
        setRows(rows.map(row =>
            row.id === currentId ? { ...row, place, latitude, longitude, address, hotspotId } : row
        ));
    };

    const addRow = () => {
        const newId = rows.length + 1;
        setRows([...rows, { id: newId, isMemoVisible: false, address: "", memo: "" }]);

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
        <DndProvider backend={HTML5Backend}>
            <div className={styles.allContainer}>
                {!isDesktop && <div className={styles.textContainer}>
                    <p className={styles.mapText}>지도</p>
                </div>}
                {!isDesktop &&
                <div className={styles.mapContainer}>
                    <Map rows={rows} />
                </div>}
                <div className={styles.travelContainer}>
                    <div className={styles.searchContainer}>
                        <div className={styles.textContainer2}>
                            <p className={styles.mapText}>관광지 검색하기</p>
                            <button className={styles.addScheduleButton} onClick={addRow}>일정 추가하기</button>
                        </div>
                    </div>
                    <div className={styles.container} ref={containerRef}>
                        {rows.map((row, index) => (
                            <Row
                                key={row.id}
                                row={row}
                                index={index}
                                moveRow={moveRow}
                                toggleMemoVisibility={toggleMemoVisibility}
                                onDeleteRow={onDeleteRow}
                                setShowToggle={setShowToggle}
                                setCurrentId={setCurrentId}
                                getValue={getValue}
                                onMemoChange={onMemoChange}
                            />
                        ))}
                    </div>
                </div>
                {isDesktop &&
                <div className={styles.mapContainer}>
                    <Map rows={rows} />
                </div>}
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
        </DndProvider>
    );
};

export default Section02;

Section02.propTypes = {
    rows: PropTypes.array, 
    setRows: PropTypes.func, 
    location: PropTypes.object, 
    setLocation: PropTypes.func
}
