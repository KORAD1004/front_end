import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/main/main.module.css';
import paper from '../../assets/images/main/paper.svg'; // 이미지 경로

function SearchBar() {
  const navigate = useNavigate(); 
  
  return (
    <div className={styles['search-bar-container']}>
      <div className={styles['search-input']}>
        <span>경주 방폐물처리장을 감싸는 가볼만한 장소 추천</span>
        <img src={paper} alt="Paper Icon" className={styles['paper-icon']} />
      </div>
      <button className={styles['search-button']} onClick={() => navigate('/tourism')}>
        바로가기
      </button>
    </div>
  );
}

export default SearchBar;
