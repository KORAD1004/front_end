import styles from '../../styles/courseView/section01.module.css';
import background from '../../assets/images/courseView/background.png';
import clear from '../../assets/images/courseView/Clear.png';
import change from '../../assets/images/courseView/Change.png';
import { useSearchParams } from 'react-router-dom';


const Section01 = ({data}) => {
    const [param] = useSearchParams();
    const code = param.get("code");

    return (
        <div className={styles.allContainer}>
            <div className={styles.imageContainer}>
                <img 
                    src={background}
                    alt="course Background" 
                    className={styles.image}
                />
            </div>
            <p className={styles.mainText}>코스확인하기</p>
            <div className={styles.courseNameContainer}>
                <p className={styles.courseName}>| {data && data.length > 0 && data[0].travelName}</p>
                <p className={styles.codeBox}>#{code}</p>
                <div className={styles.buttonContainer}>
                    <img 
                        src={clear}
                        alt="course clear" 
                        className={styles.button}
                    />
                    <img 
                        src={change}
                        alt="course change" 
                        className={styles.button}
                    />
                </div>
            </div>     
        </div>
    );
};

export default Section01;