export const drawMap = (area, loading, setMap) => {
    if (!window.kakao || !window.kakao.maps || area.length === 0 || loading ) return;
    
        const { kakao } = window;
    
        // 지도 초기 설정
        const container = document.getElementById("map");
        const options = {
            center: new kakao.maps.LatLng(35.7360, 127.8829),
            level: 13, // 지도의 확대 레벨
            scrollwheel: false, // 마우스 휠 확대/축소 비활성화
            disableDoubleClickZoom: true, // 더블 클릭 확대/축소 비활성화
            draggable: true // 지도 드래그 가능하게 설정
        };
    
        const newMap = new kakao.maps.Map(container, options);
    
        // 지도 이동 가능 범위를 설정 (제주도부터 한반도 북쪽까지)
        const bounds = new kakao.maps.LatLngBounds(
            new kakao.maps.LatLng(35.1, 124.0), // 남쪽 경계 (제주도 포함)
            new kakao.maps.LatLng(36.5, 131.9)  // 북쪽 경계
        );
    
        const fixedLng = 127.8829; // 고정할 경도 값
    
        // dragend 이벤트로 지도를 상하로만 움직이게 제한
        kakao.maps.event.addListener(newMap, 'dragend', () => {
            const currentCenter = newMap.getCenter();
            
            // 위도만 제한된 범위로 설정, 경도는 고정
            const newLat = Math.min(Math.max(currentCenter.getLat(), bounds.getSouthWest().getLat()), bounds.getNorthEast().getLat());
    
            // 고정된 경도와 제한된 위도로 지도의 중심을 다시 설정
            newMap.setCenter(new kakao.maps.LatLng(newLat, fixedLng));
        });
    
        setMap(newMap); // 상태 업데이트
}