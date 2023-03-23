import { useLocation, useNavigate } from "react-router-dom";
import { BiShareAlt } from 'react-icons/bi';

import styles from './Result.module.css';

const Result = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const result = location.state.resultData;

    const showAnswers = () => {
        navigate("/quiz");
    };

    return (
        <div className={styles.container}>
            <h1>The Daily MS Excel Quiz</h1>
            <div>
                <h5>You Scored:</h5>
                <h4>{result.percentage}%</h4>
                <p>{result.message}</p>
                <p>Success is not final, failure is not fatal; It is the courage to continue that counts.</p>
            </div>
            <div>
                <ul>
                    <li>Your Score</li>
                    <li>{result.totalScore} / {result.totalQuestions}</li>
                    <li>Avg: {result.totalScore} marks</li>
                </ul>
                <ul>
                    <li>Time Taken</li>
                    <li>{result.totalScore} / min</li>
                    <li>Avg:  1:59 mins</li>
                </ul>
            </div>
            <h3>seekho</h3>
            <p><span><BiShareAlt />Share it with your friends!</span></p>
            <div>
                <h5>Leaderboard</h5>
                <ol>
                    <li>Ronita Sarkar</li>
                </ol>
            </div>
            <button className={styles.btn} onClick={showAnswers}>Answers</button>

        </div>
    );
};

export default Result;