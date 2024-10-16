import React, { useState, useEffect } from "react";
import axios from 'axios';
import styles from '../../styles/tourism/section03.module.css';
import bottom from '../../assets/images/tourism/bottomImg.webp';
import ImageLazy from "../imgLazy/ImageLazy";

const Section03 = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/scrap/korad-naver-blog/article/recent/${5}`);
                setArticles(response.data);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();
    }, []);

    return (
        <div className={styles.allContainer}>
            <div className={styles.imgContainer}>
                <ImageLazy 
                    src={bottom}
                    alt="bottom image" 
                    className={styles.bottomImg}
                />
            </div>
            <div className={styles.mainTextContainer}>
                <p className={styles.mainSmallText}>KORAD가 직접 선정한</p>
                <p className={styles.mainText}>경주 아티클 클립</p>
            </div>
            <div className={styles.clipContainer}>
                {articles.map((article, index) => (
                    <div className={styles.clip} key={index}>
                        <div className={styles.clipBoxContainer}>
                            <div className={styles.clipBox}>BLOG</div>
                        </div>
                        <div className={styles.clipTextContainer}>
                            <p className={styles.clipText}>{article.content.title}</p>
                        </div>
                        <div className={styles.clipTextClickContainer}>
                            <p className={styles.clipTextClick} onClick={() => window.open(article.content.url, "_blank")}>
                                바로가기
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section03;
