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
    <footer className="relative">
      <div className="absolute inset-0 z-0">
        <div className="bg-[#ffffff0c] backdrop-blur-2xl w-full h-full" />
      </div>

      <nav className="flex justify-center relative z-10">
        <div className="custom-border w-[492px] rounded-full">
          <ul className="flex justify-between px-[22px] py-2 rounded-full navArea w-[492px] bg-white">
            <li className="relative z-10 flex flex-col justify-center items-center home-item">
              <HomeIcon />
              <span className="bg-[#65358A] h-1 w-1 rounded-full mt-1.5"></span>
            </li>
            <li><CartIcon /></li>
            <li><OrderIcon /></li>
            <li><MediaIcon /></li>
            <li><ProfileIcon /></li>
          </ul>
        </div>
      </nav>

      <section className="flex justify-center relative z-10">
        <div className="flex justify-between px-2.5 w-[492px] text-xl font-normal">
          <p className="text-[#65358A]">Home</p>
          <p>Cart</p>
          <p>Orders</p>
          <p>Media</p>
          <p>Profile</p>
        </div>
      </section>

      <div className="flex justify-center items-center sticky bottom-2 w-full mt-6 z-10">
        <div className="w-[134px] h-[5px] bg-[#D3D3D3] rounded-full" />
      </div>
    </footer>
  );
};

export default FooterNavBar;
