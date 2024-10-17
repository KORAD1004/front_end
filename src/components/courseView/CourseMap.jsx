import { useEffect } from "react";
import styles from '../../styles/courseView/courseMap.module.css';

const CourseMap = ({ data }) => {
  useEffect(() => {
    try {
      if (!window.kakao || !window.kakao.maps) {
        console.error("Kakao Maps API가 로드되지 않았습니다.");
        return;
      }

      const { kakao } = window;
      const mapContainer = document.getElementById('map'); // 지도를 표시할 div
      const mapOption = {
        center: new kakao.maps.LatLng(35.8561719, 129.2247477), // 초기 중심 좌표
        level: 5,
      };

      const map = new kakao.maps.Map(mapContainer, mapOption);
      const bounds = new kakao.maps.LatLngBounds();
      let hasValidCoordinates = false;
      const markers = []; // 마커 저장 배열

      if (data && Array.isArray(data[1])) {
        data[1].forEach((place, index) => {
          const latitude = parseFloat(place.latitude);
          const longitude = parseFloat(place.longitude);

          if (!isNaN(latitude) && !isNaN(longitude)) {
            const coords = new kakao.maps.LatLng(latitude, longitude);

            // 숫자 레이블을 위한 HTML 엘리먼트 생성
            const labelContent = document.createElement('div');
            labelContent.style.width = '30px';
            labelContent.style.height = '30px';
            labelContent.style.backgroundColor = '#5E8447';
            labelContent.style.color = 'white';
            labelContent.style.borderRadius = '50%';
            labelContent.style.textAlign = 'center';
            labelContent.style.lineHeight = '30px';
            labelContent.innerText = index + 1;
            labelContent.style.position = 'absolute';
            labelContent.style.transform = 'translate(-50%, -50%)';
            labelContent.style.pointerEvents = 'none';

            const labelPosition = new kakao.maps.LatLng(latitude, longitude);
            const labelOverlay = new kakao.maps.CustomOverlay({
              position: labelPosition,
              content: labelContent,
              yAnchor: 1, // 레이블 위치 조정
            });

            labelOverlay.setMap(map); // 맵에 레이블 추가
            bounds.extend(coords);
            hasValidCoordinates = true;
            markers.push(coords); // 마커 좌표 저장
          }
        });
      } else {
        console.error('잘못된 데이터 구조입니다:', data);
      }

      // 마커를 선으로 연결
      if (markers.length > 1) {
        const linePath = markers.map(coord => 
          new kakao.maps.LatLng(coord.getLat(), coord.getLng())
        );

        const polyline = new kakao.maps.Polyline({
          path: linePath,
          strokeWeight: 5, // 선 두께
          strokeColor: '#5E8447', // 초록색
          strokeOpacity: 1, // 선의 투명도
          strokeStyle: 'solid', // 선 스타일
        });

        polyline.setMap(map); // 맵에 선 추가
      }

      // 유효한 좌표가 있으면 맵의 범위를 조정
      if (hasValidCoordinates) {
        setTimeout(() => {
          map.setBounds(bounds);
        }, 1000);
      }
    } catch (error) {
      console.error("지도 생성 중 오류가 발생했습니다:", error);
    }
  }, [data]);

  return (
    <div className={styles.map}>
      <div id="map" style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
};

export default CourseMap;