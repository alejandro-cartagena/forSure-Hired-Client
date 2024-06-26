import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/FSH_logo.png";
import { AuthContext } from "../context/auth.context";

export default function Navbar() {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex items-center justify-between py-6 md:px-32 px-20 bg-slate-50">
      <Link to="/">
        <div className="flex items-center gap-2">
          <img src={logo} alt="For Sure Hire Logo" className="w-16 h-16" />
          <div className="flex flex-col">
            <p className="content-center text-4xl">
              for<span className="text-green-500">Sure</span>Hired
            </p>
            <span className="text-sm text-slate-400 tracking-[0.15em] text-center">
              The Ultimate Job Tracker
            </span>
          </div>
        </div>
      </Link>
      <nav className="flex items-center gap-6 font-semibold text-slate-600">
        {/* TODO: Use Navlink to setup active status */}
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-green-600 font-semibold border-b-green-500 border-b-2"
              : "hover:text-green-500"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/jobs"
          className={({ isActive }) =>
            isActive
              ? "text-green-600 font-semibold border-b-green-500 border-b-2"
              : "hover:text-green-500"
          }
        >
          Jobs
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-green-600 font-semibold border-b-green-500 border-b-2"
              : "hover:text-green-500"
          }
        >
          About
        </NavLink>
        <span>|</span>
        {user ? (
          <img src={user.profilePic} alt="profile" className="h-7" />
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </nav>
    </div>
  );
}
