import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import QuizContext from "../../store/quiz-context";
import CountdownTimer from "./CountdownTimer";
import DisplayedQuestion from "./DisplayedQuestion";
import TimeTaken from "./TimeTaken";

function Question(props) {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([-1, -1, -1, -1, -1]);
  const quizCtxt = useContext(QuizContext);

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

  const autoSubmit = () => {
    quizCtxt.updateQuizSubmitted(true, selectedAnswers);
    submitQuizHandler();
  };

  let totalTimeTaken = { minutes: 0, seconds: 19 };
  const totalMinutes = 0,
    totalSeconds = 60;

  const currentTimeTaken = (mins, sec) => {
    if (mins === 0 && sec === 0) {
      totalTimeTaken.minutes = "1";
      totalTimeTaken.seconds = "0";
    } else {
      totalTimeTaken.minutes = totalMinutes - mins;
      totalTimeTaken.seconds = totalSeconds - sec;
    }
  };

  return (
    <div>
      <div>
        {quizCtxt.quizSubmitted ? (
          <TimeTaken timeTaken={totalTimeTaken} />
        ) : (
          <CountdownTimer
            currentTimer={currentTimeTaken}
            submitQuiz={autoSubmit}
          />
        )}
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
