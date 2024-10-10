import RadiationHeader from '../../components/radiation/RadiationHeader.jsx';
import RadiationMap from '../../components/radiation/RadiationMap.jsx';
import styles from '../../styles/radiation/radiation.module.css';

export default function Radiation() {
    return (
        <div className={styles.pageWrapper}>
            <RadiationHeader/>
            <RadiationMap/>
        </div>
    )
}