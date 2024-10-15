import styles from '../../styles/courseView/section02.module.css';
import CourseMap from './CourseMap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Section02 = ({ data }) => {    
    // 화면 너비를 확인하는 상태 추가
    const isDesktop = window.innerWidth >= 1024;

    return (
        <div className={styles.allContainer}>
            <div className={styles.scheduleContainer}>
                <div className={styles.scheduleItem}>
                    <FontAwesomeIcon icon={faCalendarAlt} className={styles.icon} />
                    <p className={styles.scheduleText}>{data && data.length && data[0].startDate}-</p>
                    <p className={styles.scheduleText}>{data && data.length && data[0].endDate}</p>
                </div>
                <div className={styles.scheduleItem}>
                    <FontAwesomeIcon icon={faClock} className={styles.icon} />
                    <p className={styles.scheduleText}>{data && data.length && data[0].days}</p>
                </div>
                <div className={styles.scheduleItem}>
                    <FontAwesomeIcon icon={faUser} className={styles.icon} />
                    <p className={styles.scheduleText}>{data && data.length && data[0].headCount}인</p>
                </div>
            </div>
            <div className={styles.underline}></div>
            {!isDesktop && <CourseMap data={data} />}
        </div>
    );
};

export default Section02;

Section02.propTypes = {
    data: PropTypes.array
};
