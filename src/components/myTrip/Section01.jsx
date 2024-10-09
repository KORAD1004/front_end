import React from "react";
import styles from '../../styles/myTrip/section01.module.css';
import Background from '../../assets/images/myTrip/background.svg';

const Section01 = ({ tripName, setTripName, numPeople, setNumPeople, startDate, setStartDate, endDate, setEndDate, dayCount, setDayCount }) => {
    return (
        <>
            <div className={styles.allContainer}>
                <div className={styles.imgContainer}>
                    <img 
                        src={Background}
                        alt="myTrip Background" 
                        className={styles.image}
                    />
                    <div className={styles.titleContainer}>
                        <p className={styles.title}>나의여행일정</p>
                    </div>
                </div>
                <div className={styles.tripBigContainer}>
                    <div className={styles.tripTextContainer}>
                        <p className={styles.tripText}>여행명</p>
                        <input
                            type="text"
                            className={styles.longInputBox}
                            value={tripName}
                            onChange={(e) => setTripName(e.target.value)} // 여행명 업데이트
                        />
                        <p className={styles.tripText}>인원수</p>
                        <input
                            type="text"
                            className={styles.shortInputBox}
                            value={numPeople}
                            onChange={(e) => setNumPeople(e.target.value)} // 인원수 업데이트
                        />
                    </div>
                    <div className={styles.tripTextContainer}>
                        <p className={styles.tripText}>기간</p>
                        <div className={styles.daysContainer}>
                            <input
                                type="date"
                                className={styles.longInputBox2}
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)} // 시작 날짜 업데이트
                            />
                            <input
                                type="date"
                                className={styles.longInputBox3}
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)} // 종료 날짜 업데이트
                            />
                        </div>
                        <p className={styles.tripText}>일차</p>
                        <input
                            type="text"
                            className={styles.shortInputBox}
                            value={dayCount}
                            onChange={(e) => setDayCount(e.target.value)} // 일차 업데이트
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Section01;
