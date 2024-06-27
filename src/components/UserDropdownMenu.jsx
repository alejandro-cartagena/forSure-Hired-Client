import React from "react";

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
  faArrowRightFromBracket,
  faIdCard,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { JobsContext } from "../context/jobs.context";
import { AuthContext } from "../context/auth.context";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function UserDropdownMenu() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-slate-50 px-3 py-2 text-sm font-semibold text-gray-900 hover:shadow-sm hover:ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            <img className="h-7" src={user.profilePic} />
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
                    to={`/user`}
                    className={classNames(
                      focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "flex items-center gap-2 px-4 py-2 text-sm -ml-1 cursor-pointer "
                    )}
                  >
                    <FontAwesomeIcon className="h-4" icon={faIdCard} />
                    <span>User Profile</span>
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <a
                    onClick={logout}
                    className={classNames(
                      focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "flex items-center gap-2 px-4 py-2 text-sm cursor-pointer"
                    )}
                  >
                    <FontAwesomeIcon
                      className="h-4"
                      icon={faArrowRightFromBracket}
                    />
                    <span>Log out</span>
                  </a>
                )}
              </MenuItem>
            </div>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
}
