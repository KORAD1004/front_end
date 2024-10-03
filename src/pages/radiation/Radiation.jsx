import { Suspense, lazy } from 'react';
import styles from '../../styles/radiation/radiation.module.css';
import Loading from '../../components/loading/Loading';
const RadiationHeader = lazy(() => import('../../components/radiation/RadiationHeader'));
const RadiationMap = lazy(() => import('../../components/radiation/RadiationMap'));

export default function Radiation() {
    return (
        <Suspense fallback={<Loading/>}>
            <div className={styles.pageWrapper}>
                <RadiationHeader/>
                <RadiationMap/>
            </div>
        </Suspense>
    )
}