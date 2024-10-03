import styles from '../../styles/radWaste/radWaste.module.css';
import { Suspense, lazy } from 'react';
import Loading from '../../components/loading/Loading';
const HeaderSection = lazy(() => import('../../components/radWaste/HeaderSection'));
const ContainerSection = lazy(() => import('../../components/radWaste/ContainerSection'));
const InfoSection = lazy(() => import('../../components/radWaste/InfoSection'));

export default function RadWaste() {

    return (
        <Suspense fallback={<Loading/>}>
            <div className={styles.pageWrapper}>
                <HeaderSection/>
                <ContainerSection/>
                <InfoSection/>
            </div>
        </Suspense>
    )
}