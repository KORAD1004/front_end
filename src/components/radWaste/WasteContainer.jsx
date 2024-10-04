import { useState, useEffect } from 'react';
import styles from '../../styles/radWaste/radWaste.module.css';
import wasteContainer from '../../assets/images/radWaste/wasteContainer.svg';
import PropTypes from 'prop-types';

export default function WasteContainer({per, msg}) {
    const [fillPercentage, setFillPercentage] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setFillPercentage(per);
        }, 100);
    }, [per])
    
    return (
        <div className={styles.currentSaturation}>
            <div className={styles.wasteContainer}>
                <img 
                    src={wasteContainer}
                    alt="Battery Outline" 
                    className={styles.wasteOutline} 
                />
                <div 
                    className={styles.wasteFill} 
                    style={{ height: `${fillPercentage}%` }} 
                >
                </div>
            </div>
            <div className={styles.containerInfo}>
                    <span>{msg}</span>
                    <div className={styles.line}/>
                    <span className={styles.percentageText}>{fillPercentage}% / 100%</span>
            </div>
        </div>
    )
}

WasteContainer.propTypes = {
    per: PropTypes.number, // per에 대한 유효성 검사 추가
    msg: PropTypes.string
};