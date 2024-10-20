import "./styles/BusinessInfo.css";
import business1 from "../assets/images/business1.png";
import business5 from "../assets/images/business5.png";
import business9 from "../assets/images/business9.png";
import business10 from "../assets/images/business10.png";
import business7 from "../assets/images/business7.png";

function BusinessInfo() {
  return (
    <div className="business-container">
      <div className="business-sub-container">
        <h2 className="business-title">사업정보</h2>
      </div>
      <span className="business-subtitle">
        왜 신광교 클라우드 시티인가요? 
      </span>
      <div className="business-section1">
        <img src={business5} alt="business5-img" className="business1-img" />
        <img src={business7} alt="business7-img" className="business1-img" />
        </div>
        <div className="business-section1">
        <img src={business9} alt="business9-img" className="business1-img" />
        <img src={business10} alt="business10-img" className="business1-img" />
      </div>
      <span className="business-section2-title">
        조감도 | 설계개요 | 용도별 면적
      </span>
      <div className="business-section2">
        <img src={business1} alt="business5-img" className="business5-img" />
      </div>
      <div className="business-section3">
      </div>
    </div>
  );
}

export default BusinessInfo;
