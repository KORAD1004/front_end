import React, { useEffect, useState } from "react";
import styles from '../../styles/courseSelection/courseMap.module.css';

const CourseMap = () => {


    useEffect(() => {
        if(!window.kakao || !window.kakao.maps) {
            return;
        }

    }, [])

    useEffect(() => {
        if(!window.kakao || !window.kakao.maps ) return; 

        const { kakao } = window;

        const mapContainer = document.getElementById('map'); // 지도를 표시할 div 
        const mapOption = {
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 4 // 지도의 확대 레벨
        };  

        // 지도를 생성합니다    
        const map = new kakao.maps.Map(mapContainer, mapOption); 

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new kakao.maps.services.Geocoder();

        // 주소와 장소명을 배열로 생성
        const locations = [
            { address: '서울특별시 노원구 상계로 90', placeName: '우리집' },
            { address: '서울특별시 노원구 상계로 77', placeName: '옆집' },
            { address: '서울특별시 노원구 상계로 55', placeName: '앞집' }
        ];

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
    <div style="display: flex; align-items: center; width: 50px; height: 20px; background-color: #248CFA; color: white; border-radius: 5px; padding: 5px 10px; font-size: 12px;">
        <span style="flex-grow: 1; text-align: center;">${placeName}</span>
        <span style="font-weight: bold; margin-left: 10px;">&gt;</span>
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
        }, []);   
    return (
        <div className={styles.map}>
            <div id="map" style={{width:"100%", height:"100%"}}></div>
        </div>
    );
};

export default CourseMap;