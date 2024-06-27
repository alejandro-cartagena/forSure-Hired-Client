import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Navigate, NavLink, useParams } from "react-router-dom";

import { QuizContext } from "../context/quiz.context.jsx";
import { JobsContext } from "../context/jobs.context.jsx";
import AILoadingPage from "../components/AILoadingPage.jsx";

import studyQuizIcon from "../assets/icon/studyQuizIcon.svg";

import { HashLoader } from "react-spinners";
import { toast } from "react-hot-toast";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "green",
};

const color = "#65a30d";

import { openAIPrompt } from "../aiPageAssets.js";

const apiKey = import.meta.env.VITE_REACT_API_KEY;

function AIPage() {
  // Job States and Variables
  const { jobId } = useParams();
  const { getSingleJob } = useContext(JobsContext);
  const [jobDescription, setJobDescription] = useState("");
  const [singleJob, setSingleJob] = useState(null);

  // Quiz States and Variables
  const { createQuizWithJob, getSingleQuiz } = useContext(QuizContext);
  const [quizInfo, setQuizInfo] = useState(null);
  const [quizFromDB, setQuizFromDB] = useState(null);
  const [hasQuiz, setHasQuiz] = useState(false);
  const [quizId, setQuizId] = useState(null);

  // Open AI API States and Variables
  const [awaitingResponse, setAwaitingResponse] = useState(false);
  const [chatGPTResponse, setChatGPTResponse] = useState(null);
  const [chatGPTResponseJSON, setChatGPTResponseJSON] = useState(null);

  // Fetches Job from DB to set the Job Description
  useEffect(() => {
    const fetchSingleJob = async () => {
      const res = await getSingleJob(jobId);
      res.quiz && (setHasQuiz(true), setQuizId(res.quiz));
      setSingleJob(res);
      setJobDescription(res.description);
    };
    fetchSingleJob();
  }, []);

  const handleChange = (e) => {
    setJobDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setAwaitingResponse(true);

    const systemMessage = {
      role: "system",
      content: `${openAIPrompt}

      Job Description:
      ${jobDescription} 
      `,
    };

    const userMessage = {
      role: "user",
      content: jobDescription,
    };

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, userMessage],
    };

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        apiRequestBody,
        {
          headers: {
            Authorization: "Bearer " + apiKey,
            "Content-Type": "application/json",
          },
        }
      );

      setChatGPTResponse(response.data.choices[0].message.content);
    } catch (error) {
      console.error("Error generating questions:", error);
    } finally {
      setAwaitingResponse(false);
    }
  };

  useEffect(() => {
    try {
      if (chatGPTResponse) {
        const parseResponse = JSON.parse(chatGPTResponse);
        setChatGPTResponseJSON(parseResponse);
        setQuizInfo({
          name: singleJob.company.name + ", " + singleJob.title,
          behavioral: parseResponse.response?.behavioral,
          technical: parseResponse.response?.technical,
        });
      }
    } catch (error) {
      console.log("Error parsing JSON:", error);
      toast.error("Error Generating Quiz! ❌", {
        position: "top-center",
      });
    }
  }, [chatGPTResponse]);

  // Creates the quiz in the DB and Saves the Quiz Id
  useEffect(() => {
    if (quizInfo) {
      const createQuizAndReturnData = async () => {
        const res = await createQuizWithJob(quizInfo, jobId);
        setQuizFromDB(res);
      };
      createQuizAndReturnData();
    }
  }, [quizInfo]);

  return (
    <div className="text-[#334155] bg-slate-200 min-h-[75vh] px-4 md:px-0">
      {quizFromDB && (
        <Navigate
          to={`/quiz/${jobId}/${quizFromDB.createdQuiz._id}`}
          state={{ quizData: quizInfo }}
        />
      )}
      {awaitingResponse ? (
        <AILoadingPage />
      ) : (
        <>
          {singleJob ? (
            <>
              {hasQuiz && (
                <div className="flex flex-col items-center mt-12">
                  <h1 className="text-4xl text-center mb-8 font-semibold">
                    Quiz Already Generated For This Job
                  </h1>
                  <div className="flex flex-col items-center bg-slate-50 p-8 rounded w-full max-w-[400px]">
                    {/* <h2 className="text-3xl mb-4">Multiple Choice</h2> */}
                    <img
                      className="w-full max-w-36 mb-8"
                      src={studyQuizIcon}
                      alt="paper and pen icon to represent studying"
                    />
                    <p className="text-center mb-6">
                      Practice interview questions with the quizzes generated
                    </p>
                    <NavLink
                      to={`/quiz/${jobId}/${quizId}`}
                      className="bg-slate-200 ease-in-out duration-300 hover:scale-105 hover:bg-green-300 text-xl py-2 px-6 rounded-md"
                    >
                      Go to My Quizzes
                    </NavLink>
                  </div>

                  <div className="inline-flex items-center justify-center w-full my-20">
                    <hr className="w-full max-w-[1200px] h-1 bg-slate-50 border-0 rounded dark:bg-slate-700"></hr>
                    <div className="absolute px-4  dark:bg-slate-200">
                      <h2 className="text-5xl">OR</h2>
                    </div>
                  </div>
                  <h1 className="text-4xl text-center font-semibold mb-2">
                    Generate New Quiz
                  </h1>
                </div>
              )}
              <h1
                className={`${
                  hasQuiz ? "text-xl" : "text-4xl"
                } text-center font-semibold  ${
                  hasQuiz ? "mt-0" : "mt-16"
                } mb-8`}
              >
                {singleJob
                  ? `${singleJob.company.name} Job Description`
                  : "Provide a Job Description"}
              </h1>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center"
              >
                <textarea
                  className="w-full max-w-[700px] border-4 border-[#DCE1E9] rounded-md p-4 resize-none mb-12 cursor-default"
                  name=""
                  id=""
                  rows={20}
                  placeholder="Select a Example Description to view a template or paste your own description here"
                  value={jobDescription}
                  required={true}
                  onChange={handleChange}
                  readOnly={true}
                />

                <button className="bg-slate-300 text-xl p-4 rounded-md ease-in-out duration-300 hover:scale-105 hover:bg-green-300 mb-12">
                  Generate Quiz
                </button>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center min-h-[50vh]">
              <h1 className="text-5xl text-center mb-12">Loading...</h1>
              <HashLoader
                color={color}
                loading={true}
                cssOverride={override}
                size={125}
                aria-label="Loading Spinner"
                data-testid="loader"
                speedMultiplier={1}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default AIPage;
