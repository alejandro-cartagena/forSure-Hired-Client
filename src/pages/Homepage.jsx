import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "animate.css/animate.compat.css";

// Images;
import dashboarddemo from "../assets/images/dashboarddemo.png";
import generatedQuestionsImg from "../assets/images/generatedQuestions.png";
import quizImg from "../assets/images/quiz.png";
import jobPageImg from "../assets/images/jobPage.png";
import ScrollAnimation from "react-animate-on-scroll";

export default function Homepage() {
  return (
    <div className="flex flex-col text-[#334155]">
      {/* Hero Section */}
      <section className="bg-[#F1F5F9] min-h-[70vh] py-16 w-full px-4 md:px-32 flex flex-col items-center lg:flex-row  lg:justify-between gap-8    ">
        <ScrollAnimation
          className="text-center w-full lg:w-1/2"
          animateIn="fadeInLeft"
          animateOut="fadeOutLeft"
          duration={0.75}
        >
          <div className="flex flex-col justify-center gap-8">
            <h1 className="text-5xl">
              <span className="text-[#4DB010]">Track Jobs</span> and{" "}
              <span className="text-[#4DB010]">Ace Interviews</span> with
              AI-Generated Quizzes
            </h1>
            <p className="text-lg w-full lg:max-w-[500px] lg:mx-auto">
              Easily track your job applications and get customized interview
              questions tailored to each job description.
            </p>
            <Link to="/dashboard">
              <button className="bg-[#334155] text-white text-2xl py-3 px-5 rounded ease-in-out duration-300 hover:bg-[#4DB010] hover:scale-105">
                Get Started
              </button>
            </Link>
          </div>
        </ScrollAnimation>

        <ScrollAnimation
          className="w-full lg:w-1/2"
          animateIn="fadeInRight"
          animateOut="fadeOutRight"
          duration={0.75}
          offset={320}
        >
          <div className="flex justify-center gap-4">
            {/* <img
          src={jobDescription}
          alt="Image 1"
          className="shadow-lg rounded-md w-full object-cover"
        /> */}
            <img
              src={quizImg}
              alt="Image 1"
              className="shadow-lg rounded-md w-full object-cover"
            />
          </div>
        </ScrollAnimation>
      </section>

      {/* Section 2 */}
      <section className="bg-[#DCFFCF] px-4 md:px-32 py-16 flex flex-col items-center">
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          duration={0.75}
          offset={300}
        >
          <div className="flex flex-col items-center justify-between gap-8">
            <h1 className="text-5xl text-center">
              Keep track of Job Applications
            </h1>
            <div className="w-full flex justify-center">
              <img
                src={dashboarddemo}
                alt="Image 1"
                className="w-full md:max-w-[800px] shadow-lg rounded-md"
              />
            </div>
            <p className="text-lg text-center w-full max-w-[700px]">
              Easily manage and organize your job applications with our
              intuitive kanban-style board. Follow the entire lifecycle of your
              applications from submission to hiring.
            </p>
          </div>
        </ScrollAnimation>
      </section>

      {/* Section 3 */}
      <section className="bg-[#FFFFFF] py-40 w-full px-4 md:px-32 flex flex-col items-center lg:flex-row  lg:justify-between gap-8">
        <ScrollAnimation
          className="w-full lg:w-1/2"
          animateIn="fadeInLeft"
          animateOut="fadeOutLeft"
          duration={0.75}
          offset={170}
        >
          <div className="text-center order:last flex flex-col justify-center gap-8 lg:order-first ">
            <h1 className="text-5xl">Job Overview</h1>
            <p className="text-lg w-full lg:max-w-[500px] lg:mx-auto">
              Access a dedicated page to view all your saved jobs in a clean,
              two-column layout similar to popular job sites like Indeed.
              Effortlessly search and filter to find specific jobs.
            </p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          className="w-full lg:w-1/2"
          animateIn="fadeInRight"
          animateOut="fadeOutRight"
          duration={0.75}
          offset={300}
        >
          <div className="flex justify-center gap-4">
            <img
              src={jobPageImg}
              alt="Image 13"
              className="shadow-lg rounded-md w-full object-cover mx-auto"
            />
          </div>
        </ScrollAnimation>
      </section>

      {/* Section 4 */}
      <section className="bg-[#F1F5F9] py-16 w-full px-4 md:px-32 flex flex-col items-center lg:flex-row  lg:justify-between gap-8">
        <ScrollAnimation
          className="w-full lg:w-1/2 order-last lg:order-first"
          animateIn="fadeInLeft"
          animateOut="fadeOutLeft"
          duration={0.75}
          offset={360}
        >
          <div className="flex justify-center gap-4 t">
            <img
              src={generatedQuestionsImg}
              alt="Image 13"
              className="shadow-lg rounded-md w-full object-cover mx-auto"
            />
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          className="w-full lg:w-1/2"
          animateIn="fadeInRight"
          animateOut="fadeOutRight"
          duration={0.75}
          offset={300}
        >
          <div className="text-center flex flex-col justify-center gap-8">
            <h1 className="text-5xl">
              Prepare with Interview Questions & Answers
            </h1>
            <p className="text-lg w-full lg:max-w-[500px] lg:mx-auto">
              Generate customized behavioral and technical interview questions
              based on job descriptions using our AI feature. Take quizzes based
              on the questions, receive detailed feedback, and save them in your
              personalized study plans for efficient review.
            </p>
          </div>
        </ScrollAnimation>
      </section>

      {/* Section 5 */}
      <section className="bg-[#DCFFCF] py-48 px-4 md:px-32 w-full">
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          duration={0.75}
        >
          <div className="flex flex-col items-center w-full gap-12">
            <p className="text-center text-2xl w-full lg:max-w-[700px]">
              forSure Hired is your all-in-one solution to keep track of your
              job applications and excel in your interviews. Join us and take
              control of your job search journey!
            </p>
            <Link to="/login">
              <button className="bg-[#334155] text-white text-2xl py-3 px-5 rounded ease-in-out duration-300 hover:bg-[#4DB010] hover:scale-105">
                Sign up Now
              </button>
            </Link>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
}
