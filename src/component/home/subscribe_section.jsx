import { CheckmarkCircleIcon, StarIcon } from "../../assets/icons/icons";

const SubscribeSection = () => {
  return (
    <div className="w-[305px]  bg-gradient-to-r from-[#65358B] to-[#CFB4E4] text-white relative flex flex-col justify-between px-12 py-6 md:rounded-r-2xl">
      <span className="flex items-center gap-1">
        <StarIcon />
        <h5 className="text-xl font-medium">Premium</h5>
      </span>

      <p className="text-[16px] font-medium leading-5 mt-1">
        We have subscription, <br />
        Do you want to subscribe?
      </p>

      <div className="mt-4">
        <div className="inline-block">
          <span className="text-white bg-gradient-to-r from-[#65358A] to-[#2B153C] text-sm rounded-full flex items-center gap-1 py-[5px] px-[14px] tracking-wider cursor-pointer">
            <CheckmarkCircleIcon />
            <p className="text-sm">Subscribe Now</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
