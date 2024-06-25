import { useContext, useState } from "react";
import { JobsContext } from "../context/jobs.context";

const ManageJobForm = ({ job, closeModal }) => {
  const [formData, setFormData] = useState({ ...job });
  const [companyData, setCompanyData] = useState({ ...job.company });
  const [addressData, setAddressData] = useState({ ...job.company.address });
  const { updateJob, createJob } = useContext(JobsContext);

  const datePickerId = new Date().toISOString().split("T")[0];

  const handleFormChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCompanyChange = (e) => {
    setCompanyData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddressChange = (e) => {
    setAddressData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    //Going to use the same submit for add and update jobs checking ._id
    e.preventDefault();
    formData.company = companyData;
    formData.company.address = addressData;
    console.log(formData);
    formData._id ? updateJob(formData._id, formData) : createJob(formData);
    closeModal(false);
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 mx-auto w-auto max-[385px]:mt-[225px] md:mt-0 md:w-[640px] max-w-5xl max-[500px]:mx-4">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl text-gray-700 font-semibold">
                {formData._id ? "Job Details" : "Create Job"}
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => closeModal(false)}
              >
                <span className="bg-transparent text-red-500  h-6 w-6 text-2xl block outline-none focus:outline-none hover:scale-125">
                  ×
                </span>
              </button>
            </div>

            {/*body*/}
            <div className="relative p-6 flex-auto">
              <form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
                {/* Title */}
                <div className="flex flex-wrap -mx-3 ">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="title"
                    >
                      Title
                    </label>
                    <input
                      onChange={handleFormChange}
                      value={formData.title}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="title"
                      name="title"
                      type="text"
                      placeholder="Job Title"
                      required
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="flex flex-wrap -mx-3 ">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <textarea
                      onChange={handleFormChange}
                      value={formData.description}
                      className="h-[15vh] appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="description"
                      name="description"
                      type="text"
                      placeholder="A description for your Job"
                      required
                    />
                  </div>
                </div>

                {/* skills, salary and remote */}
                <div className="flex flex-col -mx-3 ">
                  <div className="flex px-3 gap-2">
                    <div className="w-3/5 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="skills"
                      >
                        Skills
                      </label>
                      <input
                        onChange={handleFormChange}
                        value={formData.skills}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="skills"
                        name="skills"
                        type="text"
                        placeholder="Separates by commas"
                        required
                      />
                    </div>
                    <div className="md:w-2/5">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="location"
                      >
                        Type
                      </label>
                      <div className="relative">
                        <select
                          onChange={handleFormChange}
                          defaultValue={formData.location}
                          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="location"
                          name="location"
                          required
                        >
                          <option value="" disabled>
                            Location
                          </option>
                          <option value="Remote">Remote</option>
                          <option value="Hybrid">Hybrid</option>
                          <option value="On Site">On Site</option>
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
                    </div>
                  </div>

                  <div className="w-full flex flex-col gap-2 md:flex-row px-3 md:mb-0">
                    <div>
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="minSalary"
                      >
                        Min Salary
                      </label>
                      <input
                        onChange={handleFormChange}
                        value={formData.minSalary}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="minSalary"
                        name="minSalary"
                        type="number"
                        placeholder="Ex: $75K - $115K"
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="maxSalary"
                      >
                        Max Salary
                      </label>
                      <input
                        onChange={handleFormChange}
                        value={formData.maxSalary}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="maxSalary"
                        name="maxSalary"
                        type="number"
                        placeholder="Ex: $75K - $115K"
                        required
                      />
                    </div>
                    <div className="w-full md:w-1/2  md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="appliedDate"
                      >
                        Applied Date
                      </label>
                      <input
                        onChange={handleFormChange}
                        value={formData.appliedDate}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1.5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="appliedDate"
                        name="appliedDate"
                        type="date"
                        placeholder=""
                        max={datePickerId}
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="jobUrl"
                    >
                      Job URL
                    </label>
                    <input
                      onChange={handleFormChange}
                      value={formData.jobUrl}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="jobUrl"
                      name="jobUrl"
                      type="Url"
                      placeholder="Job URL"
                      required
                    />
                  </div>
                </div>

                {/* Company and Date Picker for appliedDate */}
                <div className="flex flex-col gap-1">
                  <h1 className="text-xl font-semibold border-b-2 pb-2 mb-2">
                    Company Details
                  </h1>
                  <div className="flex -mx-3 px-3 gap-2">
                    <div className="w-full md:w-1/2  md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        onChange={handleCompanyChange}
                        value={companyData.name}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Company Name"
                        required
                      />
                    </div>
                    <div className="w-full md:w-1/2  md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="logo"
                      >
                        Logo URL
                      </label>
                      <input
                        onChange={handleCompanyChange}
                        value={companyData.logo}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="logo"
                        name="logo"
                        type="url"
                      />
                    </div>
                  </div>
                  <div className="flex -mx-3 px-3 gap-2">
                    <div className="w-full md:w-1/2  md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="street"
                      >
                        Street
                      </label>
                      <input
                        onChange={handleAddressChange}
                        value={addressData.street}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="street"
                        name="street"
                        type="address"
                        placeholder="Company Street"
                        required
                      />
                    </div>
                    <div className="w-full md:w-1/2  md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="city"
                      >
                        City
                      </label>
                      <input
                        onChange={handleAddressChange}
                        value={addressData.city}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="city"
                        name="city"
                        type="address"
                        placeholder="Company City"
                        required
                      />
                    </div>
                    <div className="w-full md:w-1/2  md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="state"
                      >
                        State
                      </label>
                      <input
                        onChange={handleAddressChange}
                        value={addressData.state}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="state"
                        name="state"
                        type="address"
                        placeholder="Company State"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end p-4 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-slate-600 bg-gray-300 hover:bg-gray-400 font-bold uppercase px-6 py-3 text-sm outline-none rounded focus:outline-none mr-1 ease-linear transition-all duration-150 "
                    type="button"
                    onClick={() => closeModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-green-600 hover:opacity-70 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 disabled:cursor-not-allowed disabled:hover:bg-green-600"
                    type="submit"
                    disabled={JSON.stringify(formData) === JSON.stringify(job)}
                  >
                    {formData._id ? "Save" : "Create"}
                  </button>
                </div>
              </form>
            </div>

            {/*footer*/}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ManageJobForm;
