import {
  CartIcon,
  HomeIcon,
  MediaIcon,
  OrderIcon,
  ProfileIcon,
} from "../../assets/icons/icons";
import "./footerNav.css";

const FooterNavBar = () => {
  return (
    <footer className="relative z-50">
      {/* blur layer */}
      <div className="absolute inset-0 z-0">
        <div className="bg-[#bebdbd00] backdrop-blur-2xl w-full h-full" />
      </div>

      {/* Navigation menu */}
      <nav className="flex justify-center relative z-10">
        <ul className="flex justify-between py-2 md:py-4 rounded-full navArea w-[90%] md:w-[492px] bg-white px-3 md:px-6 mb-[44px]">
          <li className="relative z-10 flex flex-col justify-center items-center home-item">
            <HomeIcon />
            <span className="bg-[#65358A] h-1 w-1 rounded-full mt-1.5 absolute top-[28px] md:top-[30px]"></span>
            <p className="text-[#65358A] absolute top-[40px] md:top-[50px] text-[16px] md:text-xl">
              Home
            </p>
          </li>

          <li className="relative">
            <CartIcon />
            <p className="text-[#222222] absolute top-[40px] md:top-[50px] text-[16px] md:text-xl left-0 md:-left-1">
              Cart
            </p>
          </li>

          <li className="relative">
            <OrderIcon />
            <p className="text-[#222222] absolute top-[40px] md:top-[50px] text-[16px] md:text-xl -left-3">
              Orders
            </p>
          </li>

          <li className="relative">
            <MediaIcon />
            <p className="text-[#222222] absolute top-[40px] md:top-[50px] text-[16px] md:text-xl -left-2 md:-left-3">
              Media
            </p>
          </li>

          <li className="relative">
            <ProfileIcon />
            <p className="text-[#222222] absolute top-[40px] md:top-[50px] text-[16px] md:text-xl -left-2 md:-left-3">
              Profile
            </p>
          </li>
        </ul>
      </nav>

      {/* Bottom bar */}
      <div className="flex justify-center items-center sticky bottom-2 w-full mt-3 md:mt-6 z-10">
        <div className="w-[134px] h-[5px] bg-[#D3D3D3] rounded-full" />
      </div>
    </footer>
  );
};

export default FooterNavBar;
