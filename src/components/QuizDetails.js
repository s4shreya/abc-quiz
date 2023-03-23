import { useState } from "react";

import {
  FaRegCommentDots,
  FaRegBookmark,
  FaPencilRuler,
  FaRegStickyNote,
  FaRegQuestionCircle,
  FaRegClock,
} from "react-icons/fa";
import { BsWindowStack } from "react-icons/bs";

import QuizRulesModal from "./QuizRulesModal";
import styles from "./QuizDetails.module.css";

function QuizDetails() {
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const handleTakeQuiz = () => setIsModalOpen(true);

  return (
    <div className={styles.container}>
      <h1>The Daily MS Excel Quiz</h1>
      <section className={styles.options}>
        <ul className={styles["left-col"]}>
          <li>
            <FaRegCommentDots />
            Leave a comment
          </li>
          <li>
            <FaRegBookmark />
            Save Quiz
          </li>
          <li>
            <FaPencilRuler />
            Challenge a friend
          </li>
        </ul>
        <ul className={styles["right-col"]}>
          <li>People enrolled</li>
          <li>Ratings</li>
        </ul>
      </section>
      <p>
        This Microsoft Excel Proficiency Test is designed to evaluate an
        individual's knowledge and skills in using Microsoft Excel. It covers a
        wide range of topics, including
      </p>
      <section>
        <h3>This Quiz includes</h3>
        <ul className={styles.details}>
          <li>
            <FaRegStickyNote />
            50% Passing Percentage
          </li>
          <li>
            <FaRegQuestionCircle />5 Questions
          </li>
          <li>
            <FaRegClock />
            10 Minutes
          </li>
          <li>
            <BsWindowStack />1 Attempt Daily
          </li>
        </ul>
      </section>
      <button className={styles.btn} onClick={handleTakeQuiz}>Take Quiz</button>
      {isModalOpen && <QuizRulesModal />}
    </div>
  );
}

export default QuizDetails;
