import React, { useState } from "react";

function AnswerAccordion({ answer }) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <>
      <div className="mb-2">
        <button
          onClick={() => setAccordionOpen(!accordionOpen)}
          className="flex items-center justify-between w-full font-semibold"
        >
          <span className="">
            {accordionOpen ? "Hide Answer" : "Show Answer"}
          </span>
          <div>
            <svg
              className="fill-green-600 shrink-0 ml-8"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center transition duration-200 ease-out ${
                  accordionOpen && "!rotate-180"
                }`}
              />
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                  accordionOpen && "!rotate-180"
                }`}
              />
            </svg>
          </div>
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
            accordionOpen
              ? "grid-rows-[1fr] opacity-100 mt-4"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="tracking-wide">{answer}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnswerAccordion;
