import React from "react";
import { HashLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "green",
};
const color = "#65a30d";

function AILoadingPage() {
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
      <h2 className="font-semibold text-3xl mb-10">Good Luck!</h2>
    </div>
  );
}

export default AILoadingPage;
