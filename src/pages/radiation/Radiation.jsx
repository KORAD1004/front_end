import RadiationMap from '../../components/radiation/RadiationMap';
import styles from '../../styles/radiation/radiation.module.css';

export default function Radiation() {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.headerWrapper}>
                <div className={styles.header}>
                    <h1>원자력 안전도</h1>
                </div>
                <div className={styles.menu}>
                    <div className={styles.head}>
                        <span>대한민국 방사선량 정도 비교 지도</span>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.description}>
                        <div>
                            <span>최근 3년간의 평균 방사선량 기준으로 </span>
                            <span>+0.0973 미만은 정상, +0.0973 이상은 주의, +0.973 이상은 경고,</span>
                        </div>
                        <div>
                            <span>+973 이상은 비상</span>
                            <span>의 네 단계가 한국원자력안전기술원에서 제공하는 기준입니다.</span>
                        </div> 
                    </div>
                </div>
                <div className={styles.statusBar}>
                    <div className={styles.statusItem}>
                        <div className={styles.green}></div>
                        <span>정상</span>
                    </div>
                    <div className={styles.statusItem}>
                        <div className={styles.yellow}></div>
                        <span>주의</span>
                    </div>
                    <div className={styles.statusItem}>
                        <div className={styles.orange}></div>
                        <span>경고</span>
                    </div>
                    <div className={styles.statusItem}>
                        <div className={styles.red}></div>
                        <span>비상</span>
                    </div>
                </div>
            </div>
            <RadiationMap/>
        </div>
    )
}