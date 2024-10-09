import styles from '../../styles/courseView/section03.module.css';
import PropTypes from 'prop-types';
import InfoBox from '../radWaste/InfoBox';

const Section03 = ({ data }) => {
    console.log(data);

    return (
        <div className={styles.allContainer}>
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
                            <InfoBox msg={place.title} msg2={place.address} width="100%" />
                            <div className={styles.memo}>
                                <span>{place.memo ? place.memo : "메모가 없습니다"}</span>
                            </div>

                        </div>
                    ))
                }
            </div>
            <div className={styles.underline2}></div>
            <button className={styles.saveButton}>코스 내보내기</button>
        </div>
    );
};

export default Section03;

Section03.propTypes = {
    data: PropTypes.array
}