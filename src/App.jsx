import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import { Toaster } from "react-hot-toast";
import JobDescriptionPage from "./pages/JobDescriptionPage";

function App() {
  return (
    <div className="bg-slate-50 flex flex-col min-h-[100vh]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/jobs/:jobId" element={<JobDescriptionPage />} />
        <Route path="/jobs" element={<JobDescriptionPage />} />
        <Route path="/ai" />
        <Route path="/study" />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
