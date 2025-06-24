import {
  ArrowDownIcon,
  MenuIcon,
  NotificationIcon,
} from "../../assets/icons/icons";
import flag from "../../assets/icons/flag.svg";

const Navbar = () => {
  return (
    <div className="bg-white pt-6 pb-10 px-6 xl:px-12 max-w-[1440px] mx-auto">
      <nav className="navbar p-0 flex justify-between items-center">
        <div className="navbar-start flex items-center gap-2">
          <button className="p-2 rounded-full cursor-pointer bg-[#F3EFF6] border border-[#65358A26]">
            <MenuIcon />
          </button>
          <div className="block lg:hidden">
            <a href="/">
              <img src="/logo.svg" alt="Logo" className="h-8 w-16 ml-2" />
            </a>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <a href="/">
            <img src="/logo.svg" alt="Logo" className="h-10 w-20" />
          </a>
        </div>

        <div className="navbar-end flex items-center gap-2">
          <button className="bg-[#F3EFF6] p-2.5 rounded-full hidden sm:inline-flex cursor-pointer">
            <NotificationIcon />
          </button>

          <div className="dropdown dropdown-end hidden md:inline-flex">
            <label
              tabIndex={0}
              className="rounded-full gap-1 px-3 py-2.5 text-[#222222] border border-[#65358A26] flex items-center cursor-pointer"
            >
              <img src={flag} alt="US Flag" className="w-5 h-5 rounded-full" />
              <span className="text-sm tracking-wider">Eng</span>
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

          <button
            className="inline-flex btn bg-[#2B153C] text-white 
          rounded-full hover:bg-primary-focus text-lg px-6 py-3 font-medium shadow-none tracking-wider"
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
