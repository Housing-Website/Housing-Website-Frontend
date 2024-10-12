import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/Booking.css';

function Booking() {

  const [inquiries, setInquiries] = useState([]);

 
  const fetchInquiries = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/inquiries`);
      setInquiries(response.data);
    } catch (error) {
      console.error('데이터 가져오기 오류:', error);
    }
  };

 
  useEffect(() => {
    fetchInquiries();
  }, []);

  return (
    <div className="booking-container">
      <div className="booking-sub-container">
        <h2 className="booking-title">예약현황</h2>
      </div>
      <div className='booking-list-container'>
        <table className="booking-table">
          <thead>
            <tr>
              <th>이름</th>
              <th>전화번호</th>
              <th>방문 날짜</th>
              <th>메시지</th>
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
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">데이터가 없습니다.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Booking;