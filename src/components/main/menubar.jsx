import React from 'react';
import styles from '../../styles/main/main.module.css';

function MenuBar() {
  return (
    <div className={styles['menu-bar']}>
      <div className={styles['menu-item']}>방폐물이란?</div>
      <div className={styles['menu-divider']}>|</div>
      <div className={styles['menu-item']}>원자력안전도</div>
      <div className={styles['menu-divider']}>|</div>
      <div className={styles['menu-item']}>경주관광지</div>
      <div className={styles['menu-divider']}>|</div>
      <div className={styles['menu-item']}>나의여행일정</div>
    </div>
  );
}

export default MenuBar;
