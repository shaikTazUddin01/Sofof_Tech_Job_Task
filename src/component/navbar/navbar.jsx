import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-md h-20 px-4 md:px-8">
      <nav className="navbar max-w-[1440px] mx-auto">
        <div className="navbar-start">
          <button className="btn btn-ghost btn-circle text-primary-focus bg-primary-content">
            <RiMenu2Fill className="h-6 w-6" />
          </button>
        </div>

        <div className="navbar-center flex flex-col items-center">
          <div className="text-xl font-bold text-primary-focus">أشطوت</div>
          <div className="text-sm text-gray-500">Qatara</div>
        </div>

        <div className="navbar-end gap-3 md:gap-5">
          <button className="btn btn-ghost btn-circle text-primary-focus bg-primary-content">
            <IoNotificationsOutline className="h-6 w-6" />
          </button>

          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-outline btn-sm rounded-full gap-2 px-3 py-2 text-gray-700 hover:bg-gray-100 border-gray-200"
            >
              <img
                src="https://flagcdn.com/us.svg"
                alt="US Flag"
                className="w-6 h-4 rounded-sm shadow-md"
              />
              <span className="text-sm">Eng</span>
              <FaCaretDown className="h-4 w-4" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32"
            >
              <li>
                <a>English</a>
              </li>
              <li>
                <a>العربية</a>
              </li>
            </ul>
          </div>
          <button className="btn bg-primary text-white rounded-full px-6 hover:bg-primary-focus">
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
