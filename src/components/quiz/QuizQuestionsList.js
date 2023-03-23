import Question from "./Question";

function QuizQuestionsList() {
  const questions = [
    {
      no: 1,
      text: "What is the function used to lookup a value in a table and return a corressponding value from the same row?",
      options: [
        { answer: "MATCH", correct: false },
        { answer: "INDEX", correct: false },
        { answer: "HLOOKUP", correct: true },
        { answer: "VLOOKUP", correct: false },
      ],
    },
    {
      no: 2,
      text: "Which formula is NOT equivalent to all of the others?",
      options: [
        { answer: "=SUM(A3,A6)", correct: true },
        { answer: "=A3+A4+A5+A6", correct: false },
        { answer: "=SUM(A3:A6)", correct: false },
        { answer: "=SUM(A3,A4,A5,A6)", correct: false },
      ],
    },
    {
      no: 3,
      text: "A cell contains the value 7.877 and you want to display it as 7.9. How can you accomplish this?",
      options: [
        { answer: '"Click the decrease decimal button once."', correct: false },
        { answer: '"In the cells group on the Home tab"', correct: false },
        { answer: " ", correct: false },
        { answer: " ", correct: false },
      ],
    },
    {
      no: 4,
      text: "hh",
      options: [
        { answer: " ", correct: false },
        { answer: " ", correct: false },
        { answer: " ", correct: false },
        { answer: " ", correct: false },
      ],
    },
    {
      no: 5,
      text: "hh",
      options: [
        { answer: " ", correct: false },
        { answer: " ", correct: false },
        { answer: " ", correct: false },
        { answer: " ", correct: false },
      ],
    },
  ];

  return (
    <div>
      <Question questionData={questions} />
    </div>
  );
}

export default QuizQuestionsList;
