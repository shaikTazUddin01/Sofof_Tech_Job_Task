import { FaCheckCircle, FaStar } from "react-icons/fa";


const Subscribe = () => {
  return (
    <div
      className=" w-80  bg-gradient-to-r from-purple-700 to-purple-500 text-white relative flex flex-col justify-between 
      "
    >
      <div className="  p-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center">
          <FaStar className="text-yellow-400 text-3xl mr-2" />
          Premium
        </h2>
        <p className="text-base leading-relaxed mb-5">
          We have subscription,
          <br />
          Do you want to subscribe?
        </p>
        <div className="card-actions justify-center">
          <button
            className="
                      btn btn-outline btn-info 
                      text-white border-white border-opacity-30
                      hover:bg-white hover:text-purple-700 hover:border-white hover:border-opacity-0
                      normal-case 
                      flex items-center justify-center
                  "
          >
            <FaCheckCircle className="mr-2" /> Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
