import styles from "../../styles/radWaste/radWaste.module.css";
import PropTypes from "prop-types";
import bodyImg from "../../assets/images/radWaste/bodyImg.webp";
import bodyImg2 from "../../assets/images/radWaste/bodyImg2.webp";
import bodyImg3 from "../../assets/images/radWaste/bodyImg3.webp";
import bodyImg4 from "../../assets/images/radWaste/bodyImg4.svg";
import bodyImg9 from "../../assets/images/radWaste/bodyImg9.webp";
import bodyImg10 from "../../assets/images/radWaste/bodyImg10.webp";
import { useMediaQuery } from "react-responsive";
import { useState, useRef, useEffect, memo } from "react";

const InfoSection = ({ onClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null); // ref는 useRef로 관리
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    if (!targetRef.current) return; // targetRef가 설정되지 않으면 리턴

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: isDesktop ? 0.1 : 0.3 }
    );

    const currentTarget = targetRef.current;
    observer.observe(currentTarget);

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [isDesktop]); // 빈 배열을 의존성으로 하여 처음 한 번만 실행

  return (
    <>
      {isVisible ? (
        <div onClick={onClick} className={styles.backBtn}>
          <span>시스템으로 돌아가기</span>
        </div>
      ) : null}
      <div ref={targetRef} className={styles.radWasteInfo}>
        <span>방폐물은 크게 두 가지로 나뉩니다.</span>
        <img loading="lazy" className={styles.bodyImg} src={bodyImg} />
        <img loading="lazy" className={styles.bodyImg9} src={bodyImg9} />
        <span>
          정확하게는 열 발생량이 2km/m3, 반감기 20년 이상인 알파선을 방출하는
          핵종으로
        </span>
        <span>방사능 농도가 그램당 4,000Bq(베크렐) 이상인 것입니다.</span>
        <span>경주 방폐물 처리장에서 주로 다루는 중저준위 방폐물은</span>
        <span>
          고준위 정도에는 미치지 않는 정도의 방사성 폐기물을 의미합니다.
        </span>
        <div>
          <span>우리나라의 고준위폐기물은</span>
        </div>
        <div className={styles.bodyImg2}>
          <img loading="lazy" src={bodyImg2} />
        </div>
        <span>
          이러한 폐기물은 바다 혹은 우주에 처리하는 등의 방안이 있지만,
        </span>
        <span>
          안전하게 고준위 폐기물을 관리할 수 없다고 판단하여 국제적으로 여러
          가지 측면을 고려해
        </span>
        <span>
          연구한 끝에 현재는 고준위 폐기물을 땅 속 깊은 곳에 보관하는 방법을
          택하고 있습니다.
        </span>
        <span>· 이로서 ·</span>
        <div className={styles.bodyImg3}>
          <img loading="lazy" src={bodyImg3} />
        </div>
        <div className={styles.bodyImg10}>
          <img loading="lazy" src={bodyImg10} />
          <div>
            <span>수십만 년 동안 방사능을 가지고 있을 수 있기 때문에</span>
            <span>조금이라도 방사능이 새게 해서는 안 되며,</span>
            <span>지속적인 방사능 검사와 관리가 필수적입니다.</span>
          </div>
        </div>
        <div className={styles.spans}>
          <span>이렇게 안정된 지질층에 방사성 폐기물을 보관한다면,</span>
          <span>
            우리가 마시는 물에 닿기까지 적어도 백만 년의 시간이 필요할 것이며,
          </span>
          <span>
            물과 접촉하더라도 만분의 1 시버트 정도의 아주 적은 양이 접촉할
            것이라고 예상하고 있습니다.
          </span>
          <span>
            이러한 특징을 기반으로 폐기물을 처리하는 공간을 지정하였으며,
          </span>
          <span>
            이를 &lsquo;방사성폐기물처분장&rsquo;에서 안전히 과정을 진행합니다.
          </span>
        </div>
        <object className={styles.bodyImg4} data={bodyImg4} />
        <div className={styles.spans2}>
          <span>지속적으로 언급이 되고 있는 고준위 방폐물의 경우에는 </span>
          <span>앞으로도 풀어나가야할 난제로 위치하고 있습니다.</span>
        </div>
        <span>이를 해결해 나가기 위해선 관련 전문가의 시선뿐만 아니라</span>
        <span>함께 책임을 지고 갈 우리들의 관심도 필수적입니다.</span>
        <span>경주의 사례만큼,</span>
        <span>원활한 해결 사례로 남을 수 있길 바라겠습니다.</span>
      </div>
    </>
  );
};

InfoSection.propTypes = {
  onClick: PropTypes.func, // 선택적 함수 타입
};

export default memo(InfoSection);
