import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetchNotices from '../../hooks/main/useFetchNotices'; 
import mainback from '../../assets/images/main/mainback.svg'; 
import mainname from '../../assets/images/main/mainname.svg';
import toptext from '../../assets/images/main/top_text.svg';
import MenuBar from '../../components/main/menubar';
import text from '../../assets/images/main/text.svg';
import example1 from '../../assets/images/main/example1.svg';
import example2 from '../../assets/images/main/example2.svg';
import example3 from '../../assets/images/main/example3.svg';
import safety from '../../assets/images/main/safety.svg';
import themestory from '../../assets/images/main/Theme Story.svg';
import theme from '../../assets/images/main/theme.svg';
import Map from '../../components/main/map';
import SearchBar from '../../components/main/searchbar';
import information from '../../assets/images/main/information.svg';
import styles from '../../styles/main/main.module.css'; 
import ImageLazy from '../../components/imgLazy/ImageLazy';

const images = [
  { id: 1, src: example1, alt: 'Image 1' },
  { id: 2, src: example2, alt: 'Image 2' },
  { id: 3, src: example3, alt: 'Image 3' },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRefs = useRef([]);
  const galleryRef = useRef(null);
  const navigate = useNavigate();

  const { notices, loading, error } = useFetchNotices();

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    const clickedImage = imageRefs.current[index];
    const galleryElement = galleryRef.current;

    if (clickedImage && galleryElement) {
      const offsetLeft = clickedImage.offsetLeft - galleryElement.offsetWidth / 2 + clickedImage.offsetWidth / 2;
      galleryElement.scrollTo({
        left: offsetLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles["app-container"]}>
      <div className={styles["top-container"]}>
        <div className={styles["image-overlay"]}>
          <ImageLazy src={mainname} className={styles["mainname"]} alt="main name" />
          <ImageLazy src={toptext} className={styles["toptext"]} alt="top text" />
          <button className={styles['top-button']} onClick={() => navigate('/introduction')}>
            자세히 알아보기
          </button>
        </div>
      </div>

      <div className={styles["m-container"]}>
        <MenuBar />
        <hr className={styles["separator-line"]} />
      </div>

      <div className={styles["image-container"]}>
        <div className={styles["text-and-dots-container"]}>
          <ImageLazy src={text} className={styles["text-image"]} alt="text" />
          <div className={styles["dot-indicator-container"]}>
            {images.map((_, index) => (
              <div
                key={index}
                className={`${styles["dot"]} ${currentIndex === index ? styles["active"] : ''}`}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
        </div>

        <div className={styles["image-gallery"]} ref={galleryRef}>
          {images.map((image, index) => (
            <ImageLazy
              key={image.id}
              ref={(el) => (imageRefs.current[index] = el)}
              src={image.src}
              alt={image.alt}
              className={`${styles["gallery-image"]} ${currentIndex === index ? styles["active"] : ''}`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
        <p className={styles["middle-comment1"]}>
          *본 소개지는 '한국원자력환경공단' 인근 핫플레이스로, 사회적 갈등을 대화와 타협, 민주적 방식으로 극복해낸 역사적 모범사례로 대표합니다.
        </p>
      </div>

      <div className={styles['middle-container']}>
        <ImageLazy src={safety} className={styles["safety"]} alt="safety" />
        <ImageLazy src={theme} className={styles["theme"]} alt="theme" />
        <ImageLazy src={themestory} className={styles["themestory"]} alt="theme story" />
        <div className={styles['hashtag']}>
          <div className={styles['hashtag-row']}>
            <div className={styles['hashtag-box']}>#경주월드</div>
            <div className={styles['hashtag-box']}>#불국사</div>
            <div className={styles['hashtag-box']}>#첨성대</div>
          </div>
          <div className={styles['hashtag-row']}>
            <div className={styles['hashtag-box']}>#석굴암</div>
            <div className={styles['hashtag-box']}>#황리단길</div>
            <div className={styles['hashtag-box']}>#천마총</div>
            <div className={styles['hashtag-box']}>#동궁원</div>
          </div>
        </div>
      </div>

      <div className={styles["map-container"]}>
        <p className={styles["map-comment"]}>
          안전관리 역량의 기틀이 단단한 경주를 넓은 시야로 바라볼 수 있는 우리로 성장할 수 있게 둘러보아요.
        </p>
        <Map />
        <SearchBar />
      </div>

      <div className={styles["information-container"]}>
        <ImageLazy src={information} className={styles["information"]} alt="Information" />
        <div className={styles["notice-container"]}>
          <div className={styles["notice-item"]}>
            <div className={styles["notice-title-box"]}>공지사항</div>
            <p className={styles["notice-title"]}>
              비상진료에 따른 병·의원 이용안내
            </p>
            <p className={styles["notice-content"]}>
              응급의료포털 (https://www.e-gen.or.kr/)
            </p>
          </div>
          <div className={styles["notice-divider"]}></div>
          <div className={styles["notice-item"]}>
            <div className={styles["notice-title-box"]}>공지사항</div>
            <p className={styles["notice-title"]}>
              비상진료에 따른 병·의원 이용안내
            </p>
            <p className={styles["notice-content"]}>
              응급의료포털 (https://www.e-gen.or.kr/)
            </p>
          </div>
        </div>
      </div>

      <div className={styles["bottom-box"]}>
        <p className={styles["bottom-comment1"]}>
          방폐장 부지 선정 논의 후, 29년 만에 세계적인 수준으로 준공된
        </p>
        <p className={styles["bottom-comment2"]}>
          경주 방폐물 처리장을 보다 쉽고, 투명하게 전달하고자 노력하겠습니다.
        </p>
        <p className={styles["bottom-comment3"]}>
          본 웹앱은 한국원자력환경공단의 대표 공공데이터 API를 활용해 기획했습니다.
        </p>
      </div>
    </div>
  );
}

export default App;
