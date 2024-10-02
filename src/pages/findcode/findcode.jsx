import React from 'react';
import back from '../../assets/images/findcode/background.svg';
import midback from '../../assets/images/findcode/midback.svg';
import styles from '../../styles/findcode/findcode.module.css';

function App() { 
  
    return (
      <div className={styles["app-container"]}>
        <div className={styles["top-container"]}>
        <img src={back} className={styles["back"]} alt="back" />
        <p className={styles["top-comment"]}>
          나의 여행일정
        </p>
        </div>

        <div className={styles["middle-container"]}>
          <div className={styles["comment-container"]}>
        <p className={styles["middle-comment1"]}>
          설정 코스 검색 및 입력하기
        </p>
        <p className={styles["middle-comment2"]}>
          내가 만든 코스
        </p>
        </div>
        <img src={midback} className={styles["midback"]} alt="mid back" />
        <button className={styles['midbutton']}> 코스 추가하기</button>
        </div>

      </div>
    );
  }
  
  export default App;