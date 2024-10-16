import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Suspense, lazy } from 'react';
import 'swiper/swiper-bundle.css';
import '../../styles/components/swiper.css';
import useFetchNotices from '../../hooks/main/useFetchNotices'; 
import { fetchAvgRadiation } from '../../hooks/axios/FetchData';
import MenuBar from '../../components/main/menubar';
const Map = lazy(() => import("../../components/main/map.jsx"));
import SearchBar from '../../components/main/searchbar';
import styles from '../../styles/main/main.module.css'; 
import mainname from '../../assets/images/main/mainname.webp';
import toptext from '../../assets/images/main/top_text.webp';
import text from '../../assets/images/main/text.svg';
import example1 from '../../assets/images/main/example1.svg';
import example2 from '../../assets/images/main/example2.svg';
import example3 from '../../assets/images/main/example3.svg';
import safety from '../../assets/images/main/safety.webp';
import safety2 from '../../assets/images/main/safety2.webp';
import themestory from '../../assets/images/main/Theme Story.webp';
import theme from '../../assets/images/main/theme.webp';
import information from '../../assets/images/main/information.webp';
import check from '../../assets/images/main/check.svg';
import c1 from '../../assets/images/main/c1.svg';
import c2 from '../../assets/images/main/c2.svg';
import bac2 from '../../assets/images/main/bac2.gif';

const images = [
  { id: 1, src: example1, alt: 'Image 1' },
  { id: 2, src: example2, alt: 'Image 2' },
  { id: 3, src: example3, alt: 'Image 3' },
];

function App() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { notices, loading, error } = useFetchNotices();

  // Prefetch avgRadiation data
  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ['avgRadiation'],
      queryFn: fetchAvgRadiation,
    });
  }, [queryClient]);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };

  const handleImageClick = (swiper, index) => {
    swiper.slideTo(swiper.clickedIndex);
    setCurrentIndex(index);
  };

  return (
    <div className={styles["app-container"]}>
      {/* Top section with background image */}
      <div className={styles["top-container"]} style={!isDesktop ? { backgroundImage: `url(${bac2})` } : null}>
        <div className={styles["image-overlay"]}>
          <img loading='lazy' src={mainname} className={styles["mainname"]} alt="main name" />
          <img loading='lazy' src={toptext} className={styles["toptext"]} alt="top text" />
          <button className={styles['top-button']} onClick={() => navigate('/introduction')}>
            자세히 알아보기
          </button>
        </div>
      </div>

      {/* Menu bar */}
      <div className={styles["m-container"]}>
        <MenuBar />
      </div>

      {/* Image gallery and text */}
      <div className={styles["image-container"]}>
        <div className={styles["text-and-dots-container"]}>
          <img loading='lazy' src={text} className={styles["text-image"]} alt="text" />
          <div className={styles["dot-indicator-container"]}>
            {images.map((_, index) => (
              <div
                key={index}
                className={`${styles["dot"]} ${currentIndex === index ? styles["active"] : ''}`}
              />
            ))}
          </div>
        </div>

        <div className={styles["image-gallery"]}>
          <Swiper
            ref={swiperRef}
            spaceBetween={15}
            slidesPerView={'auto'}
            autoplay={true}
            loop={true}
            onSlideChange={handleSlideChange}
          >
            {images.map((image, index) => (
              <SwiperSlide key={image.id} onClick={() => handleImageClick(swiperRef.current.swiper, index)}>
                <img loading='lazy'
                  src={image.src}
                  alt={image.alt}
                  className={`${styles["gallery-image"]} ${currentIndex === index ? styles["active"] : ''}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <p className={styles["middle-comment1"]}>
          *본 소개지는 &lsquo;한국원자력환경공단&rsquo; 인근 핫플레이스로, 사회적 갈등을 대화와 타협, 민주적 방식으로 극복해낸 역사적 모범사례로 대표합니다.
        </p>
      </div>

      {/* Safety section */}
      <div className={styles['middle-container']}>
        <div className={styles["safety-container"]}>
 
          <img loading='lazy' src={isDesktop ? safety2 : safety} className={styles["safety"]} alt="safety" />
          <div className={styles["sc-container"]}>
          </div>
          <img loading='lazy' src={check} className={styles["check"]} alt="check" />
          <img loading='lazy' src={c2} className={styles["c2"]} alt="c2" />
          <img loading='lazy' src={c1} className={styles["c1"]} alt="c1" />
        </div>

        {/* Theme section */}
        <div className={styles['theme-container']}>
          <img loading='lazy' src={theme} className={styles["theme"]} alt="theme" />
          <img loading='lazy' src={themestory} className={styles["themestory"]} alt="theme story" />
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
      </div>

      {/* Map and comments section */}
      <div className={styles["map-container"]}>
        <div className={styles["mc-container"]}>
          <p className={styles["map-comment"]}>
            <span className={styles["mc1"]}>경화주월</span><br/><br/>
            <span className={styles["mc2"]}>안전관리 역량이 단단한 경주를</span><br/>
            <span className={styles["mc3"]}>넓은 시야</span>
            <span className={styles["mc4"]}>로 바라보기</span>
          </p>
          <p className={styles["map-comment2"]}>
            방문객의 안전과 추억을 남길 재미를<br/>
            고려해 구성해 보았어요.
          </p>
        </div>

        <div className={styles["map-container2"]}>
          <Suspense>
            <Map />
          </Suspense>
          <SearchBar />
        </div>
      </div>

      {/* Information section */}
      <div className={styles["information-container"]}>
        <img loading='lazy' src={information} className={styles["information"]} alt="Information" />
        <div className={styles["notice-container"]}>
          {loading ? (
            <p>Loading notices...</p>
          ) : error ? (
            <p>Error loading notices.</p>
          ) : (
            notices.map((notice, index) => (
              <div key={index} className={styles["notice-item"]}>
                <div className={styles["notice-title-box"]}>공지사항</div>
                <p className={styles["notice-title"]} onClick={() => window.open(notice.url, "_blank")}>
                  {notice.title}
                </p>
                <p className={styles["notice-content"]} onClick={() => window.open(notice.url, "_blank")}>
                  {notice.content}
                </p>
              </div>
            ))
          )}
          <div className={styles["separator-line2"]}></div>
        </div>
      </div>

      {/* Footer section */}
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
