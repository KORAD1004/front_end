import styles from '../../styles/radWaste/radWaste.module.css';
import { useRef, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { fetchAvgRadiation } from '../../hooks/axios/FetchData.js';
import HeaderSection from '../../components/radWaste/HeaderSection.jsx';
import ContainerSection from '../../components/radWaste/ContainerSection.jsx';
import InfoSection from '../../components/radWaste/InfoSection.jsx';

export default function RadWaste() {
    const scrollRef = useRef(null);
    const queryClient = useQueryClient();

    useEffect(() => {
        queryClient.prefetchQuery({queryKey:['avgRadiation'], queryFn:fetchAvgRadiation});
    }, [queryClient]);
    
    function onClick() {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className={styles.pageWrapper}>
            <HeaderSection refer={scrollRef}/>
            <ContainerSection/>
            <InfoSection onClick={onClick}/>
        </div>
    )
}