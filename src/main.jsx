import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { AuthProvider } from "./context/auth.context.jsx";
import { JobsProvider } from "./context/jobs.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <JobsProvider>
        <App />
      </JobsProvider>
    </AuthProvider>
  </BrowserRouter>
);
