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
      content: `I have a job description pasted below. Based on this job description, generate a list of 10 interview questions that are relevant to the role, responsibilities, and qualifications mentioned. Make sure the questions cover both technical and behavioral aspects suitable for assessing the candidate's fit for the position.

I want to create a multiple-choice quiz for the user. Each question should have three incorrect answers and one correct answer relevant to the question.

Please generate the response in the following JSON format, strictly adhering to the structure provided, and ensure there are no backticks, no additional text, or formatting:
      
    
        {
    "response": {
        "behavioral": {
            "questions": [
                "Describe a situation where you had to work closely with a team to overcome a challenge. How did you contribute to the team's success?",
                "Can you provide an example of a time when you had to prioritize multiple tasks with competing deadlines? How did you handle it?",
                "Tell me about a time when you identified a problem with existing software and proposed a solution. How did you go about implementing the changes?",
                "Give me an example of a project where you had to ensure your code was well-documented and efficient. What steps did you take to achieve this?",
                "Have you ever faced resistance to changes you recommended in a software application? How did you handle the situation?"
            ],
            "incorrectAnswers": {
                "incorrectAnswersForBehavioralQuestion1": ["Providing all the answers without involving the team", "Ignoring team input and working alone", "Blaming others for any obstacles faced"],
                "incorrectAnswersForBehavioralQuestion2": ["Procrastinating and missing deadlines", "Randomly picking tasks to complete", "Delegating all tasks to others"],
                "incorrectAnswersForBehavioralQuestion3": ["Ignoring the problem and leaving it unresolved", "Making changes without understanding the issue", "Relying on others to solve the problem"],
                "incorrectAnswersForBehavioralQuestion4": ["Writing convoluted and messy code", "Not bothering with documenting code at all", "Not considering efficiency when coding"],
                "incorrectAnswersForBehavioralQuestion5": ["Forcing changes without proper reasoning", "Ignoring feedback and not addressing concerns", "Implementing changes without proper testing"]
            },
            "answers": [
                "Collaborative problem-solving and ensuring success for the team",
                "Effective time management and task prioritization",
                "Analyzing software issues and proposing effective solutions",
                "Prioritizing documentation and code efficiency",
                "Handling resistance to change professionally and fostering cooperation"
            ]
        },
        "technical": {
            "questions": [
                "Can you explain the difference between object-oriented programming and functional programming?",
                "How do you ensure code reusability in your projects? Provide examples.",
                "What are some common security vulnerabilities in JavaScript and how would you prevent them?",
                "Describe a situation where you had to optimize code for performance. What approach did you take?",
                "How do you stay updated with the latest software development trends and technologies?"
            ],
            "incorrectAnswers": {
                "incorrectAnswersForTechnicalQuestion1": ["There is no difference between OOP and functional programming", "Object-oriented programming only focuses on UI design", "Functional programming is not used in software development"],
                "incorrectAnswersForTechnicalQuestion2": ["Writing new code for every project without reusing", "Copying and pasting code from the internet without understanding", "Not considering code reusability at all"],
                "incorrectAnswersForTechnicalQuestion3": ["Security vulnerabilities do not exist in JavaScript", "Relying solely on built-in security features for protection", "Sharing sensitive information openly in code"],
                "incorrectAnswersForTechnicalQuestion4": ["Never optimizing code for performance", "Using trial and error without understanding the issues", "Ignoring the need for code optimization"],
                "incorrectAnswersForTechnicalQuestion5": ["Sticking to outdated technologies without exploration", "Not learning from industry best practices or attending conferences", "Ignoring new trends and technologies"]
            },
            "answers": [
                "Understanding of programming paradigms and their differences",
                "Implementing code reusability for efficiency",
                "Knowledge of JavaScript vulnerabilities and preventive measures",
                "Approaching code optimization for improved performance",
                "Commitment to continuous learning and skills enhancement"
            ]
        }
    }
}

        
This is the Job Description:
${jobDescription}`,
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
                <span className={`text-[#334155] font-medium`}>Example</span>
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
