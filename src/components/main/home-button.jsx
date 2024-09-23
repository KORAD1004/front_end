import homebtn from '../../assets/images/main/home.svg'; 
import styles from '../../styles/main/main.module.css';

export default function HomeButton() {
    function goHome() {
        // 홈으로 이동하는 기능 (필요시 추가)
    }

    return (
        <img 
            onClick={goHome} 
            src={homebtn} 
            alt="Home" 
            className={styles["home-button"]} // 스타일 적용
        />
    );
}
