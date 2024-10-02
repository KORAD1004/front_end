import React, { useState } from 'react';
import back from '../../assets/images/findcode/background.svg';
import midback from '../../assets/images/findcode/midback.svg';
import search from '../../assets/images/findcode/search.svg';
import styles from '../../styles/findcode/findcode.module.css';

function App() { 
    const [isSearchClicked, setIsSearchClicked] = useState(false); 

    const handleSearchClick = () => {
        setIsSearchClicked(true); 
    };

    return (
      <>
        {!isSearchClicked ? (
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
              <button className={styles['midbutton']}>코스 추가하기</button>
              
              <div className={styles["input-container"]}>
                <input 
                  type="text" 
                  placeholder="#으로 시작하는 코드 8자를 입력해 주세요"
                  className={styles['search-input']}
                />
                <button className={styles['search-button']} onClick={handleSearchClick}>
                  <img src={search} alt="Go to tourism" className={styles['search']} />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles["app-container"]}>
            <div className={styles["top-container"]}>
              <img src={back} className={styles["back"]} alt="back" />
              <p className={styles["top-comment"]}>나의 여행일정</p>
            </div>

          <div className={styles["new-content"]}>
             <div  className={styles["new-top"]}>
            <p className={styles["new-comment1"]}>
      나의 여행일정 📁    
</p>            
<p className={styles["new-comment2"]}>
          내가 만든 코스
</p>
</div>
<div className={styles["input-container2"]}>
                <input 
                  type="text" 
                  placeholder="#으로 시작하는 코드 8자를 입력해 주세요"
                  className={styles['search-input2']}
                />
                <button className={styles['search-button2']} onClick={handleSearchClick}>
                  <img src={search} alt="Go to tourism" className={styles['search2']} />
                </button>
                </div>
            </div>
          </div>
        )}
      </>
    );
  }
  
  export default App;
