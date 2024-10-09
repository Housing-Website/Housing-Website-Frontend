import React, { useState } from 'react';
import { FaPhone } from "react-icons/fa6";
import { LuMenu } from "react-icons/lu";
import './style/Header.css';
import Menu from '../Menu.jsx';

function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(prev => !prev); 
  };

  return (
    <>
      <div className='main-header'>
        <span className='main-title'>신광교 클라우드시티</span>
        <span className='main-phone'><FaPhone className='call-icon' />1533.8389</span>
        <LuMenu className='menu-icon' onClick={toggleMenu} />
      </div>
      <Menu isVisible={isMenuVisible} toggleMenu={toggleMenu} />
    </>
  );
}

export default Header;
