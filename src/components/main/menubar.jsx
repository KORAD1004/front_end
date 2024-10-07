import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/main/main.module.css';

function MenuBar() {
  const navigate = useNavigate(); 

  return (
    <div className={styles['menu-bar']}>
      <button className={styles['menu-item1']} onClick={() => navigate('/radWaste')}> 방폐물이란?</button>
      <div className={styles['menu-divider']}>|</div>
      <button className={styles['menu-item']} onClick={() => navigate('/Radiation')}>원자력안전도</button>
      <div className={styles['menu-divider']}>|</div>
      <button className={styles['menu-item']} onClick={() => navigate('/tourism')}>경주관광지</button>
      <div className={styles['menu-divider']}>|</div>
      <button className={styles['menu-item']} onClick={() => navigate('/courseSelection')}>나의여행일정</button>
    </div>
  );
}

export default MenuBar;
