import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import headerIcon from "../../assets/images/header/headerIcon.svg";
import back_icon from "../../assets/images/header/back-icon.svg";
import home_icon from "../../assets/images/header/home-icon.svg";
import menu_icon from "../../assets/images/header/menu-icon.svg";
import ImageLazy from "../imgLazy/ImageLazy";

const menuItemBase =
  "cursor-pointer px-[3%] py-[3%] rounded-[10px] transition-[color,font-family] duration-[250ms] ease-in hover:font-pretendard-bold hover:text-white";

const NAV_ITEMS = [
  { label: "방폐물시스템", path: "/radWaste", allowedPaths: ["/radWaste"] },
  { label: "원자력안전도", path: "/radiation", allowedPaths: ["/radiation"] },
  {
    label: "경주관광지",
    path: "/tourism",
    allowedPaths: ["/tourism", "/courseSelection"],
  },
  {
    label: "나의여행일정",
    path: "/findCode",
    allowedPaths: ["/findCode", "/courseView", "/myTrip"],
  },
];

const MOBILE_NAV_ITEMS = [
  { label: "방폐물이란?", path: "/radWaste" },
  { label: "원자력안전도", path: "/radiation" },
  { label: "경주관광지", path: "/tourism" },
  { label: "나의여행일정", path: "/findCode" },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isOffRoute = location.pathname !== "/";

  return (
    <>
      {isDesktop ? (
        <div
          className={`absolute flex justify-between py-[20px] pl-[5%] pr-0 w-screen box-border z-[100] text-white ${
            location.pathname === "/radWaste" ||
            location.pathname === "/findCode"
              ? "bg-gradient-to-r from-[#1a4400] to-black"
              : ""
          }`}
        >
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-[3%] cursor-pointer w-[45%]"
          >
            <img src={headerIcon} className="w-[23%] aspect-[3.6/1]" />
            <div className="relative top-[10%] w-1/2">
              <span className="text-[13.68px] font-pretendard whitespace-nowrap">
                경화수월 | 시적인 정취로 말로 표현할 수 없을 정도의 훌륭함을
                나타냄
              </span>
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-center text-[18px] font-pretendardv font-semibold [&:has(>div:hover)>div:not(:hover)]:text-[#787878]">
            {NAV_ITEMS.map((item) => {
              const offRouteDim =
                isOffRoute && !item.allowedPaths.includes(location.pathname)
                  ? "text-[#787878]"
                  : "";
              return (
                <div
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`${menuItemBase} ${offRouteDim}`}
                >
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <header className="flex justify-between items-center p-[25px] bg-transparent relative -mb-[71px] top-[20px] z-[100]">
          <div className="flex justify-between w-full">
            <div
              style={location.pathname === "/" ? { visibility: "hidden" } : {}}
              className="flex items-center"
            >
              <ImageLazy
                src={back_icon}
                alt="Back"
                className="icon"
                onClick={handleBackClick}
              />
            </div>
            <div className="flex items-center gap-[25px]">
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
          <div
            className={`absolute top-[70%] right-0 w-[185px] bg-gradient-to-b from-[#365d29] to-[#4f8b3d] p-[15px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] text-white overflow-hidden [transition-timing-function:ease] duration-[400ms] transition-[opacity,max-height] ${
              menuOpen ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"
            }`}
          >
            <ul className="list-none p-[10%] m-0">
              {MOBILE_NAV_ITEMS.map((item) => (
                <li
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className="py-[10px] cursor-pointer font-pretendard text-[12px] border-b border-white/20 last:border-b-0 mt-[2%] text-left pl-[2%] hover:bg-white/10"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
