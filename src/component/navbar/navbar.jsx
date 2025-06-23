import {
  ArrowDownIcon,
  MenuIcon,
  NotificationIcon,
} from "../../assets/icons/icons";
import flag from "../../assets/icons/flag.svg";

const Navbar = () => {
  return (
    <div className="bg-base-100 pt-6 pb-10 px-6 xl:px-12 max-w-[1440px] mx-auto">
      <nav className="navbar p-0">
        <div className="navbar-start">
          <button className="btn btn-ghost btn-circle text-primary-focus bg-[#65358A26]">
            <MenuIcon />
          </button>
        </div>

        <div className="navbar-center flex flex-col items-center">
          <img src="/logo.svg" alt="Logo" />
        </div>

        <div className="navbar-end gap-2">
          <button className="btn btn-ghost btn-circle text-primary-focus bg-[#F3EFF6]">
            <NotificationIcon />
          </button>

          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn rounded-full gap-1 px-3 py-2.5 text-gray-700 hover:bg-gray-100 border-gray-200 flex items-center justify-center"
            >
              <img src={flag} alt="US Flag" className="w-5 h-5 rounded-full" />
              <span className="text-sm mt-1">Eng</span>
              <ArrowDownIcon />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32"
            >
              <li>
                <a>Eng</a>
              </li>
            </ul>
          </div>

          <button className="btn bg-[#2B153C] text-white rounded-full hover:bg-primary-focus text-lg px-[24px] py-3 font-medium tracking-wider">
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
