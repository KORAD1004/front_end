import { useDrag, useDrop } from 'react-dnd';
import styles from '../../styles/myTrip/section02.module.css';
import TrashCan from "../../assets/images/myTrip/trashCan.svg";
import ImageLazy from "../imgLazy/ImageLazy.jsx";
import { useRef } from 'react';
import PropTypes from 'prop-types';

const ItemType = {
    ROW: 'row',
};

export const Row = ({ row, moveRow, index, toggleMemoVisibility, onDeleteRow, setShowToggle, setCurrentId, getValue, onMemoChange }) => {
    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: ItemType.ROW,
        hover: (draggedItem) => {
            if (draggedItem.index !== index) {
                moveRow(draggedItem.index, index);
                draggedItem.index = index;
            }
        },
    });

    const [{ isDragging }, drag] = useDrag({
        type: ItemType.ROW,
        item: { index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    drag(drop(ref));

    return (
        <div
            ref={ref}
            className={styles.row}
            style={{ opacity: isDragging ? 0.5 : 1 }}
        >
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
                <ImageLazy
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
                        placeholder="메모를 작성해 주세요. (12자 이내)"
                        className={styles.memoTextBox}
                        value={row.memo}
                        maxLength={12}
                        onChange={(e) => onMemoChange(row.id, e.target.value)}
                    />
                </div>
            )}
        </div>
    );
};

Row.propTypes = {
    row: PropTypes.object,
    moveRow: PropTypes.func, 
    index: PropTypes.number, 
    toggleMemoVisibility: PropTypes.func, 
    onDeleteRow: PropTypes.func, 
    setShowToggle: PropTypes.func, 
    setCurrentId: PropTypes.func, 
    getValue: PropTypes.func, 
    onMemoChange: PropTypes.func
}