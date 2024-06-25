import companyIcon from "../assets/icon/company.svg";
import locationIcon from "../assets/icon/location.svg";

const formatDateToAgo = (date) => {
  let currDate = new Date(date);
  let now = Date.now();
  return Math.floor((now - currDate) / 86400000);
};

const JobCard = ({ job }) => {
  return (
    <div className="flex flex-col justify-between p-4 gap-0.5 cursor-pointer ">
      <div className="flex justify-between gap-2">
        <h1 className="text-slate-700 font-semibold text-lg">{job.title}</h1>
      </div>
      <div className="inline-flex gap-1 items-center">
        <img src={companyIcon} alt="company icon" className="h-4" />
        <h3 className=" text-slate-500 font-semibold">
          {job.company.name} - ({job.location})
        </h3>
      </div>
      <div className="flex gap-1 justify-between">
        <div className="inline-flex gap-1 items-center">
          <img src={locationIcon} alt="location icon" className="h-4" />
          <p className="text-sm text-slate-500">
            {job.company.address.city}, {job.company.address.state}
          </p>
        </div>

        <p className="text-sm text-slate-500 whitespace-nowrap">
          {formatDateToAgo(job.appliedDate)} days
        </p>
      </div>
    </div>
  );
};

export default JobCard;
