import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation  } from 'react-router-dom';
import styles from '../../styles/header/header.module.css';
import back_icon from '../../assets/images/header/back-icon.svg';
import home_icon from '../../assets/images/header/home-icon.png';
import menu_icon from '../../assets/images/header/menu-icon.png';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);
 
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
        <div className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
          <ul>
            <li onClick={()=>navigate('/#')}>방폐물이란?</li>
            <li onClick={()=>navigate('/radiation')}>원자력안전도</li>
            <li onClick={()=>navigate('/tourism')}>경주관광지</li>
            <li onClick={()=>navigate('/myTrip')}>나의여행일정</li>
          </ul>
        </div>
    </header>
  );
};

export default Header;
