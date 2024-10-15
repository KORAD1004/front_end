import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/tourism/section01.module.css';
import background from '../../assets/images/tourism/Tourism_background.webp';
import title from '../../assets/images/tourism/Tourism_Title.svg';
import Quiz1 from '../../components/quiz/Quiz1.jsx';
import Quiz2 from '../../components/quiz/Quiz2.jsx';
import Quiz3 from '../../components/quiz/Quiz3.jsx';
import CourseSelect from './CourseSelect.jsx';
import ImageLazy from '../imgLazy/ImageLazy.jsx';


const Section01 = () => {
    const navigate = useNavigate();
    const [quizIndex, setQuizIndex] = useState(null); // quizIndex로 상태 관리
    const [selectedImageId, setSelectedImageId] = useState(null);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * 3); // 랜덤 인덱스
        setQuizIndex(randomIndex);
    }, []);

    const handleImageSelect = (id) => {
        setSelectedImageId(id);
    };

    const handleCourseSelect = () => {
        if (selectedImageId !== null) {
            navigate(`/courseSelection/?id=${selectedImageId}`);
        } else {
            navigate('/courseSelection/?id=1');
        }
    };

    const renderQuiz = () => {
        switch (quizIndex) {
            case 0:
                return <Quiz1 />;
            case 1:
                return <Quiz2 />;
            case 2:
                return <Quiz3 />;
            default:
                return null;
        }
    };

    return (
        <div className={styles.allContainer}>
            {renderQuiz()}
            <div className={styles.imageContainer}>
                <ImageLazy 
                    src={background}
                    alt="Tourism Background" 
                    className={styles.image}
                />
            </div>
            <div className={styles.tilteImageContainer}>
                <ImageLazy 
                    src={title}
                    alt="Tourism Title" 
                    className={styles.tilteImage}
                />
            </div>
            <div className={styles.mainTextContainer}>
                <p className={styles.mainSmallText}>KORAD 퀴즈 풀고 AI 맞춤 코스 확인 👀</p>
                <p className={styles.mainText}> 테마별 추천코스</p>
            </div>
                <CourseSelect onImageSelect={handleImageSelect}/>
            <div className={styles.courseButtonContainer}>
                <button className={styles.courseButton} onClick={handleCourseSelect}>코스선택하기</button>
            </div>
        </div>
      );
  };
  
  export default Section01;