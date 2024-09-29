import React, { useEffect } from 'react';

const Map = () => {
  useEffect(() => {
    const { kakao } = window;
    const container = document.getElementById('map'); 
    const options = {
      center: new kakao.maps.LatLng(35.846307, 129.215661), // 지도 중심좌표 (경주 보문관광단지 기준 좌표)
      level: 4, 
    };
    const map = new kakao.maps.Map(container, options); 
    const markerPosition = new kakao.maps.LatLng(35.846307, 129.215661); 
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map); 


    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

  }, []);

  return (
    <div
      id="map"
      style={{
        width: '360px',
        height: '200px',
        borderRadius: '10px',
        boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.2)',
      }}
    ></div>
  );
};

export default Map;
