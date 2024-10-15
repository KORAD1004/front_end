import { useState, useEffect, useRef } from "react";
import data from '../../assets/data/map.json';
import styles from '../../styles/radiation/radiation.module.css';
import gongdan from '../../assets/images/radiation/gongdan.svg';
import gongdanImg from '../../assets/images/radiation/gongdanImg.svg';
import Loading from "../loading/Loading";
import { useQuery } from '@tanstack/react-query';
import { fetchAvgRadiation, fetchRecentRadiation } from "../../hooks/axios/FetchData";
import { drawMap, manufactureRadiation, drawPolygon, focusGyeongju, getColorByRadiation, getPolygonCenter } from "../../hooks/radiation/radiationFns";
import ImageLazy from "../imgLazy/ImageLazy";

export default function RadiationMap() {
    const [area, setArea] = useState([]);
    const [isClick, setIsClick] = useState(false); // 경주 지역 오버레이 클릭 여부
    const [map, setMap] = useState(null);
    const selectedPolygonRef = useRef(null); // useRef로 이전의 선택된 폴리곤 참조
    const initialPolygons = useRef([]);
    const polygonObjects = useRef([]); // 모든 폴리곤 객체를 저장하는 배열
    const gyeongjuPolygon = useRef(null);
    const polygonGroups = useRef({}); // 지역별로 폴리곤 그룹을 저장할 객체
    const customOverlayRef = useRef(null); // customOverlay를 ref로 선언하여 필요시 사용

    //지역별 현재 방사선량, 지역별 3년 평균 방사선량 패칭
    const { data: radiation, isLoading: loading2 } = useQuery({queryKey:['recentRadiation'], queryFn:fetchRecentRadiation, staleTime: 1000*60*5, refetchInterval: 1000*60*10}); 
    const { data: avgRad, isLoading: loading} = useQuery({queryKey:['avgRadiation'], queryFn:fetchAvgRadiation, staleTime: 1000*60*5, refetchInterval: 1000*60*10});

    //초기 data 구조 가공
    useEffect(() => {
        manufactureRadiation(radiation, data, setArea);
    }, [radiation]);

    //지도 그리기
    useEffect(() => {
        drawMap(area, loading, setMap);
    }, [area, loading, loading2]);

    //폴리곤 그리기
    useEffect(() => {
        drawPolygon(map, area, avgRad, loading, polygonObjects, getColorByRadiation, gyeongjuPolygon, initialPolygons, polygonGroups, selectedPolygonRef, styles, customOverlayRef, getPolygonCenter);
    }, [map, area, avgRad, loading, loading2]);

    //로딩 UI 렌더링
    if (loading||loading2) {
        return (
            <div className={styles.loading}>
                <Loading time={2}/>
            </div>
        );
    }

    return (
        <div className={styles.map}>
            <div id="map" style={isClick?{width: "100%", height: "100%", pointerEvents:"none"}:{ width: "100%", height: "100%" }}>
                <div className={styles.notice}>
                    <div onClick={() => { 
                        setIsClick((state) => !state); focusGyeongju(map, customOverlayRef, isClick, polygonObjects, gyeongjuPolygon, area, initialPolygons, styles);}} className={isClick ? styles.clickPictogram : styles.pictogram}>
                        <ImageLazy src={gongdan} alt="경주 방폐물처리장" />
                        <span>경주 방폐물처리장</span>
                    </div>
                </div>
            </div>
            {isClick ? (
                <div className={styles.gongdan}>
                    <ImageLazy src={gongdanImg} alt="경주 방폐물처리장 이미지" />
                </div>
            ) : null}
        </div>
    );
}