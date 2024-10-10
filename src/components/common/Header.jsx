import "./style/Header.css";
import Menu from "../Menu.jsx";
import { useState } from "react";

function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };

  return (
    <>
      <Menu isVisible={isMenuVisible} toggleMenu={toggleMenu} />
    </>
  );
}

export default Header;
