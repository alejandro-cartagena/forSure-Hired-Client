import React from "react";
import { useState, CSSProperties } from "react";
import { HashRouter } from "react-router-dom";
import {
  GridLoader,
  HashLoader,
  MoonLoader,
  PuffLoader,
  RingLoader,
} from "react-spinners";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "green",
};

function AILoadingPage() {
  let [color, setColor] = useState("#65a30d");

  return (
    <div className="flex flex-col items-center text-[#334155] text-center max-w-[480px] mx-auto gap-10">
      <h1 className="text-4xl font-semibold mt-16">Generating Questions...</h1>
      <p className="">
        Your personalized quiz is being created based on the job description you
        provided. This process may take a few moments.
      </p>

      <HashLoader
        color={color}
        loading={true}
        cssOverride={override}
        size={125}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={1}
      />

      <h3 className="font-semibold text-2xl">What to Expect:</h3>
      <div className="flex flex-col gap-4">
        <p>- 5 Technical Questions tailored to the job requirements.</p>
        <p>
          - 5 Behavioral Questions designed to assess your fit for the role.
        </p>
      </div>
      <h2 className="font-semibold text-3xl">Good Luck!</h2>
    </div>
  );
}

export default AILoadingPage;
