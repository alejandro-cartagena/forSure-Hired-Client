import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import AIPage from "./pages/AIPage";

function App() {
  return (
    <div className="bg-slate-200 flex flex-col min-h-[100vh]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" />
        <Route path="/signup" />
        <Route path="/dashboard" />
        <Route path="/ai" element={<AIPage />} />
        <Route path="/study" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
