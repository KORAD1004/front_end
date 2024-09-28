import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/header/header.module.css';
import back_icon from '../../assets/images/header/back-icon.svg';
import home_icon from '../../assets/images/header/home-icon.png';
import menu_icon from '../../assets/images/header/menu-icon.png';

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBackClick = () => {
    navigate(-1); // 뒤로가기
  };

  const handleHomeClick = () => {
    navigate('/'); // 홈으로 이동
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.IconsContainer}>
        <div className={styles.leftIcons}>
          <img 
            src={back_icon}
            alt="Back"
            className="icon"
            onClick={handleBackClick} 
          />
        </div>
        <div className={styles.rightIcons}>
          <img 
            src={home_icon}
            alt="Home"
            className="icon"
            onClick={handleHomeClick} 
          />
          <img 
            src={menu_icon}
            alt="Menu"
            className="icon"
            onClick={toggleMenu} 
          />
        </div>
      </div>
      {menuOpen && (
        <div className={styles.menu}>
          <ul>
            <li>Menu 1</li>
            <li>Menu 2</li>
            <li>Menu 3</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
