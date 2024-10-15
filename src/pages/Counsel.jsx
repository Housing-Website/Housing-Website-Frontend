import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import "./styles/Counsel.css";

const Counsel = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [visitDate, setVisitDate] = useState(new Date());
  const [message, setMessage] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);

  const handlePhoneChange = (e) => {
    const input = e.target.value.replace(/[^0-9]/g, ""); // 숫자 이외의 문자 제거함
    let formatted = "";

    if (input.length > 0) {
      formatted += input.slice(0, 3);
    }
    if (input.length >= 4) {
      formatted += "-" + input.slice(3, 7);
    }
    if (input.length >= 8) {
      formatted += "-" + input.slice(7, 11);
    }

    setPhone(formatted);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAgreed) {
      alert("개인정보 수집·이용 및 제3자 제공에 동의해야 합니다.");
      return;
    }

    const phoneRegex = /^(010-\d{4}-\d{4})$/; // 전화번호 형식 체크
    if (!phoneRegex.test(phone)) {
      alert("올바른 휴대폰 번호 형식을 입력하세요 (예: 010-1111-1111)");
      return;
    }

    try {
      await addDoc(collection(db, "counsel_inquiries"), {
        name,
        phone,
        visitDate: Timestamp.fromDate(visitDate),
        message,
        created_at: Timestamp.now(),
      });

      alert("문의가 성공적으로 등록되었습니다!");
      setName("");
      setPhone("");
      setVisitDate(new Date());
      setMessage("");
      setIsAgreed(false);
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("문의 등록에 실패했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <div className="counsel-container">
      <form className="counsel-form" onSubmit={handleSubmit}>
        <h2 className="counsel-agreement-title">
          개인정보 수집·이용 동의 및 제3자 제공 동의
        </h2>
        <p>
          수집하는 개인정보의 목적 및 항목
          <br />
          1) 수집목적: 접수 고객 응대 (전화, 문자)
          <br />
          2) 수집항목: 이름, 휴대폰번호 수집된 개인정보는 암호화 되어 사이트에
          기록되며,
          <br /> 접수 후 30일 경과시 전면 폐지되며 TM, DM 등 광고 활용으로 일체
          사용되지 않습니다.
          <br />
          다만, 방문 예약 및 관련된 상담에 관하여 안내를 드리기 위해서만
          이용됩니다.
        </p>
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="agreement"
            checked={isAgreed}
            onChange={() => setIsAgreed(!isAgreed)}
          />
          <label htmlFor="agreement" className="agreement-label">
            개인정보 수집·이용 및 제3자 제공에 동의합니다.
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="name">이름</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">전화번호</label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="010-1111-1111"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="visitDate">방문 날짜</label>
          <input
            id="visitDate"
            type="date"
            value={visitDate.toISOString().slice(0, 10)}
            onChange={(e) => setVisitDate(new Date(e.target.value))}
            min={new Date().toISOString().slice(0, 10)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">메시지</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          문의하기
        </button>
      </form>
    </div>
  );
};

export default Counsel;
