import { FaMosque } from "react-icons/fa";
import img from "../../assets/live.png";

const Category = () => {
  return (
    <div className="my-14">
      <div className="flex justify-center items-center">
        <img src={img} alt="" className="w-[700px]" />
      </div>
      <div className="flex gap-6 justify-center items-center">
        <div className="rounded-full p-6 border border-[#9c9a9a] flex flex-col justify-center items-center ">
          <FaMosque className="h-14 w-14" />
          <p>mosque</p>
        </div>
        <div className="rounded-full p-6 border border-[#9c9a9a] flex flex-col justify-center items-center">
          <FaMosque className="h-14 w-14" />
          <p>mosque</p>
        </div>
        <div className="rounded-full p-6 border border-[#9c9a9a] flex flex-col justify-center items-center">
          <FaMosque className="h-14 w-14" />
          <p>mosque</p>

        </div>
      </div>
    </div>
  );
};

export default Category;
