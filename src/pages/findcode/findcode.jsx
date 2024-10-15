import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; 
import back from '../../assets/images/findcode/background.svg';
import midback from '../../assets/images/findcode/midback.svg';
import midback2 from '../../assets/images/findcode/midback2.svg';  
import search from '../../assets/images/findcode/search.svg';
import styles from '../../styles/findcode/findcode.module.css';
import useFetchTravelDetails from '../../hooks/findCode/useFetchTravelDetails';
import ImageLazy from '../../components/imgLazy/ImageLazy';

function App() { 
    const [inputValue, setInputValue] = useState(''); 
    const [isSearchClicked, setIsSearchClicked] = useState(false); 
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024); 
    const { travelDetails, fetchTravelDetails, loading, error } = useFetchTravelDetails();
    const navigate = useNavigate();
    const newImageRef = useRef(null); // 이미지에 대한 참조 생성

    const isValidInput = (value) => /^[0-9]{8}$/.test(value); 

    const handleSearchClick = () => {
        if (isValidInput(inputValue)) {
            if (isLargeScreen) {
                // 데스크탑에서는 검색 후 바로 navigate 호출
                navigate(`/courseView?code=${inputValue}`);
            } else {
                // 모바일에서는 이미지가 먼저 뜨게 처리
                fetchTravelDetails(inputValue);
                setIsSearchClicked(true); 
            }
        }
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);  
    };

    const handleImageClick = () => {
        console.log('Navigating to /courseView with code:', inputValue);
        navigate(`/courseView?code=${inputValue}`); 
    };

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024); 
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (isSearchClicked && travelDetails && newImageRef.current) {
            newImageRef.current.scrollIntoView({ behavior: 'smooth' }); // 스크롤을 이미지 위치로 이동
        }
    }, [isSearchClicked, travelDetails]);

    return (
      <>
        <div className={styles["app-container"]}>
          
{/* 모바일 UI */}
{!isLargeScreen && (
  <>
    <div className={`${styles["top-container"]}`}>
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
      <ImageLazy 
        src={midback}  
        className={styles["midback"]} 
        alt="mid back" 
      />
      <div className={styles["i-container"]}>
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
    </div>

    {!isSearchClicked && (
      <div className={styles["linear"]}></div>
    )}

    {isSearchClicked && travelDetails && (
      <div className={styles["travel-container"]}>
        <div className={styles["travel-com"]} onClick={handleImageClick}> 
          <p className={styles["travel-name"]}>{travelDetails.travelName}</p> 
          <p className={styles["travel-comment"]}>
  | {`${travelDetails.startDate} ~ ${travelDetails.endDate} 中 ${travelDetails.days.includes('일차') ? travelDetails.days : `${travelDetails.days}일차`}`}
</p>

        </div>
        <div className={styles["image-list"]}>
          <div className={styles["darker"]} onClick={handleImageClick}></div>
          <ImageLazy 
            src={travelDetails.image} 
            alt="Travel" 
            className={styles['new-image']}
            onClick={handleImageClick} 
            ref={newImageRef} 
          />
        </div>
      </div>
    )}
  </>
)}


          {/* 데스크탑 UI */}
          {isLargeScreen && (
            <>
              {!isSearchClicked && (
                <>
                  <div className={`${styles["top-container"]}`}>
                    <p className={styles["top-comment"]}>나의여행일정</p>
                  </div>

                  <div className={styles["middle-container"]}>
                    <div className={styles["comment-container"]}>
                      <p className={styles["middle-comment1"]}>
                        설정 코스 검색 및 입력하기
                      </p>
                      <p className={styles["middle-comment2"]}>내가 만든 코스</p>
                    </div>
                    <ImageLazy 
                      src={midback2}  
                      className={styles["midback"]} 
                      alt="mid back" 
                    />
                    <div className={styles["i-container"]}>
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
                  </div>
                  <div className={styles["linear"]}></div> 
                </>
              )}
            </>
          )}

          {loading && <p>코스를 불러오고 있어요...!</p>}
          {error && <p>Error: 데이터를 불러오는 중 문제가 발생했습니다.</p>}
        </div>
      </>
    );
}

export default App;
