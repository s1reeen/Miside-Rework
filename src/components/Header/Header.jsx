import css from "./Header.module.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <section className={css.header}>
      <div>
        <img className={css.logo} src={logo} alt="" />
      </div>
      <div>
        <nav>
          <ul className={css.menu}>
            <li className={css.elem}>Home</li>
            <li className={css.elem}>Guides</li>
            <li className={css.elem}>Endings</li>
            <li className={css.elem}>Mita</li>
          </ul>
        </nav>
      </div>
    </section>
  );
};
export default Header;
