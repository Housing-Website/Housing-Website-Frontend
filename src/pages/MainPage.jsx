import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../../src/assets/images/banner.png";
import banner2 from "../assets/images/banner2.png";
import banner3 from "../assets/images/banner3.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PropTypes from "prop-types";
import "../components/common/style/Header.css";
import "./styles/MainPage.css";
import { useNavigate } from "react-router-dom";
import Counsel from "./Counsel";
import kakaochanneltalk from "../assets/images/kakaochanneltalk.png";

function MainPage() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/Counsel");
  };

  const handlePhoneCall = () => {
    window.location.href = "tel:1533-8389";
  };

  const handleBusinessInfoClick = () => {
    navigate("/business-info");
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
      <div>
        <Slider {...settings}>
          <div className="image-container">
            <div className="overlay">
              <span className="second-comment">
                프리미엄 워크스페이스에서 누리는 차별화된 업무 경험
              </span>
              <span className="third-comment">“신광교 클라우드시티&quot;</span>
              <button className="contact" onClick={handlePhoneCall}>
                1533-8389
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
