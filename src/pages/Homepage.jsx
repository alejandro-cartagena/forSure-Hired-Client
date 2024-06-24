import React from "react";
import image1 from "../assets/images/image8.png";

export default function Homepage() {
  return (
    <div className="flex flex-col">
      <section className="bg-[#F1F5F9] py-12 ">
        <div className="md:px-32 px-20 flex w-[full] justify-between border border-red-200">
          <div className="w-[40%]">
            <h1 className="text-5xl">
              Track Jobs and Ace Interviews with AI-Generated Questions
            </h1>
            <button className="bg-[#334155] text-white border border-hidden rounded h-10 w-32">
              Get Started
            </button>
          </div>
          <div className="w-[40%]">
            <img src={image1} alt="Image 1" />
          </div>
        </div>
      </section>
      <section className="bg-[violet] py-12">
        <div className="container">
          <h1>Section 2</h1>
        </div>
      </section>
      <section className="bg-[grey] py-12">
        <div className="container">
          <h1>Section 3</h1>
        </div>
      </section>
      <section className="bg-[green] py-12">
        <div className="container">
          <h1>Section 4</h1>
        </div>
      </section>
      <section className="bg-[yellow] py-12">
        <div className="container">
          <h1>Section 5</h1>
        </div>
      </section>
    </div>
  );
}
