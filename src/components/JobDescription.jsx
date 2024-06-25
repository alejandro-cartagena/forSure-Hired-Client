import { useContext, useEffect, useState } from "react";
import { JobsContext } from "../context/jobs.context";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyCheckDollar,
  faLocationDot,
  faGlobe,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";

const formatSalary = (min, max) => {
  return `$${(min / 1000).toFixed(0)}K - ${(max / 1000).toFixed(0)}K/Year`;
};
const formatDateToAgo = (date) => {
  let currDate = new Date(date);
  let now = Date.now();
  return Math.floor((now - currDate) / 86400000);
};

const JobDescription = () => {
  const [showJobModal, setShowJobModal] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const { jobs, getAllUserJobs, deleteJob, updateJob } =
    useContext(JobsContext);
  const [selectedJob, setSelectedJob] = useState(null);
  const { jobId } = useParams();

  useEffect(() => {
    const fetchJobs = async () => {
      await getAllUserJobs();
    };
    fetchJobs();
  }, []);

  useEffect(() => {
    if (jobs) {
      setSelectedJob(jobs.find((job) => job._id === jobId));
    }
  }, [jobs]);

  return selectedJob ? (
    <div className="flex flex-col gap-4 mb-2 px-20 py-10 text-slate-700">
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
        <p>Applied {formatDateToAgo(selectedJob.appliedDate)} days ago</p>
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
          <a href={selectedJob.jobUrl} className="text-blue-500">
            {selectedJob.jobUrl}
          </a>
        </div>
        <div className="inline-flex gap-4 items-center mt-1">
          <FontAwesomeIcon className="text-2xl w-8" icon={faListCheck} />
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
    </div>
  ) : (
    <p>no job selected</p>
  );
};

export default JobDescription;
