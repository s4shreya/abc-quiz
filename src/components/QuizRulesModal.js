import { FaRegQuestionCircle, FaRegClock, FaExclamationCircle } from 'react-icons/fa';
import { TfiMedall, TfiClose } from 'react-icons/tfi';

function QuizRulesModal() {
    return (
        <div>
            <h1>Quiz Rules</h1>
            <TfiClose />
            <ul>
                <li><FaRegClock /><h5>10 Mins</h5>
                <p>Keep in mind that it's a time-bound quiz.</p>
                </li>
                <li><FaRegQuestionCircle /><h5>5 Questions</h5>
                <p>We believe that you will ace it!</p>
                </li>
                <li><TfiMedall /><h5>50% Passing Criteria</h5>
                <p>All the best! See you on the other side.</p>
                </li>
            </ul>
            <small><FaExclamationCircle />This quiz can only be attempted once daily.</small>
            <button>Start</button>
        </div>
    );
}

export default QuizRulesModal;