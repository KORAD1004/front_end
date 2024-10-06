import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import styles from '../../styles/courseSelection/section01.module.css';
import background from '../../assets/images/courseSelection/backgroundImg.png';

const Section01 = () => {
    const [firstPart, setFirstPart] = useState('');
    const [lastPart, setLastPart] = useState('');
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    const getCourseData = async (id) => {
        try {
            const response = await axios.get(`http://dev.smartcheers.site/api/course/${id}`);
            const courseNameParts = response.data.courseName.split(',');
            setFirstPart(courseNameParts[0] + ',');
            setLastPart(courseNameParts[courseNameParts.length - 1]);
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
            <div className={styles.imageContainer}>
                <img
                    src={background}
                    alt="course Background"
                    className={styles.image}
                />
            </div>
            <p className={styles.mainText}>코스 보기</p>
            <div className={styles.courseNameBarContainer}>
                <p className={styles.courseNameBar}>|</p>
            </div>
            <div className={styles.courseNameContainer}>
                {firstPart ? (
                    <>
                        <p className={styles.courseName}>{firstPart}</p>
                        <p className={styles.courseName}>{lastPart}</p>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default Section01;