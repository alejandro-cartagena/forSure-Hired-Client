import React from "react";
import { useLocation } from "react-router-dom";
import Quiz from "react-quiz-component";
import { quiz } from "../quizFunction";

function QuizPage() {
  const location = useLocation();
  const { quizData } = location.state || {};
  const allQuizQuestions = quizData.behavioral.questions.concat(
    quizData.technical.questions
  );
  const allQuizAnswers = quizData.behavioral.correctAnswers.concat(
    quizData.technical.correctAnswers
  );
  const allQuizIncorrectAnswers = quizData.behavioral.incorrectAnswers.concat(
    quizData.technical.incorrectAnswers
  );

  const quizObject = quiz(
    quizData.name,
    allQuizQuestions,
    allQuizAnswers,
    allQuizIncorrectAnswers
  );

  console.log(location.state);

  console.log("QUIZ DATA = ", quizData);
  console.log("Quiz Questions --> ", allQuizQuestions);
  console.log("Quiz Answers --> ", allQuizAnswers);
  console.log("Quiz Incorrect Answers --> ", allQuizIncorrectAnswers);
  console.log("Quiz Object --> ", quizObject);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl text-center">Quiz Time!</h1>
      <Quiz quiz={quizObject} shuffle={true}></Quiz>
    </div>
  );
}

export default QuizPage;
