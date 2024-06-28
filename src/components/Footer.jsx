import React from "react";
import githubIcon from "../assets/icon/github.svg";
import gitIcon from "../assets/icon/git.svg";
import linkedin from "../assets/icon/linkedin.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="text-[#334155] flex flex-col text-center sm:text-left sm:flex-row items-center justify-between py-6 md:px-32 px-20 bg-slate-50 mt-auto gap-4 shadow-top-md">
      <div>
        <p className="content-center text-4xl">
          for<span className="text-[#4DB010]">Sure</span>Hired
        </p>
        <p className="text-slate-700 text-xs">© forSure Hired 2024.</p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <a
          href="https://github.com/alejandro-cartagena/forSure-Hired-Client"
          target="_blank"
          className="flex items-center gap-2"
        >
          <img src={githubIcon} alt="GitHub Link" />
          <p>Github Repo Frontend</p>
        </a>
        <a
          href="https://github.com/alejandro-cartagena/forSure-Hired-server"
          target="_blank"
          className="flex items-center gap-2"
        >
          <img src={gitIcon} alt="GitHub Link" />
          <p>Github Repo Backend</p>
        </a>
      </div>
    </div>
  );
}
