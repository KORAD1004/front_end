import styles from '../../styles/radWaste/radWaste.module.css';
import { Suspense, lazy } from 'react';
import Loading from '../../components/loading/Loading';
import { useRef } from 'react';
const HeaderSection = lazy(() => import('../../components/radWaste/HeaderSection'));
const ContainerSection = lazy(() => import('../../components/radWaste/ContainerSection'));
const InfoSection = lazy(() => import('../../components/radWaste/InfoSection'));

export default function RadWaste() {
    const scrollRef = useRef(null);
    
    function onClick() {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <Suspense fallback={<Loading/>}>
            <div ref={scrollRef} className={styles.pageWrapper}>
                <HeaderSection/>
                <ContainerSection/>
                <InfoSection onClick={onClick}/>
            </div>
        </Suspense>
    )
}