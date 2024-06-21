import { createContext, useState, useEffect } from "react";
import api from "../services/api";
import toast from "react-hot-toast";

const JobsContext = createContext();

function JobsProvider({ children }) {
  const [jobs, setJobs] = useState(null);

  const getAllUserJobs = async () => {
    try {
      const response = await api.get("/jobs");
      setJobs(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const createJob = async (jobInfo) => {
    try {
      const response = await api.post("/jobs", jobInfo);
      if (response.status === 200 || response.status === 201) {
        toast.success(response.data.message);
        getAllUserJobs();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const updateJob = async (jobId, jobInfo) => {
    try {
      const response = await api.put(`/jobs/${jobId}`, jobInfo);
      if (response.status === 200 || response.status === 201) {
        toast.success(response.data.message);
        getAllUserJobs();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteJob = async (jobId) => {
    try {
      const response = await api.delete(`/jobs/${jobId})`);
      if (response.status === 200) {
        toast, success(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getAllUserJobs();
  }, []);

  return (
    <JobsContext.Provider
      value={{ jobs, getAllUserJobs, createJob, updateJob, deleteJob }}
    >
      {children}
    </JobsContext.Provider>
  );
}

export { JobsProvider, JobsContext };