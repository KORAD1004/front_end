import { useState } from 'react';
import { axiosInstance } from '../../axios/axios_instance';

const useFetchTravelDetails = (code) => {
  const [travelDetails, setTravelDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTravelDetails = async () => {
    setLoading(true);
    console.log('Fetching travel details for code:', code); // 추가된 로그
    console.log(`Received code value: ${code}`); // code 값 확인
    const url = `/api/schedule/#71577433`;

    if (!code) {
      console.error('Code is missing'); // code가 없을 경우 로그 출력
      setLoading(false);
      return;
    }

    try {
      
      console.log('API 호출 URL:', url); // 요청 URL 확인

      const response = await axiosInstance.get(`api/schedule/#71577433`);
      console.log('API Response:', response); // API 응답 확인 로그

      // API로부터 받은 데이터를 travelInfo, travelImageInfo에 저장
      const [travelInfo, travelImageInfo] = response.data;

      // travelInfo와 travelImageInfo 확인
      console.log('travelInfo:', travelInfo); // travelInfo 로그
      console.log('axiosInstance baseURL:', axiosInstance.defaults.baseURL);
      console.log('travelImageInfo:', travelImageInfo); // travelImageInfo 로그

      // 데이터 가공 및 확인
      const travelData = {
        code: travelInfo.code,
        travelName: travelInfo.travelName,
        startDate: travelInfo.startDate,
        endDate: travelInfo.endDate,
        days: travelInfo.days,
        // 배열이 비어있지 않을 경우에만 첫 번째 이미지 가져옴
        image: travelImageInfo.length > 0 ? travelImageInfo[0].image : '', 
      };

      console.log('Processed Travel Data:', travelData); // 가공된 데이터 확인 로그
      setTravelDetails(travelData);

    } catch (err) {
      // 오류 메시지와 상태 코드 로그
      console.error('Error fetching travel details:', err); // 에러 로그
      if (err.response) {
        console.log('Error Status:', err.response.status); // 에러 상태 로그
        console.log('Error Data:', err.response.data); // 에러 데이터 로그
      }
      setError(err);
    } finally {
      console.log('Fetch completed'); // API 호출 완료 로그
      setLoading(false);
    }
  };

  return { travelDetails, fetchTravelDetails, loading, error };
};

export default useFetchTravelDetails;
