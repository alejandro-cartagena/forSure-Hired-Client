import "./App.css";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

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
    <div className="bg-slate-200 flex flex-col min-h-[100vh]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route element={<IsNotLoggedIn />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>

        <Route element={<IsLoggedIn />}>
          <Route path="/dashboard" />
          <Route path="/ai" />
          <Route path="/study" />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
