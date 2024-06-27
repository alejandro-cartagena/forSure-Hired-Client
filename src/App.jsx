import "./App.css";
import "./customQuizStyles.css";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Homepage from "./pages/Homepage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import JobDescriptionPage from "./pages/JobDescriptionPage";
import AIPage from "./pages/AIPage";
import AboutPage from "./pages/AboutPage";

import UserProfile from "./pages/UserProfile";

import QuizDecidePage from "./pages/QuizDecidePage";
import QuizMultipleChoicePage from "./pages/QuizMultipleChoicePage";
import QuizQuestionsAndAnswersPage from "./pages/QuizQuestionsAndAnswersPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const IsLoggedIn = () => {
    return localStorage.getItem("authToken") ? (
      <Outlet />
    ) : (
      <Navigate to="/login" />
    );
  };

  const IsNotLoggedIn = () => {
    return !localStorage.getItem("authToken") ? (
      <Outlet />
    ) : (
      <Navigate to="/dashboard" />
    );
  };

  return (
    <div className="bg-slate-50 flex flex-col min-h-[100vh]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route element={<IsNotLoggedIn />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>

        <Route element={<IsLoggedIn />}>
          <Route path="/user" element={<UserProfile />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/jobs" element={<JobDescriptionPage />} />
          <Route path="/jobs/:jobId" element={<JobDescriptionPage />} />

          {/*******************/}
          {/* Quiz AI Routes */}
          {/*****************/}
          <Route path="/quiz/:jobId" element={<AIPage />} />
          <Route path="/quiz/:jobId/:quizId" element={<QuizDecidePage />} />
          {/* Multiple Quiz Choice Route */}
          <Route
            path="/quiz/:jobId/:quizId/multiple-choice"
            element={<QuizMultipleChoicePage />}
          />
          <Route
            path="/quiz/:jobId/:quizId/questions-answers"
            element={<QuizQuestionsAndAnswersPage />}
          />
        </Route>
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
