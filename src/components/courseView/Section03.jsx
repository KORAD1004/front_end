import styles from '../../styles/courseView/section03.module.css';
import PropTypes from 'prop-types';
import InfoBox from '../radWaste/InfoBox';
import CourseMap from './CourseMap';
import { useSearchParams } from 'react-router-dom';

const Section03 = ({ data }) => {
    const isDesktop = window.innerWidth >= 1024;
    const [param] = useSearchParams();
    const code = param.get("code");

    const copyClipBoard = async () => {
        try {
          await navigator.clipboard.writeText(code);
          alert('클립보드에 복사되었습니다!');
        } catch (err) {
          console.error('복사 실패:', err);
          alert('복사에 실패했습니다.');
        }
      };

    return (
        <>
            <div className={styles.allContainer}>
                {isDesktop && <CourseMap data={data} />}
                <div className={styles.placeContainer}>
                    {isDesktop ? (
                        <>
                            <p className={styles.placeTitle}>여행지 저장목록</p>
                            <div className={styles.placeUnderline}></div>
                        </>
                    ) : null}
                    <div className={styles.placeList}
                        style={data.length > 0 && data[1].length > 3 ? null : { justifyContent: "center" }}
                    >
                        {data.length > 1 &&
                            data[1].map(place => (
                                <div key={place.number} className={styles.place}>
                                    <div className={styles.placeImg}>
                                        <div className={styles.number}>{place.number}</div>
                                        <img src={"https://" + place.image} />
                                    </div>
                                    <div className={styles.infoContainer}>
                                        <InfoBox msg={place.title} msg2={place.address} width="100%" />
                                        <div className={styles.memo}>
                                            <span>{place.memo ? place.memo : "별도의 메모는 없습니다."}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className={styles.underline2}></div>
            <button className={styles.saveButton} onClick={copyClipBoard}>코드 복사하기</button>
        </>
    );
};

export default Section03;

Section03.propTypes = {
    data: PropTypes.array
}