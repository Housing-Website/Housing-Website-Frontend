import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Menu.css";

function Menu() {
  const navigate = useNavigate();
  
  const handleMainClick = () => {
    navigate('/');
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <span onClick={handleMainClick}>신광교 클라우드시티</span>
      </div>
      <nav className="navbar-links">
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
            <Link to="/complex-info">단지정보</Link>
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
