import React from "react";
import "../error.css";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <main className="error relative text-slate-700 w-full flex gap-2 md:h-[88vh] md:min-h-[88vh] min-h-[82.5vh] overflow-hidden -mt-6 ">
      <div className="noise"></div>
      <div className="overlay"></div>
      <div className="md:w-[80%] md:mx-auto h-full">
        <div className="terminal">
          <h1>
            Error <span className="errorcode">404</span>
          </h1>
          <p className="output">
            The page you are looking for might have been removed, had its name
            changed or is temporarily unavailable.
          </p>
          <p className="output">
            Please try to <Link to={-1}>go back</Link> or{" "}
            <Link to="/">return to the homepage</Link>.
          </p>
          <p className="output">Good luck.</p>
        </div>
      </div>
    </main>
  );
}

export default ErrorPage;
