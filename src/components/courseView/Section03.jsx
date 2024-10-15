import styles from '../../styles/courseView/section03.module.css';
import PropTypes from 'prop-types';
import InfoBox from '../radWaste/InfoBox';
import CourseMap from './CourseMap';
import { useNavigate } from 'react-router-dom';

const Section03 = ({ data }) => {
    const isDesktop = window.innerWidth >= 1024;
    const navigate = useNavigate();


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
            <button className={styles.saveButton} onClick={() => navigate('/findCode')}>코스 내보내기</button>
        </>
    );
};

export default Section03;

Section03.propTypes = {
    data: PropTypes.array
}