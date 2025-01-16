import css from "./About.module.css";
import img from "../../assets/mita.webp";

const About = () => {
  return (
    <div className={css.about}>
      <div className={css.imgBanner}>
        <img className={css.img} src={img} alt="Game Banner" />
      </div>
      <div className={css.textBox}>
        <h2>About MiSide</h2>
        <p className={css.txt}>
          MiSide is not just a game; it’s an unforgettable experience. Developed
          by AIHASTO and published by IndieArk, MiSide takes players on a
          chilling adventure into the mind of a virtual character, MiTa. With
          its innovative transition between 2D and 3D perspectives, MiSide
          creates an unparalleled sense of immersion and tension.
        </p>
        <p className={css.txt}>
          Whether you're a fan of horror games or love stories with unexpected
          twists, MiSide is designed to keep you on edge. Its unique mechanics
          and intense narrative have earned it critical acclaim and a dedicated
          fanbase worldwide.
        </p>
      </div>
    </div>
  );
};
export default About;
