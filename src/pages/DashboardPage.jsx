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
    <section className="flex flex-col gap-6 py-6 px-6 md:px-32 bg-slate-200">
      <div className="flex flex-col justify-between  w-full ">
        <h3 className="text-2xl text-slate-600">
          Welcome, {user && (user.fullName || user.username)}
        </h3>
        <div className="flex  justify-between lg:items-center bg-slate-50 my-4 p-4 rounded-md">
          <h1 className="text-3xl  font-semibold text-center px-4">
            Jobs Board
          </h1>
          <div className="flex justify-between gap-6 px-4">
            {/* <input
              type="text"
              name="search"
              placeholder="Search..."
              className="py-1.5 px-3 rounded-lg bg-slate-200 placeholder-gray-700 "
            /> */}
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
