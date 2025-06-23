import React from "react";
import Navbar from "./component/navbar/navbar";
import { Outlet } from "react-router-dom";
import FooterNavBar from "./component/navbar/footerNav";

const App = () => {
  return (
    <div className="relative ">
      <Navbar />
      <div className="max-w-[1440px] mx-auto ">
        <Outlet />
      </div>
      <div className="sticky bottom-[35px] bg-gradient-to-b from-[#ffffff] to-[#F9F7FA]">
        <FooterNavBar />
      </div>
    </div>
  );
};

export default App;
