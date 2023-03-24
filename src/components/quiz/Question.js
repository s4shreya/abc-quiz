import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";
import DisplayedQuestion from "./DisplayedQuestion";

function Question(props) {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([-1, -1, -1, -1, -1]);

  const question = props.questionData;
  const handleNextQuestion = () => setCurrentQuestion(currentQuestion + 1);
  const handlePreviousQuestion = () => setCurrentQuestion(currentQuestion - 1);

  const optionSelected = (qno, optionIndex) => {
    const currentAnswers = selectedAnswers;
    currentAnswers[qno - 1] = optionIndex;
    setSelectedAnswers(currentAnswers);
  };

  const calculateScore = () => {
    const totalQuestions = selectedAnswers.length;
    let totalQuestionsAttempted = 0,
      totalScore = 0,
      percentage = 0,
      message = "";

    for (let index in selectedAnswers) {
      if (selectedAnswers[index] !== -1) {
        totalQuestionsAttempted++;
        if (question[index].options[selectedAnswers[index]].correct) {
          totalScore++;
        }
      }
    }

    percentage = (totalScore / totalQuestions) * 100;

    if (percentage < 60) {
      message = "Oh Snap, You can do better!";
    } else if (percentage < 85) {
      message = "You are good but you can do more better!";
    } else {
      message = "You are genius!";
    }

    return {
      totalQuestionsAttempted: totalQuestionsAttempted,
      totalQuestions: totalQuestions,
      totalScore: totalScore,
      percentage: percentage,
      message: message,
    };
  };
  const submitQuizHandler = () => {
    const result = calculateScore();
    navigate("/result", {
      replace: true,
      state: { resultData: result, timeTaken: totalTimeTaken },
    });
  };

  let totalTimeTaken = { minutes: 5, seconds: 0 };
  const totalMinutes = 4,
    totalSeconds = 60;

  const currentTimeTaken = (mins, sec) => {
    totalTimeTaken.minutes = totalMinutes - mins;
    totalTimeTaken.seconds = totalSeconds - sec;
  };

  return (
    <div>
      <div>
        <CountdownTimer currentTimer={currentTimeTaken} />
      </div>
      <DisplayedQuestion
        currentQuestion={currentQuestion}
        displayQuestion={question[currentQuestion]}
        handleNextQuestion={handleNextQuestion}
        handlePreviousQuestion={handlePreviousQuestion}
        optionSelected={optionSelected}
        submitQuiz={submitQuizHandler}
        selectedAnswers={selectedAnswers}
      />
    </div>
  );
}

export default Question;
