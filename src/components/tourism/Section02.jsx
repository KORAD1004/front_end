import { useState, useEffect } from "react";
import axios from 'axios';
import styles from '../../styles/tourism/section02.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const Section02 = () => {
    const [attractions, setAttractions] = useState([]);
    const [activeButton, setActiveButton] = useState(null);

    async function getData(category, index) {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/hotspot/${category}`);
            const processedData = response.data.map(attraction => ({
                ...attraction,
                spotURL: attraction.spotURL || '',
            }));
            setAttractions(processedData);
            setActiveButton(index);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData("활동적", 0);
    }, []);

    return (
        <div className={styles.allContainer}>
            <div className={styles.mainTextContainer}>
                <p className={styles.mainSmallText}>경주에서 뭐할래?</p>
                <p className={styles.mainText}>가볼만한 곳</p>
            </div>
            <div className={styles.miniButtonAllContainer}>
                {["활동적", "정적인", "아이들", "나홀로", "상징적", "역사적"].map((category, index) => (
                    <div className={styles.miniButtonContainer} key={index}>
                        <button
                            className={`${styles.miniButton} ${activeButton === index ? styles.active : ""}`}
                            onClick={() => getData(category, index)}
                        >
                            {category}
                        </button>
                    </div>
                ))}
            </div>
            <div className={styles.touristAttractionContainer}>
                <div className={styles.touristAttractions}>
                    {attractions.map((attraction, index) => (
                        <a
                            href={attraction.spotURL} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={styles.touristAttraction} 
                            key={index}
                        >
                            <img loading='lazy' src={'https://' + attraction.image} alt={attraction.subTitle} className={styles.touristAttractionImage} />
                            <div className={styles.touristAttractionTextContainer}>
                                <p className={styles.touristAttractionText}>{attraction.title}</p>
                                <div className={styles.touristAttractionSmallText}>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />{attraction.address}
                                </div>
                                <div className={styles.touristAttractionSmallText}>
                                    <FontAwesomeIcon icon={faPhone} />{attraction.phone_num || "전화번호 없음"}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <p className={styles.subText}>경상북도 경주시에서 제공한 경주문화관광 오픈API를 사용하여 제작된 저작물입니다.</p>
        </div>
    );
};

export default Section02;
