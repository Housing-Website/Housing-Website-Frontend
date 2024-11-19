import "./styles/BusinessInfo.css";
import business1 from "../assets/images/business1.png";
import business2 from "../assets/images/business2.png";
import business3 from "../assets/images/business3.png";
import business4 from "../assets/images/business4.png";

function BusinessInfo() {
  return (
    <div className="business-container">
      <div className="business-sub-container">
        <h2 className="business-title">사업정보</h2>
      </div>
      <span className="business-subtitle">
        신광교 클라우드 시티
      </span>
      <span className="business-section2-title">
        조감도 | 설계개요 | 용도별 면적
      </span>
      <br />
      <div className="business-section1">
        <img src={business1} alt="business1-img" className="business1-img" />
      </div>
        <img src={business2} alt="business2-img" className="business1-img" />
      <div className="business-section1">
        <img src={business3} alt="business3-img" className="business3-img" />
        <img src={business4} alt="business4-img" className="business4-img" />
      </div>
    </div>
  );
}

export default BusinessInfo;
