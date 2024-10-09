import { FaPhone } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import "./Menu.css";
import { FiPlus } from "react-icons/fi";

function Menu({ isVisible, toggleMenu }) {
  return (
    <div className={`menu-container ${isVisible ? "open" : ""}`}>
      <div className="menu-header">
        <span className="menu-website-name">신광교 클라우드시티</span>
        <span className="menu-line" />
        <FaPhone className="menu-call-icon" />
        <span className="menu-phone">1533-8389</span>
        <IoClose className="menu-close-icon" onClick={toggleMenu} />
      </div>
      <div className="menu-items">
        <div className="menu-item">
          <span>사업정보</span>
          <FiPlus />
        </div>
        <div className="menu-item">
          <span>관심등록</span>
          <FiPlus />
        </div>
        <div className="menu-item">
          <span>입지환경</span>
          <FiPlus />
        </div>
        <div className="menu-item">
          <span>커뮤니티</span>
          <FiPlus />
        </div>
        <div className="menu-item">
          <span>단지정보</span>
          <FiPlus />
        </div>

        <div className="menu-item">
          <span>단지정보12313</span>
          <FiPlus />
        </div>
      </div>
    </div>
  );
}

export default Menu;
