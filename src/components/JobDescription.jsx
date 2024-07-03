import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyCheckDollar,
  faLocationDot,
  faGlobe,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import DropDown3Dots from "./DropDown3Dots";
import ManageJobForm from "./ManageJobForm";
import { useParams } from "react-router-dom";

const JobDescription = ({ selectedJob }) => {
  const [showMore, setShowMore] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const { jobId } = useParams();

  const formatSalary = (min, max) => {
    return `$${(min / 1000).toFixed(0)}K - ${(max / 1000).toFixed(0)}K/Year`;
  };
  const formatDateToAgo = (date) => {
    let currDate = new Date(date);
    let now = Date.now();
    let daysAgo = (now - currDate) / 86400000;
    return Math.floor(daysAgo) ? Math.floor(daysAgo) + " days ago" : "Today";
  };

  return selectedJob ? (
    <div
      className={`relative ${
        jobId ? "flex" : "hidden"
      } md:flex flex-col gap-4 my-2 md:mt-0 p-10 bg-slate-50 text-slate-700 overflow-y-auto w-full rounded-md `}
    >
      <div className="absolute top-4 right-4">
        <DropDown3Dots setShowEditModal={setShowEditModal} />
      </div>
      <div className="inline-flex gap-4 items-center">
        <img
          src={selectedJob.company.logo}
          alt="company logo"
          className="h-16"
        />
        <h2 className="text-xl font-semibold ">{selectedJob.company.name}</h2>
      </div>
      <div className="border-b-2 border-slate-300 pb-4 ">
        <h1 className="text-3xl font-bold tracking-wide mb-2">
          {selectedJob.title}
        </h1>
        <p>Applied {formatDateToAgo(selectedJob.appliedDate)}</p>
      </div>
      <div className="border-b-2 border-slate-300 pb-4 gap-4 flex flex-col">
        <h1 className="text-2xl mb-4">Details</h1>
        <div className="inline-flex gap-4 items-center">
          <FontAwesomeIcon className="text-2xl w-8" icon={faMoneyCheckDollar} />
          <p className="font-semibold">
            {formatSalary(selectedJob.minSalary, selectedJob.maxSalary)}
          </p>
        </div>
        <div className="inline-flex gap-4 items-center">
          <FontAwesomeIcon className="text-2xl w-8" icon={faLocationDot} />
          <div>
            <p className="font-semibold">
              {selectedJob.location}
              {selectedJob.location !== "Remote" &&
                `, based in ${selectedJob.company.address.city}, ${selectedJob.company.address.state}`}
            </p>
            <p>
              {selectedJob.location === "Remote"
                ? "Work from home"
                : selectedJob.location === "Hybrid"
                ? "Work in person for part of the week, from the location"
                : "Work in person from the location"}
            </p>
          </div>
        </div>
        <div className="inline-flex gap-4 items-center">
          <FontAwesomeIcon className="text-2xl w-8" icon={faGlobe} />
          <a
            href={selectedJob.jobUrl}
            target="_blank"
            className=" text-blue-500"
          >
            {selectedJob.jobUrl}
          </a>
        </div>
        <div className="inline-flex gap-4 items-center mt-1">
          <FontAwesomeIcon className="text-2xl w-8" icon={faListCheck} />
          <div className="flex gap-2 flex-wrap">
            {selectedJob.skills.split(",").map((skill, i) => (
              <span
                key={i}
                className="p-2 bg-slate-700 text-white font-semibold rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-b-2 border-slate-300 pb-4  gap-2 flex flex-col">
        <h2 className="text-2xl">Job Description</h2>
        <pre
          className={`${
            showMore ? "" : "line-clamp-3"
          } text-slate-700 font-sans whitespace-pre-wrap`}
        >
          {selectedJob.description}
        </pre>

        <p
          onClick={() => setShowMore(!showMore)}
          className="font-semibold underline cursor-pointer"
        >
          Show {showMore ? "less" : "more"}
        </p>
      </div>
      {showEditModal && (
        <ManageJobForm job={selectedJob} closeModal={setShowEditModal} />
      )}
    </div>
  ) : (
    <h1
      className={`${
        jobId ? "block" : "hidden"
      } md:block text-3xl text-center p-5 w-full font-semibold text-slate-700`}
    >
      Please select a Job to display Details
    </h1>
  );
};

export default JobDescription;
