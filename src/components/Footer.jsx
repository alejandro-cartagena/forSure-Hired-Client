import React from "react";
import githubIcon from "../assets/icon/github.svg";
import linkedin from "../assets/icon/linkedin.svg";

export default function Footer() {
  return (

    <div className="flex items-center justify-between py-6 md:px-32 px-20 bg-slate-50 mt-auto">
      <div>
        <p className="content-center text-4xl">
          for<span className="text-[#4DB010]">Sure</span>Hired
        </p>
        <p className="text-slate-700 text-xs">© forSure Hired 2024.</p>
      </div>
      <div className="flex items-center gap-2">
        <img src={githubIcon} alt="GitHub Link" />
        <img src={linkedin} alt="LinkedIn Link" />
      </div>
    </div>
  );
}
