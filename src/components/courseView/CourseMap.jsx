import React, { useEffect } from "react";
import styles from '../../styles/myTrip/map.module.css';

const Map = ({ data }) => {
  useEffect(() => {
    if (!window.kakao || !window.kakao.maps) {
      return;
    }

    const { kakao } = window;

    const mapContainer = document.getElementById('map'); // 지도를 표시할 div
    const mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 초기 지도의 중심좌표
      level: 5
    };

    const map = new kakao.maps.Map(mapContainer, mapOption);
    const bounds = new kakao.maps.LatLngBounds();
    let hasValidCoordinates = false;
    const markers = []; // 마커를 저장할 배열

    if (data && data[1]) {
      data[1].forEach((place, index) => {
        const latitude = parseFloat(place.latitude);
        const longitude = parseFloat(place.longitude);
        if (latitude && longitude) {
          const coords = new kakao.maps.LatLng(latitude, longitude);

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

          // 숫자 레이블을 마커의 위치에 추가
          const labelPosition = new kakao.maps.LatLng(latitude, longitude);
          const labelOverlay = new kakao.maps.CustomOverlay({
            position: labelPosition,
            content: labelContent,
            yAnchor: 1 // 레이블 위치 조정
          });

          labelOverlay.setMap(map); // 맵에 레이블 추가

          bounds.extend(coords);
          hasValidCoordinates = true;

          markers.push(coords); // 마커의 좌표 저장
        }
      });
    } else {
      console.error('Invalid data structure:', data);
    }

    // 마커를 선으로 연결
    if (markers.length > 1) {
      const linePath = markers.map(coord => {
        return new kakao.maps.LatLng(coord.getLat(), coord.getLng());
      });

      const polyline = new kakao.maps.Polyline({
        path: linePath,
        strokeWeight: 5, // 선 두께
        strokeColor: '#5E8447', // 초록색
        strokeOpacity: 1, // 선의 투명도
        strokeStyle: 'solid' // 선의 스타일
      });

      polyline.setMap(map); // 맵에 선 추가
    }

    if (hasValidCoordinates) {
      setTimeout(() => {
        map.setBounds(bounds);
      }, 1000);
    }
  }, [data]);

  return (
    <div className={styles.map}>
      <div id="map" style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
};

export default Map;
