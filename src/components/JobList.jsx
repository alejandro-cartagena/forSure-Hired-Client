import { useContext, useEffect } from "react";
import { JobsContext } from "../context/jobs.context";

const JobList = () => {
  const { jobs } = useContext(JobsContext);
  return <div>JobList</div>;
};

export default JobList;
