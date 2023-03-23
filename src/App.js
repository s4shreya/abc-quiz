import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import QuizQuestionsList from "./components/quiz/QuizQuestionsList";
import QuizDetails from "./components/QuizDetails";
import Result from "./components/result/Result";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/quiz-details" element={<QuizDetails />} />
        <Route path="/quiz" element={<QuizQuestionsList />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
