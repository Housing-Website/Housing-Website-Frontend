import community1 from "../assets/images/community1.png";
import community2 from "../assets/images/community2.png";
import "./styles/Community.css";

function Community() {
  return (
    <div className="community-container">
      <div className="community-sub-container">
        <h2 className="community-title">커뮤니티</h2>
      </div>
      <div className="community-info">
        <h2 className="community-about">신광교 클라우드 시티가 제공하는 프리미엄 커뮤니티</h2>
        <img src={community2} alt="community2-img" className="community-img" />
        <img src={community1} alt="community1-img" className="community-img" />
      </div>
    </div>
  );
}

export default Community;
