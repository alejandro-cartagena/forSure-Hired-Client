import React from "react";
import { Link } from "react-router-dom";

// Images
import image1 from "../assets/images/image8.png";
import dashboarddemo from "../assets/images/dashboarddemo.png";
import image13 from "../assets/images/image13.png";
import image14 from "../assets/images/image14.png";

import jobDescription from "../assets/images/jobDescription.png";
import generatedQuestions from "../assets/images/generatedQuestions.png";

export default function Homepage() {
  return (
    <div className="flex flex-col text-[#334155]">
      {/* Hero Section */}
      <section className="bg-[#F1F5F9] py-12 w-full px-4 sm:px-16 md:px-32 flex flex-col items-center lg:flex-row  lg:justify-between gap-8    ">
        <div className="text-center w-full flex flex-col justify-center gap-8 lg:w-1/2">
          <h1 className="text-5xl">
            <span className="text-[#4DB010]">Track Jobs</span> and{" "}
            <span className="text-[#4DB010]">Ace Interviews</span> with
            AI-Generated Questions
          </h1>
          <p className="text-lg w-full">
            Easily track your job applications and get customized interview
            questions tailored to each job description.
          </p>
          <Link to="/dashboard">
            <button className="bg-[#334155] text-white text-2xl py-3 px-5 rounded">
              Get Started
            </button>
          </Link>
        </div>
        <div className=" w-full flex justify-center lg:w-1/2 gap-4">
          {/* <img
            src={jobDescription}
            alt="Image 1"
            className="shadow-lg rounded-md w-full object-cover"
          /> */}
          <img
            src={generatedQuestions}
            alt="Image 1"
            className="shadow-lg rounded-md w-full object-cover"
          />
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-[#DCFFCF] px-4 sm:px-16 md:px-32 py-12 flex flex-col items-center">
        <div className="flex flex-col items-center py-12 justify-between">
          <h1 className="text-5xl text-center">
            Keep track of Job Applications
          </h1>
          <div className="w-full py-12 flex justify-center">
            <img
              src={dashboarddemo}
              alt="Image 1"
              className="w-full md:max-w-[800px] shadow-lg rounded-md"
            />
          </div>
          <p className="text-lg text-center w-full max-w-[700px]">
            Easily manage and organize your job applications with our intuitive
            kanban-style board. Follow the entire lifecycle of your applications
            from submission to hiring.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-[#FFFFFF] py-12 w-full px-4 sm:px-16 md:px-32 flex flex-col items-center lg:flex-row  lg:justify-between gap-8">
        <div className="w-full text-center order:last flex flex-col justify-center gap-8 md:order-first lg:w-1/2">
          <h1 className="text-5xl">Job Overview</h1>
          <p className="text-lg">
            Access a dedicated page to view all your saved jobs in a clean,
            two-column layout similar to popular job sites like Indeed.
            Effortlessly search and filter to find specific jobs.
          </p>
        </div>
        <div className="w-1/2 py-12">
          <img src={image13} alt="Image 13" className="mx-auto" />
        </div>
      </section>

      {/* Section 4 */}
      <section className="bg-[#F1F5F9] py-12 w-full px-4 sm:px-16 md:px-32 flex flex-col items-center md:flex-row  md:justify-between gap-8">
        <div className="md:order-first order-last w-1/2 py-12">
          <img src={image13} alt="Image 13" className="mx-auto" />
        </div>
        <div className="w-full text-center order:last flex flex-col justify-center gap-8 md:order-first md:text-left md:w-1/2">
          <h1 className="text-5xl">
            Prepare with Tailored Interview Questions
          </h1>
          <p className="text-lg">
            Generate customized behavioral and technical interview questions
            based on job descriptions using our AI feature. Take quizzes based
            on the questions, receive detailed feedback, and save them in your
            personalized study plans for efficient review.
          </p>
        </div>
      </section>

      {/* Section 5 */}
      <section className="bg-[#DCFFCF] py-28 px-20 w-full">
        <div className="container flex flex-col items-center w-full gap-12">
          <p className="text-center text-2xl w-full md:max-w-[700px]">
            forSure Hired is your all-in-one solution to keep track of your job
            applications and excel in your interviews. Join us and take control
            of your job search journey!
          </p>
          <Link to="/login">
            <button className="bg-[#334155] text-white text-2xl py-3 px-5 rounded">
              Sign up Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
