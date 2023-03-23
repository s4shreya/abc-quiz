import {
  FaRegQuestionCircle,
  FaRegClock,
  FaExclamationCircle,
} from "react-icons/fa";
import { TfiMedall, TfiClose } from "react-icons/tfi";

import styles from "./QuizRulesModal.module.css";

function QuizRulesModal(props) {
  const closeModal = () => props.handleClose();

  return (
    <div className={styles.modal} onClick={closeModal}>
      <div
        className={styles["modal-content"]}
        onClick={(event) => event.stopPropagation()}
      >
        <h1 className={styles.heading}>Quiz Rules</h1>
        <TfiClose className={styles.close} onClick={closeModal} />
        <ul className={styles.rules}>
          <li className={styles.rows}>
            <FaRegClock className={styles.col1} />
            <div className={styles.col2}>
              <h5>10 Mins</h5>
              <p>Keep in mind that it's a time-bound quiz.</p>
            </div>
          </li>
          <li className={styles.rows}>
            <FaRegQuestionCircle className={styles.col1} />
            <div className={styles.col2}>
              <h5>5 Questions</h5>
              <p>We believe that you will ace it!</p>
            </div>
          </li>
          <li className={styles.rows}>
            <TfiMedall className={styles.col1} />
            <div className={styles.col2}>
              <h5>50% Passing Criteria</h5>
              <p>All the best! See you on the other side.</p>
            </div>
          </li>
        </ul>
        <small className={styles.note}>
          <FaExclamationCircle />
          This quiz can only be attempted once daily.
        </small>
        <button onClick={closeModal} className={styles.btn}>Start</button>
      </div>
    </div>
  );
}

export default QuizRulesModal;
