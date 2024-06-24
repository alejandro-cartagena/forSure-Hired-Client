import { createContext, useState, useEffect } from "react";
import api from "../services/api";

const QuizContext = createContext();

function QuizProvider({ children }) {
  const [quiz, setQuiz] = useState(null);

  const getAllQuizzes = async () => {
    try {
    } catch (error) {}
  };

  const getSingleQuiz = async (quizId) => {
    try {
      const response = await api.get(`/quiz/${quizId}`);
      setQuiz(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const createQuiz = async (quizInfo) => {
    try {
      const response = await api.post("/quiz", quizInfo);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <QuizContext.Provider value={{ quiz, getSingleQuiz, createQuiz }}>
      {children}
    </QuizContext.Provider>
  );
}

export { QuizContext, QuizProvider };
