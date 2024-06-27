import React, { useEffect } from "react";
import { useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import { QuizContext } from "../context/quiz.context";

import testQuizIcon from "../assets/icon/testQuizIcon.svg";
import testQuizQuestionAnswerIcon from "../assets/icon/testQuizQuestionAnswerIcon.svg";

import { HashLoader } from "react-spinners";
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "green",
};

const color = "#65a30d";

function QuizDecidePage() {
  const { quiz, getSingleQuiz } = useContext(QuizContext);
  const { jobId, quizId } = useParams();

  useEffect(() => {
    const fetchQuiz = async () => {
      await getSingleQuiz(jobId);
    };
    fetchQuiz();
  }, []);

  return (
    <div className="min-h-[75vh] flex flex-col items-center text-[#334155] bg-slate-200 px-4 md:px-0">
      {quiz ? (
        <div className="mb-12">
          <h1 className="text-5xl text-center my-12">Choose Quiz</h1>

          {/* Quiz Card Container */}
          <div className="flex gap-4 flex-wrap justify-center">
            {/* Start Quiz Card */}
            <div className="flex flex-col items-center bg-slate-50 p-8 rounded w-full max-w-[400px]">
              <h2 className="text-3xl mb-4">Multiple Choice</h2>
              <img className="w-full max-w-36 mb-6" src={testQuizIcon} alt="" />
              <p className="text-center mb-6">
                Multiple choice quiz related to the job description
              </p>
              <NavLink
                to={`/quiz/${jobId}/${quizId}/multiple-choice`}
                state={{ quiz }}
                className="bg-slate-300 hover:scale-105 hover:bg-green-300 text-2xl py-2 px-6 rounded"
              >
                Start
              </NavLink>
            </div>

            {/* View Questions and Answers Card */}
            <div className="flex flex-col items-center bg-slate-50 p-8 rounded w-full max-w-[400px]">
              <h2 className="text-3xl mb-4">Questions & Answers</h2>
              <img
                className="w-full max-w-36 mb-6"
                src={testQuizQuestionAnswerIcon}
                alt=""
              />
              <p className="text-center mb-6">
                Questions and answers related to the job description
              </p>
              <NavLink
                to={`/quiz/${jobId}/${quizId}/questions-answers`}
                state={{ quiz }}
                className="bg-slate-300 hover:scale-105 hover:bg-green-300 text-2xl py-2 px-6 rounded"
              >
                Start
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <HashLoader
          color={color}
          loading={true}
          cssOverride={override}
          size={125}
          aria-label="Loading Spinner"
          data-testid="loader"
          speedMultiplier={1}
        />
      )}
    </div>
  );
}

export default QuizDecidePage;
