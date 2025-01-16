import video from "../../assets/trailer.mp4";
import css from "./Hero.module.css";
import { FaSteam } from "react-icons/fa";
const Hero = () => {
  return (
    <section className={css.hero}>
      <div className={css.overlay}></div>
      <video className={css.video} autoPlay muted src={video}></video>
      <div className={css.content}>
        <h1>MiSide - The Ultimate Psychological Horror Experience</h1>
        <p>
          Discover the immersive world of MiSide, a groundbreaking psychological
          horror game that redefines the boundaries of interactive storytelling.
          Dive into a captivating journey where reality blurs, and every
          decision shapes your experience.
        </p>
        <button className={css.btn}>
          <FaSteam />
          Download Miside
        </button>
      </div>
    </section>
  );
};
export default Hero;
