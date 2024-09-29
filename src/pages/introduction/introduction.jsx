import { useState, useRef } from 'react'; // useState와 useRef를 함께 임포트
import radiation from '../../assets/images/introduction/radiation.svg';
import topcomment from '../../assets/images/introduction/top-comment.svg';
import negative from '../../assets/images/introduction/negative.svg';
import negativec from '../../assets/images/introduction/negativec.svg';
import politics1 from '../../assets/images/introduction/politics1.svg';
import politics2 from '../../assets/images/introduction/politics2.svg';
import eight from '../../assets/images/introduction/8.svg';
import change from '../../assets/images/introduction/change.svg';
import aim from '../../assets/images/introduction/aim.svg';
import tower from '../../assets/images/introduction/tower.svg';
import promise from '../../assets/images/introduction/promise.svg';
import but from '../../assets/images/introduction/but.svg';
import fcomment from '../../assets/images/introduction/fcomment.svg';
import failure from '../../assets/images/introduction/failure.svg';
import bcomment from '../../assets/images/introduction/bottomcomment.svg';
import graph from '../../assets/images/introduction/graph.svg';
import end from '../../assets/images/introduction/end.svg';
import styles from '../../styles/introduction/introduction.module.css';


const images = [
  { id: 1, src: politics1, alt: 'Image 1' },
  { id: 2, src: politics2, alt: 'Image 2' },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRefs = useRef([]); 

  const handleImageClick = (index) => {
    setCurrentIndex(index); 
    imageRefs.current[index].scrollIntoView({ behavior: 'smooth', inline: 'center' }); // 스크롤 이동
  };

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
      <div className={styles["image-container"]}>
      <div className={styles["image-gallery"]}>
        {images.map((image, index) => (
          <img 
            key={image.id} 
            ref={(el) => (imageRefs.current[index] = el)} 
            src={image.src} 
            alt={image.alt} 
            className={`${styles["gallery-image"]} ${currentIndex === index ? styles["active"] : ''}`}
            onClick={() => handleImageClick(index)} 
          />
        ))}
        </div>
        <img src={eight} className={styles["eight"]} alt="8" />
        <img src={change} className={styles["change"]} alt="change comment" />
      </div>
      <div className={styles["aim-container"]}>
      <img src={aim} className={styles["aim"]} alt="aim" />
      </div>
      <div className={styles["tower-container"]}>
      <img src={tower} className={styles["tower"]} alt="tower" />
      <img src={promise} className={styles["promise"]} alt="promise" />
      <img src={but} className={styles["but"]} alt="but" />
      </div>
      <div className={styles["f-container"]}>
      <img src={failure} className={styles["failure"]} alt="failure" />
      <img src={fcomment} className={styles["fcomment"]} alt="fcomment" />
      </div>
      <div className={styles["bottom-container"]}>
      <img src={graph} className={styles["graph"]} alt="graph" />
      <img src={end} className={styles["end"]} alt="end" />
      <img src={bcomment} className={styles["bcomment"]} alt="bcomment" />
      </div>
    </div>
  );
}

export default App;
