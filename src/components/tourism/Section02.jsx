import React, { useState, useEffect } from "react";
import axios from 'axios';
import styles from '../../styles/tourism/section02.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const Section02 = () => {
    const [attractions, setAttractions] = useState([]);

    async function getData(category) {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/hotspot/${category}`);
            setAttractions(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData("활동적");
    }, []);

    return (
        <div className={styles.allContainer}>
            <div className={styles.mainTextContainer}>
                <p className={styles.mainSmallText}>경주에서 뭐할래?</p>
                <p className={styles.mainText}>가볼만한 곳</p>
            </div>
            <div className={styles.miniButtonAllContainer}>
                <div className={styles.miniButtonContainer}>
                    <button className={styles.miniButton} onClick={() => getData("활동적")}>활동적</button>
                </div>
                <div className={styles.miniButtonContainer}>
                    <button className={styles.miniButton} onClick={() => getData("정적인")}>정적인</button>
                </div>
                <div className={styles.miniButtonContainer}>
                    <button className={styles.miniButton} onClick={() => getData("아이들")}>아이들</button>
                </div>
                <div className={styles.miniButtonContainer}>
                    <button className={styles.miniButton} onClick={() => getData("나홀로")}>나홀로</button>
                </div>
                <div className={styles.miniButtonContainer}>
                    <button className={styles.miniButton} onClick={() => getData("상징적")}>상징적</button>
                </div>
                <div className={styles.miniButtonContainer}>
                    <button className={styles.miniButton} onClick={() => getData("역사적")}>역사적</button>
                </div>
            </div>
            <div className={styles.touristAttractionContainer}>
                <div className={styles.touristAttractions}>
                    {attractions.map((attraction, index) => (
                        <div className={styles.touristAttraction} key={index}>
                            <img src={'https://'+attraction.image} alt={attraction.subTitle} className={styles.touristAttractionImage} />
                            <div className={styles.touristAttractionTextContainer}>
                                <p className={styles.touristAttractionText}>{attraction.title}</p>
                                <div className={styles.touristAttractionSmallText}>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />{attraction.address}
                                </div>
                                <div className={styles.touristAttractionSmallText}>
                                    <FontAwesomeIcon icon={faPhone} />{attraction.phone_num || "전화번호 없음"}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <p className={styles.subText}>영업시간 및 정보들은 시간에 따라 변경될 수 있으므로 참고 부탁드립니다.</p>
        </div>
    );
};

export default Section02;