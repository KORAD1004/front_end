import React, { useEffect } from "react";
import styles from '../../styles/myTrip/map.module.css';

const Map = ({ rows }) => {
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

    rows.forEach(row => {
      if (row.latitude && row.longitude) {
        const coords = new kakao.maps.LatLng(row.latitude, row.longitude);

        const marker = new kakao.maps.Marker({
          map: map,
          position: coords
        });

        const infowindow = new kakao.maps.InfoWindow({
          content: `<div style="width:150px;text-align:center;padding:6px 0;font-size:10px;">${row.place}</div>`
        });
        infowindow.open(map, marker);

        bounds.extend(coords);
        hasValidCoordinates = true;
      }
    });

    if (hasValidCoordinates) {
      setTimeout(() => {
        map.setBounds(bounds);
      }, 1000);
    }
  }, [rows]);

  return (
    <div className={styles.map}>
      <div id="map" style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
};

export default Map;
