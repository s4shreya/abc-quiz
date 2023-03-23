const DisplayedQuestion = (props) => {

  const question = props.displayQuestion;

  const nextQuestion = () => {
    props.handleNextQuestion();
  };
  const previousQuestion = () => {
    props.handlePreviousQuestion();
  };
  const handleSubmitQuiz = () => {
    props.submitQuiz();
  };
  const handleOptionSelection = (e) => {
    props.optionSelected(question.no, e.target.value);
  };

  return (
    <div>
      <p>
        Q.{question.no} {question.text}
      </p>
      <ol>
        {question.options.map((option, i) => {
          return (
            <li key={i}>
              <label htmlFor={option.answer}>
              {option.answer}</label>
              <input
                type="radio"
                id={option.answer}
                value={i}
                name={question.no}
                onChange={handleOptionSelection}
              />
            </li>
          );
        })}
        {props.currentQuestion > 0 ? (
          <button onClick={previousQuestion}>Previous</button>
        ) : (
          ""
        )}
        {props.currentQuestion !== 4 ? (
          <button onClick={nextQuestion}>Next</button>
        ) : (
          <button onClick={handleSubmitQuiz}>Submit</button>
        )}
      </ol>
    </div>
  );
};

export default DisplayedQuestion;
