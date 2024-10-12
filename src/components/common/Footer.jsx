import "./style/Footer.css";
import CloudCityLogo from "../../assets/images/CloudCityLogo.jpeg"; // 경로 수정

function Footer() {
  return (
    <div className="footer-container">
      {/* 로고 이미지 추가 */}
      <img
        src={CloudCityLogo} // 임포트된 이미지 변수 사용
        alt="신광교 클라우드시티 로고"
        className="footer-logo"
      />
      <div className="footer-info">
        <span className="footer-contact">Contact Us</span>
        <span className="footer-infos">
          위치 : 용인시 기흥구 영덕동 784번지
        </span>
        <span className="footer-infos">Tel : 1533 - 8389</span>
        <div className="footer-company-info">
          <span className="footer-company-infos">
            상호명 : 신광교클라우드시티(대표)
          </span>
          <span className="footer-company-infos">
            시행: 기세(주) | 시공: 현대엔지니어링(주)
          </span>
          <span className="footer-company-infos">
            시행: 인창건설(주) | 시공: 현대엔지니어링(주)
          </span>
          <span className="footer-company-infos">
            ©2024 All Rights Reserved.
          </span>
          <span className="footer-company-infos-login">관리자 로그인</span>
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
