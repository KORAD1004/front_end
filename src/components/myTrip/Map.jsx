import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/myTrip/map.module.css';

const Map = () => {
  const mapRef = useRef(null); // map을 렌더링할 DOM 요소 참조
  const [keyword, setKeyword] = useState('경주 청정누리공원'); // 검색 키워드 상태
  const [places, setPlaces] = useState([]); // 검색 결과
  const [pagination, setPagination] = useState(null); // 페이지네이션 상태
  const markersRef = useRef([]); // 마커 배열

  // 컴포넌트가 마운트될 때 카카오맵 API를 불러오는 useEffect
  useEffect(() => {
    const { kakao } = window;
    
    const mapContainer = mapRef.current; 
    const mapOption = {
      center: new kakao.maps.LatLng(37.566826, 126.9786567),
      level: 2,
    };
    const map = new kakao.maps.Map(mapContainer, mapOption);

    const ps = new kakao.maps.services.Places();
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    const searchPlaces = () => {
      if (!keyword.trim()) {
        alert('키워드를 입력해주세요!');
        return;
      }
      ps.keywordSearch(keyword, (data, status, pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          setPlaces(data);
          setPagination(pagination);
          displayPlaces(data);
          displayPagination(pagination);
        } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
          alert('검색 결과가 존재하지 않습니다.');
        } else if (status === kakao.maps.services.Status.ERROR) {
          alert('검색 결과 중 오류가 발생했습니다.');
        }
      });
    };

    const displayPlaces = (places) => {
      removeMarker(); // 기존 마커 제거

      const bounds = new kakao.maps.LatLngBounds();
      const newMarkers = [];

      places.forEach((place, i) => {
        const placePosition = new kakao.maps.LatLng(place.y, place.x);
        const marker = addMarker(placePosition, i);
        newMarkers.push(marker);

        bounds.extend(placePosition);
        kakao.maps.event.addListener(marker, 'mouseover', () => {
          displayInfowindow(marker, place.place_name);
        });
        kakao.maps.event.addListener(marker, 'mouseout', () => {
          infowindow.close();
        });
      });

      markersRef.current = newMarkers; // 새로운 마커 배열 저장
      map.setBounds(bounds);
    };

    const addMarker = (position, idx) => {
      const imageSrc =
        'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png';
      const imageSize = new kakao.maps.Size(36, 37);
      const imgOptions = {
        spriteSize: new kakao.maps.Size(36, 691),
        spriteOrigin: new kakao.maps.Point(0, idx * 46 + 10),
        offset: new kakao.maps.Point(13, 37),
      };
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions);
      const marker = new kakao.maps.Marker({
        position,
        image: markerImage,
      });
      marker.setMap(map);
      return marker;
    };

    const removeMarker = () => {
        markersRef.current.forEach((marker) => marker.setMap(null)); // 마커 삭제
        markersRef.current = []; // 마커 배열 초기화
    };

    const displayInfowindow = (marker, title) => {
      const content = `<div style="padding:5px;z-index:1;">${title}</div>`;
      infowindow.setContent(content);
      infowindow.open(map, marker);
    };

    searchPlaces();
  }, [keyword]);

  return (
    <div className={styles.map_wrap} style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div ref={mapRef} style={{ width: '100%', height: '100%' }}></div>
      <div id="menu_wrap" className={styles.bg_white} style={{
        position: 'absolute', top: 0, left: 0, bottom: 0, width: '250px', margin: '10px 0 30px 10px', padding: '5px', overflowY: 'auto', background: 'rgba(255, 255, 255, 0.7)', zIndex: 1, fontSize: '12px', borderRadius: '10px'
      }}>
        <div className={styles.option}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setKeyword(e.target.keyword.value);
            }}
          >
            키워드 :{' '}
            <input
              type="text"
              id="keyword"
              defaultValue={keyword}
              size="15"
            />{' '}
            <button type="submit">검색하기</button>
          </form>
        </div>
        <hr className={styles.hr} />
        <ul id="placesList" className={styles.placeList}>
          {places.map((place, index) => (
            <li key={index} className={styles.item}>
              <span className={`${styles.markerbg} ${styles[`marker_${index + 1}`]}`}></span>
              <div className={styles.info}>
                <h5>{place.place_name}</h5>
                <span>{place.road_address_name || place.address_name}</span>
                <span className={styles.jibun}>{place.address_name}</span>
                <span className={styles.tel}>{place.phone}</span>
              </div>
            </li>
          ))}
        </ul>
        <div id="pagination" className={styles.pagination}>
          {pagination &&
            Array(pagination.last)
              .fill()
              .map((_, i) => (
                <a
                  key={i}
                  href="#!"
                  className={pagination.current === i + 1 ? styles.on : ''}
                  onClick={() => pagination.gotoPage(i + 1)}
                >
                  {i + 1}
                </a>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Map;
