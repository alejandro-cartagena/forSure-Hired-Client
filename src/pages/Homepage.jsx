import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/images/image8.png";
import image10 from "../assets/images/image10.png";
import image13 from "../assets/images/image13.png";
import image14 from "../assets/images/image14.png";

export default function Homepage() {
  return (
    <div className="flex flex-col text-[#334155] ">
      {/*Section 1 (Hero Section) */}
      <section className="bg-[#F1F5F9] py-12 w-full">
        <div className="w-full px-20 md:px-32 flex justify-between items-center gap-8">
          <div className="w-[38%] flex flex-col justify-center gap-8">
            <h1 className="text-5xl mb-0">
              <span className="text-[#4DB010]">Track Jobs</span> and{" "}
              <span className="text-[#4DB010]">Ace Interviews</span> with
              AI-Generated Questions
            </h1>
            <p className="text-lg w-full max-w-[600px]">
              Easily track your job applications and get customized interview
              questions tailored to each job description.
            </p>
            <Link to="/dashboard">
              <button className="bg-[#334155] text-white text-2xl py-3 px-5 rounded ">
                Get Started
              </button>
            </Link>
          </div>
          <div className="w-1/2 max-w-[600px] border-2 border-red-500">
            <img className="w-full object-contain" src={image1} alt="Image 1" />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-[#DCFFCF] py-12 flex flex-col items-center">
        <div className="container flex flex-col items-center py-12 justify-between">
          <h1 className="text-6xl w-full text-center">
            Keep track of Job Applications
          </h1>
          <div className="w-full py-12 flex justify-center">
            <img src={image10} alt="Image 1" />
          </div>
          <p className="text-lg text-center w-full max-w-[600px]">
            Easily manage and organize your job applications with our intuitive
            kanban-style board. Follow the entire lifecycle of your applications
            from submission to hiring.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-[#FFFFFF] justify-between gap-8 flex items-center py-14 px-20 w-full">
        <div className="w-1/2">
          <h1 className="text-6xl mb-8">Job Overview</h1>
          <p>
            Access a dedicated page to view all your saved jobs in a clean,
            two-column layout similar to popular job sites like Indeed.
            Effortlessly search and filter to find specific jobs.
          </p>
        </div>
        <div className="w-1/2 py-12">
          <img src={image13} alt="Image 13" />
        </div>
      </section>
      <section className="py-12 bg-[#F1F5F9] w-full flex justify-between px-20">
        <div className="container flex flex-row justify-between w-1/2">
          <img src={image14} alt="Image 14" />
        </div>
        <div className="flex flex-col w-1/2 justify-center">
          <h1 className="text-6xl mb-8">
            Prepare with Tailored Interview Questions
          </h1>
          <p>
            Generate customized behavioral and technical interview questions
            based on job descriptions using our AI feature. Take quizzes based
            on the questions, receive detailed feedback, and save them in your
            personalized study plans for efficient review.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section className="bg-[#DCFFCF] py-12 px-20 w-full">
        <div className="container flex flex-col items-center w-full">
          <p className="text-gray-950 mb-10 text-center">
            forSure Hired is your all-in-one solution to keep track of your job
            applications and excel in your interviews. Join us and take control
            of your job search journey!
          </p>
          <Link to="/login">
            <button className="bg-[#334155] text-white border border-hidden rounded h-10 w-32">
              Sign up Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
