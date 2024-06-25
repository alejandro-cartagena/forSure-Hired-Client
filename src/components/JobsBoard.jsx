import { useContext, useEffect, useState } from "react";
import { JobsContext } from "../context/jobs.context";
import JobCard from "./JobCard";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import iconTrash from "../assets/icon/icontrash.svg";

const filteredJobs = (jobs, stage) => {
  return jobs.filter((job) => job.stage === stage);
};

const JobsBoard = () => {
  const { jobs, getAllUserJobs } = useContext(JobsContext);
  const [appliedJobs, setAppliedJobs] = useState(null);
  const [InterviewJobs, setInterviewJobs] = useState(null);
  const [rejectedJobs, setRejectedJobs] = useState(null);
  const [closedJobs, setClosedJobs] = useState(null);

  const { deleteJob } = useContext(JobsContext);

  const handleDeleteJob = (jobId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Deleting a job will remove all quizzes associated with it!",
      icon: "error",
      iconColor: "#F87171",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      confirmButtonColor: "#1C91B2",
      cancelButtonColor: "#F87171",
    }).then((result) => {
      result.isConfirmed && deleteJob(jobId);
    });
  };

  // const handleJobsDetails = (job) => {
  //   setShowJobModal(true);
  //   setSelectedJob(job);
  // };

  useEffect(() => {
    const fetchJobs = async () => {
      await getAllUserJobs();
    };
    fetchJobs();
  }, []);

  useEffect(() => {
    if (jobs) {
      setAppliedJobs(filteredJobs(jobs, "Applied"));
      setInterviewJobs(filteredJobs(jobs, "Interview"));
      setRejectedJobs(filteredJobs(jobs, "Rejected"));
      setClosedJobs(filteredJobs(jobs, "Closed"));
    }
  }, [jobs]);

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-2 flex-wrap ">
      <div className="flex flex-col gap-2 flex-1  rounded-md h-[70vh] bg-slate-200 overflow-hidden min-w-[300px]">
        <h1 className="text-white bg-emerald-500 py-4 px-14 rounded-md font-semibold text-xl text-center m-4">
          Applied
        </h1>
        <div className="flex flex-col gap-3 overflow-auto px-4 mb-2 pb-2">
          {jobs &&
            appliedJobs &&
            appliedJobs.map((job) => (
              <div
                key={job._id}
                className="relative shadow-md bg-slate-50 rounded-md hover:bg-green-200"
              >
                <Link to={`/jobs/${job._id}`}>
                  <JobCard job={job} />
                </Link>
                <img
                  src={iconTrash}
                  alt="trash icon"
                  className="h-4 absolute top-4 right-4 cursor-pointer z-20"
                  onClick={() => handleDeleteJob(job._id)}
                />
              </div>
            ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 flex-1 p-4 rounded-md h-[70vh] bg-slate-200 min-w-[300px] ">
        <h1 className="text-white bg-yellow-600 py-4 px-14 rounded-md font-semibold text-xl text-center">
          Interview
        </h1>
      </div>
      <div className="flex flex-col gap-2 flex-1 p-4 rounded-md h-[70vh] bg-slate-200 min-w-[300px]">
        <h1 className="text-white bg-red-400 py-4 px-14 rounded-md font-semibold text-xl text-center">
          Rejected
        </h1>
      </div>
      <div className="flex flex-col gap-2 flex-1 p-4 rounded-md h-[70vh] bg-slate-200 min-w-[300px]">
        <h1 className="text-white bg-cyan-600 py-4 px-14 rounded-md font-semibold text-xl text-center">
          Closed
        </h1>
      </div>
    </div>
  );
};

export default JobsBoard;
