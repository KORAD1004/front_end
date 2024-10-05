import styles from '../../styles/myTrip/searchModal.module.css';
import close from '../../assets/images/myTrip/close.svg';
import search from '../../assets/images/myTrip/search.svg';
import here from '../../assets/images/myTrip/here.svg';
import axios from 'axios';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function SearchModal({onSave, onClose}) {
    const [result, setResult] = useState([]);

    const searchPlace = (e) => {
        e.preventDefault();

        axios.get(`${import.meta.env.VITE_SERVER_URL}/api/hotspot/search/${e.target.value}`)
            .then(res=>{
                setResult(res.data);
            })
    }
    
    return (
        <div className={styles.modalWrapper}>
            <div onClick={onClose} className={styles.closeWrapper}>
                <img src={close}/>
            </div>
            <div className={styles.searchWrapper}>
                <input onChange={searchPlace} placeholder='목적지, 대중교통, 주소 검색를 검색하세요'/>
                <div><img src={search}/></div>
            </div>
            <div className={styles.placeWrapper}>
                {
                    result.map(item=>(
                        <div className={styles.place} key={item.id} onClick={()=>onSave(item.title.toString())}>
                            <div className={styles.title}>
                                <div>
                                    <img src={here}/>
                                    <span>{item.title.trimStart()}</span>
                                </div>
                            </div>
                            <div className={styles.bottom}>
                                <span>{item.address}</span>
                                <span>200km</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

SearchModal.propTypes = {
    onClose: PropTypes.func, // per에 대한 유효성 검사 추가
    onSave: PropTypes.func
};