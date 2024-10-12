import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa'; 
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


  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("정말로 삭제하시겠습니까?");
    if (!confirmDelete) return; 

    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/inquiries/${id}`);
      setInquiries(inquiries.filter(inquiry => inquiry.id !== id));
    } catch (error) {
      console.error('삭제 오류:', error);
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
                <td colSpan="5">데이터가 없습니다.</td> {/* 5열로 변경 */}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Booking;