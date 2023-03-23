import { useState } from "react";
import DisplayedQuestion from "./DisplayedQuestion";

import styles from "./Question.module.css";

function Question(props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNextQuestion = () => setCurrentQuestion(currentQuestion + 1);
  const handlePreviousQuestion = () => setCurrentQuestion(currentQuestion - 1)

  const question = props.questionData;
  return (
    <div>
      <DisplayedQuestion
      currentQuestion={currentQuestion}
        displayQuestion={question[currentQuestion]}
        handleNextQuestion={handleNextQuestion}
        handlePreviousQuestion={handlePreviousQuestion}
      />
    </div>
  );
}

export default Question;
