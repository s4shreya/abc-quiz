const DisplayedQuestion = props => {
    const nextQuestion = () => {
            props.handleNextQuestion();
    };
    const previousQuestion = () => {
        props.handlePreviousQuestion();
    };
    const question = props.displayQuestion;

    return (
        <div>
            <p>Q.{question.no} {question.text}</p>
            <ol>
                {question.options.map((option, i) => <li key={i}>{option.answer}</li>)}
                {props.currentQuestion > 0 ? <button onClick={previousQuestion}>Previous</button> : ""}
                {props.currentQuestion !== 4 ? <button onClick={nextQuestion}>Next</button> : <button>Submit</button>}
            </ol>
        </div>
    );
}

export default DisplayedQuestion;