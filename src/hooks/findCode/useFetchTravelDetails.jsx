import { useState } from 'react';
import { axiosInstance } from '../../axios/axios_instance';

// 이미지 URL에 https:// 프로토콜 추가
const formatImageUrl = (url) => {
  if (!url.startsWith('http')) {
    return `https://${url}`;
  }
  return url;
};

const useFetchTravelDetails = () => {
  const [travelDetails, setTravelDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTravelDetails = async (code) => {
    setLoading(true);
    console.log('Fetching travel details for code:', code); // 추가된 로그

    if (!code) {
      console.error('Code is missing'); // code가 없을 경우 로그 출력
      setLoading(false);
      return;
    }

    try {
      const url = `/api/schedule/${code}`; // 동적으로 URL 생성
      const response = await axiosInstance.get(url); // API 호출

      const [travelInfo, travelImageInfo] = response.data;

      const travelData = {
        travelName: travelInfo.travelName,  // 여행 이름
        startDate: travelInfo.startDate,    // 시작 날짜
        endDate: travelInfo.endDate,        // 종료 날짜
        days: travelInfo.days,              // 며칠 차인지
        image: formatImageUrl(travelImageInfo[0]?.image),  // 첫 번째 이미지
      };

      setTravelDetails(travelData);

    } catch (err) {
      console.error('Error fetching travel details:', err); // 에러 로그
      if (err.response) {
        console.log('Error Status:', err.response.status);
        console.log('Error Data:', err.response.data);
      }
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { travelDetails, fetchTravelDetails, loading, error };
};

export default useFetchTravelDetails;
