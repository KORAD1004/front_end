import { lazy } from 'react';
const RadiationHeader = lazy(() => import('../../components/radiation/RadiationHeader.jsx'));
const RadiationMap = lazy(() => import('../../components/radiation/RadiationMap.jsx'));
import styles from '../../styles/radiation/radiation.module.css';
import Header from '../../components/header/Header.jsx';

export default function Radiation() {
    return (
        <>
            <Header />
            <div className={styles.pageWrapper}>
                <RadiationHeader/>
                <RadiationMap/>
            </div>
        </>
    ) 
}