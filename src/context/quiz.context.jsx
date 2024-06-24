import { createContext, useState, useEffect } from "react";
import api from "../services/api";

const QuizContext = createContext();

function QuizProvider({ children }) {
  const [quiz, setQuiz] = useState(null);

  const getSingleQuiz = async (quizId) => {
    try {
      const response = await api.get(`/quiz/${quizId}`);
      setQuiz(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return <QuizContext.Provider>{children}</QuizContext.Provider>;
}

export { QuizContext, QuizProvider };
