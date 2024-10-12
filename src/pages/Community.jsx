import community1 from "../assets/images/community1.png";
import "./styles/Community.css";

function Community() {
  return (
    <div className="community-container">
      <div className="community-sub-container">
        <h2 className="community-title">커뮤니티</h2>
      </div>
      <span className="community-subtitle">
        신광교 클라우드시티에서 제공되는 커뮤니티
      </span>
      <div className="community-info">
        <img src={community1} alt="community-img" className="community-img" />
      </div>
    </div>
  );
}

export default Community;
