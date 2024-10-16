import { Suspense, lazy } from 'react';
const RadiationHeader = lazy(() => import('../../components/radiation/RadiationHeader.jsx'));
const RadiationMap = lazy(() => import('../../components/radiation/RadiationMap.jsx'));
import styles from '../../styles/radiation/radiation.module.css';
import Loading from '../../components/loading/Loading.jsx';

export default function Radiation() {
    return (
        <Suspense fallback={<Loading time={0.5}/>}>
            <div className={styles.pageWrapper}>
                <RadiationHeader/>
                <RadiationMap/>
            </div>
        </Suspense>
    )
}