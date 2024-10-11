import React from 'react'
import './styles/BusinessInfo.css';
import business1 from "../assets/images/business1.png";
import business4 from "../assets/images/business4.png";
import business5 from "../assets/images/business5.png";
import business2 from "../assets/images/business2.png";
import business3 from "../assets/images/business3.png";

function BusinessInfo() {
  return (
    <div className='business-container'>
      <div className='business-sub-container'>
        <h2 className='business-title'>사업정보</h2>
      </div>
      <span className='business-subtitle'>비즈니스허브의탄생!<br />
      <span className='business-subtitle-hightlight'>약 축구장48배, 여의도63빌딩2배규모, 연면적약35만m²,5개동,33층의 비즈니스랜드마크!</span>
      </span>
      <div className='business-section1'>
        <img src={business1} alt='business1-img' className='business1-img'/>
        <img src={business4} alt='business4-img' className='business4-img'/>
      </div>
      <span className='business-section2-title'>조감도 | 설계개요 | 용도별 면적</span>
      <div className='business-section2'>
        <img src={business5} alt='business5-img' className='business5-img'/>
      </div>
      <div className='business-section3'>
        <img src={business2} alt='business2-img' className='business2-img'/>
        <img src={business3} alt='business3-img' className='business3-img'/>
      </div>
    </div>
  )
}

export default BusinessInfo