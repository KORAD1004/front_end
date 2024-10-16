import { useState, useEffect } from "react";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import styles from '../../styles/courseSelection/courseMap.module.css';

const CourseMap = () => {
    const [courseData, setCourseData] = useState([]);
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    const getCourseData = async (id) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/course-place/${id}`);
            setCourseData(response.data);

        } catch (error) {
            console.error('Error fetching course data:', error);
        }
    };

    useEffect(() => {
        if (id) {
            getCourseData(id);
        }
    }, [id]);

    useEffect(() => {
        if (!window.kakao || !window.kakao.maps) {
            return;
        }
    
        const { kakao } = window;
    
        const mapContainer = document.getElementById('map'); // 지도를 표시할 div
        const mapOption = {
            center: new kakao.maps.LatLng(35.8561719, 129.2247477), // 초기 지도의 중심좌표
            level: 5
        };
    
        const map = new kakao.maps.Map(mapContainer, mapOption);
        const bounds = new kakao.maps.LatLngBounds();
        let hasValidCoordinates = false;
        const markers = []; // 마커를 저장할 배열
    
        if (courseData && courseData.length > 0) {  // courseData가 존재하는지 확인
            courseData.forEach((place, index) => {
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
    
                    const labelOverlay = new kakao.maps.CustomOverlay({
                        position: coords,  // 위치를 coords로 설정
                        content: labelContent,
                        yAnchor: 1
                    });
    
                    labelOverlay.setMap(map); // 맵에 레이블 추가
                    bounds.extend(coords);
                    hasValidCoordinates = true;
    
                    markers.push(coords); // 마커의 좌표 저장
                }
            });
        } else {
            console.error('Invalid data structure:', courseData); // courseData로 변경
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
    }, [courseData]);  // 종속성을 courseData로 설정
    

return (
    <div className={styles.map}>
        <div id="map" style={{ width: "100%", height: "100%" }}></div>
    </div>
);
};

export default CourseMap;
