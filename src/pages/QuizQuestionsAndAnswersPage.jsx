import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import AnswerAccordion from "../components/AnswerAccordion";

function AIShowQuestionsAndAnswers({ chatGPTJSONResponse }) {
  const location = useLocation();
  const { quiz } = location.state || {};
  const [questionType, setQuestionType] = useState("behavioral");

  const handleQuestionTypeClick = (e) => {
    e.preventDefault();
    e.target.value === "behavioral"
      ? setQuestionType("behavioral")
      : setQuestionType("technical");
  };

  console.log("QUIZ = ", quiz);

  return (
    <div className="flex flex-col items-center bg-slate-200 text-[#334155]">
      <h1 className="text-4xl font-semibold my-8 text-center">
        Interview Questions
      </h1>

      <div className="flex gap-4 mb-10">
        <button
          className={`p-4 rounded cursor-pointer ${
            questionType === "behavioral"
              ? "bg-green-100 border border-1 border-green-600 text-green-700"
              : "bg-slate-300 hover:bg-slate-400"
          }`}
          value={"behavioral"}
          onClick={handleQuestionTypeClick}
        >
          Behavioral
        </button>
        <button
          className={`p-4 rounded cursor-pointer ${
            questionType === "technical"
              ? "bg-green-100 border border-1 border-green-600 text-green-700"
              : "bg-slate-300 hover:bg-slate-400"
          }`}
          value={"technical"}
          onClick={handleQuestionTypeClick}
        >
          Technical
        </button>
      </div>

      {questionType === "behavioral" ? (
        <>
          {quiz.behavioral.questions.map((question, index) => {
            return (
              <div
                key={index}
                className="w-[90%] lg:w-full max-w-[700px] mb-10 bg-slate-50 rounded p-4"
              >
                <h2 className="text-2xl font-semibold mb-4">
                  Question {index + 1}
                </h2>
                <p className="tracking-wide mb-4 text-lg">{question}</p>
                {/* <p className="w-fit font-semibold cursor-pointer hover:text-green-600">
                          Show Answer
                        </p> */}
                <AnswerAccordion
                  answer={quiz.behavioral.correctAnswers[index]}
                />
              </div>
            );
          })}
        </>
      ) : (
        <>
          {quiz.technical.questions.map((question, index) => {
            return (
              <div
                key={index}
                className="w-[90%] lg:w-full max-w-[700px] mb-10 bg-slate-50 rounded p-4"
              >
                <h2 className="text-2xl font-semibold mb-4">
                  Question {index + 1}
                </h2>
                <p className="tracking-wide mb-4 text-lg">{question}</p>
                {/* <p className="w-fit font-semibold cursor-pointer hover:text-green-600">
                          Show Answer
                        </p> */}
                <AnswerAccordion
                  answer={quiz.technical.correctAnswers[index]}
                />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default AIShowQuestionsAndAnswers;
