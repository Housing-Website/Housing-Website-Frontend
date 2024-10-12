import "./style/Footer.css";
import CloudCityLogo from "../../assets/images/CloudCityLogo.jpeg"; // 경로 수정
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const handleLoginPage = () => {
    navigate('/로그인페이지'); 
  };
  return (
    <div className="footer-container">
      {/* 로고 이미지 추가 */}
      <div className="logo-container">
      <img
        src={CloudCityLogo} // 임포트된 이미지 변수 사용
        alt="신광교 클라우드시티 로고"
        className="footer-logo"
      />
      <button className="footer-login-btn" onClick={handleLoginPage}>관리자 로그인</button> {/*로그인 하면 > 로그아웃으로 바꿔야함*/}
      </div>
      <div className="footer-info">
        <span className="footer-infos">
          위치 : 용인시 기흥구 영덕동 784번지
        </span>
        <span className="footer-infos">Tel : 1533 - 8389</span>
        <div className="footer-company-info">
          <span className="footer-company-infos">
            상호명 : 신광교클라우드시티(대표) <br/>
            시행: 기세(주) | 시공: 현대엔지니어링(주) <br/>
            시행: 인창건설(주) | 시공: 현대엔지니어링(주) <br/>
            ©2024 All Rights Reserved.
          </span>
          <span className="footer-disclaimer">
            ※ 본 웹사이트에 기재된 사업계획은 인•허가 과정에서 일부 변경될 수
            있으며<br></br> 사용된 CG 및 이미지는 소비자의 이해를 돕기 위한
            것이며 실제와 다소 차이가 있을 수 있습니다.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
