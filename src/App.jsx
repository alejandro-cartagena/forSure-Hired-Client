import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import QuizPage from "./pages/QuizPage";

// Pages
import AIPage from "./pages/AIPage";

function App() {
  return (
    <div className="bg-slate-200 flex flex-col min-h-[100vh]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" />
        <Route path="/ai" element={<AIPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/study" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
