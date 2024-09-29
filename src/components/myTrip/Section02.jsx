import React from "react";
import styles from '../../styles/myTrip/section02.module.css';
import Map from './Map.jsx';

const Section02 = () => {
    return(
        <div className={styles.allContainer}>
            <div className={styles.textContainer}>
                <p className={styles.mapText}>지도</p>
            </div>
            <div className={styles.mapContainer}>
                <Map />
            </div>
        </div>
    );
};

export default Section02;