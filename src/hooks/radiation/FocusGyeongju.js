export const focusGyeongju = (map, customOverlayRef, isClick, polygonObjects, gyeongjuPolygon, area, initialPolygons, styles) => {
    if (map) {
        // customOverlay가 존재하면 숨기기
        if (!customOverlayRef.current) {
            customOverlayRef.current = new window.kakao.maps.CustomOverlay({
                zIndex: 1000,
            });
        } else {
            customOverlayRef.current.setMap(null);
        }

        if (map.getLevel() > 11 && isClick === false) {
            map.setLevel(11);
            map.setCenter(new window.kakao.maps.LatLng(35.85, 129.2545));
            polygonObjects.current.forEach(polygon => {
                if (gyeongjuPolygon.current !== polygon) polygon.setOptions({ fillColor: "#004c80" });
            });

            gyeongjuPolygon.current.setOptions({ strokeColor: "#FF7676", strokeWeight: 5 });

            const gyeongjuData = area.find(item => item.properties.KOR_NM === "경주시");
            if (gyeongjuData) {
                const content = `<div class=${styles.gyeongjuOverlay} style="position:relative; z-index:100; bottom:100px; padding:5px; width:120px; height:40px; background-color: rgba(255, 255, 255, 0.8);">
                                    <span>경주시</span>
                                    <div class=${styles.infoLine}></div>
                                    <span>${gyeongjuData.radiation} μSv/h</span>
                                </div>`;
                customOverlayRef.current.setContent(content);
                customOverlayRef.current.setPosition(new window.kakao.maps.LatLng(35.8388735, 129.196647));
                customOverlayRef.current.setMap(map);
            }

        } else if (map.getLevel() < 13 && isClick === true) {
            map.setLevel(13);
            map.setCenter(new window.kakao.maps.LatLng(35.7360, 127.8829));
            polygonObjects.current.forEach(polygonObj => {
                const initialPolygon = initialPolygons.current.find(item => item.polygon === polygonObj);
                if (initialPolygon) {
                    polygonObj.setOptions(initialPolygon.options);
                }
            });

            gyeongjuPolygon.current.setOptions({ strokeColor: "#004c80", strokeWeight: 1 });
        }
    }
}