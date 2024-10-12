import { FaPhone, FaBars, FaTimes } from "react-icons/fa"; 
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Menu.css";
import CloudCityLogo from "../assets/images/CloudCityLogo.jpeg";

function Menu() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleMainClick = () => {
    navigate("/");
    setIsOpen(false);
  };

  const handlePhoneCall = () => {
    window.location.href = "tel:1533-8389";
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <img
        src={CloudCityLogo}
        alt="신광교 클라우드시티 로고"
        className="navbar-logo"
        onClick={handleMainClick}
      />
      
      <nav className="navbar-links">
        <ul>
          <li>
            <Link to="/사업정보" onClick={closeMenu}>사업정보</Link>
          </li>
          <li>
            <Link to="/상담신청" onClick={closeMenu}>상담신청</Link>
          </li>
          <li>
            <Link to="/입지환경" onClick={closeMenu}>입지환경</Link>
          </li>
          <li>
            <Link to="/커뮤니티" onClick={closeMenu}>커뮤니티</Link>
          </li>
          <li>
            <Link to="/단지정보" onClick={closeMenu}>단지정보</Link>
          </li>
        </ul>
      </nav>
      <div className="navbar-contact" onClick={handlePhoneCall}>
        <FaPhone className="call-icon" />
        <span>1533.8389</span>
      </div>
      <FaBars className="hamburger-icon" onClick={toggleMenu} />

      <div className={`menu-container ${isOpen ? "open" : ""}`}>
        <div className="menu-header">
          <div className="menu-website-name">신광교 클라우드시티</div>
          <FaTimes className="menu-close-icon" onClick={toggleMenu} />
        </div>
        <div className="menu-items">
          <div className="menu-item">
            <span><Link to="/사업정보" onClick={closeMenu}>사업정보</Link></span>
          </div>
          <div className="menu-item">
            <span><Link to="/상담신청" onClick={closeMenu}>상담신청</Link></span>
          </div>
          <div className="menu-item">
            <span><Link to="/입지환경" onClick={closeMenu}>입지환경</Link></span>
          </div>
          <div className="menu-item">
            <span><Link to="/커뮤니티" onClick={closeMenu}>커뮤니티</Link></span>
          </div>
          <div className="menu-item">
            <span><Link to="/단지정보" onClick={closeMenu}>단지정보</Link></span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Menu;
