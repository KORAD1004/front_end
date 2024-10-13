export const manufactureRadiation = (radiation, data, setArea) => {
    // Kakao Maps API 로드 확인
    if (!window.kakao || !window.kakao.maps) {
        alert("Kakao maps API is not loaded");
        return;
    }

    // JSON 데이터로 area 설정
    if (radiation && radiation.length > 0) { // 여기서 조건을 추가
        const initialArea = data.features.map((item, index) => ({
            ...item,
            radiation: radiation[index]?.["μSv/h"] || 0, // 방사선 값 추가
        }));
        setArea(initialArea); // 초기화한 area를 설정
    }
}