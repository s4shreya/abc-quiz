import { useState } from "react";

import styles from "./DisplayedQuestion.module.css";

const DisplayedQuestion = (props) => {
  const [optionSelected, setOptionSelected] = useState("");

  const question = props.displayQuestion;

  const nextQuestion = () => {
    props.handleNextQuestion();
  };
  const previousQuestion = () => {
    props.handlePreviousQuestion();
  };
  const handleSubmitQuiz = () => {
    props.submitQuiz();
  };
  const handleOptionSelection = (e) => {
    setOptionSelected(question.options[e.target.value].answer);
    props.optionSelected(question.no, e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.question}>
          Q.{question.no} {question.text}
        </p>
        <hr className={styles.ruler} />
        <ol type="A" className={styles.list}>
          {question.options.map((option, i) => {
            return (
              <li
                key={i}
                className={
                  props.answersSubmitted && option.correct
                    ? styles.selected
                    : styles.option
                }
              >
                <label htmlFor={option.answer}>{option.answer}</label>
                <input
                  type="radio"
                  id={option.answer}
                  value={i}
                  name={question.no}
                  checked={
                    Number(props.selectedAnswers[question.no - 1]) === i
                      ? true
                      : false
                  }
                  onChange={handleOptionSelection}
                  className={styles.radio}
                />
              </li>
            );
          })}
          {props.currentQuestion > 0 ? (
            <button
              onClick={previousQuestion}
              className={`${styles.btn} ${styles["prev-btn"]}`}
            >
              Previous
            </button>
          ) : (
            ""
          )}
          {props.currentQuestion !== 4 ? (
            <button
              onClick={nextQuestion}
              className={`${styles.btn} ${styles["next-btn"]}`}
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmitQuiz}
              className={`${styles.btn} ${styles["submit-btn"]}`}
            >
              Submit
            </button>
          )}
        </ol>
      </div>
    </div>
  );
};

export default DisplayedQuestion;
