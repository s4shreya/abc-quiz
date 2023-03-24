import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import QuizQuestionsList from "./components/quiz/QuizQuestionsList";
import QuizDetails from "./components/quiz-details/QuizDetails";
import Result from "./components/result/Result";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/quiz-details" element={<QuizDetails />} />
        <Route path="/quiz" element={<QuizQuestionsList />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
