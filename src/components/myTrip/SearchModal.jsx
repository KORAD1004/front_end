import styles from '../../styles/myTrip/searchModal.module.css';
import close from '../../assets/images/myTrip/close.svg';
import search from '../../assets/images/myTrip/search.svg';
import here from '../../assets/images/myTrip/here.svg';
import here2 from '../../assets/images/myTrip/here2.svg';
import axios from 'axios';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function SearchModal({ onSave, onClose, lon, lat }) {
    const [result, setResult] = useState([]);
    const [isClick, setIsClick] = useState(null); // 클릭된 div의 ID를 저장

    const searchPlace = (e) => {
        e.preventDefault();

        axios.get(`${import.meta.env.VITE_SERVER_URL}/api/hotspot/search/${e.target.value}`)
            .then(res => {
                setResult(res.data);
            });
    }

    function getDistance(lat1, lon1, lat2, lon2) {
        const R = 6371; // 지구 반지름 (킬로미터)
        const toRad = angle => angle * (Math.PI / 180); // 각도를 라디안으로 변환

        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);
        const lat1Rad = toRad(lat1);
        const lat2Rad = toRad(lat2);

        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1Rad) * Math.cos(lat2Rad) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c; // 거리 계산

        return distance.toFixed(1);
    }

    return (
        <div className={styles.modalWrapper}>
            <div onClick={onClose} className={styles.closeWrapper}>
                <img src={close} />
            </div>
            <div className={styles.searchWrapper}>
                <input onChange={searchPlace} placeholder='목적지를 입력하세요.' />
                <div><img src={search} /></div>
            </div>
            <div className={styles.placeWrapper}>
                {
                    result.map(item => (
                        <div
                            className={`${styles.place} ${isClick === item.id ? styles.click : ''}`}
                            key={item.id}
                            onClick={() => {
                                if(isClick===item.id) onSave(item.title.toString());
                                setIsClick(item.id);
                            }}
                        >
                            <div className={styles.title}>
                                <div>
                                    <img src={isClick === item.id?here2:here} />
                                    <span>{item.title.trimStart()}</span>
                                </div>
                            </div>
                            <div className={styles.bottom}>
                                <span>{item.address}</span>
                                <span>{getDistance(item.latitude, item.longitude, lat, lon)}km</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

SearchModal.propTypes = {
    onClose: PropTypes.func,
    onSave: PropTypes.func,
    lon: PropTypes.number,
    lat: PropTypes.number
};