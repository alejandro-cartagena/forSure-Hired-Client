import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import JobDescription from "../components/JobDescription";
import JobsList from "../components/JobsList";
import { JobsContext } from "../context/jobs.context";
import ManageJobForm from "../components/ManageJobForm";

const emptyJob = {
  title: "",
  description: "",
  skills: "",
  location: "",
  appliedDate: "",
  minSalary: 0,
  maxSalary: 0,
  jobUrl: "",
  company: {
    name: "",
    logo: "",
    address: { street: "", city: "", state: "" },
  },
};

const JobDescriptionPage = () => {
  const { jobId } = useParams();
  const { jobs, getAllUserJobs } = useContext(JobsContext);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showJobModal, setShowJobModal] = useState(false);
  const [searching, setSearching] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      await getAllUserJobs();
    };
    fetchJobs();
  }, []);

  useEffect(() => {
    if (jobs && jobId) {
      setSelectedJob(jobs.find((job) => job._id === jobId));
    }
  }, [jobs, jobId]);

  return (
    <div className="md:px-32 px-4 bg-slate-200">
      <div
        className={` justify-between gap-4 bg-slate-50 my-4 p-4 rounded-md  md:flex md:flex-row ${
          jobId ? "hidden" : "flex flex-col"
        }`}
      >
        <h1 className="text-3xl font-semibold text-slate-700 w-[300px] text-center -ml-5 ">
          Jobs List
        </h1>

        <div className="flex flex-wrap justify-between items-center px-4 gap-2">
          <input
            onChange={(e) => setSearching(e.target.value)}
            value={searching}
            className="appearance-none block bg-slate-200 placeholder-gray-700 border border-gray-200 rounded-lg py-1.5 px-3 w-[180px] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="search"
            name="search"
            type="text"
            placeholder="Search..."
          />
          <button
            className="bg-green-600 px-4 rounded-lg text-white font-semibold hover:scale-105 hover:opacity-70 h-9 whitespace-nowrap"
            onClick={() => setShowJobModal(true)}
          >
            Add Job +
          </button>
        </div>
      </div>
      <div className="flex gap-10 w-full h-[65vh] overflow-y-hidden">
        <JobsList
          jobs={
            searching
              ? jobs.filter((job) =>
                  job.title.toLowerCase().includes(searching.toLowerCase())
                )
              : jobs
          }
        />
        <JobDescription selectedJob={selectedJob} />
      </div>
      {showJobModal && (
        <ManageJobForm job={emptyJob} closeModal={setShowJobModal} />
      )}
    </div>
  );
};

export default JobDescriptionPage;
