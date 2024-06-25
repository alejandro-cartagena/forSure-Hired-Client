import { Link, useParams } from "react-router-dom";
import JobCard from "./JobCard";

const JobsList = ({ jobs }) => {
  const { jobId } = useParams();
  return (
    <div className="flex flex-col min-w-[300px] gap-4 ">
      <div className="flex flex-col gap-3 overflow-auto px-4 mb-2 pb-2">
        {jobs &&
          jobs.map((job) => (
            <div
              key={job._id}
              className={`relative shadow-md  rounded-md hover:bg-green-200 ${
                jobId === job._id ? "bg-green-200" : "bg-slate-50"
              }`}
            >
              <Link to={`/jobs/${job._id}`}>
                <JobCard job={job} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default JobsList;
