import { IoIosArrowDown } from "react-icons/io";
import css from "./Questions.module.css";
import { useState } from "react";

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const questions = [
    {
      question: "What is MiSide?",
      answer:
        "MiSide is a psychological horror game developed by AIHASTO and published by IndieArk. It features a gripping storyline, innovative 2D-to-3D gameplay transitions, and an immersive experience that combines fear with suspenseful storytelling.",
    },
    {
      question: "Where can I download MiSide?",
      answer:
        "You can download MiSide from Steam. Make sure to check the system requirements before downloading to ensure a smooth gaming experience.",
    },
    {
      question: "Is MiSide available on consoles?",
      answer:
        "Currently, MiSide is primarily available for PC (Windows). Stay tuned for updates on potential console releases by following our social media channels.",
    },
    {
      question: "What are the system requirements for MiSide?",
      answer:
        "The minimum system requirements for MiSide are as follows: OS: Windows 7 or higher, Memory: 4 GB RAM, Storage: 2 GB available space.",
    },
    {
      question: "Does MiSide support multiple languages?",
      answer:
        "Yes, MiSide supports multiple languages, including English, Chinese, and more. Language options can be selected in the game settings menu.",
    },
    {
      question: "Is MiSide suitable for all players?",
      answer:
        "MiSide is a psychological horror game that contains intense themes, flashing visuals, and sudden sounds. It may not be suitable for players with conditions like epilepsy or a sensitivity to horror elements. Viewer discretion is advised.",
    },
    {
      question: "Are there any multiplayer features in MiSide?",
      answer:
        "No, MiSide is a single-player game that focuses on storytelling and immersive interaction with the character MiTa. Its design ensures a deeply personal and emotional experience.",
    },
    {
      question: "How long does it take to complete MiSide?",
      answer:
        "The completion time for MiSide varies depending on your playstyle and the endings you pursue. On average, a playthrough takes 6-10 hours. However, with multiple endings and hidden secrets, replayability adds more value.",
    },
    {
      question: "How many endings does MiSide have?",
      answer:
        "MiSide offers several unique endings based on the choices you make during the game. To unlock all the endings, explore different decisions and paths in each playthrough.",
    },
  ];

  return (
    <section className={css.questions}>
      <div className={css.wrapper}>
        <h2 className={css.title}>Frequently Asked Questions</h2>
        <div className={css.container}>
          {questions.map((q, i) => (
            <div key={i} className={css.question}>
              <button
                className={`${css.questionTitle}`}
                onClick={() => toggleAnswer(i)}
              >
                <span>{q.question}</span>
                <span
                  className={`${css.arrow} ${
                    openIndex === i ? css.rotate : ""
                  }`}
                >
                  <IoIosArrowDown />
                </span>
              </button>
              <div
                className={`${css.answerWrapper} ${
                  openIndex === i ? css.expanded : ""
                }`}
              >
                <p className={css.answer}>{q.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;
