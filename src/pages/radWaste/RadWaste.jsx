import HeaderSection from '../../components/radWaste/HeaderSection';
import styles from '../../styles/radWaste/radWaste.module.css';
import ContainerSection from '../../components/radWaste/ContainerSection';
import InfoSection from '../../components/radWaste/InfoSection';

export default function RadWaste() {

    return (
        <div className={styles.pageWrapper}>
            <HeaderSection/>
            <ContainerSection/>
            <InfoSection/>
        </div>
    )
}