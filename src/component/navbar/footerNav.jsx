import React from "react";
import { FaHome } from "react-icons/fa";

const FooterNavBar = () => {
  return (
    <div className="flex justify-center py-5">
      <div className="flex gap-5 border p-5 rounded-full bg-white">
        <FaHome />
        <FaHome />
        <FaHome />
        <FaHome />
        <FaHome />
      </div>
    </div>
  );
};

export default FooterNavBar;
