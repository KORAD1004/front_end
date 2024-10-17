import { useEffect } from 'react';
import styles from '../../styles/components/map.module.css';

const Map = () => {
  useEffect(() => {
    try {
      const { kakao } = window;

      if (!kakao || !kakao.maps) {
        throw new Error('Kakao Maps API가 로드되지 않았습니다.');
      }

      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(35.8388735, 129.196647),
        level: 4,
        draggable: false, // 드래그 비활성화
        zoomable: false,  // 줌 비활성화
      };

      const map = new kakao.maps.Map(container, options);
      const markerPosition = new kakao.maps.LatLng(35.8388735, 129.196647);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });

      marker.setMap(map);
    } catch (error) {
      console.error('Kakao Map 초기화 중 오류 발생:', error);
      alert('지도를 불러오는 데 실패했습니다. 잠시 후 다시 시도해주세요.');
    }
  }, []);

  return (
    <div
      id="map"
      className={styles.map} // 모듈 CSS 클래스 적용
    ></div>
  );
};

export default Map;
