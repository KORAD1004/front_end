import React from 'react';
import styles from '../../styles/main/main.module.css';

function SearchBar() {
  return (
    <div className={styles['search-bar-container']}>
      <input 
        type="text" 
        placeholder="경주 방폐물처리장을 감싸는 가볼만한 장소 추천" 
        className={styles['search-input']}
      />
      <button className={styles['search-button']}>바로가기</button>
    </div>
  );
}

export default SearchBar;