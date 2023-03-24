import { useState, useContext } from "react";

import QuizContext from "../../store/quiz-context";
import styles from "./DisplayedQuestion.module.css";

const DisplayedQuestion = (props) => {
  const [optionSelected, setOptionSelected] = useState("");
  const quizCtxt = useContext(QuizContext);

  const question = props.displayQuestion;

  const nextQuestion = () => {
    props.handleNextQuestion();
  };
  const previousQuestion = () => {
    props.handlePreviousQuestion();
  };
  const handleSubmitQuiz = () => {
    quizCtxt.updateQuizSubmitted(true, props.selectedAnswers);
    props.submitQuiz();
  };
  const handleOptionSelection = (e) => {
    setOptionSelected(question.options[e.target.value].answer);
    console.log(optionSelected);
    props.optionSelected(question.no, e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.question}>
          Q.{question.no} {question.text}
        </p>
        <hr className={styles.ruler} />
        <ol
          type="A"
          className={
            quizCtxt.quizSubmitted
              ? `${styles.disabled} ${styles.list}`
              : `${styles.list}`
          }
        >
          {question.options.map((option, i) => {
            return (
              <li
                key={i}
                className={
                  quizCtxt.quizSubmitted && option.correct
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
                    quizCtxt.quizSubmitted
                      ? Number(quizCtxt.submittedAnswers[question.no - 1]) === i
                        ? true
                        : false
                      : Number(props.selectedAnswers[question.no - 1]) === i
                      ? true
                      : false
                  }
                  disabled={
                    quizCtxt.quizSubmitted &&
                    Number(quizCtxt.submittedAnswers[question.no - 1]) !== i
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
              className={
                quizCtxt.quizSubmitted
                  ? `${styles.btn} ${styles["submit-btn"]} ${styles.disabled}`
                  : `${styles.btn} ${styles["submit-btn"]}`
              }
              disabled={quizCtxt.quizSubmitted ? true : false}
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
