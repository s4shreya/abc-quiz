import { createContext, useState } from "react";

const QuizContext = createContext({
  quizSubmitted: false,
  submittedAnswers: [],
  updateQuizSubmitted: (val) => {},
});

export function QuizContextProvider(props) {
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);
  const [ submittedAnswers, setSubmittedAnswers ] = useState([]);

  const updateQuizSubmitted = (val, submission) => {
    setSubmittedAnswers(submission);
    setIsQuizSubmitted(val);
  };

  const context = {
    quizSubmitted: isQuizSubmitted,
    submittedAnswers: submittedAnswers,
    updateQuizSubmitted: updateQuizSubmitted,
  };

  return (
    <QuizContext.Provider value={context}>
      {props.children}
    </QuizContext.Provider>
  );
}

export default QuizContext;
