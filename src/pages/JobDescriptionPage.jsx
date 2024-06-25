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
    <div className="md:px-32 px-20 bg-slate-200">
      <div className="flex justify-between gap-4 bg-slate-50 m-4 p-4 rounded-md">
        <h1 className="text-3xl font-semibold text-slate-700 w-[300px] text-center -ml-5 ">
          Jobs List
        </h1>

        <div className="flex flex-wrap justify-between items-center px-4 gap-2">
          <div className="relative flex items-center gap-2">
            <select
              //   onChange={(e) => setSorting(e.target.value)}
              //   defaultValue={sorting}
              className="block appearance-none w-full bg-slate-200 border border-gray-200 text-gray-700 py-1.5 px-3 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="sorting"
              name="sorting"
            >
              <option value="">All Jobs</option>
              <option value="Newest">Newest</option>
              <option value="Oldest">Oldest</option>
              <option value="Payment(High-Low)">Payment(High-Low)</option>
              <option value="Payment(Low-High)">Payment(Low-High)</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <input
            // onChange={(e) => setSearching(e.target.value)}
            // value={searching}
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
        <JobsList jobs={jobs} />
        <JobDescription selectedJob={selectedJob} />
      </div>
      {showJobModal && (
        <ManageJobForm job={emptyJob} closeModal={setShowJobModal} />
      )}
    </div>
  );
};

export default JobDescriptionPage;
