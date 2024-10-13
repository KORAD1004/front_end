import styles from '../../styles/radWaste/radWaste.module.css';
import calendar from '../../assets/images/radWaste/calendar.svg';
import InfoBox from './InfoBox';
import PropTypes from 'prop-types';
import ImageLazy from '../imgLazy/ImageLazy';

export default function HeaderSection({refer}) {
    const date = new Date();
    const year = date.getFullYear(); // 연도 가져오기
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월 가져오기 (0부터 시작하므로 +1, 두 자리로 포맷팅)
    const day = String(date.getDate()).padStart(2, '0');
    
    return (
        <div className={styles.headerSection}>
            <div className={styles.header}>
                <span>포화 정도 및 방폐물이란?</span>
            </div>
            <div className={styles.infoHeader}>
                <div className={styles.todayInfo}>
                    <ImageLazy src={calendar}/>
                    <div>
                        <span>현재&nbsp;</span>
                        <span>{year}년 {month}월 {day}일&nbsp;</span>
                        <span>기준 현황</span>
                    </div>
                </div>
                <InfoBox msg="경주 중·저준위 방사성폐기물 처분장" msg2="경북 경주시 문무대왕면 동해안로 1249"/>
            </div>
            <div ref={refer} className={styles.intro}>
                <span>일별 경주 방폐물 처리장 포화 정도 및 예측 분석 시스템</span>
                <span>해당 자료는 KORAD open api 를 기반으로 제작되었으며, 약간의 오차가 존재할 수 있습니다.</span>
            </div>
        </div>
    )
}

HeaderSection.propTypes = {
    refer: PropTypes.object
}