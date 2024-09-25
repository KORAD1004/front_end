import { useState } from "react";
import { useEffect } from "react";
import data from '../../assets/data/map.json';
import styles from '../../styles/radiation/radiation.module.css';
import gongdan from '../../assets/images/radiation/gongdan.svg';

export default function RadiationMap() {
    const [area, setArea] = useState([]);
    const radiation = [0.15, 0.13, 0.23, 0.24, 0.35, 0, 34, 0.57, 0.06];
  
    useEffect(() => {
        // Kakao Maps API 로드 확인
        if (!window.kakao || !window.kakao.maps) {
          alert("Kakao maps API is not loaded");
          return;
        }
    
        // JSON 데이터로 area 설정
        const initialArea = data.features.map((item, index) => ({
          ...item,
          radiation: radiation[index] || 0, // 방사선 값 추가
        }));
    
        setArea(initialArea); // 초기화한 area를 설정
      }, []);

    useEffect(() => {
        // Kakao Maps가 로드되었는지 확인
        if (!window.kakao || !window.kakao.maps || area.length === 0) return;

        const { kakao } = window;

        // 지도 초기 설정
        const container = document.getElementById("map");
        const options = {
        center: new kakao.maps.LatLng(36.5360, 127.8829),
        level: 13, // 지도의 확대 레벨
        };

        const map = new kakao.maps.Map(container, options);

        const markerPosition = new kakao.maps.LatLng(35.8388735, 129.196647);
        const marker = new kakao.maps.Marker({
            position: markerPosition,
        });

        marker.setMap(map);

        // 방사선 수치에 따른 색상 설정 함수
        const getColorByRadiation = (level) => {
        if (level < 0.1) return "#00FF00"; // 낮은 수치
        else if (level < 0.3) return "#FFFF00"; // 중간 수치
        else return "#FF0000"; // 높은 수치
        };

        // 폴리곤 그리기 함수
        const drawPolygons = () => {
            area.forEach((area) => {
                // 모든 폴리곤에 대해 반복
                area.geometry.coordinates.forEach((polygon) => {
                    // 각 폴리곤의 모든 링에 대해 반복
                    polygon.forEach((ring) => {
                        // 좌표 변환
                        const coordinates = ring.map((coord) => {
                            return new kakao.maps.LatLng(coord[1], coord[0]);
                        });
            
                        // 임의의 방사선 수치 설정 (실제 데이터에 따라 조정 필요)
                        area.radiation = area.radiation || 0.15;
            
                        const polygonObj = new kakao.maps.Polygon({
                            map: map,
                            path: coordinates,
                            strokeWeight: 2,
                            strokeColor: "#004c80",
                            strokeOpacity: 0.8,
                            fillColor: getColorByRadiation(area.radiation),
                            fillOpacity: 0.3,
                        });
            
                        // 마우스 이벤트 설정
                        kakao.maps.event.addListener(polygonObj, "mouseover", function () {
                            polygonObj.setOptions({ fillColor: "#09f" });
                        });
                        kakao.maps.event.addListener(polygonObj, "mouseout", function () {
                            polygonObj.setOptions({ fillColor: getColorByRadiation(area.radiation) });
                        });
                    });
                });
            });            
        };

        drawPolygons();
    }, [area]);

    return (
        <div className={styles.map}>
            <div id="map" style={{ width: "100%", height: "100%" }}>
                <div className={styles.notice}>
                    <div className={styles.pictogram}>
                        <img src={gongdan}/>
                        <span>경주 방폐물처리장</span>
                    </div>
                </div>
            </div>
        </div>
    )
}