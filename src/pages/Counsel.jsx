import { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../pages/styles/Counsel.css";

function Counsel() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [visitDate, setVisitDate] = useState(null);
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const visitDateRef = useRef(null);
  const messageRef = useRef(null);
  const agreementRef = useRef(null);

  const validatePhone = (phoneNumber) => {
    const phoneRegex = /^010-\d{4}-\d{4}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handlePhoneChange = (e) => {
    let input = e.target.value.replace(/\D/g, "");
    if (input.length > 3 && input.length <= 7) {
      input = input.slice(0, 3) + "-" + input.slice(3);
    } else if (input.length > 7) {
      input =
        input.slice(0, 3) + "-" + input.slice(3, 7) + "-" + input.slice(7, 11);
    }
    setPhone(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setError("");
  
    if (!agreed) {
      alert("개인정보취급방침에 동의해야합니다.");
      agreementRef.current.focus();
      setIsSubmitting(false);
      return;
    }
    if (!name) {
      setError("이름을 입력하세요.");
      nameRef.current.focus();
      setIsSubmitting(false);
      return;
    }
    if (!phone) {
      setError("휴대폰번호를 입력하세요.");
      phoneRef.current.focus();
      setIsSubmitting(false);
      return;
    }
    if (!validatePhone(phone)) {
      setError("올바른 휴대폰 번호 형식이 아닙니다. 예: 010-1234-5678");
      phoneRef.current.focus();
      setIsSubmitting(false);
      return;
    }
    if (!visitDate) {
      setError("방문 날짜를 선택하세요.");
      visitDateRef.current.setFocus();
      setIsSubmitting(false);
      return;
    }
    if (!message) {
      setError("문의 내용을 입력하세요.");
      messageRef.current.focus();
      setIsSubmitting(false);
      return;
    }
  
  
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          visitDate,
          message,
        }),
      });

      if (response.ok) {
        alert("문의가 성공적으로 등록되었습니다.");
        setName("");
        setPhone("");
        setVisitDate(null);
        setMessage("");
        setAgreed(false);
      } else {
        setError("문의 등록에 실패했습니다.");
      }
    } catch (error) {
      setError("서버 요청 중 오류가 발생했습니다.");
      console.error("Error during fetch:", error);
    } finally {
      setIsSubmitting(false);
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
        기록되며,
        <br /> 접수 후 30일 경과시 전면 폐지되며 TM,DM 등 광고 활용으로 일체
        사용되지 않습니다.
        <br />
        다만, 방문 예약 및 관련된 상담에 관하여 안내를 드리기 위해서만
        이용됩니다.
      </p>
      <div className="agreement">
        <input
          type="checkbox"
          id="agreement"
          ref={agreementRef}
          checked={agreed}
          onChange={() => setAgreed(!agreed)}
        />
        <label htmlFor="agreement">개인정보취급방침에 동의합니다.</label>
      </div>
      {error && <p className="error-message">{error}</p>}{" "}
      <form onSubmit={handleSubmit} className="counsel-form">
        <div className="form-group">
          <label htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            ref={nameRef}
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
            ref={phoneRef}
            value={phone}
            onChange={handlePhoneChange}
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
            ref={visitDateRef}
            required
            minDate={new Date()}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">문의 내용</label>
          <textarea
            id="message"
            ref={messageRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? "등록 중..." : "등록하기"}
        </button>
      </form>
    </div>
  );
}

export default Counsel;
