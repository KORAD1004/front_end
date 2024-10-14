export const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // 지구 반지름 (킬로미터)
    const toRad = angle => angle * (Math.PI / 180); // 각도를 라디안으로 변환

    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const lat1Rad = toRad(lat1);
    const lat2Rad = toRad(lat2);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1Rad) * Math.cos(lat2Rad) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // 거리 계산

    return distance.toFixed(1);
}

export const moveRow = (fromIndex, toIndex, rows, setRows) => {
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

export const onSave = (place, latitude, longitude, address, hotspotId, setShowToggle, setRows, rows, currentId) => {
    setShowToggle(false);
    setRows(rows.map(row =>
        row.id === currentId ? { ...row, place, latitude, longitude, address, hotspotId } : row
    ));
};

export const addRow = (rows, containerRef, setRows) => {
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

export const toggleMemoVisibility = (id, setRows, rows) => {
    setRows(rows.map(row => {
        if (row.id === id) {
            return { ...row, isMemoVisible: !row.isMemoVisible };
        }
        return row;
    }));
};

export const onDeleteRow = (id, rows, setRows) => {
    const newRows = rows.filter(row => row.id !== id);
    const updatedRows = newRows.map((row, index) => ({
        ...row,
        id: index + 1
    }));
    setRows(updatedRows);
};

export const getValue = (row, currentId, rows) => {
    if (row.id === currentId) {
        return rows.find(r => r.id === currentId)?.place || "";
    }
    return row.place;
};

export const onMemoChange = (id, memo, setRows, rows) => {
    setRows(rows.map(row =>
        row.id === id ? { ...row, memo } : row
    ));
};