import { useState, useEffect } from "react";
import axios from 'axios';
import styles from '../../styles/courseSelection/section02.module.css';
import CourseMap from "./CourseMap";
import { useLocation } from 'react-router-dom';

const Section02 = () => {
    const isDesktop = window.innerWidth >= 1024;
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
            {course.length > 0 && (
                <div className={styles.tagContainer}>
                    {Array.from(new Set(course.map(item => item.category))).map((category, index) => (
                        <p key={index} className={styles.tag}>{category}</p>
                    ))}
                </div>
            )}

            { !isDesktop && <CourseMap /> }
        </div>
    );
};

export default Section02;