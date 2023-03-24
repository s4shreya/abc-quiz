import styles from './CountdownTimer.module.css';

const TimeTaken = (props) => {
    const mins = props.timeTaken.minutes;
    const sec = props.timeTaken.seconds;

    console.log("in stoppedtime " + props.timeTaken.seconds);

  return (
    <div className={styles.content}>
      <div className={styles["timer-btn"]}>
        <span className={styles.text}>Time taken: </span>
        <span className={styles.timer}>
          {" "}
          0{mins}:{sec < 10 ? "0" : ""}
          {sec} <span className={styles["total-time"]}>/ 01:00 </span>
        </span>
      </div>
    </div>
  );
};

export default TimeTaken;
