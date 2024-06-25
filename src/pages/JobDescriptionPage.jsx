import React from "react";
import { useParams } from "react-router-dom";
import JobDescription from "../components/JobDescription";

const JobDescriptionPage = () => {
  const { jobId } = useParams();
  return (
    <div>
      JobDescriptionPage for {jobId}
      <JobDescription />
    </div>
  );
};

export default JobDescriptionPage;
