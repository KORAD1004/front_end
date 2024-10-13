import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import back from '../../assets/images/findcode/background.svg';
import midback from '../../assets/images/findcode/midback.svg';
import search from '../../assets/images/findcode/search.svg';
import styles from '../../styles/findcode/findcode.module.css';
import useFetchTravelDetails from '../../hooks/findCode/useFetchTravelDetails';
import ImageLazy from '../../components/imgLazy/ImageLazy';

function App() { 
    const [inputValue, setInputValue] = useState(''); 
    const [isSearchClicked, setIsSearchClicked] = useState(false); 
    const { travelDetails, fetchTravelDetails, loading, error } = useFetchTravelDetails();
    const navigate = useNavigate();

    const isValidInput = (value) => /^[0-9]{8}$/.test(value); 

    const handleSearchClick = () => {
        if (isValidInput(inputValue)) { 
            fetchTravelDetails(inputValue); 
            setIsSearchClicked(true); 
        }
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);  
    };

    const handleImageClick = () => {
        console.log('Navigating to /courseView with code:', inputValue); // 로그 출력
        navigate(`/courseView?code=${inputValue}`); 
    };

    return (
      <>
        <div className={styles["app-container"]}>
          <div className={styles["top-container"]}>
            <ImageLazy src={back} className={styles["back"]} alt="back" />
            <p className={styles["top-comment"]}>나의여행일정</p>
          </div>

          <div className={styles["middle-container"]}>
            <div className={styles["comment-container"]}>
              <p className={styles["middle-comment1"]}>
                설정 코스 검색 및 입력하기
              </p>
              <p className={styles["middle-comment2"]}>내가 만든 코스</p>
            </div>
            <ImageLazy src={midback} className={styles["midback"]} alt="mid back" />
            
            <div className={styles["input-container"]}>
              <input 
                type="text" 
                value={inputValue}  
                onChange={handleInputChange} 
                placeholder="8자리 숫자를 입력해 주세요"
                maxLength={8}  
                className={styles['search-input']}
              />
              <button 
                className={styles['search-button']}
                onClick={handleSearchClick}
                disabled={!isValidInput(inputValue)}  
              >
                <ImageLazy src={search} alt="Go to tourism" className={styles['search']} />
              </button>
            </div>
            <button className={styles['midbutton']} onClick={() => navigate('/myTrip')}>나만의 코스 만들어 보기</button>
          </div>

          {!isSearchClicked ? (
            <div className={styles["linear"]}></div>
          ) : (
            <>
              {loading && <p>Loading...</p>}

              {error && <p>Error: 데이터를 불러오는 중 문제가 발생했습니다.</p>}
          
              {travelDetails && (
                <div className={styles["travel-container"]}>
                  <div className={styles["travel-com"]} onClick={handleImageClick}> 
                    <p className={styles["travel-name"]}>{travelDetails.travelName}</p> 
                    <p className={styles["travel-comment"]}>
                      | {`${travelDetails.startDate} ~ ${travelDetails.endDate} 中 ${travelDetails.days}일차`}
                    </p>
                  </div>
                  <div className={styles["image-list"]}>
                    <div 
                      className={styles["darker"]} 
                      onClick={handleImageClick} 
                    ></div>
                    <ImageLazy 
                      src={travelDetails.image} 
                      alt="Travel" 
                      className={styles['new-image']}
                      onClick={handleImageClick} 
                    />
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </>
    );
}

export default App;
