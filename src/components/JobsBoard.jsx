import { useContext, useEffect, useState } from "react";
import { JobsContext } from "../context/jobs.context";
import Swal from "sweetalert2";
import Column from "./Column";
import { DragDropContext } from "@hello-pangea/dnd";

const filteredJobs = (jobs, stage) => {
  return jobs.filter((job) => job.stage === stage);
};
const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const JobsBoard = () => {
  const { jobs, getAllUserJobs, updateJob } = useContext(JobsContext);
  const [columns, setColumns] = useState({});

  const handleDrag = (result) => {
    const { source, destination } = result;

    if (
      !destination ||
      (source.index === destination.index &&
        source.droppableId === destination.droppableId)
    ) {
      return;
    }

    const startColumn = source.droppableId;
    const endColumn = destination.droppableId;
    if (startColumn === endColumn) {
      const reorderCol = reorder(
        columns[startColumn].jobs,
        source.index,
        destination.index
      );
      const newState = { ...columns };
      newState[startColumn].jobs = reorderCol;
      setColumns(newState);
    } else {
      let sourceColumn = { ...columns[source.droppableId] }.jobs;
      let destinationColumn = { ...columns[destination.droppableId] }.jobs;
      const [movedJob] = sourceColumn.splice(source.index, 1);
      updateJob(movedJob._id, { stage: destination.droppableId });
      destinationColumn.splice(destination.index, 0, movedJob);
      const newState = { ...columns };
      newState[source.droppableId].jobs = sourceColumn;
      newState[destination.droppableId].jobs = destinationColumn;
      setColumns(newState);
    }
  };

  useEffect(() => {
    const fetchJobs = async () => {
      await getAllUserJobs();
    };
    fetchJobs();
  }, []);

  useEffect(() => {
    if (jobs) {
      setColumns({
        Applied: { jobs: filteredJobs(jobs, "Applied") },
        Interview: { jobs: filteredJobs(jobs, "Interview") },
        Rejected: { jobs: filteredJobs(jobs, "Rejected") },
        Closed: { jobs: filteredJobs(jobs, "Closed") },
      });
    }
  }, [jobs && jobs.length]);

  return (
    <DragDropContext onDragEnd={(result) => handleDrag(result)}>
      <div className="flex flex-col lg:flex-row justify-between gap-2 flex-wrap ">
        {jobs &&
          Object.entries(columns).map(([status, columnData], index) => (
            <Column key={index} title={status} jobsList={columnData.jobs} />
          ))}
      </div>
    </DragDropContext>
  );
};

export default JobsBoard;
