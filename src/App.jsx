import "./App.css";
import "./customQuizStyles.css";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import { Toaster } from "react-hot-toast";
import JobDescriptionPage from "./pages/JobDescriptionPage";
import QuizPage from "./pages/QuizPage";

// Pages
import AIPage from "./pages/AIPage";

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
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/jobs" element={<JobDescriptionPage />} />
          <Route path="/jobs/:jobId" element={<JobDescriptionPage />} />
          <Route path="/quiz/:jobId" element={<AIPage />} />
          <Route path="/quiz/:jobId/:quizId" element={<QuizPage />} />
        </Route>
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
