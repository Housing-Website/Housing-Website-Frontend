import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../../src/assets/images/banner.png";
import banner2 from "../assets/images/banner2.png";
import banner3 from "../assets/images/banner3.png";
import bannerGif from "../assets/video/banner2.gif"; // 새로운 배너 GIF 이미지
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PropTypes from "prop-types";
import "../components/common/style/Header.css";
import "./styles/MainPage.css";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import Counsel from "./Counsel";
import kakaochanneltalk from "../assets/images/kakaochanneltalk.png";
import cloudvideo from "../assets/video/분양.mp4";

function MainPage() {
  const navigate = useNavigate();
  const videoRef = useRef(null); // 비디오 요소 참조

  // 스크롤에 따라 비디오 자동 재생 감지
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.play(); // 비디오가 뷰포트에 들어오면 재생
        } else {
          videoRef.current.pause(); // 비디오가 뷰포트를 벗어나면 정지
        }
      },
      { threshold: 0.5 } // 비디오 요소가 50% 이상 보일 때 동작
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const handleContactClick = () => {
    navigate("/상담신청");
  };

  const handlePhoneCall = () => {
    window.location.href = "tel:1800-4177";
  };

  const handleBusinessInfoClick = () => {
    navigate("/사업정보");
  };

  const PreviousArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow custom-prev" onClick={onClick}>
        <IoIosArrowBack />
      </div>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow custom-next" onClick={onClick}>
        <IoIosArrowForward />
      </div>
    );
  };

  PreviousArrow.propTypes = {
    onClick: PropTypes.func,
  };

  NextArrow.propTypes = {
    onClick: PropTypes.func,
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
    arrows: true,
  };

  return (
    <>
      <div
        className="GifContainer"
        onClick={() => (window.location.href = "tel:1800-4177")}
      >
        <img src="/images/banner.gif" alt="Promotional GIF" />
      </div>

      <div>
        <Slider {...settings}>
          <div className="image-container">
            <div className="overlay">
              <span className="second-comment">
                프리미엄 워크스페이스에서 누리는 차별화된 경험
              </span>
              <span className="third-comment">“신광교 클라우드시티&quot;</span>
              <button className="contact" onClick={handlePhoneCall}>
                1800-4177
              </button>
            </div>
            <img src={banner} alt="banner img" className="banner-img visible" />
          </div>
          <div className="image-container">
            <div className="overlay">
              <span className="second-comment">
                신광교 클라우드시티의 특별한 혜택
              </span>
              <span className="third-comment">“최고의 선택&quot;</span>
              <button className="contact" onClick={handleBusinessInfoClick}>
                자세히 알아보기
              </button>
            </div>
            <img
              src={banner2}
              alt="banner img"
              className="banner-img visible"
            />
          </div>
          <div className="image-container">
            <div className="overlay">
              <span className="second-comment">
                차별화된 업무 환경을 만나보세요
              </span>
              <span className="third-comment">
                “비즈니스의 새로운 시대&quot;
              </span>
              <button className="contact" onClick={handleContactClick}>
                문의하기
              </button>
            </div>
            <img
              src={banner3}
              alt="banner img"
              className="banner-img visible"
            />
          </div>
        </Slider>
      </div>

      <div className="video-container">
        <video
          ref={videoRef} // 비디오 요소 참조 추가
          muted
          loop
          className="video-player"
        >
          <source src={cloudvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="image-banner-container">
        <img
          src="/src/assets/images/addimage1.jpeg" /* 경로를 실제 이미지 경로로 교체 */
          alt="Additional Banner"
          className="image-banner"
        />
      </div>

      {/* 추가된 banner2.gif */}
      <div className="gif-banner-container">
        <img
          src={bannerGif}
          alt="Promotional Banner 2"
          className="gif-banner"
        />
      </div>

      <div className="kakao-channel-btn">
        <img
          src={kakaochanneltalk}
          alt="카카오톡 채널"
          onClick={() => {
            window.open("http://pf.kakao.com/_mxmzvb", "_blank");
          }}
        />
      </div>

      <Counsel />
    </>
  );
}

export default MainPage;
