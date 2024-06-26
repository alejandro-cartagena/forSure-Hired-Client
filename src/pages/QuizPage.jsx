import React, { useState, useEffect } from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";
import Quiz from "react-quiz-component";
import { generateQuiz } from "../quizFunction";

import { useContext } from "react";
import { QuizContext } from "../context/quiz.context";

function QuizPage() {
  const { quiz, getSingleQuiz } = useContext(QuizContext);
  const { jobId, quizId } = useParams();
  const [quizObject, setQuizObject] = useState(null);
  const [isEndOfQuiz, setIsEndOfQuiz] = useState(false);
  const [quizRestarted, setQuizRestarted] = useState(false);

  useState(() => {
    const fetchQuiz = async () => {
      await getSingleQuiz(jobId, quizId);
    };
    fetchQuiz();
  }, []);

  const generateQuizObject = () => {
    setQuizObject(
      generateQuiz(
        quiz.name,
        quiz.behavioral.questions.concat(quiz.technical.questions),
        quiz.behavioral.correctAnswers.concat(quiz.technical.correctAnswers),
        quiz.behavioral.incorrectAnswers.concat(quiz.technical.incorrectAnswers)
      )
    );
  };

  useEffect(() => {
    if (quiz) {
      generateQuizObject();
    }
  }, [quiz]);

  useEffect(() => {
    if (!isEndOfQuiz && quizRestarted) {
      generateQuizObject();
    }
  }, [isEndOfQuiz, quizRestarted]);

  const setQuizResult = () => {
    setIsEndOfQuiz(true);
  };

  const restartQuiz = () => {
    setQuizObject(null);
    setQuizRestarted(true);
    setIsEndOfQuiz(false);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl text-center mb-6">Quiz Time!</h1>
      {isEndOfQuiz && (
        <button
          onClick={restartQuiz}
          className="bg-slate-300 p-2 rounded hover:bg-[#65a30d] hover:text-white"
        >
          Restart Quiz
        </button>
      )}
      {quizObject && (
        <Quiz
          quiz={quizObject}
          shuffle={true}
          shuffleAnswer={true}
          timer={300}
          onComplete={setQuizResult}
        ></Quiz>
      )}
    </div>
  );
}

export default QuizPage;
