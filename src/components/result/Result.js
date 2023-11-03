import { useLocation, useNavigate } from "react-router-dom";
import { BiShareAlt } from "react-icons/bi";
import { MdStars } from "react-icons/md";

import styles from "./Result.module.css";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const result = location.state.resultData;
  const timeTaken = location.state.timeTaken;

  const showAnswers = () => {
    navigate("/quiz");
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>The Daily MS Excel Quiz</h1>
        <div className={styles["result-msg"]}>
          <h5>You Scored:</h5>
          <h3>{result.percentage}%</h3>
          <p className={styles.message}>{result.message}</p>
          <p className={styles.quote}>
            Success is not final, failure is not fatal; It is the courage to
            continue that counts.
          </p>
        </div>
        <div className={styles.row}>
          <ul className={styles["col-1"]}>
            <li>Your Score</li>
            <li>
              {result.totalScore}/{result.totalQuestions}
            </li>
            <li>Avg: {result.totalScore} marks</li>
          </ul>
          <ul className={styles["col-2"]}>
            <li>Time Taken</li>
            <li>
              0{timeTaken.minutes}:{timeTaken.seconds < 10 ? "0" : ""}
              {timeTaken.seconds} <span>min</span>
            </li>
            <li>Avg: 0:49 mins</li>
          </ul>
        </div>
        <h3 className={styles["company-name"]}>Quiz</h3>
        <p className={styles.share}>
          <BiShareAlt />
          <span>Share it with your friends!</span>
        </p>
      </div>
      <div className={styles.leaderboard}>
        <div className={styles["row-2"]}>
          <h5>Leaderboard</h5>
          <span>VIEW ALL</span>
        </div>
        <ol>
          <li>
            Ronita Sarkar
            <span className={styles.followers}>
              <MdStars />
              256
            </span>
          </li>
          <li>
            Akshay Dhingra
            <span className={styles.followers}>
              <MdStars />
              356
            </span>
          </li>
        </ol>
      </div>
      <button className={styles.btn} onClick={showAnswers}>
        Answers
      </button>
    </div>
  );
};

export default Result;
