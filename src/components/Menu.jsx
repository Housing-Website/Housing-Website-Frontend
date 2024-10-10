import { FaPhone } from "react-icons/fa6";
import "./Menu.css";

function Menu() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <span>신광교 클라우드시티</span>
      </div>

      <nav className="navbar-links">
        <ul>
          <li>
            <a href="#business-info">사업정보</a>
          </li>
          <li>
            <a href="#register-interest">관심등록</a>
          </li>
          <li>
            <a href="#location">입지환경</a>
          </li>
          <li>
            <a href="#community">커뮤니티</a>
          </li>
          <li>
            <a href="#complex-info">단지정보</a>
          </li>
        </ul>
      </nav>

      <div className="navbar-contact">
        <FaPhone className="call-icon" />
        <span>1533.8389</span>
      </div>
    </header>
  );
}

export default Menu;
