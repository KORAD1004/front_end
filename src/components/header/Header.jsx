import { useState, useEffect } from 'react';
import { useNavigate, useLocation  } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import headerIcon from '../../assets/images/header/headerIcon.svg';
import styles from '../../styles/header/header.module.css';
import back_icon from '../../assets/images/header/back-icon.svg';
import home_icon from '../../assets/images/header/home-icon.svg';
import menu_icon from '../../assets/images/header/menu-icon.svg';
import ImageLazy from '../imgLazy/ImageLazy';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);
 
  return (
    <>
      {isDesktop?
      <div className={`${styles.desktopHeader} ${location.pathname === '/radWaste' || location.pathname === '/findCode' ? styles.gradation : ''}`}>
        <div onClick={()=>navigate('/')} className={styles.title}>
          <img src={headerIcon}/>
          <div className={styles.titleLabel}>
            <span>경화수월 | 시적인 정취로 말로 표현할 수 없을 정도의 훌륭함을 나타냄</span>
          </div>
        </div>
        <div className={styles.menuList}>
          <div onClick={()=>navigate('/radWaste')}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
            className={
              (hoveredIndex && hoveredIndex !== 1) || 
              (location.pathname !== '/' && location.pathname !== '/radWaste') 
                ? styles.dimmed 
                : ''
            }
          >
            <span>방폐물시스템</span>
          </div>
          <div onClick={()=>navigate('/radiation')}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
            className={
              (hoveredIndex && hoveredIndex !== 2) || 
              (location.pathname !== '/' && location.pathname !== '/radiation') 
                ? styles.dimmed 
                : ''
            }
          >
            <span>원자력안전도</span>
          </div>
          <div onClick={()=>navigate('/tourism')}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
            className={
              (hoveredIndex && hoveredIndex !== 3) || 
              (location.pathname !== '/' && location.pathname !== '/tourism') 
                ? styles.dimmed 
                : ''
            }
          >
            <span>경주관광지</span>
          </div>
          <div onClick={()=>navigate('/findCode')}
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
            className={
              (hoveredIndex && hoveredIndex !== 4) || 
              (location.pathname !== '/' && location.pathname !== '/findCode') 
                ? styles.dimmed 
                : ''
            }
          >
            <span>나의여행일정</span>
          </div>
        </div>
      </div>
      :
      <header className={styles.header}>
        <div className={styles.IconsContainer}>
          <div className={styles.leftIcons}>
            <ImageLazy 
              src={back_icon}
              alt="Back"
              className="icon"
              onClick={handleBackClick} 
            />
          </div>
          <div className={styles.rightIcons}>
            <ImageLazy 
              src={home_icon}
              alt="Home"
              className="icon"
              onClick={handleHomeClick} 
            />
            <ImageLazy 
              src={menu_icon}
              alt="Menu"
              className="icon"
              onClick={toggleMenu} 
            />
          </div>
        </div>
          <div className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
            <ul>
              <li onClick={()=>navigate('/radWaste')}>방폐물이란?</li>
              <li onClick={()=>navigate('/radiation')}>원자력안전도</li>
              <li onClick={()=>navigate('/tourism')}>경주관광지</li>
              <li onClick={()=>navigate('/findCode')}>나의여행일정</li>
            </ul>
          </div>
      </header>}
    </>
  );
};

export default Header;