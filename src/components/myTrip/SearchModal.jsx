import { useState, useEffect, useRef } from "react"; // useEffect, useRef 추가
import PropTypes from "prop-types";
import axios from "axios";
import styles from "../../styles/myTrip/searchModal.module.css";
import close from "../../assets/images/myTrip/close.svg";
import search from "../../assets/images/myTrip/search.svg";
import here from "../../assets/images/myTrip/here.svg";
import here2 from "../../assets/images/myTrip/here2.svg";
import ImageLazy from "../imgLazy/ImageLazy";
import { getDistance } from "../../hooks/myTrip/MyTripHooks";
import { debounce } from "lodash";

export default function SearchModal({ onSave, onClose, lon, lat }) {
  const [result, setResult] = useState([]);
  const [isClick, setIsClick] = useState(null); // 클릭된 div의 ID 저장
  const inputRef = useRef(null); // input 엘리먼트 참조

  useEffect(() => {
    inputRef.current?.focus(); // 렌더링 후 input에 포커스
  }, []);

  const debouncedSearch = debounce((value) => {
    if (value.trim() !== "") {
      axios
        .get(`${import.meta.env.VITE_SERVER_URL}/api/hotspot/search/${value}`)
        .then((res) => {
          setResult(res.data);
        })
        .catch((err) => console.error("Error fetching search results:", err));
    } else {
      setResult([]); // 입력이 비어있으면 결과 초기화
    }
  }, 300);

  const searchPlace = (e) => {
    e.preventDefault();

    debouncedSearch(e.target.value);
  };

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.closeWrapper}>
        <ImageLazy src={close} onClick={onClose} />
      </div>
      <div className={styles.searchWrapper}>
        <input
          ref={inputRef} // input에 ref 연결
          onChange={searchPlace}
          placeholder="목적지를 입력하세요."
        />
        <div>
          <ImageLazy src={search} />
        </div>
      </div>
      <div className={styles.placeWrapper}>
        {result.map((item) => (
          <div
            className={`${styles.place} ${
              isClick === item.id ? styles.click : ""
            }`}
            key={item.id}
            onClick={() => {
              if (isClick === item.id)
                onSave(
                  item.title,
                  item.latitude,
                  item.longitude,
                  item.address,
                  item.id
                );
              setIsClick(item.id);
            }}
          >
            <div className={styles.title}>
              <div>
                <ImageLazy src={isClick === item.id ? here2 : here} />
                <span>{item.title.trimStart()}</span>
              </div>
            </div>
            <div className={styles.bottom}>
              <span>{item.address}</span>
              <span>
                {getDistance(item.latitude, item.longitude, lat, lon)}km
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

SearchModal.propTypes = {
  onClose: PropTypes.func,
  onSave: PropTypes.func,
  lon: PropTypes.number,
  lat: PropTypes.number,
};
