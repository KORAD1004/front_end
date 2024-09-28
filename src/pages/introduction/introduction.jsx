import React from 'react';
import radiation from '../../assets/images/introduction/radiation.svg';
import topcomment from '../../assets/images/introduction/top-comment.svg';
import negative from '../../assets/images/introduction/negative.svg';
import negativec from '../../assets/images/introduction/negativec.svg';
import styles from '../../styles/introduction/introduction.module.css';

function App() {
    return (
      <div className={styles["app-container"]}>
        <div className={styles["top-container"]}>
        <img src={radiation} className={styles["radiation"]} alt="radiation pic" />
        <img src={topcomment} className={styles["top-comment"]} alt="top comment" />
        </div>
        <div className={styles["ne-container"]}>
        <img src={negative} className={styles["negative"]} alt="negative img" />
        <img src={negativec} className={styles["negativec"]} alt="negative comment" />
        </div>
      </div>
    );
  }
  
  export default App;
  


