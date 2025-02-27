import css from "./Header.module.css";
import logo from "../../assets/logo.png";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={css.header}>
        <div className={css.headerWrapper}>
          <img className={css.logo} src={logo} alt="logo" />
          <button className={css.burgerButton} onClick={toggleMenu}>
            <div
              className={`${css.burgerLine} ${isMenuOpen ? css.open : ""}`}
            />
            <div
              className={`${css.burgerLine} ${isMenuOpen ? css.open : ""}`}
            />
            <div
              className={`${css.burgerLine} ${isMenuOpen ? css.open : ""}`}
            />
          </button>
          <nav className={`${css.menu} ${isMenuOpen ? css.menuOpen : ""}`}>
            <ul>
              <li>
                <a className={css.active} href="#home">
                  Home
                </a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#download">Download</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {isMenuOpen && <div className={css.overlay} onClick={toggleMenu}></div>}
    </>
  );
};

export default Header;
