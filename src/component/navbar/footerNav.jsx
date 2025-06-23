import React from "react";
import {
  CartIcon,
  HomeIcon,
  MediaIcon,
  OrderIcon,
  ProfileIcon,
} from "../../assets/icons/icons";

const FooterNavBar = () => {
  return (
    <div>
      {/* Navigation icons */}
      <div className="flex justify-center pt-5 pb-2">
        <div className="flex justify-between border-l border-[#65358A] px-[22px] py-2 rounded-full bg-white shadow w-[492px]">
          <span className="flex flex-col justify-center items-center">
            <HomeIcon />
            <span className="bg-[#65358A] h-1 w-1 rounded-full mt-1.5"></span>
          </span>
          <CartIcon />
          <OrderIcon />
          <MediaIcon />
          <ProfileIcon />
        </div>
      </div>

      {/* Labels */}
      <div className="flex justify-center">
        <div className="flex justify-between px-3 w-[492px] text-xl font-normal">
          <p className="text-[#65358A]">Home</p>
          <p>Cart</p>
          <p>Orders</p>
          <p>Media</p>
          <p>Profile</p>
        </div>
      </div>

      {/* Bottom handle */}
      <div className="flex justify-center absolute items-center -bottom-6 w-full">
        <div className="w-[134px] h-[5px] bg-[#D3D3D3] rounded-full"></div>
      </div>
    </div>
  );
};

export default FooterNavBar;
