import { createContext, useState, useEffect, useContext } from "react";
import api from "../services/api";
import { AuthContext } from "./auth.context";

const QuizContext = createContext();

function QuizProvider({ children }) {
  const [quiz, setQuiz] = useState(null);
  const { isLoggedIn } = useContext(AuthContext);

  const getAllQuizzes = async () => {
    try {
      const response = await api.get("/quiz");
      setQuiz(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getSingleQuiz = async (jobId) => {
    try {
      const response = await api.get(`/quiz/${jobId}`);
      setQuiz(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const createQuizWithJob = async (quizInfo, jobId) => {
    try {
      const response = await api.post(`/quiz/${jobId}`, quizInfo);
      return response.data;
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

  useEffect(() => {
    isLoggedIn && getAllQuizzes();
  }, []);

  return (
    <QuizContext.Provider
      value={{ quiz, getSingleQuiz, createQuiz, createQuizWithJob }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export { QuizContext, QuizProvider };
