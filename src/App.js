import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import QuizQuestionsList from "./components/quiz/QuizQuestionsList";

import QuizDetails from "./components/QuizDetails";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/quiz-details" element={<QuizDetails />} />
        <Route path="/quiz" element={<QuizQuestionsList />} />
      </Routes>
    </div>
  );
}

export default App;
