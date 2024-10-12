import React from 'react';
import './styles/Booking.css';

function Booking() {
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
            {/*아직 없음*/}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Booking;
