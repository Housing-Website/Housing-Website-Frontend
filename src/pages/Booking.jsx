import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa'; 
import './styles/Booking.css';

function Booking() {
  const [inquiries, setInquiries] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 로그인 여부 확인
  const checkSession = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/session-check`, { withCredentials: true });
      if (response.status === 200) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      setIsLoggedIn(false);
      console.error('세션 확인 오류:', error);
    }
  };

  // 데이터 가져오기
  const fetchInquiries = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/inquiries`, { withCredentials: true });
      setInquiries(response.data);
    } catch (error) {
      console.error('데이터 가져오기 오류:', error);
    }
  };

  // 삭제 핸들러
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("정말로 삭제하시겠습니까?");
    if (!confirmDelete) return; 

    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/inquiries/${id}`, { withCredentials: true });
      setInquiries(inquiries.filter(inquiry => inquiry.id !== id));
    } catch (error) {
      console.error('삭제 오류:', error);
    }
  };

  // 로그인 여부 확인 및 데이터 가져오기
  useEffect(() => {
    checkSession();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      fetchInquiries();
    }
  }, [isLoggedIn]);

  // 조건부 렌더링
  if (!isLoggedIn) {
    return <div className="booking-container">접근할 수 있는 권한이 없습니다. 로그인을 해주세요.</div>;
  }

  return (
    <div className="booking-container">
      <div className="booking-sub-container">
        <h2 className="booking-title">예약현황</h2>
      </div>
      <div className="booking-list-container">
        <table className="booking-table">
          <thead>
            <tr>
              <th>이름</th>
              <th>전화번호</th>
              <th>방문 날짜</th>
              <th>메시지</th>
              <th>삭제</th> {/* 삭제 열 추가 */}
            </tr>
          </thead>
          <tbody>
            {inquiries.length > 0 ? (
              inquiries.map((inquiry, index) => (
                <tr key={index}>
                  <td>{inquiry.name}</td>
                  <td>{inquiry.phone}</td>
                  <td>{new Date(inquiry.visit_date).toLocaleDateString()}</td> {/* 날짜 포맷팅 */}
                  <td>{inquiry.message}</td>
                  <td>
                    <FaTrash 
                      className="delete-icon" 
                      onClick={() => handleDelete(inquiry.id)} 
                      style={{ cursor: 'pointer', color: 'red' }} 
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center' }}>예약이 없습니다.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Booking;
