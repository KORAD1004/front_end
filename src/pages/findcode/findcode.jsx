import React, { useState } from 'react';
import back from '../../assets/images/findcode/background.svg';
import midback from '../../assets/images/findcode/midback.svg';
import search from '../../assets/images/findcode/search.svg';
import newImage from '../../assets/images/findcode/newImage.svg';  
import styles from '../../styles/findcode/findcode.module.css';

function App() { 
    const [isSearchClicked, setIsSearchClicked] = useState(false);
    const [inputValue, setInputValue] = useState(''); 

    const handleSearchClick = () => {
        if (inputValue.startsWith('#') && inputValue.length === 9) { 
            setIsSearchClicked(true);  
        }
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);  
    };

    return (
      <>
        <div className={styles["app-container"]}>
          <div className={styles["top-container"]}>
            <img src={back} className={styles["back"]} alt="back" />
            <p className={styles["top-comment"]}>나의 여행일정</p>
          </div>

          <div className={styles["middle-container"]}>
            <div className={styles["comment-container"]}>
              <p className={styles["middle-comment1"]}>
                설정 코스 검색 및 입력하기
              </p>
              <p className={styles["middle-comment2"]}>내가 만든 코스</p>
            </div>
            <img src={midback} className={styles["midback"]} alt="mid back" />
            
            <div className={styles["input-container"]}>
              <button className={styles['midbutton']}>코스 추가하기</button>
              <input 
                type="text" 
                value={inputValue}  
                onChange={handleInputChange} 
                placeholder="#으로 시작하는 코드 8자를 입력해 주세요"
                maxLength={9}  
                className={styles['search-input']}
              />
              <button 
                className={styles['search-button']}
                onClick={handleSearchClick}
                disabled={!(inputValue.startsWith('#') && inputValue.length === 9)}
              >
                <img src={search} alt="Go to tourism" className={styles['search']} />
              </button>
            </div>
          </div>

          {!isSearchClicked ? (
            <div className={styles["linear"]}></div>
          ) : (
            <img src={newImage} alt="New image" className={styles['new-image']} />
          )}
        </div>
      </>
    );
}

export default App;
