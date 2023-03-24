import { useState, useRef, useEffect } from "react";

import styles from "./CountdownTimer.module.css";

const CountdownTimer = props => {
  const [timer, setTimer] = useState(300);

  let timerRef = useRef();

  const decreaseTimer = () => setTimer((prev) => prev - 1);

  let calculateTime = () => {
    let minutes = Math.floor(timer / 60);
    let seconds = timer % 60;
    props.currentTimer(minutes, seconds);
    return { mins: minutes, sec: seconds };
  };

  let currentTimer = calculateTime();
  let mins = currentTimer.mins,
    sec = currentTimer.sec;

    if(mins === 0 && sec === 0) {
      props.submitQuiz();
    }

  useEffect(() => {
    timerRef.current = setInterval(decreaseTimer, 1000);
  }, []);

  return (
    <div className={styles.content}>
      <div className={styles["timer-btn"]}>
        <span className={styles.text}>Time remaining: </span>
        <span className={styles.timer}>
          {" "}
          0{mins}:{sec < 10 ? "0" : ""}
          {sec} <span className={styles["total-time"]}>/ 05:00 </span>
        </span>
      </div>
    </div>
  );
};

export default CountdownTimer;
