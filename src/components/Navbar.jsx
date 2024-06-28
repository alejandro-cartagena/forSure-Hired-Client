import React, { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/FSH_logo.png";
import { AuthContext } from "../context/auth.context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import UserProfile from "../pages/UserProfile";
import UserDropdownMenu from "./UserDropdownMenu";

const showUserProfilePage = () => {
  ("/user");
};

export default function Navbar() {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-wrap items-center justify-between py-6 px-4 md:px-32 bg-slate-50 shadow-md">
      <Link to="/">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="For Sure Hire Logo"
            className="w-12 h-12 md:w-16 md:h-16"
          />
          <div className="flex flex-col">
            <p className="content-center text-2xl sm:text-4xl">
              for<span className="text-[#4DB010]">Sure</span>Hired
            </p>
            <span className="text-xs sm:text-sm text-slate-400 tracking-[0.15em] text-center">
              The Ultimate Job Tracker
            </span>
          </div>
        </div>
      </Link>
      <nav className="hidden lg:flex items-center gap-6 font-semibold text-slate-600">
        {/* TODO: Use Navlink to setup active status */}
        <NavLink
          onClick={() => setIsOpen(false)}
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
          onClick={() => setIsOpen(false)}
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
          onClick={() => setIsOpen(false)}
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
          <UserDropdownMenu />
        ) : (
          <NavLink onClick={() => setIsOpen(false)} to="/login">
            Login
          </NavLink>
        )}
      </nav>
      <button className="lg:hidden">
        {isOpen ? (
          <FontAwesomeIcon
            onClick={toggleNav}
            className="text-3xl text-green-600"
            icon={faX}
          />
        ) : (
          <FontAwesomeIcon
            onClick={toggleNav}
            className="text-3xl text-slate-700"
            icon={faBars}
          />
        )}
      </button>
      {isOpen && (
        <div className="lg:hidden flex basis-full flex-col items-center gap-4 py-6 text-lg text-slate-600">
          <NavLink
            onClick={() => setIsOpen(false)}
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
            onClick={() => setIsOpen(false)}
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
            onClick={() => setIsOpen(false)}
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-semibold border-b-green-500 border-b-2"
                : "hover:text-green-500"
            }
          >
            About
          </NavLink>
          {user ? (
            <UserDropdownMenu />
          ) : (
            <NavLink onClick={() => setIsOpen(false)} to="/login">
              Login
            </NavLink>
          )}
        </div>
      )}
    </div>
  );
}
