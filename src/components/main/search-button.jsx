import { useState } from 'react';
import searchbtn from '../../assets/images/main/search.svg'; 
import styles from '../../styles/main/main.module.css'; // CSS 모듈 import

export default function SearchButton() {
    const [showSearch, setShowSearch] = useState(false);

    function toggleSearch() {
        setShowSearch(!showSearch);
    }

    return (
        <>
            <img 
                onClick={toggleSearch} 
                src={searchbtn} 
                alt="Search" 
                className={styles["search-button"]} // 클래스 이름을 CSS 모듈 방식으로 사용
            />
            {showSearch && (
                <input 
                    type="text" 
                    placeholder="검색어를 입력하세요..." 
                    className={styles["search-press"]} // showSearch가 true일 때 styles["search-press"] 클래스 적용
                />
            )}
        </>
    );
}
