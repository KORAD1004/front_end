export const drawPolygon = (map, area, avgRad, loading, polygonObjects, getColorByRadiation, gyeongjuPolygon, initialPolygons, polygonGroups, selectedPolygonRef, styles, customOverlayRef, getPolygonCenter) => {
    if (!map || area.length === 0 || avgRad.length === 0 || loading) return;
    
        if (polygonObjects.current.length > 0) {
            // 폴리곤이 이미 그려져 있으면 실행하지 않음
            return;
        }
    
        const { kakao } = window;
    
        // 마커 설정
        const markerPosition = new kakao.maps.LatLng(35.8388735, 129.196647);
        const marker = new kakao.maps.Marker({
            position: markerPosition,
        });
        marker.setMap(map);
    
        const drawPolygons = () => {
            const customOverlay = new kakao.maps.CustomOverlay({
                zIndex: 1000,
                content: '<div style={{pointerEvents:"none"}}></div>',
            });
    
            area.forEach((area, index) => {
                area.geometry.coordinates.forEach((polygon) => {
                    const isGyeongju = area.properties.KOR_NM === "경주시";
    
                    const path = polygon.map((ring) =>
                        ring.map((coord) => new kakao.maps.LatLng(coord[1], coord[0]))
                    );
    
                    const polygonObj = new kakao.maps.Polygon({
                        map: map,
                        path: path,
                        strokeWeight: 1,
                        strokeColor: "#004c80",
                        strokeOpacity: 0.8,
                        fillColor: getColorByRadiation(area.radiation, avgRad[index].avgRad),
                        fillOpacity: 0.3,
                    });
    
                    if (isGyeongju) gyeongjuPolygon.current = polygonObj;
    
                    polygonObjects.current.push(polygonObj);
                    initialPolygons.current.push({
                        polygon: polygonObj,
                        options: {
                            strokeWeight: 1,
                            strokeColor: "#004c80",
                            strokeOpacity: 0.8,
                            fillColor: getColorByRadiation(area.radiation, avgRad[index].avgRad),
                            fillOpacity: 0.3,
                        },
                    });
    
                    const regionName = area.properties.KOR_NM;
                    if (!polygonGroups.current[regionName]) {
                        polygonGroups.current[regionName] = [];
                    }
                    polygonGroups.current[regionName].push(polygonObj);
    
                    kakao.maps.event.addListener(polygonObj, "mouseover", function () {
                        polygonGroups.current[regionName].forEach((poly) => {
                            poly.setOptions({ fillColor: "#09f" });
                        });
                    });
    
                    kakao.maps.event.addListener(polygonObj, "mouseout", function () {
                        polygonObj.setOptions({
                            fillColor: getColorByRadiation(area.radiation, avgRad[index].avgRad),
                        });
                    });
    
                    kakao.maps.event.addListener(polygonObj, "click", function () {
                        if (selectedPolygonRef.current && selectedPolygonRef.current.polygon !== polygonObj) {
                            const prevRegionName = selectedPolygonRef.current.regionName;
                            polygonGroups.current[prevRegionName].forEach((poly) => {
                                poly.setOptions({ strokeColor: "#004c80", strokeWeight: 1 });
                            });
                        }
    
                        polygonGroups.current[regionName].forEach((poly) => {
                            poly.setOptions({ strokeColor: "#FF7676", strokeWeight: 3, fillColor: getColorByRadiation(area.radiation, avgRad[index].avgRad) });
                        });
    
                        const isJeonraJeju = regionName === "제주특별자치도" || regionName === "전라남도" || regionName === "광주광역시" || regionName === "경상북도"; 
    
                        // 오버레이 업데이트
                        const content = isJeonraJeju?
                                        `<div class=${styles.gyeongjuOverlay} style="position:relative; z-index:100; bottom:60px; padding:5px; width:120px; height:40px; background-color: rgba(255, 255, 255, 0.8);">
                                            <span>${regionName}</span>
                                            <div class=${styles.infoLine}></div>
                                            <span>${area.radiation} μSv/h</span>
                                         </div>`
                                         :
                                        `<div class=${styles.customOverlay} style="position:relative; z-index:100; top:60px; padding:5px; width:120px; height:40px; background-color: rgba(255, 255, 255, 0.8);">
                                            <span>${regionName}</span>
                                            <div class=${styles.infoLine}></div>
                                            <span>${area.radiation} μSv/h</span>
                                         </div>`;

                        customOverlay.setContent(content);
                        customOverlay.setPosition(getPolygonCenter(path[0]));
                        customOverlay.setMap(map);
    
                        customOverlayRef.current = customOverlay;
                        selectedPolygonRef.current = { polygon: polygonObj, regionName };
                    });
                });
            });
        };
    
        drawPolygons();
}