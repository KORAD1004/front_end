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
        // 카카오 지도가 준비되지 않았거나 courseData가 비어있으면 return
        if (!window.kakao || !window.kakao.maps || courseData.length === 0) return;

        const { kakao } = window;

        const mapContainer = document.getElementById('map'); // 지도를 표시할 div 
        const mapOption = {
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 7 // 지도의 확대 레벨
        };

        // 지도를 생성합니다    
        const map = new kakao.maps.Map(mapContainer, mapOption);

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new kakao.maps.services.Geocoder();

        // 주소와 장소명을 배열로 생성
        const locations = courseData.map(item => ({
            address: item.address,
            placeName: item.number
        }));

        // 주소로 좌표를 검색합니다
        locations.forEach(({ address, placeName }) => {
            geocoder.addressSearch(address, function (result, status) {
                // 정상적으로 검색이 완료됐으면 
                if (status === kakao.maps.services.Status.OK) {
                    const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                    // 결과값으로 받은 위치를 마커로 표시합니다
                    const marker = new kakao.maps.Marker({
                        map: map,
                        position: coords
                    });

                    const overlayContent = `
                    <div style="display: flex; align-items: center; width: 20px; height: 20px; background-color: #248CFA; color: white; border-radius: 5px; padding: 5px 10px; font-size: 12px;">
                        <span style="flex-grow: 1; text-align: center;">${placeName}</span>
                    </div>
                    `;

                    // 커스텀 오버레이 생성
                    const customOverlay = new kakao.maps.CustomOverlay({
                        map: map,
                        position: coords, // 마커 위치에 텍스트를 표시
                        content: overlayContent,
                        yAnchor: 1.5 // 텍스트 위치 조정 (마커 위쪽에 표시되도록)
                    });

                    // 마커 위에 텍스트를 표시
                    customOverlay.setMap(map);

                    // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                    map.setCenter(coords);
                }
            });
        });
    }, [courseData]); // courseData가 변경될 때마다 useEffect 실행

    return (
        <div className={styles.map}>
            <div id="map" style={{ width: "100%", height: "100%" }}></div>
        </div>
    );
};

export default CourseMap;
