import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faEllipsisVertical,
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { JobsContext } from "../context/jobs.context";
import Swal from "sweetalert2";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DropDown3Dots = ({ setShowEditModal }) => {
  const { jobId } = useParams();
  const { deleteJob } = useContext(JobsContext);

  const handleDeleteJob = () => {
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
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-slate-50 px-3 py-2 text-sm font-semibold text-gray-900 hover:shadow-sm hover:ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <FontAwesomeIcon className="h-5" icon={faEllipsisVertical} />
        </MenuButton>
      </div>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <MenuItem>
              {({ focus }) => (
                <Link
                  to={`/quiz/${jobId}`}
                  className={classNames(
                    focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "flex items-center gap-2 px-4 py-2 text-sm -ml-1 cursor-pointer "
                  )}
                >
                  <FontAwesomeIcon className="h-4" icon={faRobot} />
                  <span>Generate Quiz</span>
                </Link>
              )}
            </MenuItem>
            <MenuItem>
              {({ focus }) => (
                <a
                  onClick={() => setShowEditModal(true)}
                  className={classNames(
                    focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "flex items-center gap-2 px-4 py-2 text-sm cursor-pointer"
                  )}
                >
                  <FontAwesomeIcon className="h-4" icon={faEdit} />
                  <span>Edit Job</span>
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ focus }) => (
                <a
                  onClick={handleDeleteJob}
                  className={classNames(
                    focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "flex items-center gap-2 px-4 py-2 text-sm cursor-pointer"
                  )}
                >
                  <FontAwesomeIcon className="h-4" icon={faTrash} />
                  <span>Delete Job</span>
                </a>
              )}
            </MenuItem>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default DropDown3Dots;
