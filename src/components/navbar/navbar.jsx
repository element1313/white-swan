import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//assets
import Logo from "../../assets/images/Frame.svg";
import cx from "classnames";

//style-sheet
import cls from "./navbar.module.scss";
import HamburgerMenu from "../hamburgerMenu";


function Navbar({ fatherHeight, bgNav }) {
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(fatherHeight);
    const changeBackground = () => {
      if (window.scrollY >= fatherHeight - 160) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener("scroll", changeBackground);
  }, [fatherHeight]);
  return (
    <div
      style={bgNav && { background: "black" }}
      className={cx(cls.container, navbar === true && cls.active)}
    >
      <div className={cls.navbar}>
        <div onClick={() => navigate("/")} className={cls.logo}>
          <img src={Logo} alt="" />
        </div>

        <div className={cls.menu}>
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
