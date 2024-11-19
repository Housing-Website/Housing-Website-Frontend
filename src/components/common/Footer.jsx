import PropTypes from "prop-types";
import "./style/Footer.css";
import CloudCityLogo from "../../assets/images/CloudCityLogo.jpeg";
import { useNavigate } from "react-router-dom";

function Footer({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLoginPages = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      sessionStorage.clear();
      alert("로그아웃 되었습니다.");
      navigate("/");
    } else {
      navigate("/로그인페이지");
    }
  };

  return (
    <div className="footer-container">
      <div className="logo-container">
        <img
          src={CloudCityLogo}
          alt="신광교 클라우드시티 로고"
          className="footer-logo"
        />
        <button className="footer-login-btn" onClick={handleLoginPages}>
          {isLoggedIn ? "로그아웃" : "관리자 로그인"}
        </button>
      </div>
      <div className="footer-info">
        <span className="footer-infos">
          위치 : 용인시 기흥구 영덕동 784번지
        </span>
        <span className="footer-infos">Tel : 1800 - 4177</span>
        <div className="footer-company-info">
          <span className="footer-company-infos">
            상호명 : 신광교클라우드시티 <br />
            ©2024 All Rights Reserved.
          </span>
          <span className="footer-disclaimer">
            ※ 본 웹사이트에 기재된 사업계획은 인•허가 과정에서 일부 변경될 수
            있으며
            <br /> 사용된 CG 및 이미지는 소비자의 이해를 돕기 위한 것이며 실제와
            다소 차이가 있을 수 있습니다.
          </span>
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default Footer;
