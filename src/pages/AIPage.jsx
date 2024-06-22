import React, { useEffect, useState } from "react";
import axios from "axios";

import AILoadingPage from "../components/AILoadingPage.jsx";

import { softwareEngineerJobDescription } from "../defaultJobDescriptions.js";
import api from "../services/api.js";

const apiKey = import.meta.env.VITE_REACT_API_KEY;

function AIPage() {
  const [jobDescription, setJobDescription] = useState("");

  const [awaitingResponse, setAwaitingResponse] = useState(false);
  const [chatGPTResponse, setChatGPTResponse] = useState(null);
  const [chatGPTResponseJSON, setChatGPTResponseJSON] = useState(null);

  const handleChange = (e) => {
    setJobDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setAwaitingResponse(true);

    const systemMessage = {
      role: "system",
      content: `Here is a job description:

${jobDescription}

Based on this job description, I need you to generate 10 interview questions relevant to the role, responsibilities, and qualifications mentioned, divided between technical and behavioural aspects. Each question should be suitable for assessing the candidate's fit for the position.

Furthermore, for each question, please write three incorrect answers and one correct answer.

Please generate the response in the following JSON format, strictly adhering to the structure provided, and ensure there are no backticks, no additional text, or formatting:
      
{
  response: {
    behavioral: {
      questions: [
        "<generated behavioral question 1>",
        "<generated behavioral question 2>",
        "<generated behavioral question 3>",
        "<generated behavioral question 4>",
        "<generated behavioral question 5>",
      ],
      correctAnswers: [
        "<correct answer for behavioral question 1>",
        "<correct answer for behavioral question 2>",
        "<correct answer for behavioral question 3>",
        "<correct answer for behavioral question 4>",
        "<correct answer for behavioral question 5>",
      ],
      incorrectAnswers: [
        [
          "<incorrect answer 1 for behavioral question 1>",
          "<incorrect answer 2 for behavioral question 1>",
          "<incorrect answer 3 for behavioral question 1>",
        ],
        [
          "<incorrect answer 1 for behavioral question 2>",
          "<incorrect answer 2 for behavioral question 2>",
          "<incorrect answer 3 for behavioral question 2>",
        ],
        [
          "<incorrect answer 1 for behavioral question 3>",
          "<incorrect answer 2 for behavioral question 3>",
          "<incorrect answer 3 for behavioral question 3>",
        ],
        [
          "<incorrect answer 1 for behavioral question 4>",
          "<incorrect answer 2 for behavioral question 4>",
          "<incorrect answer 3 for behavioral question 4>",
        ],
        [
          "<incorrect answer 1 for behavioral question 5>",
          "<incorrect answer 2 for behavioral question 5>",
          "<incorrect answer 3 for behavioral question 5>",
        ],
      ],
    },
    technical: {
      questions: [
        "<generated technical question 1>",
        "<generated technical question 2>",
        "<generated technical question 3>",
        "<generated technical question 4>",
        "<generated technical question 5>",
      ],
      correctAnswers: [
        "<correct answer for technical question 1>",
        "<correct answer for technical question 2>",
        "<correct answer for technical question 3>",
        "<correct answer for technical question 4>",
        "<correct answer for technical question 5>",
      ],
      incorrectAnswers: [
        [
          "<incorrect answer 1 for technical question 1>",
          "<incorrect answer 2 for technical question 1>",
          "<incorrect answer 3 for technical question 1>",
        ],
        [
          "<incorrect answer 1 for technical question 2>",
          "<incorrect answer 2 for technical question 2>",
          "<incorrect answer 3 for technical question 2>",
        ],
        [
          "<incorrect answer 1 for technical question 3>",
          "<incorrect answer 2 for technical question 3>",
          "<incorrect answer 3 for technical question 3>",
        ],
        [
          "<incorrect answer 1 for technical question 4>",
          "<incorrect answer 2 for technical question 4>",
          "<incorrect answer 3 for technical question 4>",
        ],
        [
          "<incorrect answer 1 for technical question 5>",
          "<incorrect answer 2 for technical question 5>",
          "<incorrect answer 3 for technical question 5>",
        ],
      ],
    },
  },
}
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
      console.log(chatGPTResponse);
      let parseResponse = JSON.parse(chatGPTResponse);
      setChatGPTResponseJSON(parseResponse);
    } catch (error) {
      console.log(error);
    }
  }, [chatGPTResponse]);

  console.log(chatGPTResponseJSON);

  return (
    <div>
      {awaitingResponse ? (
        <AILoadingPage />
      ) : (
        <>
          <h1 className="text-[#334155] text-4xl text-center font-semibold mt-16 mb-8">
            Provide a Job Description
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {/* {descriptionFromJobPage && (
            <label
              className={`p-4 rounded cursor-pointer ${
                typing && "cursor-not-allowed"
              } ${
                jobDescription === descriptionFromJobPage
                  ? "bg-green-100 border border-1 border-green-600 text-green-700"
                  : "bg-slate-200 hover:bg-slate-300"
              }`}
              htmlFor="descriptionFromJobPage"
            >
              <input
                className="sr-only peer"
                onChange={handleChange}
                type="radio"
                name="jobDescription"
                id="descriptionFromJobPage"
                value={descriptionFromJobPage}
                checked={jobDescription === descriptionFromJobPage}
                disabled={typing ? true : false}
              />
              <span>Current Job</span>
            </label>
          )} */}
              <label
                className={`flex items-center h-10 px-4 rounded-full cursor-pointer ${
                  jobDescription === ""
                    ? "bg-green-100 border rounded-full border-green-600 "
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
                htmlFor="custom"
              >
                <input
                  className="sr-only peer"
                  onChange={handleChange}
                  type="radio"
                  name="jobDescription"
                  id="custom"
                  value={""}
                  checked={jobDescription === ""}
                />
                <span
                  className={`${
                    jobDescription === "" ? "text-green-700" : "text-[#334155]"
                  }  font-medium`}
                >
                  Custom
                </span>
              </label>
              <label
                className={`flex items-center h-10 px-4 rounded-full cursor-pointer ${
                  jobDescription === softwareEngineerJobDescription
                    ? "bg-green-100 border border-1 border-green-600 text-green-700"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
                htmlFor="softwareEngineer"
              >
                <input
                  className="sr-only peer"
                  onChange={handleChange}
                  type="radio"
                  name="jobDescription"
                  id="softwareEngineer"
                  value={softwareEngineerJobDescription}
                  checked={jobDescription === softwareEngineerJobDescription}
                />
                <span
                  className={`${
                    jobDescription === softwareEngineerJobDescription
                      ? "text-green-700"
                      : "text-[#334155]"
                  } font-medium`}
                >
                  Example
                </span>
              </label>
            </div>

            <textarea
              className="w-full max-w-[700px] border-4 border-[#DCE1E9] rounded-md p-4 resize-none mb-12"
              name=""
              id=""
              rows={12}
              placeholder="Select a Example Description to view a template or paste your own description here"
              value={jobDescription}
              required={true}
              onChange={handleChange}
            />

            <button className="bg-slate-300 text-xl p-4 rounded-md ease-in-out duration-300 hover:scale-105 hover:bg-[#DCFFCF] mb-12">
              Generate Quiz
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default AIPage;
