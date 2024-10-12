import { useState } from "react";
import { motion } from "framer-motion";
import "./styles/ApartmentInfo.css";

import B1Image from "../assets/images/B1.png";
import B2Image from "../assets/images/B2.png";
import B35Image from "../assets/images/B3-5.png";
import B6Image from "../assets/images/B6.png";

import Ground1FImage from "../assets/images/1F.png";
import Ground2FImage from "../assets/images/2F.png";
import Ground3FImage from "../assets/images/3F.png";
import Ground4FImage from "../assets/images/4F.png";
import Ground5FImage from "../assets/images/5F.png";
import Ground6FImage from "../assets/images/6F.png";
import Ground7FImage from "../assets/images/7F.png";
import Ground8FImage from "../assets/images/8F.png";
import Ground9FImage from "../assets/images/9F.png";
import Ground10FImage from "../assets/images/10F.png";

import Ground11FImage from "../assets/images/11F.png";
import Ground12FImage from "../assets/images/12F.png";
import Ground13FImage from "../assets/images/13F.png";
import Ground14FImage from "../assets/images/14F.png";
import Ground15FImage from "../assets/images/15F.png";
import Ground17FImage from "../assets/images/17F.png";

function ApartmentInfo() {
  const [activeTab, setActiveTab] = useState("B1");

  const renderImages = () => {
    switch (activeTab) {
      case "B1":
        return (
          <div className="image-grid">
            {[B1Image, B2Image, B35Image, B6Image].map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`지하 전층 ${index + 1}`}
                className="fade-in"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false }}
              />
            ))}
          </div>
        );
      case "G1-10":
        return (
          <div className="image-grid">
            {[
              Ground1FImage,
              Ground2FImage,
              Ground3FImage,
              Ground4FImage,
              Ground5FImage,
              Ground6FImage,
              Ground7FImage,
              Ground8FImage,
              Ground9FImage,
              Ground10FImage,
            ].map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`지상 ${index + 1}층`}
                className="fade-in"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              />
            ))}
          </div>
        );
      case "G11":
        return (
          <div className="image-grid">
            {[
              Ground11FImage,
              Ground12FImage,
              Ground13FImage,
              Ground14FImage,
              Ground15FImage,
              Ground17FImage,
            ].map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`지상 ${index + 11}층`}
                className="fade-in"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="apt-container">
      <div className="apt-sub-container">
        <h2 className="apt-title">단지정보</h2>
        <div className="tab-menu">
          <button
            className={activeTab === "B1" ? "active-tab" : ""}
            onClick={() => setActiveTab("B1")}
          >
            지하 전층
          </button>
          <button
            className={activeTab === "G1-10" ? "active-tab" : ""}
            onClick={() => setActiveTab("G1-10")}
          >
            지상 1~10층
          </button>
          <button
            className={activeTab === "G11" ? "active-tab" : ""}
            onClick={() => setActiveTab("G11")}
          >
            지상 11층~
          </button>
        </div>

        <div className="tab-content">{renderImages()}</div>
      </div>
    </div>
  );
}

export default ApartmentInfo;
