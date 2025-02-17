import { useState, useEffect } from "react";
import { IoMdHeart } from "react-icons/io";
import { IoMdHeartDislike } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import styles from "./HeartCursor.module.css";

export default function HeartCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(window.innerWidth > 768);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth > 768);
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const handleMouseMove = (e) => {
      setTargetPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let animationFrame;
    const updatePosition = () => {
      setPosition((prev) => ({
        x: prev.x + (targetPosition.x - prev.x) * 0.01,
        y: prev.y + (targetPosition.y - prev.y) * 0.01,
      }));
      animationFrame = requestAnimationFrame(updatePosition);
    };

    animationFrame = requestAnimationFrame(updatePosition);
    return () => cancelAnimationFrame(animationFrame);
  }, [targetPosition, isVisible]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <div
          className={styles.heartCursor}
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 9999,
            pointerEvents: "none",
          }}
        >
          <IoMdHeart className={styles.heartIcon} />
        </div>
      )}
      {!isMobile && (
        <button
          className={styles.toggleButton}
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? (
            <IoMdHeartDislike className={styles.heartButton} />
          ) : (
            <IoMdHeart className={styles.heartButton} />
          )}
        </button>
      )}
      {showScrollButton && (
        <button className={styles.scrollToTopButton} onClick={scrollToTop}>
          <IoIosArrowUp className={styles.scrollIcon} />
        </button>
      )}
    </>
  );
}
