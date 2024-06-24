import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/FSH_logo.png";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between py-6 md:px-32 px-20 bg-slate-50">
      <div className="flex items-center gap-2">
        <img src={logo} alt="For Sure Hire Logo" className="w-16 h-16" />
        <p className="content-center text-4xl">
          for<span className="text-[#4DB010]">Sure</span>Hired
        </p>
      </div>
      <div className="flex items-center gap-12">
        <Link to="/dashboard">
          <div>Dashboard</div>
        </Link>
        <Link to="/ai">
          <div>AI</div>
        </Link>
        <Link to="/study">
          <div>Study</div>
        </Link>
      </div>
    </div>
  );
}
