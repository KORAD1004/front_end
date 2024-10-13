import { useState, useEffect } from "react";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import styles from '../../styles/courseSelection/section03.module.css';
import ImageLazy from "../imgLazy/ImageLazy";

const Section03 = () => {
    const [courseData, setCourseData] = useState([]);
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    const getCourseData = async (id) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/course-place/${id}`);
            setCourseData(response.data);
        } catch (error) {
            console.error('Error fetching course data:', error);
        }
    };

    useEffect(() => {
        if (id) {
            getCourseData(id);
        }
    }, [id]);

    return (
        <div className={styles.allContainer}>
            <div className={styles.courseImgeAllContainer}>
                {courseData.length > 0 ? (
                    courseData.map((course, index) => (
                        <div className={styles.courseImageContainer} key={index}>
                            <div className={styles.circle}>
                                <span className={styles.circleText}>{index + 1}</span>
                            </div>
                            <ImageLazy
                                src={'https://' + course.image}
                                alt={`course Images ${index + 1}`}
                                className={styles.courseImage}
                            />
                        </div>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </div>
            <div className={styles.courseContainer}>
                {courseData.length > 0 ? (
                    courseData.map((course, index) => (
                        <div className={styles.card} key={index}>
                            <div className={styles.courseName}>{course.title}</div>
                            <hr className={styles.underline} />
                            <div className={styles.courseAddress}>{course.address}</div>
                        </div>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </div>
            <div className={styles.buttonContainer}>
                {courseData.length > 0 ? (
                    courseData.map((course, index) => (
                        <button key={index} className={styles.customButton} onClick={() => window.location.href = course.spotURL}>
                            더 알아보기
                        </button>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    );
};

export default Section03;