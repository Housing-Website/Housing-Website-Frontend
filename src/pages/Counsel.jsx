import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../pages/styles/Counsel.css";

function Counsel() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [visitDate, setVisitDate] = useState(null);
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (agreed && name && phone && visitDate && message) {
      alert("등록되었습니다.");
    } else {
      alert("모든 입력란을 채워주세요");
    }
  };

  return (
    <div className="counsel-container">
      <h2>개인정보 수집·이용 동의 및 제3자 제공 동의</h2>
      <p>
        수집하는 개인정보의 목적 및 항목
        <br />
        1) 수집목적: 접수 고객 응대 (전화, 문자)
        <br />
        2) 수집항목: 이름, 휴대폰번호 수집된 개인정보는 암호화 되어 사이트에
        기록되며, <br /> 접수 후 30일 경과시 전면 폐지되며 TM,DM 등 광고
        활용으로 일체 사용되지 않습니다.
        <br />
        다만, 방문 예약 및 관련된 상담에 관하여 안내를 드리기 위해서만
        이용됩니다.
      </p>
      <div className="agreement">
        <input
          type="checkbox"
          id="agreement"
          checked={agreed}
          onChange={() => setAgreed(!agreed)}
        />
        <label htmlFor="agreement">개인정보취급방침에 동의합니다.</label>
      </div>
      <form onSubmit={handleSubmit} className="counsel-form">
        <div className="form-group">
          <label htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">휴대폰번호</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="visitDate">방문 날짜</label>
          <DatePicker
            selected={visitDate}
            onChange={(date) => setVisitDate(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="날짜 선택"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">문의 내용</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          등록하기
        </button>
      </form>
    </div>
  );
}

export default Counsel;
