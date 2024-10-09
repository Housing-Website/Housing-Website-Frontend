import React, {useState} from 'react'
import Header from '../components/common/Header'
import banner from '../../src/assets/images/banner.png'
import banner2 from '../assets/images/banner2.png'
import banner3 from '../assets/images/banner3.png'
import arrow from '../assets/images/arrow.png';
import '../components/common/style/Header.css';
import './styles/MainPage.css'


function MainPage() {

  const [currentBanner, setCurrentBanner] = useState(banner);

  const handleArrowClick = () => {
    const bannerImg = document.querySelectorAll('.banner-img'); 

    bannerImg.forEach((img) => {
      img.classList.remove('visible');
      img.classList.add('hidden');
    });

    setTimeout(() => {
      setCurrentBanner(prevBanner => prevBanner === banner ? banner2 : banner);
      bannerImg.forEach((img) => {
        img.classList.remove('hidden');
        img.classList.add('visible');
      });
    }, 500);
  };

  return (
    <div>
     <Header />
     <div className="image-container">
        <img 
          src={currentBanner} 
          alt='banner img' 
          className={`banner-img visible`} 
        />
        <div className="overlay">
          <span className='first-comment'>프리미엄 워크스페이스에서 누리는 차별화된 업무 경험</span>
          <span className='second-comment'>완벽하게 연결된 차별화 된 라이프스타일을 제공하는</span>
          <span className='third-comment'>“신광교 클라우드시티"</span>
          <button className='contact'>문의하기</button>
        </div>
        <img src={arrow} alt='arrow img' className="arrow-img" onClick={handleArrowClick} />
      </div>
      <img src={banner3} alt='banner3' />
    </div>
  )
}

export default MainPage
