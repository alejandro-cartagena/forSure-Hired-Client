import { useContext, useEffect, useState } from "react";
import JobsBoard from "../components/JobsBoard";
import { AuthContext } from "../context/auth.context";
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

const DashboardPage = () => {
  const { user } = useContext(AuthContext);
  const [showJobModal, setShowJobModal] = useState(false);

  return (
    <section className="flex flex-col gap-6 px-6 md:px-32">
      <div className="flex flex-col justify-between border-b-4 border-b-slate-300 w-full mb-2 py-2 ">
        <h3 className="text-2xl text-slate-600">
          Welcome, {user && user.username}
        </h3>
        <div className="flex flex-col lg:flex-row justify-between lg:items-center">
          <h1 className="text-4xl py-2 font-semibold ">Jobs Board</h1>
          <div className="flex justify-between gap-6">
            <input
              type="text"
              name="search"
              placeholder="Search..."
              className="py-1.5 px-3 rounded-lg bg-slate-200 placeholder-gray-700 "
            />
            <button
              className="bg-green-600 px-4 rounded-lg text-white font-semibold hover:scale-105 hover:opacity-70 h-9 whitespace-nowrap"
              onClick={() => setShowJobModal(true)}
            >
              Add Job +
            </button>
          </div>
        </div>
      </div>
      <JobsBoard />
      {showJobModal && (
        <ManageJobForm job={emptyJob} closeModal={setShowJobModal} />
      )}
    </section>
  );
};

export default DashboardPage;
