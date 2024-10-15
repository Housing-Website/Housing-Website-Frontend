import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { FaTrash } from 'react-icons/fa';
import './styles/Booking.css';

const Booking = () => {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    const fetchInquiries = async () => {
      const inquiryCollection = collection(db, 'counsel_inquiries');
      const inquirySnapshot = await getDocs(inquiryCollection);
      const inquiryList = inquirySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setInquiries(inquiryList);
    };

    fetchInquiries();
  }, []);

  const handleDelete = async (id) => {
    const inquiryDoc = doc(db, 'counsel_inquiries', id);
    await deleteDoc(inquiryDoc);
    setInquiries(inquiries.filter((inquiry) => inquiry.id !== id));
  };

  return (
    <div className="booking-container">
      <div className="booking-sub-container">
        <div className="booking-title">예약 문의 내역</div>
      </div>
        <div className="booking-list-container">
          <table className="booking-table">
            <thead>
              <tr>
                <th>이름</th>
                <th>전화번호</th>
                <th>방문일</th>
                <th>메시지</th>
                <th>삭제</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(inquiries) && inquiries.length > 0 ? (
                inquiries.map((inquiry) => (
                  <tr key={inquiry.id}>
                    <td>{inquiry.name}</td>
                    <td>{inquiry.phone}</td>
                    <td>
                      {inquiry.visitDate ? (
                        new Date(inquiry.visitDate.seconds * 1000).toLocaleDateString()
                      ) : (
                        '날짜 없음'
                      )}
                    </td>
                    <td>{inquiry.message}</td>
                    <td>
                      <button className="delete-btn" onClick={() => handleDelete(inquiry.id)}>
                        <FaTrash className="delete-icon" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">등록된 문의가 없습니다.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default Booking;
