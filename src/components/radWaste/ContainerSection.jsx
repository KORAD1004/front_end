import styles from '../../styles/radWaste/radWaste.module.css';
import drum from '../../assets/images/radWaste/drum.webp';
import WasteContainer from './WasteContainer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';

export default function ContainerSection() {
    const [per, setPer] = useState([]);
    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_SERVER2_URL}/api/predict`)
            .then(res=>{
                setPer(res.data);
            });
    }, [])

    return (
        <div className={styles.predictRadWaste}>
            <div className={styles.saturationInfo}>
            {isDesktop&&
            <>    
                <div className={styles.bg6}>
                    <div>
                        <span>뉴스로만 접해온</span>
                        <span>방폐물 포화 정도</span>
                        <span>이젠 언제 어디서나 직접 찾아볼 수 있도록</span>
                    </div>
                </div>
            </>
            }

                <WasteContainer per={per[3]} msg="현재 포화 정도" />
                <div className={styles.unitInfo}>
                    <img src={drum}/>
                    <span>단위 기준 200L 드럼</span>
                    <div className={styles.line}/>
                    <span>방폐물 저장 시기를 바탕으로, 일별인수저장소 및 폐기물 양을 비교 분석을 거쳐 백분율을 기준점으로 이해할 수 있도록 시각화한 자료입니다.</span>
                </div>
            </div>
            {!isDesktop&&<div className={styles.line}/>}
            <div className={styles.predictWrapper}>
                <div className={styles.predictHeader}>
                    <span>앞으로의 수용가능한 방폐물 정도 예측 분석 시스템</span>
                </div>
                <div className={styles.predictContainers}>
                    <WasteContainer per={per[0]} msg="10년 기준 예측량" />
                    <WasteContainer per={per[1]} msg="20년 기준 예측량" /> 
                    <WasteContainer per={per[2]} msg="30년 기준 예측량" />
                </div>
            </div>
        </div>
    )
}