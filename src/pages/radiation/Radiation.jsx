import RadiationMap from '../../components/radiation/RadiationMap';
import styles from '../../styles/radiation/radiation.module.css';
import vector from '../../assets/images/radiation/vector.svg';

export default function Radiation() {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.headerWrapper}>
                <div className={styles.header}>
                    <h1>원자력 안전도</h1>
                </div>
                <div className={styles.menu}>
                    <div className={styles.menuName}>
                        <span>대한민국 원자력발전소 포함 비교 지도</span>
                    </div>
                    <div className={styles.toggle}>
                        <img src={vector}/>
                    </div>
                </div>
                <div className={styles.description}>
                    <span>환경부 모니터링 데이터 기준 우리나라의 지역별량(μSv/h, 마이크로시버트/시간)은</span>
                    <span>평균은 0.1 μSv/h입니다. (세계 자연 파트너의 평균 값은 약 0.05 ~ 0.2 μSv/h진찰)</span>
                </div>
            </div>
            <RadiationMap/>
        </div>
    )
}