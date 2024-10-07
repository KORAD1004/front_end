import {useState, useEffect} from "react";
import axios from 'axios';
import styles from '../../styles/courseSelection/section02.module.css';
import CourseMap from "./CourseMap";
import { useLocation } from 'react-router-dom';

const Section02 = () => {
    const [course, setCourse] = useState([]);
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    const getCourseData = async (id) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/course-place/${id}`);
            setCourse(response.data);
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
            <div className={styles.tagContainer}>
                {course.length > 0 && (
                    <>
                        {course[0] && <p className={styles.tag}>{course[0].category}</p>}
                        {course[1] && <p className={styles.tag}>{course[1].category}</p>}
                        {course[2] && <p className={styles.tag}>{course[2].category}</p>}
                    </>
                )}
            </div>
            <CourseMap />
            <div className={styles.timeContainer}>
                <div className={styles.timeBox}>
                    <p className={styles.timeText}>이동시간 포함 예상 소요시간</p>
                    <div className={styles.time}></div>
                </div>
            </div>
        </div>
    );
};

export default Section02;