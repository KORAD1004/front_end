import { useState, useEffect } from 'react';
import styles from '../../styles/radWaste/radWaste.module.css';
import wasteContainer from '../../assets/images/radWaste/wasteContainer.svg';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import ImageLazy from '../imgLazy/ImageLazy.jsx';

export default function WasteContainer({per, msg}) {
    const [fillPercentage, setFillPercentage] = useState(0);
    const targetRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!targetRef.current) return;  // targetRef가 설정되지 않으면 리턴

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    setTimeout(()=>{
                        setFillPercentage(per);
                    }, 100);
                } else {
                    setIsVisible(false);
                    setTimeout(()=>{
                        setFillPercentage(0);
                    }, 100);
                }
            },
            { threshold: 1 }
        );

        const currentTarget = targetRef.current;
        observer.observe(currentTarget);

        return () => {
            if (currentTarget) {
                observer.unobserve(currentTarget);
            }
        };
    }, [per]);
    
    return (
        <div className={styles.currentSaturation}>
            <div ref={targetRef} className={styles.wasteContainer}>
                <ImageLazy 
                    src={wasteContainer}
                    alt="Battery Outline" 
                    className={styles.wasteOutline} 
                />
                {isVisible&&
                <div 
                    className={styles.wasteFill} 
                    style={{ height: `${fillPercentage}%` }} 
                >
                </div>}
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