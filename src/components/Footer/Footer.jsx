import { FaXTwitter } from "react-icons/fa6";
import { FaItchIo, FaSteam } from "react-icons/fa";
import { SiBoosty } from "react-icons/si";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={css.footer}>
      <div className={css.block}>
        <ul className={css.menu}>
          <li className={css.elem}>Home</li>
          <li className={css.elem}>Guides</li>
          <li className={css.elem}>Endings</li>
          <li className={css.elem}>Mita</li>
        </ul>
        <ul className={css.menu}>
          <li className={css.icon}>
            <FaXTwitter />
          </li>
          <li className={css.icon}>
            <FaItchIo />
          </li>
          <li className={css.icon}>
            <SiBoosty />
          </li>
          <li className={css.icon}>
            <FaSteam />
          </li>
        </ul>
        <p className={css.text}>
          MiSide is a revolutionary psychological horror adventure game that
          will challenge your perceptions of reality and fiction. Developed by
          the visionary team at AIHASTO, MiSide offers an unparalleled gaming
          experience, blending innovative gameplay mechanics with a deeply
          immersive narrative.
        </p>
      </div>
      <div className={css.secblock}>
        <span>Language:</span>
        <a className={css.link} href="">
          English
        </a>
        <a className={css.link} href="">
          日本語
        </a>
        <a className={css.link} href="">
          简体中文
        </a>
        <a className={css.link} href="">
          한국어
        </a>
        <a className={css.link} href="">
          Русский
        </a>
        <a className={css.link} href="">
          Português
        </a>
        <a className={css.link} href="">
          Español
        </a>
        <a className={css.link} href="">
          Français
        </a>
        <a className={css.link} href="">
          Deutsch
        </a>
      </div>
      <p>Made on educational purposes</p>
    </section>
  );
};
export default Footer;
