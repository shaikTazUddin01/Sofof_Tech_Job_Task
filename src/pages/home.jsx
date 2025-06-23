import React from "react";
import HeroArea from "../component/home/hero";
import Category from "../component/home/category";
import Subscribe from "../component/home/subscribe";
import {  FaWhatsapp } from "react-icons/fa";

const Home = () => {
  return (
    <div className="relative">
      <HeroArea />
      <Category />
      {/* right side */}
      <div className="absolute right-0 bottom-3">
        <div className="bg-green-500 p-2 rounded-full inline-block text-white ">
          <FaWhatsapp className="h-10 w-10" />
        </div>
      </div>
      {/* left side */}
      <div className="absolute bottom-0 -left-14">
        <Subscribe/>
      </div>
    </div>
  );
};

export default Home;
