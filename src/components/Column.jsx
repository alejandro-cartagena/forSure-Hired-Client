import { Link } from "react-router-dom";
import JobCard from "./JobCard";
import iconTrash from "../assets/icon/icontrash.svg";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import { useContext } from "react";
import { JobsContext } from "../context/jobs.context";
import Swal from "sweetalert2";

const Column = ({ title, jobsList }) => {
  const { deleteJob } = useContext(JobsContext);

  const handleDeleteJob = (e, jobId) => {
    e.stopPropagation();
    Swal.fire({
      title: "Are you sure?",
      text: "Deleting a job will remove all quizzes associated with it!",
      icon: "error",
      iconColor: "#F87171",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      confirmButtonColor: "#1C91B2",
      cancelButtonColor: "#F87171",
    }).then((result) => {
      result.isConfirmed && deleteJob(jobId);
    });
  };
  return (
    <div className="flex flex-col gap-2 flex-1 rounded-md md:min-h-[70vh] h-[70vh] bg-slate-300 overflow-y-hidden min-w-[300px]">
      <div
        className={`text-white py-3 px-14 rounded-md font-semibold m-4 text-center ${title}`}
      >
        <h1 className="text-xl -mb-1">{title}</h1>
        <span className="text-sm text-white">({jobsList.length} jobs)</span>
      </div>
      <Droppable droppableId={title}>
        {(droppableProvided) => (
          <div
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
            className="flex flex-col gap-3 overflow-y-auto px-4 mb-2 pb-2 h-full"
          >
            {jobsList.map((job, index) => (
              <Draggable key={job._id} draggableId={job._id} index={index}>
                {(draggableProvided, snapshot) => (
                  <div
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.draggableProps}
                    {...draggableProvided.dragHandleProps}
                    className={`relative shadow-md rounded-md hover:bg-green-200 ${
                      snapshot.isDragging ? "bg-green-200" : " bg-slate-50"
                    }`}
                  >
                    <Link to={`/jobs/${job._id}`}>
                      <JobCard job={job} />
                    </Link>
                    <img
                      src={iconTrash}
                      alt="trash icon"
                      className="h-4 absolute top-4 right-4 cursor-pointer z-20"
                      onClick={(e) => handleDeleteJob(e, job._id)}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {droppableProvided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
