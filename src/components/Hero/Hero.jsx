import React, { useEffect, useState, useRef } from "react";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaSteam,
  FaExpand,
} from "react-icons/fa";
import phoneBG from "../../assets/phoneBg.png";
import video from "../../assets/trailer.mp4";
import css from "./Hero.module.css";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const enterFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <section
      className={css.hero}
      style={{
        backgroundImage: isMobile ? `url(${phoneBG})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {!isMobile && (
        <video
          className={css.video}
          ref={videoRef}
          autoPlay
          muted
          loop
          src={video}
        ></video>
      )}

      <div className={css.overlay}></div>

      <div className={css.content}>
        <h1
          className={css.title}
          data-text="MiSide - The Ultimate Psychological Horror Experience"
        >
          MiSide - The Ultimate Psychological Horror Experience
        </h1>

        {isMobile ? (
          <div className={css.iframeContainer}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/r-bgCU8a5CM?si=qJBdcaRBSlT5KmPU"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <p className={css.text}>
            Discover the immersive world of MiSide, a groundbreaking
            psychological horror game that redefines the boundaries of
            interactive storytelling. Dive into a captivating journey where
            reality blurs, and every decision shapes your experience.
          </p>
        )}

        <a
          href="https://store.steampowered.com/app/2527500/MiSide/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={css.btn}>
            <FaSteam />
            Download Miside
          </button>
        </a>
      </div>

      {!isMobile && (
        <div className={css.controls}>
          <button onClick={togglePlay} className={css.controlBtn}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button onClick={toggleMute} className={css.controlBtn}>
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
          <button onClick={enterFullscreen} className={css.controlBtn}>
            <FaExpand />
          </button>
        </div>
      )}
    </section>
  );
};

export default Hero;
