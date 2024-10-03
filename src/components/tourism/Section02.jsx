import React from "react";
import styles from '../../styles/tourism/section02.module.css';
import touristAttraction from '../../assets/images/tourism/관광지예시.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock, faPhone } from '@fortawesome/free-solid-svg-icons';

const Section02 = () => {
    return (
        <div className={styles.allContainer}>
            <div className={styles.mainTextContainer}>
                <p className={styles.mainSmallText}>경주에서 뭐할래?</p>
                <p className={styles.mainText}>가볼만한 곳</p>
            </div>
            <div className={styles.miniButtonAllContainer}>
                <div className={styles.miniButtonContainer}>
                    <button className={styles.miniButton}>활동적</button>
                </div>
                <div className={styles.miniButtonContainer}>
                    <button className={styles.miniButton}>정적인</button>
                </div>
                <div className={styles.miniButtonContainer}>
                    <button className={styles.miniButton}>다함께</button>
                </div>
                <div className={styles.miniButtonContainer}>
                    <button className={styles.miniButton}>나홀로</button>
                </div>
                <div className={styles.miniButtonContainer}>
                    <button className={styles.miniButton}>상징적</button>
                </div>
                <div className={styles.miniButtonContainer}>
                    <button className={styles.miniButton}>역사적</button>
                </div>
            </div>
            <div className={styles.touristAttractionContainer}>
                <div className={styles.touristAttraction}>
                    <img src={touristAttraction} alt="Attraction" className={styles.touristAttractionImage} />
                    <div className={styles.touristAttractionTextContainer}>
                        <p className={styles.touristAttractionText}>국립경주박물관</p>
                        <div className={styles.touristAttractionSmallText}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />경상북도 경주 일정로 186
                        </div>
                        <div className={styles.touristAttractionSmallText}>
                            <FontAwesomeIcon icon={faClock} />평일 10:00 - 18:00
                        </div>
                        <div className={styles.touristAttractionSmallText}>
                            <FontAwesomeIcon icon={faPhone} />054-740-7500
                        </div>
                    </div>
                </div>
                <div className={styles.touristAttraction}>
                    <img src={touristAttraction} alt="Attraction" className={styles.touristAttractionImage} />
                    <div className={styles.touristAttractionTextContainer}>
                        <p className={styles.touristAttractionText}>국립경주박물관</p>
                        <div className={styles.touristAttractionSmallText}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />경상북도 경주 일정로 186
                        </div>
                        <div className={styles.touristAttractionSmallText}>
                            <FontAwesomeIcon icon={faClock} />평일 10:00 - 18:00
                        </div>
                        <div className={styles.touristAttractionSmallText}>
                            <FontAwesomeIcon icon={faPhone} />054-740-7500
                        </div>
                    </div>
                </div>
                <div className={styles.touristAttraction}>
                    <img src={touristAttraction} alt="Attraction" className={styles.touristAttractionImage} />
                    <div className={styles.touristAttractionTextContainer}>
                        <p className={styles.touristAttractionText}>국립경주박물관</p>
                        <div className={styles.touristAttractionSmallText}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />경상북도 경주 일정로 186
                        </div>
                        <div className={styles.touristAttractionSmallText}>
                            <FontAwesomeIcon icon={faClock} />평일 10:00 - 18:00
                        </div>
                        <div className={styles.touristAttractionSmallText}>
                            <FontAwesomeIcon icon={faPhone} />054-740-7500
                        </div>
                    </div>
                </div>
                <div className={styles.touristAttraction}>
                    <img src={touristAttraction} alt="Attraction" className={styles.touristAttractionImage} />
                    <div className={styles.touristAttractionTextContainer}>
                        <p className={styles.touristAttractionText}>국립경주박물관</p>
                        <div className={styles.touristAttractionSmallText}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />경상북도 경주 일정로 186
                        </div>
                        <div className={styles.touristAttractionSmallText}>
                            <FontAwesomeIcon icon={faClock} />평일 10:00 - 18:00
                        </div>
                        <div className={styles.touristAttractionSmallText}>
                            <FontAwesomeIcon icon={faPhone} />054-740-7500
                        </div>
                    </div>
                </div>
            </div>
            <p className={styles.subText}>영업시간 및 정보들은 시간에 따라 변경될 수 있으므로 참고 부탁드립니다.</p>
        </div>
    );
};

export default Section02;