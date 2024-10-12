import { FaPhone, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Menu.css";
import CloudCityLogo from "../assets/images/CloudCityLogo.jpeg"; // 이미지 경로 import

function Menu() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleMainClick = () => {
    navigate("/");
  };

  const handlePhoneCall = () => {
    window.location.href = "tel:1533-8389";
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      {/* 텍스트 대신 이미지로 로고 변경 */}
      <img
        src={CloudCityLogo}
        alt="신광교 클라우드시티 로고"
        className="navbar-logo"
        onClick={handleMainClick}
      />
      <nav className={`navbar-links ${isOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/business-info">사업정보</Link>
          </li>
          <li>
            <Link to="/counsel">상담신청</Link>
          </li>
          <li>
            <Link to="/location">입지환경</Link>
          </li>
          <li>
            <Link to="/community">커뮤니티</Link>
          </li>
          <li>
            <Link to="/apartment-info">단지정보</Link>
          </li>
        </ul>
      </nav>

      <div className="navbar-contact" onClick={handlePhoneCall}>
        <FaPhone className="call-icon" />
        <span>1533.8389</span>
      </div>
      <FaBars className="hamburger-icon" onClick={toggleMenu} />
    </header>
  );
}

export default Menu;
